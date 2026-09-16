"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { useI18n } from "@/contexts/I18nContext";

const INCLUS = [
  "pricing.feature.modules",
  "pricing.feature.apps",
  "pricing.feature.media",
  "pricing.feature.ical",
  "pricing.feature.support",
  "pricing.feature.eu",
];

export default function Pricing() {
  const { t } = useI18n();
  return (
    <section className="bg-zinc-50 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            {t("pricing.kicker")}
          </p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            {t("pricing.title")}
          </h2>
          <p className="mt-4 text-lg text-zinc-600">{t("pricing.subtitle")}</p>
        </div>

        <div className="mt-12 rounded-3xl border border-zinc-200 bg-white p-10 shadow-xl shadow-blue-100/40 sm:p-12">
          <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700 ring-1 ring-blue-200">
            {t("pricing.badge")}
          </span>

          <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-zinc-500">
            {t("pricing.included")}
          </p>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {INCLUS.map((cle) => (
              <div key={cle} className="flex items-start gap-2 text-sm text-zinc-700">
                <Check size={16} className="mt-0.5 flex-shrink-0 text-blue-600" />
                <span>{t(cle)}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-start gap-4 border-t border-zinc-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-sm text-sm text-zinc-500">{t("pricing.note")}</p>
            <Link
              href="/contact"
              className="inline-flex flex-shrink-0 items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-zinc-700"
            >
              {t("pricing.cta")}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
