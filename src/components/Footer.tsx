"use client";

import Link from "next/link";
import { useI18n } from "@/contexts/I18nContext";
import { COMPANY, CONTACT_EMAIL, LOGIN_URL, PRODUCT } from "@/lib/site";

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          <div className="col-span-2">
            <Link href="/" className="inline-flex items-center gap-2.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-mark.svg" alt="" className="h-9 w-auto" />
              <span className="text-lg font-bold text-zinc-900">{PRODUCT}</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-zinc-600">{t("footer.tagline")}</p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-4 inline-block text-sm font-medium text-blue-600 hover:text-blue-700"
            >
              {CONTACT_EMAIL}
            </a>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-zinc-500">
              {t("footer.product")}
            </p>
            <ul className="space-y-2">
              <li>
                <Link href="/features" className="text-sm text-zinc-600 hover:text-zinc-900">
                  {t("footer.features")}
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-sm text-zinc-600 hover:text-zinc-900">
                  {t("footer.how")}
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm text-zinc-600 hover:text-zinc-900">
                  {t("footer.pricing")}
                </Link>
              </li>
              <li>
                <a href={LOGIN_URL} className="text-sm text-zinc-600 hover:text-zinc-900">
                  {t("footer.signin")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-zinc-500">
              {t("footer.company")}
            </p>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-sm text-zinc-600 hover:text-zinc-900">
                  {t("footer.contact")}
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-sm text-zinc-600 hover:text-zinc-900">
                  {t("footer.support")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-zinc-500">
              {t("footer.legalSection")}
            </p>
            <ul className="space-y-2">
              <li>
                <Link href="/legal" className="text-sm text-zinc-600 hover:text-zinc-900">
                  {t("footer.legal")}
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-zinc-600 hover:text-zinc-900">
                  {t("footer.privacy")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-zinc-200 pt-6">
          <p className="text-xs text-zinc-500">
            {t("footer.copyright", {
              year: new Date().getFullYear(),
              product: PRODUCT,
              company: COMPANY,
            })}
          </p>
        </div>
      </div>
    </footer>
  );
}
