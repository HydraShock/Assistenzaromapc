@echo off
setlocal
cd /d "%~dp0"

if not exist "sidepanel.css" (
  echo ERRORE: copia prima questi file nella cartella dell'estensione.
  pause
  exit /b 1
)

if not exist "sidepanel-base.css" (
  copy /Y "sidepanel.css" "sidepanel-base.css" >nul
  if errorlevel 1 (
    echo ERRORE durante il backup di sidepanel.css.
    pause
    exit /b 1
  )
)

copy /Y "sidepanel-v3.css" "sidepanel.css" >nul
if errorlevel 1 (
  echo ERRORE durante l'installazione del tema v3.
  pause
  exit /b 1
)

echo Command Center UI v3 installata.
echo Ora apri chrome://extensions e premi Ricarica.
pause
