import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { localBlogPosts } from "@/lib/local-blog-posts";
import { getServiceAreaBySlug, getServiceAreaUrl, serviceAreaPages } from "@/lib/service-areas";
import { getServiceBySlug, getServiceZoneUrl, serviceCatalog } from "@/lib/service-catalog";
import { siteConfig } from "@/lib/seo";

type ServiceZonePageProps = {
  params: Promise<{ service: string; zone: string }>;
};

export function generateStaticParams() {
  return serviceCatalog.flatMap((service) =>
    serviceAreaPages.map((area) => ({
      service: service.slug,
      zone: area.slug,
    })),
  );
}

export async function generateMetadata({ params }: ServiceZonePageProps): Promise<Metadata> {
  const { service: serviceSlug, zone: zoneSlug } = await params;
  const service = getServiceBySlug(serviceSlug);
  const area = getServiceAreaBySlug(zoneSlug);

  if (!service || !area) {
    return {};
  }

  const pageUrl = getServiceZoneUrl(service.slug, area.slug);
  const title = `${service.metaTitle} ${area.zoneName}`;
  const description = `${service.name} a domicilio in ${area.zoneName}: ${area.neighborhoods
    .slice(0, 3)
    .join(", ")}. Intervento rapido su appuntamento.`;

  return {
    title,
    description,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      type: "article",
      url: pageUrl,
      title,
      description,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      images: [
        {
          url: "/backgrounds/chat.webp",
          width: 1919,
          height: 767,
          alt: `${service.name} ${area.zoneName}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/backgrounds/chat.webp"],
    },
  };
}

export default async function ServiceZonePage({ params }: ServiceZonePageProps) {
  const { service: serviceSlug, zone: zoneSlug } = await params;
  const service = getServiceBySlug(serviceSlug);
  const area = getServiceAreaBySlug(zoneSlug);

  if (!service || !area) {
    notFound();
  }

  const pageUrl = getServiceZoneUrl(service.slug, area.slug);
  const serviceAreaUrl = getServiceAreaUrl(area.slug);
  const serviceAreaPath = `/zone/${area.slug}`;

  const faqItems = [
    {
      question: `Quanto tempo serve per ${service.name.toLowerCase()} in ${area.zoneName}?`,
      answer:
        "Dipende dal tipo di problema e dalla fascia oraria disponibile. Quando possibile organizziamo l'intervento in giornata con conferma rapida.",
    },
    {
      question: `Intervenite in tutti i quartieri di ${area.zoneName}?`,
      answer: `Si. Copriamo ${area.zoneName} e zone vicine, incluse aree come ${area.neighborhoods
        .slice(0, 3)
        .join(", ")}.`,
    },
    {
      question: "Posso richiedere anche altri interventi durante la stessa uscita?",
      answer:
        "Si, durante l'appuntamento possiamo gestire anche rete Wi-Fi, stampanti e altre ottimizzazioni utili nello stesso intervento.",
    },
  ] as const;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.name} ${area.zoneName}`,
    serviceType: service.name,
    description: `${service.shortDescription} - Zona: ${area.zoneName}.`,
    areaServed: {
      "@type": "Place",
      name: area.zoneName,
    },
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      url: siteConfig.siteUrl,
      telephone: siteConfig.phoneInternational,
      email: siteConfig.email,
    },
    url: pageUrl,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.siteUrl },
      { "@type": "ListItem", position: 2, name: "Servizi", item: `${siteConfig.siteUrl}/#servizi` },
      { "@type": "ListItem", position: 3, name: area.zoneName, item: serviceAreaUrl },
      { "@type": "ListItem", position: 4, name: service.name, item: pageUrl },
    ],
  };

  const relatedServices = serviceCatalog.filter((item) => item.slug !== service.slug).slice(0, 4);
  const relatedZones = serviceAreaPages.filter((item) => item.slug !== area.slug).slice(0, 4);
  const relatedGuidesForCombo = localBlogPosts
    .filter(
      (item) =>
        item.zoneSlugs?.includes(area.slug) ||
        item.serviceSlugs?.includes(service.slug),
    )
    .slice(0, 4);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="relative overflow-hidden bg-[#0b0203] text-[#fff4f4]">
        <div className="absolute inset-0 z-0 bg-[url('/backgrounds/chat.webp')] bg-cover bg-center opacity-25" />
        <div className="absolute inset-0 z-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(255,42,42,0.52),rgba(86,6,10,0.76)_45%,rgba(8,0,0,0.95)_100%)]" />
        <div className="absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.16),rgba(0,0,0,0.74))]" />

        <section className="relative z-10 mx-auto max-w-[1120px] px-6 py-16 md:px-10 md:py-20">
          <nav className="mb-6 text-sm text-[rgba(255,210,210,0.82)]">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/#servizi" className="hover:text-white">
              Servizi
            </Link>
            <span className="mx-2">/</span>
            <Link href={serviceAreaPath} className="hover:text-white">
              {area.zoneName}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[rgba(255,236,236,0.95)]">{service.name}</span>
          </nav>

          <p className="inline-flex rounded-full border border-[rgba(255,154,154,0.56)] bg-[rgba(43,3,7,0.74)] px-4 py-1 text-[0.68rem] font-semibold tracking-[0.14em]">
            SERVIZIO + ZONA
          </p>
          <h1 className="mt-4 max-w-[19ch] text-[clamp(1.95rem,4.8vw,3.55rem)] font-extrabold leading-[0.95] tracking-[-0.02em]">
            {service.h1Base} in {area.zoneName}
          </h1>
          <p className="mt-4 max-w-[74ch] text-[clamp(1rem,1.3vw,1.15rem)] leading-[1.6] text-[rgba(255,220,220,0.92)]">
            {service.shortDescription} Interveniamo nei quartieri {area.neighborhoods.slice(0, 4).join(", ")} e
            nelle zone limitrofe.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <article className="rounded-2xl border border-[rgba(255,120,120,0.62)] bg-[linear-gradient(165deg,rgba(30,2,6,0.88),rgba(12,1,3,0.9))] p-5 shadow-[0_0_18px_rgba(255,28,28,0.24)]">
              <h2 className="text-xl font-bold">Cosa include il servizio</h2>
              <ul className="mt-4 space-y-2 text-[rgba(255,228,228,0.92)]">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#ff6a6a]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-[rgba(255,120,120,0.62)] bg-[linear-gradient(165deg,rgba(30,2,6,0.88),rgba(12,1,3,0.9))] p-5 shadow-[0_0_18px_rgba(255,28,28,0.24)]">
              <h2 className="text-xl font-bold">Quartieri coperti in {area.zoneName}</h2>
              <ul className="mt-4 grid grid-cols-1 gap-2 text-[rgba(255,232,232,0.94)] sm:grid-cols-2">
                {area.neighborhoods.map((zoneItem) => (
                  <li
                    key={zoneItem}
                    className="rounded-full border border-[rgba(255,136,136,0.52)] bg-[rgba(255,30,30,0.16)] px-3 py-1 text-sm font-semibold"
                  >
                    {zoneItem}
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <section className="mt-8 rounded-2xl border border-[rgba(255,120,120,0.62)] bg-[linear-gradient(165deg,rgba(30,2,6,0.88),rgba(12,1,3,0.9))] p-5 shadow-[0_0_18px_rgba(255,28,28,0.24)]">
            <h2 className="text-xl font-bold">Domande frequenti</h2>
            <div className="mt-4 space-y-4">
              {faqItems.map((item) => (
                <article key={item.question}>
                  <h3 className="text-base font-semibold text-[rgba(255,242,242,0.96)]">{item.question}</h3>
                  <p className="mt-1 text-[rgba(255,224,224,0.9)]">{item.answer}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-8 grid gap-4 md:grid-cols-2">
            <article className="rounded-2xl border border-[rgba(255,120,120,0.62)] bg-[linear-gradient(165deg,rgba(30,2,6,0.88),rgba(12,1,3,0.9))] p-5 shadow-[0_0_18px_rgba(255,28,28,0.24)]">
              <h2 className="text-lg font-bold">Altri servizi in {area.zoneName}</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {relatedServices.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/servizi/${item.slug}/${area.slug}`}
                    className="rounded-full border border-[rgba(255,140,140,0.56)] bg-[rgba(255,34,34,0.14)] px-3 py-1.5 text-sm font-semibold text-[rgba(255,236,236,0.96)] hover:bg-[rgba(255,34,34,0.24)]"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </article>

            <article className="rounded-2xl border border-[rgba(255,120,120,0.62)] bg-[linear-gradient(165deg,rgba(30,2,6,0.88),rgba(12,1,3,0.9))] p-5 shadow-[0_0_18px_rgba(255,28,28,0.24)]">
              <h2 className="text-lg font-bold">Stesso servizio in altre zone</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {relatedZones.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/servizi/${service.slug}/${item.slug}`}
                    className="rounded-full border border-[rgba(255,140,140,0.56)] bg-[rgba(255,34,34,0.14)] px-3 py-1.5 text-sm font-semibold text-[rgba(255,236,236,0.96)] hover:bg-[rgba(255,34,34,0.24)]"
                  >
                    {item.zoneName}
                  </Link>
                ))}
              </div>
            </article>
          </section>

          {relatedGuidesForCombo.length > 0 ? (
            <section className="mt-8 rounded-2xl border border-[rgba(255,120,120,0.62)] bg-[linear-gradient(165deg,rgba(30,2,6,0.88),rgba(12,1,3,0.9))] p-5 shadow-[0_0_18px_rgba(255,28,28,0.24)]">
              <h2 className="text-lg font-bold">Guide collegate</h2>
              <div className="mt-3 grid gap-2 md:grid-cols-2">
                {relatedGuidesForCombo.map((guide) => (
                  <Link
                    key={guide.slug}
                    href={`/assistenza-a-domicilio/${guide.slug}`}
                    className="rounded-xl border border-[rgba(255,140,140,0.56)] bg-[rgba(255,34,34,0.14)] px-3 py-2 text-sm font-semibold text-[rgba(255,236,236,0.96)] hover:bg-[rgba(255,34,34,0.24)]"
                  >
                    {guide.title}
                  </Link>
                ))}
              </div>
            </section>
          ) : null}

          <section className="mt-8 rounded-2xl border border-[rgba(255,120,120,0.62)] bg-[linear-gradient(165deg,rgba(30,2,6,0.88),rgba(12,1,3,0.9))] p-6 text-center shadow-[0_0_18px_rgba(255,28,28,0.24)]">
            <h2 className="text-xl font-bold">Richiedi {service.name.toLowerCase()} in {area.zoneName}</h2>
            <p className="mx-auto mt-2 max-w-[62ch] text-[rgba(255,220,220,0.92)]">
              Chiama o scrivi su WhatsApp per fissare il primo slot disponibile nel tuo quartiere.
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`tel:${siteConfig.phoneInternational}`}
                className="rounded-full border border-[rgba(255,160,160,0.74)] bg-[linear-gradient(145deg,#ff3131,#bd0616_60%,#70030d)] px-5 py-2.5 text-sm font-bold text-white shadow-[0_8px_20px_rgba(114,0,0,0.56)]"
              >
                Chiama ora
              </a>
              <a
                href={`https://wa.me/${siteConfig.phoneInternational.replace("+", "")}`}
                className="rounded-full border border-[rgba(255,160,160,0.54)] bg-[rgba(43,3,7,0.7)] px-5 py-2.5 text-sm font-semibold text-[rgba(255,236,236,0.96)]"
              >
                WhatsApp
              </a>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}
