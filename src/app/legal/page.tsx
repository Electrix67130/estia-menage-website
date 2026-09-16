"use client";

import LegalShell from "@/components/LegalShell";
import { useI18n } from "@/contexts/I18nContext";
import { COMPANY, CONTACT_EMAIL, HOST, LEGAL_IDENTITY, PRODUCT, SITE_URL } from "@/lib/site";

/** Une ligne d'identite : masquee tant que l'information n'est pas renseignee. */
function Ligne({ label, valeur }: { label: string; valeur: string }) {
  if (!valeur) return null;
  return (
    <p>
      <strong>{label}</strong> : {valeur}
    </p>
  );
}

export default function LegalNoticePage() {
  const { t } = useI18n();

  return (
    <LegalShell title={t("legal.noticeTitle")}>
      <h2>Éditeur du site</h2>
      <p>
        Le site <a href={SITE_URL}>{SITE_URL}</a> et l&apos;application <strong>{PRODUCT}</strong> sont
        édités par <strong>{COMPANY}</strong>.
      </p>
      <Ligne label="Forme juridique" valeur={LEGAL_IDENTITY.form} />
      <Ligne label="Siège social" valeur={LEGAL_IDENTITY.address} />
      <Ligne label="SIRET" valeur={LEGAL_IDENTITY.siret} />
      <Ligne label="RCS" valeur={LEGAL_IDENTITY.rcs} />
      <Ligne label="TVA intracommunautaire" valeur={LEGAL_IDENTITY.vat} />
      <Ligne label="Directeur de la publication" valeur={LEGAL_IDENTITY.director} />
      <p>
        <strong>Contact</strong> : <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
      </p>

      <h2>Hébergement</h2>
      <p>
        Le site et l&apos;application sont hébergés par <strong>{HOST.name}</strong>, {HOST.address} —{" "}
        {HOST.phone} — <a href={HOST.url}>{HOST.url}</a>. Les données sont hébergées en France.
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        L&apos;ensemble des contenus de ce site (textes, visuels, logo, marque {PRODUCT}, code) est
        protégé par le droit de la propriété intellectuelle et reste la propriété de {COMPANY}.
        Toute reproduction ou représentation, totale ou partielle, sans autorisation écrite
        préalable est interdite.
      </p>

      <h2>Données personnelles</h2>
      <p>
        Le traitement des données personnelles est décrit dans notre{" "}
        <a href="/privacy">politique de confidentialité</a>. Vous y trouverez les données
        collectées, leur finalité, leur durée de conservation et la manière d&apos;exercer vos droits.
      </p>

      <h2>Cookies</h2>
      <p>
        Ce site ne dépose aucun cookie publicitaire ni de mesure d&apos;audience. Votre choix de langue
        est conservé dans le stockage local de votre navigateur, sur votre appareil uniquement.
      </p>

      <h2>Responsabilité</h2>
      <p>
        {COMPANY} s&apos;efforce de maintenir ce site accessible et à jour, sans garantie
        d&apos;exhaustivité ni d&apos;absence d&apos;interruption. Les liens vers des sites tiers n&apos;engagent pas
        la responsabilité de {COMPANY}.
      </p>
    </LegalShell>
  );
}
