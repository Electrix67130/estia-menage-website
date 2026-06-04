import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Autorise l'accès aux ressources dev (/_next/*) depuis les tunnels
  // cloudflared utilisés pour les démos externes (scripts/demo*.sh).
  allowedDevOrigins: ["*.trycloudflare.com"],
};

export default nextConfig;
