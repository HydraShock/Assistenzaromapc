#!/bin/bash
set -e
cd "$(dirname "$0")"

if [ ! -f "sidepanel-base.css" ]; then
  echo "ERRORE: sidepanel-base.css non trovato."
  read -r -p "Premi Invio per chiudere..."
  exit 1
fi

cp "sidepanel-base.css" "sidepanel.css"
echo "Interfaccia precedente ripristinata."
echo "Ora apri chrome://extensions e premi Ricarica."
read -r -p "Premi Invio per chiudere..."
