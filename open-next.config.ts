import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

// Without an incremental cache the worker re-runs a full React render for every
// request — every route answered `x-nextjs-cache: MISS`, and time-to-first-byte
// swung between 0.26s and 1.05s depending on nothing in particular.
//
// Every page here is prerendered at build time and nothing revalidates, so the
// read-only static-assets cache is the right one: prerendered HTML is served
// straight from Workers assets, with no R2 bucket or KV namespace to pay for.
// `/api/contact` is `force-dynamic`, so form posts still bypass this entirely.
export default defineCloudflareConfig({
  incrementalCache: staticAssetsIncrementalCache,
});
