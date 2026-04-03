"use client";

import { useEffect } from "react";
import Script from "next/script";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, string | number | boolean>>;
    gtag?: (...args: unknown[]) => void;
  }
}

const GA4_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID?.trim();
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID?.trim();

function trackEvent(name: string, params: Record<string, string | number | boolean>) {
  if (typeof window === "undefined") {
    return;
  }

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event: name, ...params });

  if (typeof window.gtag === "function") {
    window.gtag("event", name, params);
  }
}

export function AnalyticsScripts() {
  useEffect(() => {
    if (!GA4_MEASUREMENT_ID && !GTM_ID) {
      return;
    }

    const onClick = (event: Event) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest("a");
      if (!anchor) {
        return;
      }

      const href = anchor.getAttribute("href")?.trim() ?? "";
      if (!href) {
        return;
      }

      if (href.startsWith("tel:")) {
        trackEvent("contact_phone_click", { channel: "phone", href });
        return;
      }

      if (href.includes("wa.me") || href.includes("whatsapp")) {
        trackEvent("contact_whatsapp_click", { channel: "whatsapp", href });
      }
    };

    const onSubmit = (event: Event) => {
      const target = event.target as HTMLElement | null;
      const form = target?.closest("form");
      if (!form) {
        return;
      }

      const insideLeadSection = Boolean(form.closest("#prenota-assistenza"));
      if (!insideLeadSection) {
        return;
      }

      const formId = form.getAttribute("id") ?? "prenota-assistenza";
      trackEvent("lead_form_submit_attempt", { form_id: formId });
    };

    document.addEventListener("click", onClick, true);
    document.addEventListener("submit", onSubmit, true);

    return () => {
      document.removeEventListener("click", onClick, true);
      document.removeEventListener("submit", onSubmit, true);
    };
  }, []);

  return (
    <>
      {GTM_ID ? (
        <Script
          id="gtm-base"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
      ) : null}

      {!GTM_ID && GA4_MEASUREMENT_ID ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script
            id="ga4-base"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
gtag('config', '${GA4_MEASUREMENT_ID}', { anonymize_ip: true });`,
            }}
          />
        </>
      ) : null}
    </>
  );
}

