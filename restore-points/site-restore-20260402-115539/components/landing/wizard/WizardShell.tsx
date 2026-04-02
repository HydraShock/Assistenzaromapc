"use client";

import { type ReactNode } from "react";
import { SfondoForm } from "../SfondoForm";

type WizardShellProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
};

export function WizardShell({ title, subtitle, children }: WizardShellProps) {
  return (
    <section className="triage-wizard-card">
      <SfondoForm className="triage-wizard-sfondo" />
      <div className="triage-wizard-card-highlight" aria-hidden="true" />
      <div className="triage-wizard-head">
        <h3 className="triage-step-title">{title}</h3>
        {subtitle ? <p className="triage-step-subtitle">{subtitle}</p> : null}
      </div>
      <div className="triage-wizard-content">{children}</div>
    </section>
  );
}
