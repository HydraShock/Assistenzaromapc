@echo off
setlocal
cd /d "%~dp0"

if not exist "sidepanel-base.css" (
  echo ERRORE: sidepanel-base.css non trovato.
  pause
  exit /b 1
)

copy /Y "sidepanel-base.css" "sidepanel.css" >nul
if errorlevel 1 (
  echo ERRORE durante il ripristino.
  pause
  exit /b 1
)

echo Interfaccia precedente ripristinata.
echo Ora apri chrome://extensions e premi Ricarica.
pause
