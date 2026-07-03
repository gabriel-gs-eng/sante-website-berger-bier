import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allows the dev server to be reached from other devices on the local
  // network (e.g. testing on a phone via the machine's LAN IP) instead of
  // only localhost. Without this, Next.js blocks cross-origin dev requests
  // (HMR, RSC, assets) and the page loads but never finishes hydrating —
  // it looks like buttons/carousels are "not working" in dev, even though
  // the exact same code works fine once deployed (no such restriction in
  // production).
  allowedDevOrigins: ["192.168.16.38"],
};

export default nextConfig;
