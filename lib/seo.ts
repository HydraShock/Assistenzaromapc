const DEFAULT_SITE_URL = "https://www.assistenzaromapc.it";

function normalizeCanonicalSiteUrl(rawValue: string): string {
  try {
    const candidate = /^https?:\/\//i.test(rawValue) ? rawValue : `https://${rawValue}`;
    const parsed = new URL(candidate);

    // Keep canonical host consistent with Vercel primary domain configuration.
    if (parsed.hostname === "assistenzaromapc.it") {
      parsed.hostname = "www.assistenzaromapc.it";
    }

    parsed.protocol = "https:";
    parsed.pathname = "/";
    parsed.search = "";
    parsed.hash = "";

    return parsed.toString().replace(/\/$/, "");
  } catch {
    return DEFAULT_SITE_URL;
  }
}

export const siteConfig = {
  name: "Assistenza Roma PC",
  siteUrl: normalizeCanonicalSiteUrl(process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL),
  phoneInternational: "+393421872127",
  phoneDisplay: "3421872127",
  googleReviewsUrl:
    process.env.NEXT_PUBLIC_GOOGLE_REVIEWS_URL ?? "https://www.google.com/search?q=Assistenza+Roma+PC+recensioni",
  email: "assistenzaromapc0@gmail.com",
  locale: "it_IT",
  city: "Roma",
  region: "Lazio",
  country: "IT",
} as const;

export const mainServiceAreas = [
  "Centro Storico",
  "Prati",
  "Trastevere",
  "Monti",
  "Campo de' Fiori",
  "Piazza di Spagna",
  "Testaccio",
  "Aventino",
  "Esquilino",
  "San Giovanni",
  "Piazza Bologna",
  "Eur",
  "Ostiense",
  "Flaminio",
  "Parioli",
  "Trieste",
  "Nomentano",
  "Talenti",
  "Monte Sacro",
  "Conca d'Oro",
  "Bufalotta",
  "Appio",
  "Tuscolano",
  "Cinecitta",
  "Garbatella",
  "Monteverde",
  "Portuense",
  "Magliana",
  "Aurelio",
  "Balduina",
  "Boccea",
  "Tiburtina",
  "Pietralata",
  "Colli Aniene",
  "Pigneto",
  "Centocelle",
  "Tor Bella Monaca",
  "San Lorenzo",
  "Marconi",
  "Ostia",
  "Acilia",
  "Infernetto",
  "Casal Palocco",
  "Laurentina",
  "Fidene",
  "Labaro",
  "Prima Porta",
] as const;

export const seoFaq = [
  {
    question: "Come funziona l'assistenza PC a domicilio a Roma?",
    answer:
      "Interveniamo direttamente a casa o in ufficio per problemi su computer, notebook, Wi-Fi, stampanti e rete, con diagnosi chiara e soluzione pratica.",
  },
  {
    question: "In quali zone di Roma intervenite?",
    answer:
      "Copriamo Roma Nord, Sud, Est e Ovest: Centro Storico, Prati, Trastevere, Parioli, Trieste, Nomentano, Talenti, Appio, Tuscolano, Eur, Garbatella, Tiburtina, Centocelle, Monteverde, Portuense, Aurelio, Ostia e zone limitrofe.",
  },
  {
    question: "Posso richiedere interventi urgenti in giornata?",
    answer:
      "Quando possibile organizziamo interventi rapidi in giornata, con priorita alle urgenze reali e conferma veloce via telefono o WhatsApp.",
  },
  {
    question: "Effettuate anche assistenza su notebook e rete Wi-Fi?",
    answer:
      "Si, gestiamo riparazione notebook, ottimizzazione PC lenti, configurazione router, problemi Wi-Fi, stampanti e periferiche.",
  },
] as const;
