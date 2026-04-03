"use client";

import { WizardSummaryCard } from "./WizardSummaryCard";

type CustomerValues = {
  name: string;
  phone: string;
  email: string;
  zone: string;
};

type WizardDetailsStepProps = {
  values: CustomerValues;
  onChange: (field: keyof CustomerValues, value: string) => void;
  onPhoneBlur: () => void;
  phoneError: string | null;
  summary: {
    selectedDateLabel: string;
    selectedSlotLabel: string;
    selectedServiceLabel: string;
    problemDescription: string;
  };
};

export function WizardDetailsStep({ values, onChange, onPhoneBlur, phoneError, summary }: WizardDetailsStepProps) {
  return (
    <div className="triage-step-layout">
      <div className="triage-details-grid">
        <div className="triage-field-wrap">
          <label htmlFor="triage-name" className="triage-field-label">
            Nome e cognome
          </label>
          <input
            id="triage-name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(event) => onChange("name", event.target.value)}
            className="triage-input"
            placeholder="Inserisci nome e cognome"
            required
          />
        </div>

        <div className="triage-field-wrap">
          <label htmlFor="triage-phone" className="triage-field-label">
            Telefono / WhatsApp
          </label>
          <input
            id="triage-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(event) => onChange("phone", event.target.value)}
            onBlur={onPhoneBlur}
            className="triage-input"
            placeholder="Es. +39 342 123 4567"
            aria-invalid={Boolean(phoneError)}
            required
          />
          {phoneError ? <p className="triage-phone-error">{phoneError}</p> : null}
        </div>

        <div className="triage-field-wrap">
          <label htmlFor="triage-email" className="triage-field-label">
            Email (opzionale)
          </label>
          <input
            id="triage-email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(event) => onChange("email", event.target.value)}
            className="triage-input"
            placeholder="nome@email.com"
          />
        </div>

        <div className="triage-field-wrap">
          <label htmlFor="triage-zone" className="triage-field-label">
            Zona / quartiere di Roma
          </label>
          <input
            id="triage-zone"
            name="zone"
            type="text"
            value={values.zone}
            onChange={(event) => onChange("zone", event.target.value)}
            className="triage-input"
            placeholder="Es. Prati, EUR, Tiburtina..."
            required
          />
        </div>
      </div>

      <p className="triage-details-helper">Ti contatteremo solo per organizzare l&apos;intervento.</p>
      <p className="triage-trust-note">
        I dati vengono usati solo per questa richiesta. Tempo medio di ricontatto: entro 10 minuti in orario operativo.
      </p>

      <WizardSummaryCard
        selectedDateLabel={summary.selectedDateLabel}
        selectedSlotLabel={summary.selectedSlotLabel}
        selectedServiceLabel={summary.selectedServiceLabel}
        problemDescription={summary.problemDescription}
      />
    </div>
  );
}
