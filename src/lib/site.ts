/**
 * Constantes du site — une seule source pour les URLs, l'identite et les
 * mentions legales. Les pages ne codent jamais une adresse en dur : le jour ou
 * le domaine ou l'email change, c'est ici et nulle part ailleurs.
 */

export const SITE_URL = "https://estia-clean-connect.fr";
export const APP_URL = "https://app.estia-clean-connect.fr";
export const API_URL = "https://api.estia-clean-connect.fr";

export const LOGIN_URL = `${APP_URL}/login`;
export const SIGNUP_URL = `${APP_URL}/signup`;

export const PRODUCT = "Estia Clean Connect";
export const COMPANY = "EC CONCIERGERIE";
export const CONTACT_EMAIL = "contact@estiaconciergerie.fr";

/**
 * Liens stores — a renseigner une fois l'application publiee. Tant qu'ils
 * valent `null`, les boutons de telechargement ne s'affichent pas : une page
 * sans bouton vaut mieux qu'un bouton qui tombe sur une 404.
 */
export const APP_STORE_URL: string | null = null;
export const PLAY_STORE_URL: string | null = null;

/** Date de derniere revision des pages legales, affichee telle quelle. */
export const LEGAL_UPDATED = "16 septembre 2026";

/**
 * Mentions legales obligatoires (art. 6-III LCEN). Les champs vides ne sont pas
 * affiches : a completer avec les informations du Kbis avant la mise en ligne.
 */
export const LEGAL_IDENTITY = {
  company: COMPANY,
  form: "", // ex. « SAS au capital de 1 000 € »
  siret: "",
  vat: "",
  address: "",
  director: "", // directeur de la publication
  rcs: "",
};

/** Hebergeur, a mentionner nommement dans les mentions legales. */
export const HOST = {
  name: "Scaleway SAS",
  address: "8 rue de la Ville l'Eveque, 75008 Paris, France",
  phone: "+33 1 84 13 00 00",
  url: "https://www.scaleway.com",
};
