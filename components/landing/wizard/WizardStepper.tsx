"use client";

import { cn } from "@/lib/utils";

type WizardStepperProps = {
  currentStep: number;
  steps: readonly string[];
};

export function WizardStepper({ currentStep, steps }: WizardStepperProps) {
  return (
    <ol className="triage-stepper" aria-label="Progressione prenotazione">
      {steps.map((label, index) => {
        const stepNumber = index + 1;
        const isActive = stepNumber === currentStep;
        const isCompleted = stepNumber < currentStep;

        return (
          <li key={label} className="triage-stepper-item">
            <div
              className={cn(
                "triage-step-node",
                isActive && "triage-step-node-active",
                isCompleted && "triage-step-node-complete",
              )}
              aria-current={isActive ? "step" : undefined}
            >
              {stepNumber}
            </div>
            <span className={cn("triage-step-label", (isActive || isCompleted) && "triage-step-label-active")}>
              {label}
            </span>
            {index < steps.length - 1 && (
              <span
                className={cn(
                  "triage-step-line",
                  stepNumber < currentStep && "triage-step-line-complete",
                )}
                aria-hidden="true"
              />
            )}
          </li>
        );
      })}
    </ol>
  );
}
