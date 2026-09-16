"use client";

import { Building2, Check, KeyRound, SprayCan } from "lucide-react";
import { useI18n } from "@/contexts/I18nContext";

const TARGETS = [
  { icon: KeyRound, key: "conciergerie" },
  { icon: SprayCan, key: "cleaning" },
  { icon: Building2, key: "owner" },
];

export default function ForWho() {
  const { t } = useI18n();
  return (
    <section className="bg-zinc-50 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            {t("for.kicker")}
          </p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            {t("for.title")}
          </h2>
          <p className="mt-4 text-lg text-zinc-600">{t("for.subtitle")}</p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TARGETS.map((cible) => {
            const Icon = cible.icon;
            return (
              <div
                key={cible.key}
                className="flex flex-col rounded-2xl border border-zinc-200 bg-white p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-zinc-900">
                  {t(`for.${cible.key}.title`)}
                </h3>
                <ul className="mt-4 space-y-3">
                  {[1, 2, 3].map((n) => (
                    <li key={n} className="flex items-start gap-2 text-sm text-zinc-700">
                      <Check size={16} className="mt-0.5 flex-shrink-0 text-blue-600" />
                      <span>{t(`for.${cible.key}.item${n}`)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
