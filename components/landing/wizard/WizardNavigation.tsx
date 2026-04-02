"use client";

type WizardNavigationProps = {
  currentStep: number;
  totalSteps: number;
  onBack: () => void;
  onNext: () => void;
  isNextDisabled: boolean;
  isSubmitDisabled: boolean;
};

export function WizardNavigation({
  currentStep,
  totalSteps,
  onBack,
  onNext,
  isNextDisabled,
  isSubmitDisabled,
}: WizardNavigationProps) {
  const isLast = currentStep === totalSteps;

  return (
    <div className="triage-navigation">
      <button
        type="button"
        onClick={onBack}
        disabled={currentStep === 1}
        className="triage-nav-btn triage-nav-btn-secondary"
      >
        Indietro
      </button>

      {!isLast ? (
        <button type="button" onClick={onNext} disabled={isNextDisabled} className="triage-nav-btn triage-nav-btn-primary">
          Continua
        </button>
      ) : (
        <button type="submit" disabled={isSubmitDisabled} className="triage-nav-btn triage-nav-btn-primary">
          Prenota ricontatto
        </button>
      )}
    </div>
  );
}
