"use client";

import Link from "next/link";
import { ArrowRight, LifeBuoy, Mail, UserPlus } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useI18n } from "@/contexts/I18nContext";
import { CONTACT_EMAIL, SIGNUP_URL } from "@/lib/site";

export default function ContactPage() {
  const { t } = useI18n();

  return (
    <div className="bg-white">
      <Header />

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
              {t("nav.contact")}
            </p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
              {t("contact.title")}
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-600">{t("contact.subtitle")}</p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="group flex flex-col items-start gap-4 rounded-2xl border border-zinc-200 bg-white p-8 transition-all hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100/50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition-transform group-hover:scale-110">
                <Mail size={22} />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-zinc-900">{t("contact.email.title")}</h2>
                <p className="mt-1 text-base font-medium text-blue-600">{CONTACT_EMAIL}</p>
                <p className="mt-1 text-sm text-zinc-600">{t("contact.email.desc")}</p>
              </div>
            </a>

            <a
              href={SIGNUP_URL}
              className="group flex flex-col items-start gap-4 rounded-2xl border border-zinc-200 bg-white p-8 transition-all hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100/50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition-transform group-hover:scale-110">
                <UserPlus size={22} />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-zinc-900">{t("contact.signup.title")}</h2>
                <p className="mt-1 text-sm text-zinc-600">{t("contact.signup.desc")}</p>
              </div>
              <ArrowRight
                size={16}
                className="ml-auto text-zinc-400 transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>

          <div className="mt-6 flex flex-col items-start gap-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-8 sm:flex-row sm:items-center">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white text-zinc-700">
              <LifeBuoy size={22} />
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-zinc-900">{t("contact.support.title")}</h2>
              <p className="mt-1 text-sm text-zinc-600">{t("contact.support.desc")}</p>
            </div>
            <Link
              href="/support"
              className="inline-flex flex-shrink-0 items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              {t("contact.support.link")}
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
