"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import {
  CalendarDays,
  Check,
  CircleHelp,
  Clock3,
  Copy,
  Database,
  FileText,
  HardDriveDownload,
  Mail,
  MapPin,
  MessageCircle,
  MonitorCog,
  MonitorOff,
  Phone,
  Printer,
  ShieldAlert,
  User,
  Wifi,
  Wrench,
} from "lucide-react";

import { WizardCalendarStep } from "./wizard/WizardCalendarStep";
import { WizardDetailsStep } from "./wizard/WizardDetailsStep";
import { WizardNavigation } from "./wizard/WizardNavigation";
import { type ServiceOption, WizardProblemStep } from "./wizard/WizardProblemStep";
import { WizardShell } from "./wizard/WizardShell";
import { WizardStepper } from "./wizard/WizardStepper";
import { SfondoForm } from "./SfondoForm";
import { siteConfig } from "@/lib/seo";

const steps = ["Quando", "Aiuto", "Contatti"] as const;
const TRIAGE_DRAFT_STORAGE_KEY = "assistenzaromapc:triage-draft:v1";

type SubmitFeedback = {
  type: "success" | "error";
  message: string;
};

type SubmittedRequest = {
  referenceCode: string;
  submittedAtLabel: string;
  name: string;
  phone: string;
  email: string;
  zone: string;
  dateLabel: string;
  slotLabel: string;
  serviceLabel: string;
  problemDescription: string;
};

type TriageDraft = {
  currentStep: number;
  monthCursorIso: string;
  selectedDateIso: string | null;
  selectedSlot: string;
  urgent: boolean;
  selectedServiceId: string | null;
  problemDescription: string;
  customerDetails: {
    name: string;
    phone: string;
    email: string;
    zone: string;
  };
};

const serviceOptions: readonly ServiceOption[] = [
  {
    id: "riparazione-pc-mac",
    title: "Riparazione PC / Mac",
    description: "Diagnosi e interventi su hardware o software.",
    icon: Wrench,
  },
  {
    id: "pc-lento",
    title: "PC lento / ottimizzazione",
    description: "Pulizia sistema, startup e prestazioni generali.",
    icon: MonitorCog,
  },
  {
    id: "rimozione-virus",
    title: "Rimozione virus / malware",
    description: "Bonifica completa e messa in sicurezza.",
    icon: ShieldAlert,
  },
  {
    id: "internet-rete",
    title: "Internet / Wi-Fi / rete",
    description: "Problemi connessione, modem e rete domestica.",
    icon: Wifi,
  },
  {
    id: "stampanti",
    title: "Stampanti e periferiche",
    description: "Installazione, configurazione e risoluzione errori.",
    icon: Printer,
  },
  {
    id: "recupero-dati",
    title: "Recupero dati",
    description: "Recupero file da dischi e supporti danneggiati.",
    icon: HardDriveDownload,
  },
  {
    id: "upgrade-pc",
    title: "Assemblaggio / upgrade PC",
    description: "Upgrade componenti e ottimizzazione post-installazione.",
    icon: Database,
  },
  {
    id: "schermo-nero",
    title: "Schermo nero / mancato avvio",
    description: "Diagnosi avvio critico e ripristino operativo.",
    icon: MonitorOff,
  },
  {
    id: "non-so",
    title: "Non so quale scegliere",
    description: "Descrivicelo: ti aiutiamo noi a capire il problema.",
    icon: CircleHelp,
  },
];

const trustBadges = [
  "Intervento a domicilio",
  "Risposta rapida su WhatsApp",
  "Nessun impegno iniziale",
] as const;

const initialCustomerDetails = {
  name: "",
  phone: "",
  email: "",
  zone: "",
};

function getInitialMonthCursor() {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), 1);
}

function buildReferenceCode(date: Date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  const random = Math.floor(1000 + Math.random() * 9000);
  return `ARP-${y}${m}${d}-${random}`;
}

function normalizeItalianPhone(rawPhone: string): string | null {
  const trimmed = rawPhone.trim();
  if (!trimmed) {
    return null;
  }

  let digits = trimmed.replace(/\D+/g, "");
  if (!digits) {
    return null;
  }

  if (digits.startsWith("00")) {
    digits = digits.slice(2);
  }

  if (digits.startsWith("39")) {
    digits = digits.slice(2);
  }

  if (!(digits.startsWith("0") || digits.startsWith("3"))) {
    return null;
  }

  if (digits.length < 9 || digits.length > 11) {
    return null;
  }

  return `+39${digits}`;
}

function trackTriageEvent(name: string, params: Record<string, string | number | boolean>) {
  if (typeof window === "undefined") {
    return;
  }

  const trackedWindow = window as Window & {
    dataLayer?: Array<Record<string, string | number | boolean>>;
    gtag?: (...args: unknown[]) => void;
  };

  trackedWindow.dataLayer = trackedWindow.dataLayer ?? [];
  trackedWindow.dataLayer.push({ event: name, ...params });

  if (typeof trackedWindow.gtag === "function") {
    trackedWindow.gtag("event", name, params);
  }
}

const slotLabels: Record<string, string> = {
  mattina: "Mattina (09:00 - 12:00)",
  pomeriggio: "Pomeriggio (14:00 - 17:30)",
  sera: "Sera (18:00 - 21:00)",
};

function readDraftFromSession(): TriageDraft | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const rawDraft = window.sessionStorage.getItem(TRIAGE_DRAFT_STORAGE_KEY);
    if (!rawDraft) {
      return null;
    }

    const draft = JSON.parse(rawDraft) as Partial<TriageDraft>;
    if (!draft || typeof draft !== "object") {
      return null;
    }

    const currentStep =
      typeof draft.currentStep === "number" && Number.isFinite(draft.currentStep)
        ? Math.max(1, Math.min(steps.length, Math.trunc(draft.currentStep)))
        : 1;

    const monthCursorDate =
      typeof draft.monthCursorIso === "string" ? new Date(draft.monthCursorIso) : getInitialMonthCursor();
    const safeMonthCursor = Number.isNaN(monthCursorDate.getTime())
      ? getInitialMonthCursor().toISOString()
      : new Date(monthCursorDate.getFullYear(), monthCursorDate.getMonth(), 1).toISOString();

    const selectedDateIso =
      typeof draft.selectedDateIso === "string" && !Number.isNaN(new Date(draft.selectedDateIso).getTime())
        ? draft.selectedDateIso
        : null;

    const selectedSlot = typeof draft.selectedSlot === "string" && draft.selectedSlot in slotLabels ? draft.selectedSlot : "";

    const selectedServiceId =
      typeof draft.selectedServiceId === "string" && serviceOptions.some((service) => service.id === draft.selectedServiceId)
        ? draft.selectedServiceId
        : null;

    const customerDetails =
      draft.customerDetails && typeof draft.customerDetails === "object"
        ? {
            name: typeof draft.customerDetails.name === "string" ? draft.customerDetails.name : "",
            phone: typeof draft.customerDetails.phone === "string" ? draft.customerDetails.phone : "",
            email: typeof draft.customerDetails.email === "string" ? draft.customerDetails.email : "",
            zone: typeof draft.customerDetails.zone === "string" ? draft.customerDetails.zone : "",
          }
        : { ...initialCustomerDetails };

    return {
      currentStep,
      monthCursorIso: safeMonthCursor,
      selectedDateIso,
      selectedSlot,
      urgent: Boolean(draft.urgent),
      selectedServiceId,
      problemDescription: typeof draft.problemDescription === "string" ? draft.problemDescription : "",
      customerDetails,
    };
  } catch {
    return null;
  }
}

function formatDateLabel(date: Date | null) {
  if (!date) return "";
  return new Intl.DateTimeFormat("it-IT", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(date);
}

export function AppointmentContactSection() {
  const initialDraft = useMemo(() => readDraftFromSession(), []);
  const [currentStep, setCurrentStep] = useState(() => initialDraft?.currentStep ?? 1);
  const [monthCursor, setMonthCursor] = useState(() =>
    initialDraft?.monthCursorIso ? new Date(initialDraft.monthCursorIso) : getInitialMonthCursor(),
  );
  const [selectedDate, setSelectedDate] = useState<Date | null>(() =>
    initialDraft?.selectedDateIso ? new Date(initialDraft.selectedDateIso) : null,
  );
  const [selectedSlot, setSelectedSlot] = useState<string>(() => initialDraft?.selectedSlot ?? "");
  const [urgent, setUrgent] = useState(() => initialDraft?.urgent ?? false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(() => initialDraft?.selectedServiceId ?? null);
  const [problemDescription, setProblemDescription] = useState(() => initialDraft?.problemDescription ?? "");
  const [customerDetails, setCustomerDetails] = useState(() => initialDraft?.customerDetails ?? initialCustomerDetails);
  const [phoneTouched, setPhoneTouched] = useState(false);
  const [submitFeedback, setSubmitFeedback] = useState<SubmitFeedback | null>(null);
  const [submittedRequest, setSubmittedRequest] = useState<SubmittedRequest | null>(null);
  const [clientCopyFeedback, setClientCopyFeedback] = useState<string | null>(null);
  const funnelTrackedRef = useRef({ step1: false, step2: false });
  const restoredDraftRef = useRef(Boolean(initialDraft));

  const selectedService = useMemo(
    () => serviceOptions.find((service) => service.id === selectedServiceId) ?? null,
    [selectedServiceId],
  );

  const selectedDateLabel = formatDateLabel(selectedDate);
  const selectedSlotLabel = selectedSlot ? slotLabels[selectedSlot] : "";
  const normalizedPhone = normalizeItalianPhone(customerDetails.phone);
  const phoneValidationError =
    phoneTouched && !normalizedPhone
      ? "Inserisci un numero italiano valido (es. +39 342 123 4567)."
      : null;
  const availabilityLabel = urgent
    ? "Urgente / prima disponibilita"
    : [selectedDateLabel, selectedSlotLabel].filter(Boolean).join(" - ");
  const summaryDateLabel = urgent ? "Urgente / prima disponibilita" : selectedDateLabel;
  const summarySlotLabel = urgent ? "Da concordare al ricontatto" : selectedSlotLabel;

  const canProceedStep1 = urgent || (Boolean(selectedDate) && Boolean(selectedSlot));
  const canProceedStep2 = Boolean(selectedServiceId);
  const canSubmit =
    customerDetails.name.trim().length > 1 &&
    Boolean(normalizedPhone) &&
    customerDetails.zone.trim().length > 1 &&
    canProceedStep1 &&
    canProceedStep2;
  const whatsappTarget = siteConfig.phoneInternational.replace("+", "");
  const whatsappDirectUrl = `https://wa.me/${whatsappTarget}`;
  const phoneDirectUrl = `tel:${siteConfig.phoneInternational}`;
  const mailDirectUrl = `mailto:${siteConfig.email}`;

  const clientConfirmationMessage = useMemo(() => {
    if (!submittedRequest) {
      return "";
    }

    return [
      `Ciao ${submittedRequest.name},`,
      "",
      "grazie, la tua prenotazione e stata ricevuta con successo.",
      "Sarai ricontattato a brevissimo: la richiesta sara finalizzata da un nostro consulente.",
      "",
      `Riferimento: ${submittedRequest.referenceCode}`,
      `Data: ${submittedRequest.dateLabel}`,
      `Fascia oraria: ${submittedRequest.slotLabel}`,
      `Servizio: ${submittedRequest.serviceLabel}`,
      "",
      "Assistenza Roma PC",
      `Telefono: +39 342 187 2127`,
    ].join("\n");
  }, [submittedRequest]);

  const clientWhatsappUrl = useMemo(() => {
    if (!submittedRequest?.phone) {
      return null;
    }

    const customerDigits = submittedRequest.phone.replace(/\D+/g, "");
    if (!customerDigits) {
      return null;
    }

    return `https://wa.me/${customerDigits}?text=${encodeURIComponent(clientConfirmationMessage)}`;
  }, [clientConfirmationMessage, submittedRequest]);

  const clientEmailUrl = useMemo(() => {
    if (!submittedRequest || submittedRequest.email === "-") {
      return null;
    }

    const subject = encodeURIComponent(`Prenotazione ricevuta - ${submittedRequest.referenceCode}`);
    const body = encodeURIComponent(clientConfirmationMessage);
    return `mailto:${submittedRequest.email}?subject=${subject}&body=${body}`;
  }, [clientConfirmationMessage, submittedRequest]);

  const stepTitles = [
    "Quando preferisci che ti aiutiamo?",
    "In cosa possiamo aiutarti?",
    "Come possiamo ricontattarti?",
  ] as const;

  const stepSubtitles = [
    "Scegli il giorno e la fascia oraria che ti e piu comoda. Ti ricontattiamo rapidamente per confermare.",
    "",
    "Lasciaci i riferimenti e ti confermeremo l'intervento nel piu breve tempo possibile.",
  ] as const;

  useEffect(() => {
    if (initialDraft) {
      trackTriageEvent("lead_form_draft_restored", { form_id: "prenota-assistenza" });
    }
  }, [initialDraft]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (submittedRequest) {
      window.sessionStorage.removeItem(TRIAGE_DRAFT_STORAGE_KEY);
      return;
    }

    const draft: TriageDraft = {
      currentStep,
      monthCursorIso: monthCursor.toISOString(),
      selectedDateIso: selectedDate ? selectedDate.toISOString() : null,
      selectedSlot,
      urgent,
      selectedServiceId,
      problemDescription,
      customerDetails,
    };

    window.sessionStorage.setItem(TRIAGE_DRAFT_STORAGE_KEY, JSON.stringify(draft));
  }, [
    currentStep,
    monthCursor,
    selectedDate,
    selectedSlot,
    urgent,
    selectedServiceId,
    problemDescription,
    customerDetails,
    submittedRequest,
  ]);

  const handleNext = () => {
    if (currentStep === 1 && !canProceedStep1) return;
    if (currentStep === 2 && !canProceedStep2) return;

    if (currentStep === 1 && !funnelTrackedRef.current.step1) {
      trackTriageEvent("step_1_complete", {
        form_id: "prenota-assistenza",
        selection_mode: urgent ? "urgent" : "calendar",
        has_date: Boolean(selectedDate),
        has_slot: Boolean(selectedSlot),
      });
      funnelTrackedRef.current.step1 = true;
    }

    if (currentStep === 2 && !funnelTrackedRef.current.step2) {
      trackTriageEvent("step_2_complete", {
        form_id: "prenota-assistenza",
        service_id: selectedServiceId ?? "not-selected",
        has_problem_description: Boolean(problemDescription.trim()),
      });
      funnelTrackedRef.current.step2 = true;
    }

    setCurrentStep((step) => Math.min(step + 1, steps.length));
  };

  const handleBack = () => {
    setCurrentStep((step) => Math.max(step - 1, 1));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!normalizedPhone) {
      setPhoneTouched(true);
      setSubmitFeedback({
        type: "error",
        message: "Inserisci un numero di telefono italiano valido prima di inviare la richiesta.",
      });
      return;
    }

    if (!canSubmit) {
      setSubmitFeedback({
        type: "error",
        message: "Completa tutti i campi obbligatori prima di inviare la richiesta.",
      });
      return;
    }

    const now = new Date();
    const submittedAtLabel = new Intl.DateTimeFormat("it-IT", {
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(now);

    setSubmittedRequest({
      referenceCode: buildReferenceCode(now),
      submittedAtLabel,
      name: customerDetails.name.trim(),
      phone: normalizedPhone,
      email: customerDetails.email.trim() || "-",
      zone: customerDetails.zone.trim(),
      dateLabel: summaryDateLabel || "Da concordare",
      slotLabel: summarySlotLabel || "Da concordare",
      serviceLabel: selectedService?.title ?? "Da definire",
      problemDescription: problemDescription.trim() || "Nessun dettaglio aggiuntivo",
    });

    trackTriageEvent("lead_submitted", {
      form_id: "prenota-assistenza",
      service_id: selectedServiceId ?? "not-selected",
      urgent,
      has_email: Boolean(customerDetails.email.trim()),
      has_problem_description: Boolean(problemDescription.trim()),
      restored_draft: restoredDraftRef.current,
    });

    setSubmitFeedback(null);
  };

  const handleCreateNewRequest = () => {
    setCurrentStep(1);
    setMonthCursor(getInitialMonthCursor());
    setSelectedDate(null);
    setSelectedSlot("");
    setUrgent(false);
    setSelectedServiceId(null);
    setProblemDescription("");
    setCustomerDetails({ ...initialCustomerDetails });
    setPhoneTouched(false);
    setSubmittedRequest(null);
    setClientCopyFeedback(null);
    setSubmitFeedback(null);
    funnelTrackedRef.current = { step1: false, step2: false };
    restoredDraftRef.current = false;
    if (typeof window !== "undefined") {
      window.sessionStorage.removeItem(TRIAGE_DRAFT_STORAGE_KEY);
    }
  };

  const handleCopyClientMessage = async () => {
    if (!clientConfirmationMessage) {
      return;
    }

    try {
      await navigator.clipboard.writeText(clientConfirmationMessage);
      setClientCopyFeedback("Testo copiato: puoi incollarlo dove vuoi.");
      trackTriageEvent("lead_client_message_copied", { form_id: "prenota-assistenza" });
    } catch {
      setClientCopyFeedback("Copia non riuscita: seleziona manualmente il testo.");
    }
  };

  return (
    <section id="prenota-assistenza" className="triage-section relative isolate overflow-hidden py-16 md:py-20">
      <Image
        src="/backgrounds/puzza.png"
        alt=""
        fill
        quality={95}
        sizes="100vw"
        loading="lazy"
        className="pointer-events-none absolute inset-0 z-0 object-cover object-center"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0.34))]" />
      <div className="triage-container relative z-10 mx-auto w-full max-w-[1180px] px-6 md:px-10 lg:px-12">
        <header className="triage-top-intro">
          <p className="triage-top-badge">Assistenza Rapida - Roma</p>
          <h2 className="triage-main-title">
            Prenota Assistenza
            <span>a Domicilio</span>
          </h2>
          <p className="triage-main-subtitle">
            E facile e veloce: scegli quando preferisci e raccontaci in poche parole cosa succede. Al resto pensiamo noi.
          </p>
          <div className="triage-trust-row" aria-label="Vantaggi prenotazione">
            {trustBadges.map((badge) => (
              <span key={badge} className="triage-trust-chip">
                {badge}
              </span>
            ))}
          </div>
          <WizardStepper currentStep={currentStep} steps={steps} />
        </header>

        {submittedRequest ? (
          <div className="triage-form-root" role="status" aria-live="polite">
            <section className="triage-wizard-card triage-success-card">
              <SfondoForm className="triage-wizard-sfondo" />
              <div className="triage-wizard-card-highlight" aria-hidden="true" />

              <div className="triage-success-badge-wrap" aria-hidden="true">
                <span className="triage-success-badge">
                  <Check className="h-7 w-7" />
                </span>
              </div>

              <div className="triage-wizard-head triage-success-head">
                <p className="triage-success-pill">Richiesta registrata correttamente</p>
                <h3 className="triage-step-title triage-success-title">
                  Prenotazione <span>completata</span>
                </h3>
                <p className="triage-step-subtitle triage-success-subtitle">
                  Perfetto: sarai ricontattato fra pochissimo da uno dei nostri tecnici specializzati per confermare
                  gli ultimi dettagli.
                </p>
              </div>

              <div className="triage-wizard-content triage-success-content">
                <div className="triage-success-contact-box">
                  <p className="triage-success-contact-title">Contatto rapido (facoltativo)</p>
                  <p className="triage-success-contact-subtitle">
                    Se preferisci, puoi scriverci o chiamarci subito da uno di questi canali.
                  </p>
                  <div className="triage-success-contact-grid">
                    <a href={whatsappDirectUrl} target="_blank" rel="noopener noreferrer" className="triage-success-contact-link">
                      <MessageCircle className="h-4 w-4" />
                      WhatsApp
                    </a>
                    <a href={mailDirectUrl} className="triage-success-contact-link">
                      <Mail className="h-4 w-4" />
                      {siteConfig.email}
                    </a>
                    <a href={phoneDirectUrl} className="triage-success-contact-link">
                      <Phone className="h-4 w-4" />
                      +39 342 187 2127
                    </a>
                  </div>
                </div>

                <div className="triage-success-contact-box">
                  <p className="triage-success-contact-title">Invio conferma al cliente (gratis)</p>
                  <p className="triage-success-contact-subtitle">
                    Parte dal tuo WhatsApp o dalla tua email con testo gia pronto.
                  </p>
                  <div className="triage-success-contact-grid">
                    {clientWhatsappUrl ? (
                      <a
                        href={clientWhatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="triage-success-contact-link"
                        onClick={() => trackTriageEvent("lead_client_whatsapp_open", { form_id: "prenota-assistenza" })}
                      >
                        <MessageCircle className="h-4 w-4" />
                        Invia WhatsApp cliente
                      </a>
                    ) : (
                      <span className="triage-success-contact-link opacity-55">WhatsApp non disponibile</span>
                    )}

                    {clientEmailUrl ? (
                      <a
                        href={clientEmailUrl}
                        className="triage-success-contact-link"
                        onClick={() => trackTriageEvent("lead_client_email_open", { form_id: "prenota-assistenza" })}
                      >
                        <Mail className="h-4 w-4" />
                        Invia Email cliente
                      </a>
                    ) : (
                      <span className="triage-success-contact-link opacity-55">Email cliente mancante</span>
                    )}

                    <button type="button" className="triage-success-contact-link" onClick={handleCopyClientMessage}>
                      <Copy className="h-4 w-4" />
                      Copia testo conferma
                    </button>
                  </div>
                  {clientCopyFeedback ? <p className="triage-field-helper mt-2">{clientCopyFeedback}</p> : null}
                </div>

                <dl className="triage-success-summary-grid">
                  <div className="triage-success-summary-item">
                    <dt>
                      <CalendarDays className="h-4 w-4" />
                      Data
                    </dt>
                    <dd>{submittedRequest.dateLabel}</dd>
                  </div>
                  <div className="triage-success-summary-item">
                    <dt>
                      <Clock3 className="h-4 w-4" />
                      Fascia oraria
                    </dt>
                    <dd>{submittedRequest.slotLabel}</dd>
                  </div>
                  <div className="triage-success-summary-item">
                    <dt>
                      <Wrench className="h-4 w-4" />
                      Servizio richiesto
                    </dt>
                    <dd>{submittedRequest.serviceLabel}</dd>
                  </div>
                  <div className="triage-success-summary-item">
                    <dt>
                      <User className="h-4 w-4" />
                      Cliente
                    </dt>
                    <dd>
                      {submittedRequest.name}
                      <span>{submittedRequest.phone}</span>
                      <span>{submittedRequest.email}</span>
                    </dd>
                  </div>
                  <div className="triage-success-summary-item">
                    <dt>
                      <MapPin className="h-4 w-4" />
                      Zona
                    </dt>
                    <dd>{submittedRequest.zone}</dd>
                  </div>
                  <div className="triage-success-summary-item">
                    <dt>
                      <FileText className="h-4 w-4" />
                      Riferimento richiesta
                    </dt>
                    <dd>
                      {submittedRequest.referenceCode}
                      <span>Inviata il {submittedRequest.submittedAtLabel}</span>
                    </dd>
                  </div>
                  <div className="triage-success-summary-item triage-success-summary-item-wide">
                    <dt>
                      <FileText className="h-4 w-4" />
                      Dettagli problema
                    </dt>
                    <dd>{submittedRequest.problemDescription}</dd>
                  </div>
                </dl>
              </div>
            </section>

            <div className="triage-success-actions">
              <button type="button" className="triage-nav-btn triage-nav-btn-secondary" onClick={handleCreateNewRequest}>
                Nuova richiesta
              </button>
            </div>
          </div>
        ) : (
          <form className="triage-form-root" onSubmit={handleSubmit}>
            <WizardShell title={stepTitles[currentStep - 1]} subtitle={stepSubtitles[currentStep - 1]}>
              {currentStep === 1 && (
                <WizardCalendarStep
                  monthCursor={monthCursor}
                  selectedDate={selectedDate}
                  selectedSlot={selectedSlot}
                  urgent={urgent}
                  onSelectDate={(date) => {
                    setUrgent(false);
                    setSelectedDate(date);
                  }}
                  onSelectSlot={(slot) => {
                    setUrgent(false);
                    setSelectedSlot(slot);
                  }}
                  onUrgentChange={(value) => {
                    setUrgent(value);
                    if (value) {
                      setSelectedDate(null);
                      setSelectedSlot("");
                    }
                  }}
                  onPrevMonth={() =>
                    setMonthCursor((current) => new Date(current.getFullYear(), current.getMonth() - 1, 1))
                  }
                  onNextMonth={() =>
                    setMonthCursor((current) => new Date(current.getFullYear(), current.getMonth() + 1, 1))
                  }
                />
              )}

              {currentStep === 2 && (
                <WizardProblemStep
                  serviceOptions={serviceOptions}
                  selectedServiceId={selectedServiceId}
                  description={problemDescription}
                  onSelectService={setSelectedServiceId}
                  onDescriptionChange={setProblemDescription}
                />
              )}

              {currentStep === 3 && (
                <WizardDetailsStep
                  values={customerDetails}
                  onChange={(field, value) => {
                    setCustomerDetails((current) => ({ ...current, [field]: value }));
                    if (field === "phone" && !phoneTouched) {
                      return;
                    }
                    if (field === "phone") {
                      setSubmitFeedback(null);
                    }
                  }}
                  onPhoneBlur={() => setPhoneTouched(true)}
                  phoneError={phoneValidationError}
                  summary={{
                    selectedDateLabel: summaryDateLabel,
                    selectedSlotLabel: summarySlotLabel,
                    selectedServiceLabel: selectedService?.title ?? "",
                    problemDescription,
                  }}
                />
              )}
            </WizardShell>

            <WizardNavigation
              currentStep={currentStep}
              totalSteps={steps.length}
              onBack={handleBack}
              onNext={handleNext}
              isNextDisabled={currentStep === 1 ? !canProceedStep1 : !canProceedStep2}
              isSubmitDisabled={!canSubmit}
            />

            {submitFeedback ? (
              <p
                role="status"
                className={`mt-3 text-sm font-medium ${
                  submitFeedback.type === "success" ? "text-[#1f6d2d]" : "text-[#8f1d37]"
                }`}
              >
                {submitFeedback.message}
              </p>
            ) : null}

            <input type="hidden" name="availability" value={availabilityLabel} />
            <input type="hidden" name="selected_services" value={selectedServiceId ?? ""} />
            <input type="hidden" name="selected_service_label" value={selectedService?.title ?? ""} />
            <input type="hidden" name="phone_normalized" value={normalizedPhone ?? ""} />
            <input type="hidden" name="problem_description" value={problemDescription} />
            <input type="hidden" name="intervention_date" value={selectedDate ? selectedDate.toISOString().slice(0, 10) : ""} />
            <input type="hidden" name="time_slot" value={selectedSlotLabel} />
          </form>
        )}
      </div>
    </section>
  );
}
