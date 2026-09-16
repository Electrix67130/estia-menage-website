#!/bin/bash
# Installation du site sur le VPS — execute par la CI via SSH, en lisant ce
# fichier sur l'entree standard (cf. .github/workflows/deploy.yml).
#
# Le site est un export statique : rien a construire ici, on depose des
# fichiers. Chaque deploiement va dans un dossier horodate et le lien
# `courant` bascule d'un coup — un visiteur ne peut donc jamais tomber sur un
# site a moitie remplace, et revenir en arriere est un simple `ln -sfn`.
set -euo pipefail

RACINE=/srv/estia-site
ARCHIVE=/tmp/estia-site.tar.gz
GARDE=3 # nombre de versions conservees

[ -f "$ARCHIVE" ] || { echo "Archive $ARCHIVE absente" >&2; exit 1; }

horodatage=$(date +%Y%m%d%H%M%S)
cible="$RACINE/versions/$horodatage"
mkdir -p "$cible"
tar -xzf "$ARCHIVE" -C "$cible"
rm -f "$ARCHIVE"

# Bascule atomique : `mv -T` sur un lien symbolique remplace l'ancien sans
# fenetre ou `courant` n'existerait pas.
ln -sfn "$cible" "$RACINE/courant.tmp"
mv -T "$RACINE/courant.tmp" "$RACINE/courant"

# Les versions plus anciennes ne servent qu'au retour arriere : on n'en garde
# que quelques-unes, le disque du VPS est tres juste.
ls -1dt "$RACINE"/versions/* | tail -n "+$((GARDE + 1))" | xargs -r rm -rf

echo "Site deploye : $cible"
du -sh "$RACINE"
df -h / | tail -1
