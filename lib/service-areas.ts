import { siteConfig } from "@/lib/seo";

export type ServiceAreaPage = {
  slug: string;
  zoneName: string;
  title: string;
  h1: string;
  description: string;
  intro: string;
  neighborhoods: readonly string[];
  highlights: readonly string[];
  faq: readonly { question: string; answer: string }[];
};

export const serviceAreaPages: readonly ServiceAreaPage[] = [
  {
    slug: "roma-centro",
    zoneName: "Roma Centro",
    title: "Assistenza PC Roma Centro",
    h1: "Assistenza PC a domicilio Roma Centro",
    description:
      "Tecnico computer a domicilio in Roma Centro: Prati, Trastevere, Monti, Campo de' Fiori, Piazza Navona e Colosseo.",
    intro:
      "Interventi rapidi a domicilio per computer lenti, rete Wi-Fi, stampanti, backup e configurazioni complete nelle zone centrali di Roma.",
    neighborhoods: ["Prati", "Trastevere", "Monti", "Campo de' Fiori", "Piazza Navona", "Colosseo"],
    highlights: [
      "Intervento a domicilio in giornata quando disponibile",
      "Supporto per privati, professionisti e piccoli uffici",
      "Diagnosi chiara e soluzione pratica senza tecnicismi inutili",
    ],
    faq: [
      {
        question: "Quanto tempo serve per un intervento in Roma Centro?",
        answer:
          "Nelle zone centrali l'arrivo e spesso rapido. In base alla fascia oraria possiamo confermare disponibilita in giornata o il primo slot utile.",
      },
      {
        question: "Lavori anche su rete e stampanti oltre al PC?",
        answer:
          "Si. Gestiamo computer, notebook, Wi-Fi, stampanti e periferiche con configurazione completa direttamente a domicilio.",
      },
    ],
  },
  {
    slug: "roma-nord",
    zoneName: "Roma Nord",
    title: "Assistenza PC Roma Nord",
    h1: "Assistenza computer a domicilio Roma Nord",
    description:
      "Tecnico PC in zona Roma Nord: Parioli, Trieste, Nomentano, Flaminio, Talenti e Bufalotta con assistenza rapida.",
    intro:
      "Supporto informatico a domicilio per case e studi professionali in tutta l'area nord, con interventi organizzati e tempi chiari.",
    neighborhoods: ["Parioli", "Trieste", "Nomentano", "Flaminio", "Talenti", "Bufalotta"],
    highlights: [
      "Ottimizzazione PC e notebook lenti",
      "Risoluzione problemi di rete domestica e aziendale",
      "Configurazione completa di software e account",
    ],
    faq: [
      {
        question: "Intervenite anche la sera in Roma Nord?",
        answer:
          "Quando ci sono slot disponibili, si. Valutiamo sempre fascia serale e weekend in base all'urgenza e alla zona.",
      },
      {
        question: "Posso richiedere assistenza per piu dispositivi nello stesso intervento?",
        answer:
          "Certo. Durante la stessa uscita possiamo gestire piu PC, notebook e periferiche per ottimizzare tempi e costi.",
      },
    ],
  },
  {
    slug: "roma-nord-est",
    zoneName: "Roma Nord Est",
    title: "Assistenza PC Roma Nord Est",
    h1: "Assistenza PC a domicilio Roma Nord Est",
    description:
      "Assistenza tecnica PC in Roma Nord Est: Fidene, Labaro, Prima Porta, Conca d'Oro, Giustiniana e Vigna Clara.",
    intro:
      "Interventi a domicilio in zona nord est con supporto per guasti software, configurazioni rete e problemi hardware comuni.",
    neighborhoods: ["Fidene", "Labaro", "Prima Porta", "Conca d'Oro", "Giustiniana", "Vigna Clara"],
    highlights: [
      "Ripristino sistemi e rimozione errori software",
      "Supporto reti Wi-Fi multi stanza",
      "Configurazione stampanti e dispositivi condivisi",
    ],
    faq: [
      {
        question: "Coprite anche le aree limitrofe a Prima Porta e Labaro?",
        answer:
          "Si, copriamo anche le zone vicine del quadrante nord est con pianificazione rapida dell'intervento a domicilio.",
      },
      {
        question: "Fate assistenza anche su notebook aziendali?",
        answer:
          "Si, interveniamo sia su dispositivi privati sia su notebook da lavoro con attenzione a continuita operativa e backup.",
      },
    ],
  },
  {
    slug: "roma-est",
    zoneName: "Roma Est",
    title: "Assistenza PC Roma Est",
    h1: "Tecnico computer a domicilio Roma Est",
    description:
      "Assistenza informatica in Roma Est: Tiburtina, Pietralata, Centocelle, Prenestina, Pigneto e Tor Bella Monaca.",
    intro:
      "Supporto tecnico rapido in tutto il quadrante est di Roma per PC desktop, notebook, connessione internet e periferiche.",
    neighborhoods: ["Tiburtina", "Pietralata", "Centocelle", "Prenestina", "Pigneto", "Tor Bella Monaca"],
    highlights: [
      "Interventi organizzati con priorita alle urgenze",
      "Ottimizzazione prestazioni e sicurezza del sistema",
      "Aiuto pratico anche per utenti non esperti",
    ],
    faq: [
      {
        question: "In zona Tiburtina e Centocelle fate interventi urgenti?",
        answer:
          "Si, quando possibile diamo priorita alle urgenze e proponiamo il primo appuntamento disponibile in giornata.",
      },
      {
        question: "E possibile risolvere anche problemi di lentezza cronica?",
        answer:
          "Si, analizziamo il sistema, rimuoviamo colli di bottiglia software e proponiamo eventuali upgrade mirati quando servono.",
      },
    ],
  },
  {
    slug: "roma-sud-est",
    zoneName: "Roma Sud Est",
    title: "Assistenza PC Roma Sud Est",
    h1: "Assistenza informatica Roma Sud Est a domicilio",
    description:
      "Tecnico PC a domicilio in Roma Sud Est per riparazioni e supporto rapido: Appio, Tuscolano, Cinecitta, Re di Roma, Colli Albani e Don Bosco.",
    intro:
      "Servizio a domicilio su appuntamento per riparazioni, configurazioni e supporto quotidiano in tutta l'area sud est di Roma.",
    neighborhoods: ["Appio", "Tuscolano", "Cinecitta", "Re di Roma", "Colli Albani", "Don Bosco"],
    highlights: [
      "Assistenza completa casa e piccoli uffici",
      "Configurazione rete, backup e sicurezza",
      "Supporto continuativo anche post intervento",
    ],
    faq: [
      {
        question: "Coprite anche le zone vicine a Cinecitta e Tuscolano?",
        answer:
          "Si, copriamo tutto il quadrante sud est con pianificazione per quartiere e tempi di arrivo chiari.",
      },
      {
        question: "Offrite supporto su nuovi PC appena acquistati?",
        answer:
          "Si, configuriamo computer nuovi da zero con trasferimento dati, software e impostazioni complete.",
      },
    ],
  },
  {
    slug: "roma-sud",
    zoneName: "Roma Sud",
    title: "Assistenza PC Roma Sud",
    h1: "Assistenza PC e notebook Roma Sud",
    description:
      "Interventi tecnici a domicilio in Roma Sud con assistenza rapida su PC e notebook: Eur, Garbatella, Ostiense, Laurentina, San Paolo e Tor Marancia.",
    intro:
      "Supporto professionale in zona sud per problemi urgenti e manutenzione ordinaria su computer, notebook e rete domestica.",
    neighborhoods: ["Eur", "Garbatella", "Ostiense", "Laurentina", "San Paolo", "Tor Marancia"],
    highlights: [
      "Intervento rapido con diagnosi trasparente",
      "Configurazioni Wi-Fi e gestione periferiche",
      "Assistenza dedicata anche a smart working",
    ],
    faq: [
      {
        question: "In zona Eur e Garbatella fate assistenza per smart working?",
        answer:
          "Si, ottimizziamo connessioni, strumenti di lavoro remoto, stampanti e sicurezza base per lavorare senza blocchi.",
      },
      {
        question: "Si puo prenotare un controllo completo del PC?",
        answer:
          "Certo. Possiamo eseguire un check completo con pulizia software, aggiornamenti e verifica prestazioni.",
      },
    ],
  },
  {
    slug: "roma-ovest",
    zoneName: "Roma Ovest",
    title: "Assistenza PC Roma Ovest",
    h1: "Tecnico PC a domicilio Roma Ovest",
    description:
      "Assistenza computer a domicilio in Roma Ovest con interventi rapidi: Monteverde, Portuense, Magliana, Aurelio, Boccea e Balduina.",
    intro:
      "Interventi in tutta Roma Ovest con approccio pratico e supporto completo per problemi software, hardware e connettivita.",
    neighborhoods: ["Monteverde", "Portuense", "Magliana", "Aurelio", "Boccea", "Balduina"],
    highlights: [
      "Supporto su PC fissi, notebook e mini uffici",
      "Ripristino sistemi e aggiornamenti sicuri",
      "Assistenza chiara, veloce e orientata al risultato",
    ],
    faq: [
      {
        question: "Intervenite anche in Portuense e Magliana in giornata?",
        answer:
          "Quando gli slot lo consentono, si. Ti confermiamo subito la prima disponibilita utile in base alla tua zona.",
      },
      {
        question: "Gestite anche configurazioni nuove rete domestica?",
        answer:
          "Si, configuriamo modem/router, estensori e dispositivi di casa per migliorare copertura e stabilita.",
      },
    ],
  },
  {
    slug: "roma-litorale",
    zoneName: "Roma Litorale",
    title: "Assistenza PC Ostia e Litorale Roma",
    h1: "Assistenza PC a domicilio Ostia e Litorale",
    description:
      "Tecnico informatico a domicilio su Ostia e Litorale di Roma con copertura estesa: Acilia, Infernetto, Casal Palocco, Axa e Dragona.",
    intro:
      "Servizio a domicilio dedicato alle zone del litorale romano con supporto tecnico completo su computer, rete e periferiche.",
    neighborhoods: ["Ostia", "Acilia", "Infernetto", "Casal Palocco", "Axa", "Dragona"],
    highlights: [
      "Copertura ampia su tutto il litorale",
      "Interventi pianificati in modo puntuale",
      "Supporto tecnico professionale e continuativo",
    ],
    faq: [
      {
        question: "Coprite regolarmente Ostia e Infernetto?",
        answer:
          "Si, sono aree coperte stabilmente. Organizziamo gli interventi con finestre orarie chiare e conferma veloce.",
      },
      {
        question: "Si puo richiedere assistenza per rete e smart TV insieme?",
        answer:
          "Si, durante l'intervento possiamo gestire anche piu dispositivi collegati alla rete domestica.",
      },
    ],
  },
] as const;

export function getServiceAreaBySlug(slug: string): ServiceAreaPage | undefined {
  return serviceAreaPages.find((area) => area.slug === slug);
}

export function getServiceAreaUrl(slug: string): string {
  return `${siteConfig.siteUrl}/zone/${slug}`;
}
