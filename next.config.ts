import type { NextConfig } from "next";

// /outbox is the Docusaurus documentation site, hosted separately on Vercel.
// Routing is handled at the Vercel level via vercel.json rewrites —
// no Next.js rewrites needed here.
const nextConfig: NextConfig = {
  trailingSlash: true,
};

export default nextConfig;
