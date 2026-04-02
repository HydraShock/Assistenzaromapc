"use client";

type WizardSummaryCardProps = {
  selectedDateLabel: string;
  selectedSlotLabel: string;
  selectedServiceLabel: string;
  problemDescription: string;
};

export function WizardSummaryCard({
  selectedDateLabel,
  selectedSlotLabel,
  selectedServiceLabel,
  problemDescription,
}: WizardSummaryCardProps) {
  return (
    <aside className="triage-summary-card">
      <h4 className="triage-summary-title">Riepilogo richiesta</h4>
      <dl className="triage-summary-grid">
        <div>
          <dt>Data</dt>
          <dd>{selectedDateLabel || "Non selezionata"}</dd>
        </div>
        <div>
          <dt>Fascia oraria</dt>
          <dd>{selectedSlotLabel || "Non selezionata"}</dd>
        </div>
        <div>
          <dt>Problema</dt>
          <dd>{selectedServiceLabel || "Non selezionato"}</dd>
        </div>
        <div className="triage-summary-notes">
          <dt>Dettagli</dt>
          <dd>{problemDescription || "Nessuna nota aggiuntiva"}</dd>
        </div>
      </dl>
    </aside>
  );
}
