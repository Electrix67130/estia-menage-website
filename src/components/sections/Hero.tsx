"use client";

import Link from "next/link";
import { ArrowRight, CloudOff, ShieldCheck, Smartphone } from "lucide-react";
import { useI18n } from "@/contexts/I18nContext";

/**
 * Apercu de planning affiche sous le hero. C'est un visuel statique, pas une
 * capture : il reste net a toutes les tailles, se traduit avec la page et ne
 * vieillit pas a chaque refonte de l'interface.
 */
const PRESTATIONS = [
  { heure: "09:00", logement: "Chalet du Hohwald", typeKey: "mock.checkout", ton: "rose" },
  { heure: "10:30", logement: "Villa Ostara", typeKey: "mock.menage", ton: "bleu" },
  { heure: "16:00", logement: "Studio Kléber", typeKey: "mock.checkin", ton: "vert" },
] as const;

// Les memes couleurs de type que dans l'application : menage bleu, check-in
// vert, check-out rouge.
const TONS = {
  bleu: "bg-blue-50 text-blue-700 ring-blue-200",
  vert: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  rose: "bg-rose-50 text-rose-700 ring-rose-200",
} as const;

const BARRES = {
  bleu: "bg-blue-500",
  vert: "bg-emerald-500",
  rose: "bg-rose-500",
} as const;

export default function Hero() {
  const { t } = useI18n();
  return (
    <section className="relative overflow-hidden pt-16 pb-24 sm:pt-24 sm:pb-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 via-white to-white" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-500" />
            {t("hero.badge")}
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-900 sm:text-6xl">
            {t("hero.titleA")}
            <br />
            <span className="text-blue-600">{t("hero.titleB")}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-600 sm:text-xl">
            {t("hero.subtitle")}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-zinc-700"
            >
              {t("hero.ctaDemo")}
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/features"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-6 py-3 text-base font-semibold text-zinc-900 transition-colors hover:bg-zinc-50"
            >
              {t("hero.ctaFeatures")}
            </Link>
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-zinc-500">
            <div className="flex items-center gap-1.5">
              <Smartphone size={14} />
              {t("hero.trustMobile")}
            </div>
            <div className="flex items-center gap-1.5">
              <CloudOff size={14} />
              {t("hero.trustOffline")}
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck size={14} />
              {t("hero.trustEu")}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-20 max-w-3xl">
          <div className="rounded-3xl border border-zinc-200 bg-white p-2 shadow-2xl shadow-blue-100/60">
            <div className="rounded-2xl bg-gradient-to-br from-zinc-50 to-blue-50/60 p-5 sm:p-8">
              <div className="flex items-baseline justify-between">
                <p className="text-sm font-semibold text-zinc-900">{t("mock.today")}</p>
                <p className="text-xs text-zinc-500">{t("hero.mockup")}</p>
              </div>
              <ul className="mt-4 space-y-2.5">
                {PRESTATIONS.map((p) => (
                  <li
                    key={p.heure}
                    className="flex items-center gap-3 overflow-hidden rounded-xl border border-zinc-200 bg-white p-3 sm:gap-4 sm:p-4"
                  >
                    <span className={`h-9 w-1 flex-shrink-0 rounded-full ${BARRES[p.ton]}`} />
                    <span className="w-12 flex-shrink-0 text-sm font-semibold text-zinc-900">
                      {p.heure}
                    </span>
                    <span className="min-w-0 flex-1 truncate text-sm text-zinc-700">
                      {p.logement}
                    </span>
                    <span
                      className={`flex-shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ${TONS[p.ton]}`}
                    >
                      {t(p.typeKey)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
