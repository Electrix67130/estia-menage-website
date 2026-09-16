"use client";

import LegalShell from "@/components/LegalShell";
import { useI18n } from "@/contexts/I18nContext";
import { COMPANY, CONTACT_EMAIL, PRODUCT } from "@/lib/site";

export default function PrivacyPage() {
  const { t } = useI18n();
  const mailto = `mailto:${CONTACT_EMAIL}`;

  return (
    <LegalShell title={t("legal.privacyTitle")}>
      <p>
        La présente politique décrit comment <strong>{COMPANY}</strong> (le « responsable de
        traitement ») collecte et traite vos données personnelles dans le cadre de l&apos;application{" "}
        <strong>{PRODUCT}</strong>, conformément au Règlement général sur la protection des données
        (RGPD).
      </p>

      <h2>1. Données que nous collectons</h2>
      <ul>
        <li>
          <strong>Données de compte</strong> : adresse email, prénom, nom, numéro de téléphone,
          photo de profil, nom de société, et pour les prestataires : numéro SIRET, numéro de TVA et
          adresse de facturation. Votre mot de passe est stocké uniquement sous forme chiffrée
          (haché).
        </li>
        <li>
          <strong>Photos de prestation</strong> : photos prises ou importées lors des prestations,
          horodatées et associées à leur position géographique (latitude/longitude) afin d&apos;attester
          la réalisation de la prestation.
        </li>
        <li>
          <strong>Données des logements</strong> : adresses et coordonnées GPS des biens à
          entretenir, saisies par votre organisation.
        </li>
        <li>
          <strong>Données techniques</strong> : jeton de notification push et type d&apos;appareil
          (iOS/Android), pour vous envoyer les notifications liées à vos prestations.
        </li>
      </ul>
      <p>
        Nous n&apos;utilisons <strong>aucun</strong> outil de publicité ni de pistage tiers.
      </p>

      <h2>2. Pourquoi nous utilisons ces données</h2>
      <ul>
        <li>Créer et gérer votre compte et vos droits d&apos;accès.</li>
        <li>Organiser, planifier et attester les prestations de ménage.</li>
        <li>
          Vous envoyer des notifications opérationnelles (prestation disponible, assignée, modifiée,
          rappels).
        </li>
        <li>Gérer la facturation des prestations.</li>
      </ul>
      <p>
        La base légale est l&apos;exécution du contrat de service et notre intérêt légitime à assurer le
        bon fonctionnement du service.
      </p>

      <h2>3. Accès à la caméra, aux photos et à la localisation</h2>
      <p>
        L&apos;application demande l&apos;accès à la caméra et à la photothèque pour ajouter des photos aux
        prestations, et à votre position pour localiser les logements et géolocaliser les photos.
        Ces autorisations ne sont utilisées que pour ces finalités et peuvent être révoquées à tout
        moment dans les réglages de votre appareil.
      </p>

      <h2>4. Partage des données</h2>
      <p>
        Vos données sont accessibles aux membres autorisés de votre organisation selon leurs droits.
        Nous faisons appel à des sous-traitants techniques pour l&apos;hébergement et l&apos;envoi des
        notifications (service de notifications push Expo). Nous ne vendons jamais vos données.
      </p>

      <h2>5. Conservation</h2>
      <p>
        Vos données sont conservées pendant la durée de votre utilisation du service, puis archivées
        ou supprimées conformément à nos obligations légales (notamment comptables pour les données
        de facturation).
      </p>

      <h2>6. Vos droits</h2>
      <p>
        Vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement, de limitation et de
        portabilité de vos données, ainsi que du droit de retirer votre consentement. Pour exercer
        ces droits, contactez-nous à <a href={mailto}>{CONTACT_EMAIL}</a>. Vous pouvez également
        introduire une réclamation auprès de la CNIL.
      </p>

      <h2>7. Suppression de votre compte</h2>
      <p>
        Vous pouvez demander la suppression de votre compte et des données associées à tout moment
        en écrivant à <a href={mailto}>{CONTACT_EMAIL}</a>.
      </p>

      <h2>8. Contact</h2>
      <p>
        {COMPANY} — <a href={mailto}>{CONTACT_EMAIL}</a>
      </p>
    </LegalShell>
  );
}
