import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import restoBackground from "@/resto.png";
import { LuxuryFooterSectionSaved } from "@/components/landing/LuxuryFooterSectionSaved";
import { LuxuryTopNavbar } from "@/components/landing/LuxuryTopNavbar";
import { localBlogPosts } from "@/lib/local-blog-posts";
import { getServiceAreaBySlug, getServiceAreaUrl, serviceAreaPages } from "@/lib/service-areas";
import { serviceCatalog } from "@/lib/service-catalog";
import { siteConfig } from "@/lib/seo";

type ServiceAreaPageProps = {
  params: Promise<{ slug: string }>;
};

function prettyPhoneDisplay(value: string): string {
  const digits = value.replace(/\D/g, "");
  if (digits.length !== 10) {
    return value;
  }

  return `${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6, 10)}`;
}

export function generateStaticParams() {
  return serviceAreaPages.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: ServiceAreaPageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = getServiceAreaBySlug(slug);

  if (!area) {
    return {};
  }

  const pageUrl = getServiceAreaUrl(area.slug);
  const title = area.title;

  return {
    title,
    description: area.description,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      type: "article",
      url: pageUrl,
      title,
      description: area.description,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      images: [
        {
          url: "/backgrounds/chat.webp",
          width: 1919,
          height: 767,
          alt: `${area.title} - assistenza informatica a domicilio`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: area.description,
      images: ["/backgrounds/chat.webp"],
    },
  };
}

export default async function ServiceAreaPage({ params }: ServiceAreaPageProps) {
  const { slug } = await params;
  const area = getServiceAreaBySlug(slug);

  if (!area) {
    notFound();
  }

  const pageUrl = getServiceAreaUrl(area.slug);
  const zoneGuides = localBlogPosts
    .filter((post) => post.zoneSlugs?.includes(area.slug))
    .slice(0, 4);
  const phoneDisplay = prettyPhoneDisplay(siteConfig.phoneDisplay);
  const trustChips = ["Disponibile 7/7", "Intervento in giornata", "Zona coperta"];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: area.title,
    serviceType: "Assistenza PC e supporto informatico a domicilio",
    areaServed: {
      "@type": "Place",
      name: `Zona ${area.title}, Roma`,
    },
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      url: siteConfig.siteUrl,
      telephone: siteConfig.phoneInternational,
      email: siteConfig.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: siteConfig.city,
        addressRegion: siteConfig.region,
        addressCountry: siteConfig.country,
      },
    },
    url: pageUrl,
    description: area.description,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.siteUrl },
      { "@type": "ListItem", position: 2, name: "Zone di Roma", item: `${siteConfig.siteUrl}/#zone-coperte` },
      { "@type": "ListItem", position: 3, name: area.title, item: pageUrl },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main id="home" className="overflow-x-clip bg-[#eceff3] text-[#101521]">
        <LuxuryTopNavbar />

        <section className="relative isolate min-h-[34vh] overflow-hidden border-b border-[#2d0b11] pt-24 sm:min-h-[40vh] sm:pt-28">
          <Image
            src={restoBackground}
            alt=""
            fill
            priority
            quality={95}
            sizes="100vw"
            className="object-cover object-center"
            aria-hidden="true"
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(92deg,rgba(22,5,10,0.78)_0%,rgba(22,5,10,0.62)_46%,rgba(22,5,10,0.2)_100%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(68%_64%_at_18%_26%,rgba(255,52,82,0.26),rgba(255,52,82,0)_74%)]" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-[linear-gradient(180deg,rgba(22,5,10,0)_0%,rgba(22,5,10,0.36)_100%)]" />

          <div className="relative z-10 mx-auto w-full max-w-[1560px] px-6 pb-12 md:px-10 md:pb-14 lg:px-14">
            <nav className="mb-7 text-[0.8rem] font-medium text-[rgba(255,230,237,0.72)]">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link href="/#zone-coperte" className="hover:text-white">
                Zone di Roma
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white">{area.zoneName}</span>
            </nav>

            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.45fr)_320px] lg:items-end">
              <div className="max-w-none lg:max-w-[62rem]">
                <p className="inline-flex rounded-full border border-[rgba(255,183,197,0.62)] bg-[rgba(23,5,10,0.68)] px-4 py-1 text-[0.68rem] font-semibold tracking-[0.16em] text-[rgba(255,223,232,0.98)]">
                  ZONA DI ROMA COPERTA
                </p>
                <h1
                  className="mt-5 text-[clamp(2.05rem,4.4vw,4.2rem)] font-extrabold leading-[1.02] tracking-[-0.02em] text-white"
                  style={{ fontFamily: "var(--font-space)" }}
                >
                  {area.h1}
                </h1>
                <p className="mt-4 max-w-[70ch] text-[clamp(1rem,1.35vw,1.15rem)] leading-[1.68] text-[rgba(255,230,236,0.94)]">
                  {area.intro}
                </p>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {trustChips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-[rgba(255,172,193,0.36)] bg-[rgba(255,255,255,0.06)] px-3 py-1 text-[0.76rem] font-semibold text-[rgba(255,233,239,0.9)]"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>

              <aside className="hidden rounded-[22px] border border-[rgba(255,148,173,0.42)] bg-[linear-gradient(158deg,rgba(33,8,14,0.98),rgba(67,12,25,0.95)_54%,rgba(23,6,11,0.98)_100%)] p-5 shadow-[0_0_0_1px_rgba(255,164,187,0.22),0_18px_32px_rgba(10,2,6,0.45),0_0_36px_rgba(255,56,94,0.22)] lg:block">
                <p className="text-[0.73rem] font-semibold uppercase tracking-[0.16em] text-[rgba(255,196,214,0.92)]">
                  Assistenza {area.zoneName}
                </p>
                <p className="mt-2 text-sm leading-[1.55] text-[rgba(255,232,239,0.92)]">
                  Intervento tecnico rapido nella tua zona con supporto su PC, rete e periferiche.
                </p>
                <a
                  href={`tel:${siteConfig.phoneInternational}`}
                  className="mt-4 block rounded-xl border border-[rgba(255,182,201,0.42)] bg-[rgba(255,255,255,0.08)] px-4 py-3 text-center text-[1.34rem] font-extrabold tracking-[0.02em] text-white transition-colors hover:bg-[rgba(255,255,255,0.16)]"
                >
                  {phoneDisplay}
                </a>
                <div className="mt-3 grid gap-2">
                  <a
                    href={`tel:${siteConfig.phoneInternational}`}
                    className="inline-flex items-center justify-center rounded-full border border-[rgba(255,180,199,0.42)] bg-[linear-gradient(145deg,#ff334e,#c00a28_62%,#7d081a)] px-4 py-2.5 text-[0.88rem] font-semibold text-white shadow-[0_10px_20px_rgba(125,8,26,0.42)]"
                  >
                    Chiama ora
                  </a>
                  <a
                    href={`https://wa.me/${siteConfig.phoneInternational.replace("+", "")}`}
                    className="inline-flex items-center justify-center rounded-full border border-[rgba(255,180,199,0.42)] bg-[rgba(255,255,255,0.1)] px-4 py-2.5 text-[0.88rem] font-semibold text-[rgba(255,236,242,0.95)] transition-colors hover:bg-[rgba(255,255,255,0.18)]"
                  >
                    WhatsApp
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="relative bg-[#eceff3] pb-16 pt-8">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(64%_50%_at_50%_0%,rgba(255,46,79,0.12),rgba(255,46,79,0)_70%)]" />

          <div className="relative z-10 mx-auto w-full max-w-[1560px] px-5 md:px-10 lg:px-14">
            <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
              <article className="rounded-[26px] border border-[#dfe5ef] bg-white p-6 shadow-[0_22px_42px_rgba(16,24,40,0.1)] md:p-8">
                <section className="grid gap-4 md:grid-cols-2">
                  <article className="rounded-2xl border border-[rgba(255,132,158,0.4)] bg-[linear-gradient(152deg,rgba(30,7,12,0.98),rgba(61,11,23,0.95)_52%,rgba(23,6,11,0.98)_100%)] p-5 shadow-[0_18px_32px_rgba(12,3,7,0.4)]">
                    <h2 className="text-xl font-extrabold text-white">Quartieri coperti</h2>
                    <ul className="mt-4 grid grid-cols-1 gap-2 text-[rgba(255,232,232,0.94)] sm:grid-cols-2">
                      {area.neighborhoods.map((zone) => (
                        <li
                          key={zone}
                          className="rounded-full border border-[rgba(255,166,188,0.52)] bg-[rgba(255,255,255,0.08)] px-3 py-1 text-sm font-semibold"
                        >
                          {zone}
                        </li>
                      ))}
                    </ul>
                  </article>

                  <article className="rounded-2xl border border-[rgba(255,132,158,0.4)] bg-[linear-gradient(152deg,rgba(30,7,12,0.98),rgba(61,11,23,0.95)_52%,rgba(23,6,11,0.98)_100%)] p-5 shadow-[0_18px_32px_rgba(12,3,7,0.4)]">
                    <h2 className="text-xl font-extrabold text-white">Perche scegliere il servizio</h2>
                    <ul className="mt-4 space-y-2 text-[rgba(255,228,228,0.92)]">
                      {area.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#ff8ea8]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </section>

                <section className="mt-8 border-t border-[#e9edf4] pt-7">
                  <h2 className="text-[1.24rem] font-extrabold text-[#182338]">Domande frequenti per {area.title}</h2>
                  <div className="mt-4 space-y-3">
                    {area.faq.map((item) => (
                      <details key={item.question} className="rounded-xl border border-[#e3e9f2] bg-white p-4">
                        <summary className="cursor-pointer list-none font-semibold text-[#1a2335]">{item.question}</summary>
                        <p className="mt-2 text-[0.98rem] leading-[1.65] text-[#38445b]">{item.answer}</p>
                      </details>
                    ))}
                  </div>
                </section>

                <section className="mt-8 rounded-2xl border border-[rgba(255,132,158,0.4)] bg-[linear-gradient(152deg,rgba(30,7,12,0.98),rgba(61,11,23,0.95)_52%,rgba(23,6,11,0.98)_100%)] p-5 shadow-[0_18px_32px_rgba(12,3,7,0.4)]">
                  <h2 className="text-[1.2rem] font-extrabold text-white">Servizi disponibili in {area.zoneName}</h2>
                  <p className="mt-2 max-w-[65ch] text-[rgba(255,228,236,0.9)]">
                    Pagine dedicate per tipologia di intervento nella tua zona, per trovare subito il servizio corretto.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {serviceCatalog.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/servizi/${service.slug}/${area.slug}`}
                        className="rounded-full border border-[rgba(255,166,188,0.52)] bg-[rgba(255,255,255,0.08)] px-3 py-1.5 text-sm font-semibold text-[rgba(255,236,236,0.96)] hover:bg-[rgba(255,255,255,0.16)]"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </section>

                {zoneGuides.length > 0 ? (
                  <section className="mt-8 rounded-2xl border border-[rgba(255,132,158,0.4)] bg-[linear-gradient(152deg,rgba(30,7,12,0.98),rgba(61,11,23,0.95)_52%,rgba(23,6,11,0.98)_100%)] p-5 shadow-[0_18px_32px_rgba(12,3,7,0.4)]">
                    <h2 className="text-[1.2rem] font-extrabold text-white">Guide utili per {area.zoneName}</h2>
                    <div className="mt-4 grid gap-2 md:grid-cols-2">
                      {zoneGuides.map((guide) => (
                        <Link
                          key={guide.slug}
                          href={`/assistenza-a-domicilio/${guide.slug}`}
                          className="rounded-xl border border-[rgba(255,166,188,0.48)] bg-[rgba(255,255,255,0.08)] px-3 py-2 text-sm font-semibold text-[rgba(255,236,236,0.96)] hover:bg-[rgba(255,255,255,0.16)]"
                        >
                          {guide.title}
                        </Link>
                      ))}
                    </div>
                  </section>
                ) : null}
              </article>

              <aside className="space-y-4 xl:sticky xl:top-28 xl:self-start">
                <section className="rounded-2xl border border-[#dfe5ef] bg-white p-5 shadow-[0_14px_30px_rgba(16,24,40,0.08)]">
                  <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-[#6a7488]">Zona coperta</h2>
                  <p className="mt-3 text-[0.95rem] leading-[1.58] text-[#32425e]">
                    Copertura completa su {area.zoneName} con interventi rapidi e organizzati.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {area.neighborhoods.slice(0, 8).map((zone) => (
                      <span
                        key={`side-${zone}`}
                        className="rounded-full border border-[#e2a6b5] bg-[#fff4f7] px-3 py-1 text-[0.8rem] font-semibold text-[#5c2340]"
                      >
                        {zone}
                      </span>
                    ))}
                  </div>
                </section>

                <section className="rounded-2xl border border-[rgba(255,132,158,0.4)] bg-[linear-gradient(152deg,rgba(30,7,12,0.98),rgba(61,11,23,0.95)_52%,rgba(23,6,11,0.98)_100%)] p-5 shadow-[0_18px_32px_rgba(12,3,7,0.4)]">
                  <h2 className="text-[1rem] font-extrabold text-white">Serve assistenza ora?</h2>
                  <p className="mt-2 text-sm leading-[1.58] text-[rgba(255,228,236,0.9)]">
                    Ti ricontattiamo rapidamente per organizzare l&apos;intervento nel tuo quartiere.
                  </p>
                  <div className="mt-4 flex flex-col gap-2">
                    <a
                      href={`tel:${siteConfig.phoneInternational}`}
                      className="inline-flex items-center justify-center rounded-full border border-[rgba(255,180,199,0.42)] bg-[linear-gradient(145deg,#ff334e,#c00a28_62%,#7d081a)] px-4 py-2 text-sm font-semibold text-white"
                    >
                      Chiama ora
                    </a>
                    <a
                      href={`https://wa.me/${siteConfig.phoneInternational.replace("+", "")}`}
                      className="inline-flex items-center justify-center rounded-full border border-[rgba(255,180,199,0.42)] bg-[rgba(255,255,255,0.1)] px-4 py-2 text-sm font-semibold text-[rgba(255,236,242,0.95)]"
                    >
                      WhatsApp
                    </a>
                  </div>
                </section>
              </aside>
            </div>
          </div>
        </section>

        <LuxuryFooterSectionSaved />
      </main>
    </>
  );
}
