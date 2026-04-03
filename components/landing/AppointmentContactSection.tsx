"use client";

import Image from "next/image";
import { useMemo, useState, type FormEvent } from "react";
import {
  CircleHelp,
  Database,
  HardDriveDownload,
  MonitorCog,
  MonitorOff,
  Printer,
  ShieldAlert,
  Wifi,
  Wrench,
} from "lucide-react";

import { WizardCalendarStep } from "./wizard/WizardCalendarStep";
import { WizardDetailsStep } from "./wizard/WizardDetailsStep";
import { WizardNavigation } from "./wizard/WizardNavigation";
import { type ServiceOption, WizardProblemStep } from "./wizard/WizardProblemStep";
import { WizardShell } from "./wizard/WizardShell";
import { WizardStepper } from "./wizard/WizardStepper";
import { siteConfig } from "@/lib/seo";

const steps = ["Quando", "Aiuto", "Contatti"] as const;

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

const slotLabels: Record<string, string> = {
  mattina: "Mattina (09:00 - 12:00)",
  pomeriggio: "Pomeriggio (14:00 - 17:30)",
  sera: "Sera (18:00 - 21:00)",
};

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
  const [currentStep, setCurrentStep] = useState(1);
  const [monthCursor, setMonthCursor] = useState(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  });
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string>("");
  const [urgent, setUrgent] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [problemDescription, setProblemDescription] = useState("");
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    phone: "",
    email: "",
    zone: "",
  });
  const [submitFeedback, setSubmitFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const selectedService = useMemo(
    () => serviceOptions.find((service) => service.id === selectedServiceId) ?? null,
    [selectedServiceId],
  );

  const selectedDateLabel = formatDateLabel(selectedDate);
  const selectedSlotLabel = selectedSlot ? slotLabels[selectedSlot] : "";
  const availabilityLabel = urgent
    ? "Urgente / prima disponibilita"
    : [selectedDateLabel, selectedSlotLabel].filter(Boolean).join(" - ");
  const summaryDateLabel = urgent ? "Urgente / prima disponibilita" : selectedDateLabel;
  const summarySlotLabel = urgent ? "Da concordare al ricontatto" : selectedSlotLabel;

  const canProceedStep1 = urgent || (Boolean(selectedDate) && Boolean(selectedSlot));
  const canProceedStep2 = Boolean(selectedServiceId);
  const canSubmit =
    customerDetails.name.trim().length > 1 &&
    customerDetails.phone.trim().length > 5 &&
    customerDetails.zone.trim().length > 1 &&
    canProceedStep1 &&
    canProceedStep2;

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

  const handleNext = () => {
    if (currentStep === 1 && !canProceedStep1) return;
    if (currentStep === 2 && !canProceedStep2) return;
    setCurrentStep((step) => Math.min(step + 1, steps.length));
  };

  const handleBack = () => {
    setCurrentStep((step) => Math.max(step - 1, 1));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!canSubmit) {
      setSubmitFeedback({
        type: "error",
        message: "Completa tutti i campi obbligatori prima di inviare la richiesta.",
      });
      return;
    }

    const messageLines = [
      "Nuova richiesta assistenza da sito",
      `Nome: ${customerDetails.name.trim()}`,
      `Telefono: ${customerDetails.phone.trim()}`,
      `Email: ${customerDetails.email.trim() || "-"}`,
      `Zona: ${customerDetails.zone.trim()}`,
      `Disponibilita: ${availabilityLabel || "-"}`,
      `Servizio: ${selectedService?.title ?? "-"}`,
      `Problema: ${problemDescription.trim() || "-"}`,
    ];
    const whatsappTarget = siteConfig.phoneInternational.replace("+", "");
    const whatsappUrl = `https://wa.me/${whatsappTarget}?text=${encodeURIComponent(messageLines.join("\n"))}`;

    try {
      const popup = window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      if (!popup) {
        window.location.href = whatsappUrl;
      }
      setSubmitFeedback({
        type: "success",
        message: "Richiesta pronta: si apre WhatsApp con il messaggio precompilato.",
      });
    } catch {
      setSubmitFeedback({
        type: "error",
        message: "Non sono riuscito ad aprire WhatsApp. Contattaci al 342 187 2127.",
      });
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
                onChange={(field, value) => setCustomerDetails((current) => ({ ...current, [field]: value }))}
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
          <input type="hidden" name="problem_description" value={problemDescription} />
          <input type="hidden" name="intervention_date" value={selectedDate ? selectedDate.toISOString().slice(0, 10) : ""} />
          <input type="hidden" name="time_slot" value={selectedSlotLabel} />
        </form>
      </div>
    </section>
  );
}
