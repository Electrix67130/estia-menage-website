"use client";

import { createContext, useContext, useEffect, useState, useCallback, ReactNode } from "react";
import { translate, LOCALES, Locale } from "@/i18n";

export type { Locale };
export { LOCALES };

interface I18nContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, vars?: Record<string, string | number>) => string;
}

const I18nContext = createContext<I18nContextValue | null>(null);
const STORAGE_KEY = "estia-clean-connect_locale";

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("fr");

  // La langue est rendue en francais cote serveur (le HTML est pre-genere, il
  // ne peut pas connaitre la preference du visiteur). On ne peut donc la
  // restaurer qu'apres le montage : lire localStorage dans l'initialiseur de
  // useState provoquerait une erreur d'hydratation.
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- cf. commentaire ci-dessus
    if (stored && LOCALES.some((l) => l.code === stored)) setLocaleState(stored);
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    localStorage.setItem(STORAGE_KEY, next);
  }, []);

  // `<html lang>` est rendu en francais cote serveur : on le realigne sur la
  // langue choisie, sinon les lecteurs d'ecran et les traducteurs automatiques
  // annoncent du francais sur une page turque.
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const t = useCallback(
    (key: string, vars?: Record<string, string | number>) => translate(locale, key, vars),
    [locale],
  );

  return <I18nContext.Provider value={{ locale, setLocale, t }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
