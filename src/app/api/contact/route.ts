import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/site";

// A form submission must never be cached or prerendered.
export const dynamic = "force-dynamic";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_LENGTHS = { name: 100, email: 200, message: 5000 };

const SEND_FAILED = `That didn't send. Email me at ${siteConfig.email} and it'll reach me.`;

type Payload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  company?: unknown;
};

function asTrimmedString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let payload: Payload;
  try {
    payload = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: SEND_FAILED }, { status: 400 });
  }

  // Honeypot. The field is hidden from people, so anything in it came from a
  // bot. Answer 200 so it believes it succeeded and stops probing for a gap.
  if (asTrimmedString(payload.company)) {
    return NextResponse.json({ ok: true });
  }

  const name = asTrimmedString(payload.name);
  const email = asTrimmedString(payload.email);
  const message = asTrimmedString(payload.message);

  if (!name || !email || !message || !EMAIL_PATTERN.test(email)) {
    return NextResponse.json(
      { error: "Add your name, a valid email address, and a message." },
      { status: 400 },
    );
  }

  if (
    name.length > MAX_LENGTHS.name ||
    email.length > MAX_LENGTHS.email ||
    message.length > MAX_LENGTHS.message
  ) {
    return NextResponse.json(
      { error: "That's longer than the form accepts — trim it down a little." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not set — nothing was sent.");
    return NextResponse.json({ error: SEND_FAILED }, { status: 500 });
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // Resend's shared sender works without a verified domain, but only
        // delivers to the address that owns the account.
        from: process.env.CONTACT_FROM ?? "Portfolio <onboarding@resend.dev>",
        to: [siteConfig.email],
        reply_to: email,
        subject: `Portfolio enquiry from ${name}`,
        text: `${message}\n\n—\n${name}\n${email}`,
      }),
    });

    if (!response.ok) {
      console.error(
        "[contact] Resend rejected the send",
        response.status,
        await response.text(),
      );
      return NextResponse.json({ error: SEND_FAILED }, { status: 502 });
    }
  } catch (error) {
    console.error("[contact] could not reach Resend", error);
    return NextResponse.json({ error: SEND_FAILED }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
