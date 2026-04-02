import type { ReactNode } from "react";

import type { ServiceIconName } from "./data";

type IconProps = {
  className?: string;
};

function IconBase({ className = "", children }: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function ServiceIcon({
  name,
  className = "h-8 w-8",
}: {
  name: ServiceIconName;
  className?: string;
}) {
  switch (name) {
    case "wrench":
      return (
        <IconBase className={className}>
          <path d="M14.5 4.5a4 4 0 0 0-4.9 4.9L4 15l-1 4 4-1 5.6-5.6a4 4 0 0 0 4.9-4.9l-2.2 2.2-2.8-.6-.6-2.8 2.6-1.8Z" />
        </IconBase>
      );
    case "shield":
      return (
        <IconBase className={className}>
          <path d="M12 3 5 6v5.2c0 4.1 2.8 7.8 7 9.8 4.2-2 7-5.7 7-9.8V6L12 3Z" />
          <path d="m9.5 12 2 2 3.5-3.8" />
        </IconBase>
      );
    case "database":
      return (
        <IconBase className={className}>
          <ellipse cx="12" cy="6" rx="6.8" ry="2.8" />
          <path d="M5.2 6v4.8c0 1.6 3 2.8 6.8 2.8s6.8-1.2 6.8-2.8V6" />
          <path d="M5.2 10.8v4.8c0 1.6 3 2.8 6.8 2.8s6.8-1.2 6.8-2.8v-4.8" />
        </IconBase>
      );
    case "router":
      return (
        <IconBase className={className}>
          <rect x="3.5" y="13.5" width="17" height="5.5" rx="2" />
          <circle cx="8" cy="16.2" r="0.8" fill="currentColor" stroke="none" />
          <circle cx="12" cy="16.2" r="0.8" fill="currentColor" stroke="none" />
          <path d="M12 13.5v-2.5" />
          <path d="M6 10a9 9 0 0 1 12 0" />
          <path d="M8.8 8a5.4 5.4 0 0 1 6.4 0" />
        </IconBase>
      );
    default:
      return null;
  }
}

export function PhoneIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M6.5 3.5h3l1.3 3.2-1.8 1.8a14.2 14.2 0 0 0 6.5 6.5l1.8-1.8 3.2 1.3v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4.5 5.7a2 2 0 0 1 2-2.2Z" />
    </IconBase>
  );
}

export function WhatsAppIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M12 3.5a8.5 8.5 0 0 0-7.4 12.7L4 20l3.9-.6A8.5 8.5 0 1 0 12 3.5Z" />
      <path d="m9.6 8.7 1.1 2.2-.9 1a6.5 6.5 0 0 0 2.4 2.4l1-.9 2.2 1.1c-.3 1-1.2 1.7-2.2 1.7-2.8 0-5.9-3.1-5.9-5.9 0-1 .7-1.9 1.7-2.2Z" />
    </IconBase>
  );
}

export function StarIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path d="m10 1.7 2.5 5.2 5.7.8-4.1 4 1 5.7L10 14.8 4.9 17.4l1-5.7-4.1-4 5.7-.8L10 1.7Z" />
    </svg>
  );
}
