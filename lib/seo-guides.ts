export type SeoGuideFaq = {
  question: string;
  answer: string;
};

export type SeoGuideArticle = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  zoneSlug: string;
  serviceSlug: string;
  problemLabel: string;
  readMinutes: number;
  publishedAt: string;
  updatedAt: string;
  intro: string;
  steps: readonly string[];
  whenToCall: readonly string[];
  faq: readonly SeoGuideFaq[];
};

export const seoGuides: readonly SeoGuideArticle[] = [
  {
    slug: "pc-lento-prati-roma-centro",
    title: "PC lento a Prati: cosa controllare prima di chiamare il tecnico",
    metaTitle: "PC lento Prati Roma Centro",
    description:
      "Guida pratica per PC lento in zona Prati e Roma Centro: controlli rapidi, errori comuni e quando richiedere assistenza a domicilio.",
    zoneSlug: "roma-centro",
    serviceSlug: "pc-lento-ottimizzazione",
    problemLabel: "PC lento",
    readMinutes: 4,
    publishedAt: "2026-04-02",
    updatedAt: "2026-04-02",
    intro:
      "Se il computer e diventato lento tra apertura programmi, browser e aggiornamenti, questa checklist ti aiuta a capire subito il problema.",
    steps: [
      "Controlla spazio libero su disco e rimuovi file temporanei pesanti.",
      "Disattiva programmi inutili all'avvio automatico.",
      "Verifica se ci sono aggiornamenti bloccati di Windows o driver.",
      "Fai una scansione malware rapida per escludere processi malevoli.",
    ],
    whenToCall: [
      "Il PC resta lento anche dopo la pulizia base.",
      "Hai blocchi frequenti o riavvii casuali.",
      "Serve ottimizzare piu dispositivi in casa o ufficio.",
    ],
    faq: [
      {
        question: "Quanto dura un intervento per PC lento a Roma Centro?",
        answer:
          "Dipende dal caso, ma in molti interventi standard la diagnosi e l'ottimizzazione iniziale si completano nella stessa uscita.",
      },
      {
        question: "Conviene formattare subito un PC lento?",
        answer:
          "Non sempre. Prima conviene una diagnosi tecnica: spesso il problema si risolve con ottimizzazione e correzioni mirate.",
      },
    ],
  },
  {
    slug: "wifi-instabile-parioli-roma-nord",
    title: "Wi-Fi instabile a Parioli: come migliorare subito la rete di casa",
    metaTitle: "Wi-Fi instabile Parioli Roma Nord",
    description:
      "Guida rapida per problemi Wi-Fi a Parioli e Roma Nord: test segnale, posizione router e configurazioni da correggere.",
    zoneSlug: "roma-nord",
    serviceSlug: "assistenza-wifi-rete",
    problemLabel: "Wi-Fi instabile",
    readMinutes: 5,
    publishedAt: "2026-04-02",
    updatedAt: "2026-04-02",
    intro:
      "Connessione che cade, videochiamate bloccate e zone morte in casa: ecco i controlli pratici per stabilizzare la rete.",
    steps: [
      "Sposta il router in posizione centrale e lontana da ostacoli metallici.",
      "Controlla canale Wi-Fi e banda (2.4 GHz / 5 GHz) in base agli ambienti.",
      "Aggiorna firmware modem/router se disponibile.",
      "Testa la rete stanza per stanza per capire dove serve estensione segnale.",
    ],
    whenToCall: [
      "La rete continua a cadere nonostante reset e riavvio router.",
      "Hai casa grande con copertura disomogenea.",
      "Devi collegare stabilmente smart TV, stampanti e postazioni lavoro.",
    ],
    faq: [
      {
        question: "Meglio cambiare router o aggiungere access point?",
        answer:
          "Dipende dalla planimetria. In molti casi una configurazione mista con access point o mesh risolve meglio dei soli cambi router.",
      },
      {
        question: "Intervenite anche la sera per problemi rete?",
        answer:
          "Quando ci sono slot disponibili, si. Possiamo programmare in base alle tue esigenze orarie.",
      },
    ],
  },
  {
    slug: "stampante-offline-eur-roma-sud",
    title: "Stampante offline in zona EUR: guida veloce per tornare operativi",
    metaTitle: "Stampante offline EUR Roma Sud",
    description:
      "Come risolvere stampante offline in zona EUR e Roma Sud: controlli driver, rete e coda di stampa con procedura semplice.",
    zoneSlug: "roma-sud",
    serviceSlug: "configurazione-stampanti",
    problemLabel: "Stampante offline",
    readMinutes: 4,
    publishedAt: "2026-04-02",
    updatedAt: "2026-04-02",
    intro:
      "Quando la stampante risulta offline e blocca il lavoro, conviene procedere con una verifica ordinata in pochi passaggi.",
    steps: [
      "Controlla che stampante e PC siano sulla stessa rete locale.",
      "Svuota la coda di stampa bloccata e riavvia il servizio spooler.",
      "Reinstalla driver ufficiali aggiornati.",
      "Imposta la stampante corretta come predefinita.",
    ],
    whenToCall: [
      "Il problema torna ogni giorno dopo pochi utilizzi.",
      "La stampante e condivisa da piu dispositivi e non sincronizza.",
      "Serve configurazione completa scanner + rete + utenti.",
    ],
    faq: [
      {
        question: "Perche la stampante torna offline dopo il riavvio?",
        answer:
          "Spesso dipende da configurazione IP, driver non stabili o conflitti di rete. Una configurazione tecnica risolve alla radice.",
      },
      {
        question: "Gestite anche stampanti in piccoli uffici?",
        answer:
          "Si, configuriamo stampanti e periferiche in ambienti domestici e professionali con gestione multiutente.",
      },
    ],
  },
  {
    slug: "virus-popup-tiburtina-roma-est",
    title: "Virus e pop-up a Tiburtina: cosa fare senza peggiorare il problema",
    metaTitle: "Virus pop-up Tiburtina Roma Est",
    description:
      "Guida anti malware per zona Tiburtina e Roma Est: come limitare i danni e quando richiedere bonifica professionale.",
    zoneSlug: "roma-est",
    serviceSlug: "rimozione-virus-malware",
    problemLabel: "Virus e malware",
    readMinutes: 5,
    publishedAt: "2026-04-02",
    updatedAt: "2026-04-02",
    intro:
      "Se compaiono pop-up, rallentamenti estremi o pagine strane nel browser, e importante intervenire in modo corretto e veloce.",
    steps: [
      "Scollega temporaneamente il PC da internet se sospetti infezione attiva.",
      "Evita di installare tool casuali trovati online.",
      "Esegui una scansione con suite affidabile e aggiornata.",
      "Controlla estensioni browser e account con password compromesse.",
    ],
    whenToCall: [
      "Il malware torna dopo la pulizia iniziale.",
      "Hai dati di lavoro o credenziali sensibili sul dispositivo.",
      "Serve bonifica completa + messa in sicurezza account.",
    ],
    faq: [
      {
        question: "Un antivirus gratuito basta per togliere tutti i malware?",
        answer:
          "Non sempre. Alcune infezioni richiedono strumenti avanzati e controlli manuali su sistema, browser e rete.",
      },
      {
        question: "Perdo i file durante la bonifica?",
        answer:
          "L'obiettivo e sempre preservare i dati. Prima della bonifica completa valutiamo backup e strategia piu sicura.",
      },
    ],
  },
  {
    slug: "backup-file-monteverde-roma-ovest",
    title: "Backup file a Monteverde: strategia semplice per non perdere dati",
    metaTitle: "Backup file Monteverde Roma Ovest",
    description:
      "Come impostare un backup affidabile a Monteverde e Roma Ovest: regole pratiche, supporti consigliati e frequenza corretta.",
    zoneSlug: "roma-ovest",
    serviceSlug: "recupero-dati-backup",
    problemLabel: "Backup e dati",
    readMinutes: 4,
    publishedAt: "2026-04-02",
    updatedAt: "2026-04-02",
    intro:
      "Una strategia backup chiara evita perdita documenti, foto e file lavoro. Ecco come impostarla senza complicazioni.",
    steps: [
      "Definisci quali cartelle sono critiche da salvare.",
      "Usa almeno due destinazioni diverse (locale + cloud).",
      "Programma backup automatico con verifica periodica.",
      "Testa un ripristino reale ogni mese.",
    ],
    whenToCall: [
      "Non sai se il backup attuale e davvero recuperabile.",
      "Hai bisogno di migrare dati su nuovo PC.",
      "Vuoi proteggere dati di lavoro e archivi familiari.",
    ],
    faq: [
      {
        question: "Ogni quanto conviene fare backup?",
        answer:
          "Per uso domestico intenso o lavoro, ideale almeno giornaliero automatico sui dati principali.",
      },
      {
        question: "Cloud o disco esterno: cosa e meglio?",
        answer:
          "La soluzione migliore e combinata: cloud per continuita e disco locale per ripristino rapido.",
      },
    ],
  },
  {
    slug: "notebook-non-si-avvia-ostia-roma-litorale",
    title: "Notebook non si avvia a Ostia: controlli urgenti prima dell'assistenza",
    metaTitle: "Notebook non si avvia Ostia Roma Litorale",
    description:
      "Notebook che non parte in zona Ostia e Litorale: checklist urgente per capire se il problema e software, alimentazione o disco.",
    zoneSlug: "roma-litorale",
    serviceSlug: "riparazione-pc-notebook",
    problemLabel: "Notebook non si avvia",
    readMinutes: 5,
    publishedAt: "2026-04-02",
    updatedAt: "2026-04-02",
    intro:
      "Se il portatile non si avvia, non forzare tentativi casuali. Con pochi controlli puoi evitare danni aggiuntivi e perdere meno tempo.",
    steps: [
      "Controlla alimentatore, cavo e presa con test incrociato.",
      "Verifica eventuali segnali LED o beep all'accensione.",
      "Scollega periferiche esterne e riprova avvio pulito.",
      "Se compare errore disco, evita scritture inutili e procedi con diagnosi.",
    ],
    whenToCall: [
      "Nessun segnale di accensione anche con alimentazione corretta.",
      "Schermata nera o loop di riavvio continuo.",
      "Hai bisogno di recuperare file importanti dal notebook.",
    ],
    faq: [
      {
        question: "Notebook spento: e sempre un guasto hardware?",
        answer:
          "No, puo essere anche firmware, sistema operativo o disco. Serve una diagnosi tecnica per confermare la causa reale.",
      },
      {
        question: "Posso recuperare i dati anche se non si avvia?",
        answer:
          "In molti casi si, con procedure dedicate e strumenti corretti per accedere in sicurezza ai file.",
      },
    ],
  },
  {
    slug: "wifi-debole-labaro-roma-nord-est",
    title: "Wi-Fi debole a Labaro: come estendere il segnale senza errori",
    metaTitle: "Wi-Fi debole Labaro Roma Nord Est",
    description:
      "Segnale Wi-Fi debole a Labaro e Roma Nord Est: guida per scegliere posizione, canali e extender in modo corretto.",
    zoneSlug: "roma-nord-est",
    serviceSlug: "assistenza-wifi-rete",
    problemLabel: "Wi-Fi debole",
    readMinutes: 4,
    publishedAt: "2026-04-02",
    updatedAt: "2026-04-02",
    intro:
      "Quando il segnale cala in alcune stanze, non basta comprare un extender casuale: serve una progettazione minima della rete.",
    steps: [
      "Misura velocita e stabilita in ogni stanza critica.",
      "Valuta se usare access point cablato invece di repeater semplice.",
      "Configura SSID e roaming per passaggio fluido tra punti rete.",
      "Ottimizza canali per ridurre interferenze con reti vicine.",
    ],
    whenToCall: [
      "Hai piu piani o muri spessi con cadute frequenti.",
      "Lavori in videochiamata e hai microinterruzioni continue.",
      "Vuoi rete stabile per smart home e dispositivi multipli.",
    ],
    faq: [
      {
        question: "Un extender economico basta sempre?",
        answer:
          "Non sempre. In molte case la soluzione migliore e access point cablato o sistema mesh configurato correttamente.",
      },
      {
        question: "Intervenite anche su reti gia esistenti?",
        answer:
          "Si, ottimizziamo reti gia installate senza rifare tutto da zero quando non necessario.",
      },
    ],
  },
  {
    slug: "pc-rallenta-appio-roma-sud-est",
    title: "PC che rallenta ad Appio: guida rapida per capire la causa",
    metaTitle: "PC rallenta Appio Roma Sud Est",
    description:
      "PC che rallenta in zona Appio e Roma Sud Est: diagnosi rapida su disco, RAM, aggiornamenti e software in background.",
    zoneSlug: "roma-sud-est",
    serviceSlug: "pc-lento-ottimizzazione",
    problemLabel: "PC rallenta",
    readMinutes: 4,
    publishedAt: "2026-04-02",
    updatedAt: "2026-04-02",
    intro:
      "Un calo graduale di prestazioni puo avere cause diverse. Questa guida ti aiuta a distinguere problema software da limite hardware.",
    steps: [
      "Controlla utilizzo CPU, RAM e disco dal task manager.",
      "Verifica spazio libero SSD/HDD e salute supporto.",
      "Rimuovi programmi ridondanti installati nel tempo.",
      "Aggiorna sistema e driver critici.",
    ],
    whenToCall: [
      "Il PC resta lento anche dopo ottimizzazione base.",
      "Ci sono freeze frequenti durante uso normale.",
      "Serve valutare upgrade mirato RAM o SSD.",
    ],
    faq: [
      {
        question: "Meglio cambiare PC o fare upgrade?",
        answer:
          "Dipende dall'hardware attuale. Spesso un upgrade mirato offre ottimo risultato con spesa inferiore.",
      },
      {
        question: "Quanto tempo richiede un'ottimizzazione completa?",
        answer:
          "Varia in base allo stato del sistema, ma in molti casi si conclude nella stessa sessione.",
      },
    ],
  },
] as const;

export function getSeoGuideBySlug(slug: string): SeoGuideArticle | undefined {
  return seoGuides.find((guide) => guide.slug === slug);
}
