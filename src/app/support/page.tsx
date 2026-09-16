"use client";

import Link from "next/link";
import { ArrowRight, LifeBuoy, Mail, ShieldCheck, Smartphone, UserX } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useI18n } from "@/contexts/I18nContext";
import { CONTACT_EMAIL } from "@/lib/site";

export default function SupportPage() {
  const { t } = useI18n();

  return (
    <div className="bg-white">
      <Header />

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
            <LifeBuoy size={22} />
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            {t("support.title")}
          </h1>
          <p className="mt-4 text-lg text-zinc-600">{t("support.intro")}</p>

          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-10 flex items-start gap-4 rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100/50"
          >
            <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
              <Mail size={20} />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-zinc-900">{t("support.contact.title")}</h2>
              <p className="mt-1 text-base font-medium text-blue-600">{CONTACT_EMAIL}</p>
              <p className="mt-1 text-sm text-zinc-600">{t("support.contact.desc")}</p>
            </div>
          </a>

          <div className="mt-6 space-y-6">
            <div className="flex items-start gap-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white text-zinc-700">
                <Smartphone size={20} />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-zinc-900">{t("support.inapp.title")}</h2>
                <p className="mt-1 text-sm leading-relaxed text-zinc-600">
                  {t("support.inapp.desc")}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white text-zinc-700">
                <UserX size={20} />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-zinc-900">{t("support.account.title")}</h2>
                <p className="mt-1 text-sm leading-relaxed text-zinc-600">
                  {t("support.account.desc")}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white text-zinc-700">
                <ShieldCheck size={20} />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-zinc-900">{t("support.privacy.title")}</h2>
                <p className="mt-1 text-sm leading-relaxed text-zinc-600">
                  {t("support.privacy.desc")}
                </p>
                <Link
                  href="/privacy"
                  className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700"
                >
                  {t("support.privacy.link")}
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
