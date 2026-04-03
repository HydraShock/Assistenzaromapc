import { siteConfig } from "@/lib/seo";

export type ServiceCatalogItem = {
  slug: string;
  name: string;
  h1Base: string;
  metaTitle: string;
  shortDescription: string;
  includes: readonly string[];
};

export const serviceCatalog: readonly ServiceCatalogItem[] = [
  {
    slug: "riparazione-pc-notebook",
    name: "Riparazione PC e notebook",
    h1Base: "Riparazione PC e notebook a domicilio",
    metaTitle: "Riparazione PC e notebook",
    shortDescription:
      "Diagnosi e risoluzione problemi hardware e software per computer desktop e portatili, con intervento a domicilio.",
    includes: [
      "Diagnosi guasti e blocchi improvvisi",
      "Correzione errori di avvio e schermate anomale",
      "Ripristino stabilita sistema operativo",
      "Consigli pratici per evitare nuovi blocchi",
    ],
  },
  {
    slug: "pc-lento-ottimizzazione",
    name: "PC lento e ottimizzazione",
    h1Base: "Ottimizzazione PC lento a domicilio",
    metaTitle: "Ottimizzazione PC lento",
    shortDescription:
      "Pulizia software, ottimizzazione avvio e configurazione sistema per migliorare velocita e stabilita del computer.",
    includes: [
      "Rimozione processi e software che rallentano il sistema",
      "Ottimizzazione avvio e tempi di risposta",
      "Configurazione aggiornamenti e manutenzione base",
      "Verifica stato disco e memoria",
    ],
  },
  {
    slug: "rimozione-virus-malware",
    name: "Rimozione virus e malware",
    h1Base: "Rimozione virus e malware a domicilio",
    metaTitle: "Rimozione virus e malware",
    shortDescription:
      "Bonifica del sistema da virus, malware e software indesiderati con intervento mirato e messa in sicurezza.",
    includes: [
      "Scansione completa e bonifica minacce",
      "Rimozione adware, pop-up e processi sospetti",
      "Messa in sicurezza account e browser",
      "Controllo impostazioni per prevenzione futura",
    ],
  },
  {
    slug: "assistenza-wifi-rete",
    name: "Assistenza Wi-Fi e rete",
    h1Base: "Assistenza Wi-Fi e rete domestica a domicilio",
    metaTitle: "Assistenza Wi-Fi e rete",
    shortDescription:
      "Configurazione e risoluzione problemi rete internet, modem, router ed estensione segnale in casa o ufficio.",
    includes: [
      "Diagnosi connessione lenta o instabile",
      "Configurazione modem, router e access point",
      "Ottimizzazione copertura nelle varie stanze",
      "Configurazione rete sicura per dispositivi casa/ufficio",
    ],
  },
  {
    slug: "configurazione-stampanti",
    name: "Configurazione stampanti e periferiche",
    h1Base: "Configurazione stampanti e periferiche a domicilio",
    metaTitle: "Configurazione stampanti e periferiche",
    shortDescription:
      "Installazione e configurazione stampanti, scanner e periferiche con collegamento stabile a PC e rete locale.",
    includes: [
      "Installazione stampanti USB e Wi-Fi",
      "Correzione errori di stampa e driver",
      "Configurazione scansione e condivisione in rete",
      "Collegamento periferiche a piu dispositivi",
    ],
  },
  {
    slug: "recupero-dati-backup",
    name: "Recupero dati e backup",
    h1Base: "Recupero dati e backup a domicilio",
    metaTitle: "Recupero dati e backup",
    shortDescription:
      "Recupero file da sistemi bloccati e configurazione backup sicuro per ridurre rischio perdita dati.",
    includes: [
      "Analisi recuperabilita file e cartelle",
      "Recupero documenti da dischi e sistemi non avviabili",
      "Impostazione backup locale o cloud",
      "Strategia semplice di protezione dati",
    ],
  },
] as const;

export function getServiceBySlug(slug: string): ServiceCatalogItem | undefined {
  return serviceCatalog.find((service) => service.slug === slug);
}

export function getServiceZoneUrl(serviceSlug: string, zoneSlug: string): string {
  return `${siteConfig.siteUrl}/servizi/${serviceSlug}/${zoneSlug}`;
}
