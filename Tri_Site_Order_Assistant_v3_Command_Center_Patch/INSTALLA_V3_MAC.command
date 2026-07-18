#!/bin/bash
set -e
cd "$(dirname "$0")"

if [ ! -f "sidepanel.css" ]; then
  echo "ERRORE: copia prima questi file nella cartella dell'estensione."
  read -r -p "Premi Invio per chiudere..."
  exit 1
fi

if [ ! -f "sidepanel-base.css" ]; then
  cp "sidepanel.css" "sidepanel-base.css"
fi

cp "sidepanel-v3.css" "sidepanel.css"
echo "Command Center UI v3 installata."
echo "Ora apri chrome://extensions e premi Ricarica."
read -r -p "Premi Invio per chiudere..."
