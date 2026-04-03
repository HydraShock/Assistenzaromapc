import { permanentRedirect } from "next/navigation";

import { seoGuides } from "@/lib/seo-guides";

export function generateStaticParams() {
  return seoGuides.map((guide) => ({ slug: guide.slug }));
}

const guideRedirectMap: Record<string, string> = {
  "pc-lento-prati-roma-centro": "/assistenza-a-domicilio/i-5-problemi-piu-comuni-dei-pc-a-roma-e-come-li-risolviamo-a-domicilio",
  "wifi-instabile-parioli-roma-nord": "/assistenza-a-domicilio/i-5-problemi-piu-comuni-dei-pc-a-roma-e-come-li-risolviamo-a-domicilio",
  "stampante-offline-eur-roma-sud": "/assistenza-a-domicilio/i-5-problemi-piu-comuni-dei-pc-a-roma",
  "virus-popup-tiburtina-roma-est": "/assistenza-a-domicilio/i-5-problemi-piu-comuni-dei-pc-a-roma-e-come-li-risolviamo-a-domicilio",
  "backup-file-monteverde-roma-ovest": "/assistenza-a-domicilio/tecnico-computer-domicilio-a-monteverde",
  "notebook-non-si-avvia-ostia-litorale": "/assistenza-a-domicilio/i-5-problemi-piu-comuni-dei-pc-a-roma",
  "tecnico-computer-domicilio-laurentina": "/assistenza-a-domicilio/tecnico-computer-a-domicilio-a-laurentina",
  "assistenza-pc-tuscolana-cinecitta": "/assistenza-a-domicilio/tecnico-computer-a-domicilio-a-tuscolana",
};

type GuideLegacyRedirectPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function GuideLegacyRedirectPage({ params }: GuideLegacyRedirectPageProps) {
  const { slug } = await params;
  const destination = guideRedirectMap[slug] ?? "/assistenza-a-domicilio";
  permanentRedirect(destination);
}
