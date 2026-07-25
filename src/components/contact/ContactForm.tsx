"use client";

import { useState, type FormEvent } from "react";
import { Send, CircleCheck, CircleAlert, LoaderCircle } from "lucide-react";
import { ButtonAsButton } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

type Status = "idle" | "sending" | "success" | "error";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const inputClasses =
  "w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition-colors duration-200 placeholder:text-muted/70 focus:border-accent";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();

    if (!name || !email || !message || !EMAIL_PATTERN.test(email)) {
      setError("Add your name, a valid email address, and a message.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, company }),
      });

      if (!response.ok) {
        const result = (await response.json().catch(() => null)) as {
          error?: string;
        } | null;
        setError(
          result?.error ??
            `That didn't send. Email me at ${siteConfig.email} and it'll reach me.`,
        );
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("success");
    } catch {
      setError(
        `That didn't send — check your connection, or email me at ${siteConfig.email}.`,
      );
      setStatus("error");
    }
  }

  const sending = status === "sending";

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm text-muted">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={100}
            className={inputClasses}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm text-muted">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={200}
            className={inputClasses}
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm text-muted">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          maxLength={5000}
          className={`${inputClasses} resize-none`}
          placeholder="A few lines about the site, the problem, or the role."
        />
      </div>

      {/* Honeypot — positioned off-screen rather than hidden, so bots that skip
          display:none fields still fill it in and give themselves away. */}
      <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden" aria-hidden>
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-1 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <ButtonAsButton
          type="submit"
          disabled={sending}
          icon={
            sending ? (
              <LoaderCircle className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )
          }
        >
          {sending ? "Sending" : "Send message"}
        </ButtonAsButton>
        <p className="text-xs text-muted">Goes straight to my inbox.</p>
      </div>

      <div aria-live="polite">
        {status === "success" ? (
          <p className="flex items-center gap-2 text-sm text-emerald-500">
            <CircleCheck className="h-4 w-4 shrink-0" strokeWidth={1.5} />
            Sent — it&rsquo;s in my inbox. I&rsquo;ll reply once I&rsquo;ve read
            it.
          </p>
        ) : null}
        {status === "error" ? (
          <p className="flex items-center gap-2 text-sm text-red-400">
            <CircleAlert className="h-4 w-4 shrink-0" strokeWidth={1.5} />
            {error}
          </p>
        ) : null}
      </div>
    </form>
  );
}
