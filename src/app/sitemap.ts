import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// `trailingSlash: true` : les pages exportees vivent en `<route>/index.html`,
// le plan du site doit annoncer la meme forme d'URL.
const PAGES = [
  "/",
  "/features/",
  "/how-it-works/",
  "/pricing/",
  "/contact/",
  "/support/",
  "/privacy/",
  "/legal/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map((chemin) => ({
    url: `${SITE_URL}${chemin}`,
    changeFrequency: "monthly",
    priority: chemin === "/" ? 1 : 0.7,
  }));
}

// Fichier statique : requis par `output: export`, qui refuse une route dynamique.
export const dynamic = "force-static";
