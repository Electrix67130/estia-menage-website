"use client";

import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useI18n } from "@/contexts/I18nContext";
import { LEGAL_UPDATED } from "@/lib/site";

/**
 * Habillage commun aux pages legales. Le corps de ces pages reste en francais :
 * le responsable de traitement est francais et c'est cette version qui fait
 * foi. La mention l'annonce dans la langue du lecteur pour qu'il ne se demande
 * pas s'il est tombe sur une page mal traduite.
 */
export default function LegalShell({ title, children }: { title: string; children: ReactNode }) {
  const { t, locale } = useI18n();
  return (
    <div className="bg-white">
      <Header />
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">{title}</h1>
          <p className="mt-2 text-sm text-zinc-500">
            {t("legal.updated", { date: LEGAL_UPDATED })}
          </p>
          {locale === "fr" ? null : (
            <p className="mt-4 rounded-xl bg-zinc-50 px-4 py-3 text-sm text-zinc-600">
              {t("legal.frOnly")}
            </p>
          )}
          <div className="prose-legal mt-8">{children}</div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
