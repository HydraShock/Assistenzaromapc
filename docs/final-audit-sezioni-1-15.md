# Audit Finale 1-15 (Pre-Pubblicazione)
Data audit: 3 aprile 2026  
Dominio target: `https://assistenzaromapc.it`  
Baseline legacy: `https://assistenzaromapc.it` (versione WordPress precedente)  
Nota progetto: su richiesta, **nessuna modifica UI/UX/design applicata** in questo pass.

## Sezione 1 — Executive Summary
- Stato generale: buono, con migrazione SEO legacy allineata e hardening tecnico completato.
- Rischi principali residui: tracking/observability da configurare in ambiente reale, alcune catene redirect a 2 hop per URL storiche WordPress/WooCommerce.
- Opportunita principali: consolidamento cluster long-tail, crescita Local SEO offsite (GBP/review/citations), governance KPI 30/60/90 giorni.

Valutazione sintetica:

| Area | Score (1-10) | Stato |
|---|---:|---|
| Indicizzabilita | 9 | Solida, sitemap pulita, legacy coperta |
| SEO readiness | 8.5 | Buona base tecnica + on-page |
| SERP competitiveness | 7.5 | Buona base, da spingere con contenuto/offsite |
| UX clarity | 7.5 | Non modificata in questo pass |
| Performance readiness | 8 | Buona su report produzione zona |
| Conversion readiness | 7.5 | Funnel presente, tracking da rifinire |

## Sezione 2 — Pre-Launch / Go-Live Risk Analysis

| Voce | Stato | Rischio | Raccomandazione | Priorita |
|---|---|---|---|---|
| robots.txt | OK | Basso | Confermare in produzione finale | Medio |
| noindex accidentali | OK | Basso | Verifica spot su template chiave | Medio |
| canonical | OK | Basso | Monitor GSC copertura canonical | Medio |
| redirect legacy | OK (coperti) | Medio-basso | Ridurre hop dove possibile | Medio |
| sitemap | OK | Basso | Reinviare sitemap post-switch | Alto |
| staging indicizzabile | Da verificare ambiente | Medio | Proteggere staging con auth/noindex | Alto |
| URL test indicizzabili | Parziale | Medio | Bloccare route test/non business | Alto |
| parametri inutili | Mitigato (`page_id`) | Basso | Continuare cleanup query legacy | Medio |
| mixed content | N/V locale | Medio | Test su dominio live con crawl HTTPS | Alto |
| 404/soft 404/5xx | OK sui path legacy critici | Medio-basso | Monitor 72h post switch | Alto |
| asset bloccati crawler | OK | Basso | Verifica log GSC rendering | Medio |
| JS blocca rendering contenuti | OK (SSR) | Basso | Continuare test fetch HTML | Medio |

## Sezione 3 — SERP & Keyword Strategy Analysis
Intent coperti:
- Local commercial/transactional: `zone/*`, `servizi/*/*`
- Informational local: `assistenza-a-domicilio/*` (guide long-tail)

Gap strategici residui:
- Rafforzare cluster informativi comparativi (es. costo intervento per zona, urgenze, tempi medi).
- Espandere contenuti prova/autorita (case study reali per quartiere).

Keyword map sintetica per template:

| Template URL | Intent | Primaria | Secondarie |
|---|---|---|---|
| `/` | Commercial local | assistenza pc roma | tecnico computer roma, assistenza informatica roma |
| `/zone/{zona}` | Local commercial | assistenza pc {zona} | tecnico pc {zona}, assistenza computer domicilio {zona} |
| `/servizi/{servizio}/{zona}` | Transactional local | {servizio} {zona} | assistenza {servizio} roma, tecnico {servizio} domicilio |
| `/assistenza-a-domicilio` | Informational hub | assistenza pc domicilio roma | guide tecnico computer roma |
| `/assistenza-a-domicilio/{slug}` | Informational long-tail | query locale specifica | problema+zona, servizio+zona |

Rischio cannibalizzazione:
- Mitigato su cluster “5 problemi PC” (pagina checklist differenziata da pagina guida completa).

Nuove pagine consigliate (non UI):
- Comparativa “costo assistenza pc a domicilio roma per tipologia intervento”.
- Case studies per quadrante (Nord/Sud/Est/Ovest).
- FAQ verticali per servizio ad alta domanda.

## Sezione 4 — Information Architecture & URL Structure
- Gerarchia attuale coerente: home -> zone/servizi -> hub guide -> guide long-tail.
- Profondita click contenuta.
- Slug leggibili e semantici.
- Legacy long-tail: allineata.
- Orfane critiche: non rilevate su set principale.

Raccomandazione:
- Mantenere schema hub-and-spoke attuale con aggiornamento editoriale continuo.

## Sezione 5 — Technical SEO Audit
- robots/sitemap: configurati.
- canonical/meta robots: presenti sui template.
- redirect legacy principali: implementati.
- duplicate content critico: non emerso sui template core.
- status code legacy: 200 finali sui path principali verificati.
- image indexing readiness: buona (altrove da estendere alt descrittivi dove utile).

Correzioni implementate in questo ciclo:
- redirect legacy WordPress/WooCommerce e varianti slug.
- fix redirect query `page_id`.
- hardening header sicurezza base.

## Sezione 6 — JavaScript SEO / Framework Audit
- Framework: Next.js App Router.
- Rendering: contenuti core presenti in HTML iniziale (SSR/SSG mix).
- metadata: title/description/canonical generati lato server per template.
- JSON-LD: presente su home, zone, servizi, articoli.
- Link crawlable: anchor HTML presenti.
- rischio rendering SEO: basso.

## Sezione 7 — On-Page SEO Audit
- Title: normalizzati (range sano su URL in sitemap).
- Description: normalizzate (range sano su URL in sitemap).
- H1: uno per pagina sulle URL core controllate.
- Internal linking: migliorato con link cluster backup/guide.
- Cannibalizzazione prioritaria: ridotta.
- Unicita contenuti: buona su zone/servizi/guide.

## Sezione 8 — Structured Data / Rich Results Plan
Stato:
- Implementati: `LocalBusiness/ProfessionalService`, `Service`, `FAQPage`, `BreadcrumbList`, `BlogPosting`, `HowTo`, `WebPage`, `ItemList`.

Piano di governance:
- Validare periodicamente con Rich Results Test.
- Evitare markup non supportato o eccessivo per template non pertinenti.
- Tenere coerenza tra contenuto visibile e JSON-LD.

Priorita:
- Alta: monitor warning/error Search Console su structured data.
- Media: ridurre sovrapposizioni schema dove non necessarie.

## Sezione 9 — Design / UX / CRO Audit
**Nessuna modifica applicata** (vincolo esplicito progetto).

Valutazione solo analitica:
- Struttura conversione presente.
- CTA principali presenti.
- Gerarchia visuale complessivamente chiara.

Proposte design/UI **non applicate** (lista da approvare separatamente in fondo):
- miglioramenti contrasto micro-testo su alcune card scure
- pulizia densita visiva in sezioni ad alta decorazione
- ottimizzazione leggibilita blocchi FAQ su mobile

## Sezione 10 — Performance / Core Web Vitals Audit
Fonti locali:
- `reports/lh-zone-centro-mobile-prod-after.json`: Performance 97, LCP ~2633ms
- `reports/lh-zone-centro-desktop.json`: Performance 100, LCP ~615ms
- audit root vecchi in repo mostrano varianza elevata (probabile ambiente/test non omogeneo)

Ipotesi colli di bottiglia:
- pagine con molte immagini decorative e overlay.
- peso script terzi quando analytics attivo.

Azioni implementate non UI:
- caching static asset già configurato.
- header tecnici migliorati.

Quick wins futuri:
- monitor field CWV reale da CrUX/GSC.
- budget script terzi.

## Sezione 11 — Accessibility Audit
- Lighthouse accessibilita su report disponibili: 100 (campione).
- Rischi residui da validare manualmente:
  - focus visibile su tutti i componenti interattivi complessi
  - ordine tab su componenti dinamici
  - labeling form edge cases

Nota: nessuna modifica visuale applicata in questo pass.

## Sezione 12 — Security / Trust / Deployment Readiness
Implementato:
- `Strict-Transport-Security`
- `X-Frame-Options`
- `X-Content-Type-Options`
- `Referrer-Policy`
- `Permissions-Policy`
- `Content-Security-Policy-Report-Only`
- rimozione `X-Powered-By` Next via config

Rischio residuo:
- definire pipeline raccolta report CSP (attualmente solo report-only header).

## Sezione 13 — Analytics / Search Console / Observability
Implementato in codice (senza UI):
- loader analytics opzionale (`GTM` o `GA4`) via env
- tracking automatico click `tel:` e `whatsapp`
- tracking tentativi submit form lead in sezione prenotazione
- `.env.example` aggiornato con variabili

Da completare in ambiente reale:
- configurare `NEXT_PUBLIC_GTM_ID` o `NEXT_PUBLIC_GA4_MEASUREMENT_ID`
- creare eventi/conversioni in GA4:
  - `contact_phone_click`
  - `contact_whatsapp_click`
  - `lead_form_submit_attempt`
- collegare dashboard KPI settimanale
- workflow Search Console (inspection + coverage + enhancement checks)

## Sezione 14 — Prioritized Action Plan

### Prima del go-live
| Task | Owner | Priorita | Effort | Impatto |
|---|---|---|---|---|
| Configurare GTM/GA4 env reali | Dev/Marketing | Alta | Basso | Alto |
| Verifica redirect map legacy in produzione | SEO/Dev | Alta | Medio | Alto |
| Reinvio sitemap in GSC/Bing | SEO | Alta | Basso | Alto |

### Giorno go-live
| Task | Owner | Priorita | Effort | Impatto |
|---|---|---|---|---|
| Smoke test URL core + legacy | Dev/SEO | Alta | Basso | Alto |
| Check status code + canonical + robots | SEO | Alta | Basso | Alto |
| Annotazione release su dashboard | Marketing | Media | Basso | Medio |

### Prime 72 ore
| Task | Owner | Priorita | Effort | Impatto |
|---|---|---|---|---|
| Monitor 404/redirect anomali | Dev/SEO | Alta | Medio | Alto |
| Validare eventi analytics su traffico reale | Dev/Marketing | Alta | Basso | Alto |
| Correggere eventuali catene non attese | Dev | Media | Medio | Medio |

### Prime 2 settimane
| Task | Owner | Priorita | Effort | Impatto |
|---|---|---|---|---|
| Avvio review engine GBP | Marketing/Operations | Alta | Medio | Alto |
| NAP citations principali | Marketing | Alta | Medio | Alto |
| 2-4 contenuti long-tail addizionali | SEO/Copy | Media | Medio | Alto |

### Primo mese
| Task | Owner | Priorita | Effort | Impatto |
|---|---|---|---|---|
| Ottimizzazione CTR pagine impression alte | SEO/Copy | Alta | Medio | Alto |
| Digital PR locale (2 uscite/mese) | Marketing | Media | Medio | Alto |
| QA schema + enhancement GSC | SEO/Dev | Media | Basso | Medio |

### 60-90 giorni
| Task | Owner | Priorita | Effort | Impatto |
|---|---|---|---|---|
| Scaling cluster zone+servizio | SEO/Copy | Alta | Alto | Alto |
| Partnership locali continuative | Marketing | Media | Medio | Alto |
| Revisione roadmap KPI e forecast | SEO/Business | Media | Basso | Alto |

## Sezione 15 — Final Master Checklist

### SEO tecnica
- [x] Redirect legacy principali implementati
- [x] Query `page_id` normalizzata
- [x] robots/sitemap operativi
- [x] canonical presenti
- [x] status finali legacy principali -> 200
- [ ] Monitor 404 reali post go-live (72h)

### Contenuti
- [x] Long-tail storiche mantenute
- [x] Riduzione cannibalizzazione primaria
- [x] Nuovo contenuto backup inserito
- [ ] Piano editoriale 8-12 settimane in esecuzione

### Structured data
- [x] Schema principali implementati
- [ ] Validazione periodica warning/error in GSC

### Performance
- [x] Buoni benchmark su report zona produzione
- [ ] Conferma CWV field data su traffico reale

### UX (solo monitor, nessun change applicato)
- [x] Nessuna modifica design/UI applicata (vincolo)
- [ ] Eventuale backlog UX da approvare separatamente

### Accessibilita
- [x] Buoni risultati Lighthouse disponibili
- [ ] QA manuale tastiera/focus su tutte le viste

### Sicurezza
- [x] Security headers principali impostati
- [x] CSP report-only impostata
- [ ] Pipeline ingest report CSP

### Analytics
- [x] Infrastruttura GTM/GA4 opzionale implementata
- [x] Eventi base tracciati lato client
- [ ] Configurazione ID reali in produzione
- [ ] Dashboard KPI operativa

### Post-launch
- [ ] Checklist 72h completata
- [ ] Report 30/60/90 giorni attivo
- [ ] Iterazioni settimanali su CTR e query

---

## Proposte Design/UI (NON applicate)
Da valutare a parte con approvazione esplicita:
1. Aumentare contrasto testo secondario sulle card scure.
2. Ridurre densita grafica in sezioni con piu overlay per migliorare leggibilita.
3. Migliorare micro-gerarchia tipografica FAQ su mobile.
4. Uniformare spaziatura verticale tra blocchi sezionali nelle pagine lunghe.
5. Ottimizzare alcune immagini di sfondo in sezioni chiare per percezione nitidezza.

