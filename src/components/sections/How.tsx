"use client";

import { useI18n } from "@/contexts/I18nContext";

const STEPS = ["step1", "step2", "step3"];

export default function How() {
  const { t } = useI18n();
  return (
    <section className="bg-zinc-900 py-24 text-white sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-400">
            {t("how.kicker")}
          </p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            {t("how.titleA")}
            <br />
            {t("how.titleB")}
          </h2>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {STEPS.map((cle, i) => (
            <div key={cle}>
              <div className="text-5xl font-bold text-blue-500">{`0${i + 1}`}</div>
              <h3 className="mt-4 text-xl font-semibold">{t(`how.${cle}.title`)}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{t(`how.${cle}.desc`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
