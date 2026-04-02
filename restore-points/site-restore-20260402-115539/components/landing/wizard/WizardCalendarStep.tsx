"use client";

import { ArrowLeft, ArrowRight, CalendarDays, Clock3 } from "lucide-react";
import { cn } from "@/lib/utils";

const weekdayLabels = ["Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Dom"];

const slotOptions = [
  { id: "mattina", label: "Mattina", range: "09:00 - 12:00" },
  { id: "pomeriggio", label: "Pomeriggio", range: "14:00 - 17:30" },
  { id: "sera", label: "Sera", range: "18:00 - 21:00" },
] as const;

type WizardCalendarStepProps = {
  monthCursor: Date;
  selectedDate: Date | null;
  selectedSlot: string;
  urgent: boolean;
  onSelectDate: (date: Date) => void;
  onSelectSlot: (slotId: string) => void;
  onUrgentChange: (value: boolean) => void;
  onPrevMonth: () => void;
  onNextMonth: () => void;
};

function isSameDay(a: Date | null, b: Date) {
  return (
    !!a &&
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export function WizardCalendarStep({
  monthCursor,
  selectedDate,
  selectedSlot,
  urgent,
  onSelectDate,
  onSelectSlot,
  onUrgentChange,
  onPrevMonth,
  onNextMonth,
}: WizardCalendarStepProps) {
  const monthStart = new Date(monthCursor.getFullYear(), monthCursor.getMonth(), 1);
  const monthEnd = new Date(monthCursor.getFullYear(), monthCursor.getMonth() + 1, 0);
  const monthLabel = new Intl.DateTimeFormat("it-IT", { month: "long", year: "numeric" }).format(monthCursor);

  const leadingBlanks = (monthStart.getDay() + 6) % 7;
  const daysInMonth = monthEnd.getDate();
  const cellsCount = Math.ceil((leadingBlanks + daysInMonth) / 7) * 7;
  const today = new Date();
  const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());

  return (
    <div className="triage-step-layout">
      <div className="triage-calendar-head">
        <button type="button" className="triage-month-nav" onClick={onPrevMonth} aria-label="Mese precedente">
          <ArrowLeft className="h-4 w-4" />
        </button>
        <p className="triage-month-label">{monthLabel}</p>
        <button type="button" className="triage-month-nav" onClick={onNextMonth} aria-label="Mese successivo">
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      <div className="triage-calendar-grid-wrapper">
        <div className="triage-calendar-weekdays">
          {weekdayLabels.map((label) => (
            <span key={label}>{label}</span>
          ))}
        </div>

        <div className="triage-calendar-grid">
          {Array.from({ length: cellsCount }).map((_, index) => {
            const day = index - leadingBlanks + 1;
            if (day < 1 || day > daysInMonth) {
              return <span key={`blank-${index}`} className="triage-calendar-cell-empty" />;
            }

            const cellDate = new Date(monthCursor.getFullYear(), monthCursor.getMonth(), day);
            const isPast = cellDate < todayStart;
            const isSelected = isSameDay(selectedDate, cellDate);

            return (
              <button
                key={cellDate.toISOString()}
                type="button"
                disabled={isPast}
                onClick={() => onSelectDate(cellDate)}
                className={cn(
                  "triage-calendar-cell",
                  isPast && "triage-calendar-cell-disabled",
                  isSelected && "triage-calendar-cell-selected",
                )}
              >
                {day}
              </button>
            );
          })}
        </div>
      </div>

      <div className="triage-slot-area">
        <p className="triage-slot-title">
          <Clock3 className="h-4 w-4" />
          Fascia oraria preferita
        </p>
        <div className="triage-slot-grid">
          {slotOptions.map((slot) => {
            const isActive = selectedSlot === slot.id;
            return (
              <button
                key={slot.id}
                type="button"
                onClick={() => onSelectSlot(slot.id)}
                className={cn("triage-slot-chip", isActive && "triage-slot-chip-active")}
              >
                <span className="triage-slot-chip-label">{slot.label}</span>
                <span className="triage-slot-chip-range">{slot.range}</span>
              </button>
            );
          })}
        </div>
      </div>

      <button
        type="button"
        onClick={() => onUrgentChange(!urgent)}
        className={cn("triage-urgent-chip", urgent && "triage-urgent-chip-active")}
      >
        <CalendarDays className="h-4 w-4" />
        Urgente / prima disponibilita
      </button>
    </div>
  );
}
