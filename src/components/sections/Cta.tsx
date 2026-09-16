"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/contexts/I18nContext";
import { CONTACT_EMAIL } from "@/lib/site";

export default function Cta() {
  const { t } = useI18n();
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-blue-500 p-12 text-center text-white shadow-2xl shadow-blue-200/60 sm:p-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">{t("cta.title")}</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-blue-100">{t("cta.subtitle")}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-zinc-900 transition-colors hover:bg-zinc-100"
            >
              {t("cta.demo")}
              <ArrowRight size={16} />
            </Link>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
