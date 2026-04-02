"use client";

import { useState, type ComponentType } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export type ServiceOption = {
  id: string;
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
};

type WizardProblemStepProps = {
  serviceOptions: readonly ServiceOption[];
  selectedServiceId: string | null;
  description: string;
  onSelectService: (id: string) => void;
  onDescriptionChange: (value: string) => void;
};

export function WizardProblemStep({
  serviceOptions,
  selectedServiceId,
  description,
  onSelectService,
  onDescriptionChange,
}: WizardProblemStepProps) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="triage-step-layout">
      <div className="triage-service-grid">
        {serviceOptions.map((service) => {
          const Icon = service.icon;
          const isSelected = selectedServiceId === service.id;
          const isWide = service.id === "non-so";

          return (
            <button
              type="button"
              key={service.id}
              onClick={() => onSelectService(service.id)}
              className={cn(
                "triage-service-card",
                isWide && "triage-service-card-wide",
                isSelected && "triage-service-card-selected",
              )}
              aria-pressed={isSelected}
            >
              <span className={cn("triage-service-icon", isSelected && "triage-service-icon-selected")}>
                <Icon className="h-6 w-6" />
              </span>
              <span className="triage-service-copy">
                <span className="triage-service-title">{service.title}</span>
                <span className="triage-service-desc">{service.description}</span>
              </span>
              <span className={cn("triage-service-check", isSelected && "triage-service-check-visible")}>
                <Check className="h-3.5 w-3.5" />
              </span>
            </button>
          );
        })}
      </div>

      <button
        type="button"
        className={cn("triage-problem-toggle", showDetails && "triage-problem-toggle-open")}
        onClick={() => setShowDetails((current) => !current)}
        aria-expanded={showDetails}
        aria-controls="triage-problem-details"
      >
        <span>Descrivi i dettagli (opzionale)</span>
        <span className={cn("triage-problem-toggle-icon", showDetails && "triage-problem-toggle-icon-open")}>
          <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <path d="m5 7.5 5 5 5-5" />
          </svg>
        </span>
      </button>

      {showDetails && (
        <div id="triage-problem-details" className="triage-textarea-wrap triage-textarea-wrap-optional">
          <textarea
            id="triage-problem-description"
            className="triage-problem-textarea"
            placeholder="Descrivici in poche parole cosa succede. Anche solo 1-2 righe vanno benissimo."
            value={description}
            onChange={(event) => onDescriptionChange(event.target.value)}
          />
          <p className="triage-field-helper">
            Campo opzionale: se preferisci, puoi lasciarlo vuoto e ti aiutiamo noi in chiamata.
          </p>
        </div>
      )}
    </div>
  );
}
