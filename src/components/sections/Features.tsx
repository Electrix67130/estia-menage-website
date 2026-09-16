"use client";

import { CalendarDays, CalendarSync, Camera, ListChecks, Receipt, Users } from "lucide-react";
import { useI18n } from "@/contexts/I18nContext";

const FEATURES = [
  { icon: CalendarDays, key: "planning" },
  { icon: CalendarSync, key: "ical" },
  { icon: ListChecks, key: "checklist" },
  { icon: Camera, key: "proof" },
  { icon: Users, key: "team" },
  { icon: Receipt, key: "billing" },
];

export default function Features() {
  const { t } = useI18n();
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            {t("features.kicker")}
          </p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            {t("features.title")}
          </h2>
          <p className="mt-4 text-lg text-zinc-600">{t("features.subtitle")}</p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.key}
                className="group rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100/50"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition-transform group-hover:scale-110">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-zinc-900">
                  {t(`features.${f.key}.title`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  {t(`features.${f.key}.desc`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
