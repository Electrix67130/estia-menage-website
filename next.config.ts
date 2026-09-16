import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export statique : le site n'a ni API, ni rendu serveur, ni revalidation.
  // `npm run build` produit `out/`, quelques megaoctets de HTML/CSS/JS servis
  // directement par Caddy — pas de Node ni de node_modules sur le VPS, dont le
  // disque est deja tres juste (cf. docs/DEPLOYMENT.md de l'API).
  output: "export",
  // Chaque route devient `<route>/index.html`, ce qu'un serveur de fichiers
  // resout sans configuration particuliere.
  trailingSlash: true,
  images: { unoptimized: true },
  // Autorise l'accès aux ressources dev (/_next/*) depuis les tunnels
  // cloudflared utilisés pour les démos externes.
  allowedDevOrigins: ["*.trycloudflare.com"],
};

export default nextConfig;
