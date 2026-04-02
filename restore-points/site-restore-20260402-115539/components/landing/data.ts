export const trustBadges = ["7/7", "Domicilio", "PC & Mac", "Wi-Fi", "Stampanti"];

export type ServiceIconName = "wrench" | "shield" | "database" | "router";

export const services: Array<{ title: string }> = [
  { title: "Riparazione PC e MAC" },
  { title: "Velocizzazione Computer Lenti" },
  { title: "Problemi WI-FI e Reti Domestiche" },
  { title: "Config. e assistenza stampanti" },
  { title: "Recupero Dati e Backup" },
  { title: "Assistenza a Domicilio" },
  { title: "Lezioni e Supporto informatico Base" },
  { title: "Lezioni e Supporto informatico Base" },
];

export const coverageZones = [
  "Prati",
  "Trastevere",
  "Nomentano",
  "Marconi",
  "Monteverde",
  "Eur",
  "Talenti",
];

export const faqItems = [
  {
    question: "Come funziona l'assistenza PC?",
    answer:
      "Ti rispondo rapidamente, faccio una diagnosi del problema e concordiamo l'intervento in laboratorio o direttamente a domicilio.",
  },
  {
    question: "Quanto costa un intervento?",
    answer:
      "Ricevi sempre un preventivo chiaro prima di iniziare. Il prezzo dipende dal tipo di guasto, dal tempo e da eventuali componenti da sostituire.",
  },
  {
    question: "In quali zone lavori?",
    answer:
      "Opero in tutta Roma, con interventi frequenti in Prati, Trastevere, Nomentano, Marconi, Monteverde, Eur e Talenti.",
  },
  {
    question: "Offri assistenza Wi-Fi?",
    answer:
      "Sì. Configuro router, rete domestica, estensori e stampanti di rete, risolvendo problemi di copertura e stabilita.",
  },
];

export const testimonials = [
  {
    name: "Luca B.",
    role: "Professionista",
    image: "/clients/client-1.svg",
    text: "Intervento veloce e preciso. Il mio laptop ora e molto piu rapido e stabile.",
  },
  {
    name: "Sara M.",
    role: "Studio legale",
    image: "/clients/client-2.svg",
    text: "Problema Wi-Fi risolto in giornata. Servizio chiaro, puntuale e davvero professionale.",
  },
  {
    name: "Marco R.",
    role: "Privato",
    image: "/clients/client-3.svg",
    text: "Recupero dati riuscito e backup configurato. Assistenza affidabile, consigliatissima.",
  },
];
