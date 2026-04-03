import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import restoBackground from "@/resto.png";
import { LuxuryFooterSectionSaved } from "@/components/landing/LuxuryFooterSectionSaved";
import { LuxuryTopNavbar } from "@/components/landing/LuxuryTopNavbar";
import { getLocalBlogPostBySlug, localBlogPosts } from "@/lib/local-blog-posts";
import { siteConfig } from "@/lib/seo";

type LocalArticlePageProps = {
  params: Promise<{ slug: string }>;
};

const PREMIUM_EXPERIMENT_ENABLED = true;
const PREMIUM_EXPERIMENT_SLUG = "i-5-problemi-piu-comuni-dei-pc-a-roma-e-come-li-risolviamo-a-domicilio";

export function generateStaticParams() {
  return localBlogPosts.map((post) => ({ slug: post.slug }));
}

function formatGuideDate(value: string): string {
  return new Date(value).toLocaleDateString("it-IT", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function slugifyHeading(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

function cleanSectionTitle(value: string): string {
  return value.replace(/^\d+\)\s*/, "").trim();
}

function prettyPhoneDisplay(value: string): string {
  const digits = value.replace(/\D/g, "");
  if (digits.length !== 10) {
    return value;
  }

  return `${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6, 10)}`;
}

function estimateWordCount(post: ReturnType<typeof getLocalBlogPostBySlug>) {
  if (!post) {
    return 0;
  }

  const sectionText = post.sections
    .map((section) => `${section.title} ${section.paragraphs.join(" ")} ${(section.bullets ?? []).join(" ")}`)
    .join(" ");

  const faqText = post.faq.map((item) => `${item.question} ${item.answer}`).join(" ");
  const fullText = `${post.intro} ${sectionText} ${faqText}`;
  return fullText.trim().split(/\s+/).filter(Boolean).length;
}

export async function generateMetadata({ params }: LocalArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getLocalBlogPostBySlug(slug);

  if (!post) {
    return {};
  }

  const canonical = `${siteConfig.siteUrl}/assistenza-a-domicilio/${post.slug}`;
  const isPremiumExperimentPage = post.slug === PREMIUM_EXPERIMENT_SLUG;
  const metadataKeywords = [
    post.metaTitle,
    post.problemLabel,
    post.zoneLabel,
    "assistenza pc roma",
    "tecnico computer domicilio roma",
    ...(isPremiumExperimentPage
      ? ["pc lento roma", "pc non si avvia roma", "wifi instabile roma", "stampante offline roma", "tecnico pc urgente roma"]
      : []),
  ];

  return {
    title: `${post.metaTitle} | Assistenza Roma PC`,
    description: post.description,
    keywords: metadataKeywords,
    authors: [{ name: post.author }],
    alternates: {
      canonical,
    },
    openGraph: {
      type: "article",
      url: canonical,
      title: post.title,
      description: post.description,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      images: [
        {
          url: post.heroImage,
          width: 1920,
          height: 1080,
          alt: post.heroImageAlt,
        },
      ],
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      tags: [post.problemLabel, post.zoneLabel, post.category],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.heroImage],
    },
    robots: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  };
}

export default async function LocalArticlePage({ params }: LocalArticlePageProps) {
  const { slug } = await params;
  const post = getLocalBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const canonical = `${siteConfig.siteUrl}/assistenza-a-domicilio/${post.slug}`;
  const related = localBlogPosts.filter((item) => item.slug !== post.slug).slice(0, 5);
  const sectionsWithIds = post.sections.map((section) => ({
    ...section,
    headingId: slugifyHeading(section.title),
  }));
  const normalizedSections = sectionsWithIds.map((section) => ({
    ...section,
    shortTitle: cleanSectionTitle(section.title),
  }));
  const sectionAnchors = normalizedSections.slice(0, 7);
  const wordCount = estimateWordCount(post);
  const quickBullets = sectionsWithIds.flatMap((section) => section.bullets ?? []).slice(0, 4);
  const hasHowToSections = normalizedSections.some((section) => (section.bullets ?? []).length > 0);
  const isPremiumExperimentPage = PREMIUM_EXPERIMENT_ENABLED && post.slug === PREMIUM_EXPERIMENT_SLUG;
  const interventionFlow = [
    "Diagnosi iniziale sul posto e priorita tecniche in 10-15 minuti.",
    "Intervento mirato sul problema principale con verifica stabilita.",
    "Test finale con il cliente e checklist di prevenzione rapida.",
  ];
  const heroPromise =
    "Assistenza PC a domicilio a Roma con risposta rapida e intervento in giornata quando disponibile.";
  const heroTrustChips = ["Disponibile 7/7", "Intervento in giornata", "Roma"];
  const heroPhoneDisplay = prettyPhoneDisplay(siteConfig.phoneDisplay);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    alternativeHeadline: post.metaTitle,
    description: post.description,
    inLanguage: "it-IT",
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    dateCreated: post.publishedAt,
    wordCount,
    isAccessibleForFree: true,
    genre: post.category,
    author: {
      "@type": "Person",
      name: post.author,
      url: `${siteConfig.siteUrl}/assistenza-a-domicilio`,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.siteUrl}/favicon.ico`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonical,
    },
    articleSection: post.sections.map((section) => section.title),
    about: [
      {
        "@type": "Thing",
        name: post.problemLabel,
      },
      {
        "@type": "Thing",
        name: post.zoneLabel,
      },
    ],
    keywords: [post.problemLabel, post.zoneLabel, post.category],
    image: [`${siteConfig.siteUrl}${post.heroImage}`],
  };

  const howToSchema = hasHowToSections
    ? {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: `Checklist pratica: ${post.metaTitle}`,
        description: post.description,
        inLanguage: "it-IT",
        totalTime: `PT${Math.max(post.readMinutes, 5)}M`,
        step: normalizedSections
          .filter((section) => (section.bullets ?? []).length > 0)
          .slice(0, 6)
          .map((section, index) => ({
            "@type": "HowToStep",
            position: index + 1,
            name: section.shortTitle,
            text: (section.bullets ?? []).slice(0, 3).join(" "),
            url: `${canonical}#${section.headingId}`,
          })),
      }
    : null;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faq.map((item) => ({
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
      { "@type": "ListItem", position: 2, name: "Assistenza a domicilio", item: `${siteConfig.siteUrl}/assistenza-a-domicilio` },
      { "@type": "ListItem", position: 3, name: post.title, item: canonical },
    ],
  };

  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: canonical,
    name: post.title,
    description: post.description,
    inLanguage: "it-IT",
    isPartOf: {
      "@type": "WebSite",
      url: siteConfig.siteUrl,
      name: siteConfig.name,
    },
  };

  const serviceSchema = isPremiumExperimentPage
    ? {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Assistenza PC a domicilio a Roma",
        serviceType: "Riparazione computer e supporto informatico a domicilio",
        provider: {
          "@type": "Organization",
          name: siteConfig.name,
          telephone: siteConfig.phoneDisplay,
          url: siteConfig.siteUrl,
        },
        areaServed: {
          "@type": "City",
          name: "Roma",
        },
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: canonical,
          servicePhone: siteConfig.phoneInternational,
        },
      }
    : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {howToSchema ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} /> : null}
      {serviceSchema ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} /> : null}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }} />

      <main id="home" className="overflow-x-clip bg-[#eceff3] text-[#101521]">
        <LuxuryTopNavbar />

        <section className="relative isolate min-h-[34vh] overflow-hidden border-b border-[#2d0b11] pt-24 sm:min-h-[40vh] sm:pt-28">
          <Image
            src={restoBackground}
            alt=""
            fill
            priority
            quality={88}
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
              <Link href="/assistenza-a-domicilio" className="hover:text-white">
                Assistenza a domicilio
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white">{post.problemLabel}</span>
            </nav>

            <div className={`grid gap-6 ${isPremiumExperimentPage ? "lg:grid-cols-[minmax(0,1.45fr)_320px] lg:items-end" : ""}`}>
              <div className="max-w-none lg:max-w-[62rem]">
                <h1
                  className="text-[clamp(2rem,4.4vw,4.4rem)] font-extrabold leading-[1.02] tracking-[-0.02em] text-white"
                  style={{ fontFamily: "var(--font-space)" }}
                >
                  {post.title}
                </h1>
                {isPremiumExperimentPage ? (
                  <p className="mt-4 max-w-[56ch] text-[1rem] leading-[1.58] text-[rgba(255,228,236,0.9)]">{heroPromise}</p>
                ) : null}

                {isPremiumExperimentPage ? (
                  <div className="mt-4 flex flex-wrap gap-2.5">
                    {heroTrustChips.map((chip) => (
                      <span
                        key={chip}
                        className="rounded-full border border-[rgba(255,172,193,0.36)] bg-[rgba(255,255,255,0.06)] px-3 py-1 text-[0.76rem] font-semibold text-[rgba(255,233,239,0.9)]"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                ) : null}

                <div className="mt-4 flex flex-wrap gap-2 text-[0.88rem] text-[rgba(255,230,236,0.9)]">
                  <span>{formatGuideDate(post.publishedAt)}</span>
                  <span>&middot;</span>
                  <span>{post.author}</span>
                  <span>&middot;</span>
                  <span>{post.readMinutes} min</span>
                </div>
              </div>

              {isPremiumExperimentPage ? (
                <aside className="hidden rounded-[22px] border border-[rgba(255,148,173,0.42)] bg-[linear-gradient(158deg,rgba(33,8,14,0.98),rgba(67,12,25,0.95)_54%,rgba(23,6,11,0.98)_100%)] p-5 shadow-[0_0_0_1px_rgba(255,164,187,0.22),0_18px_32px_rgba(10,2,6,0.45),0_0_36px_rgba(255,56,94,0.22)] lg:block">
                  <p className="text-[0.73rem] font-semibold uppercase tracking-[0.16em] text-[rgba(255,196,214,0.92)]">Priorita Roma</p>
                  <p className="mt-2 text-sm leading-[1.55] text-[rgba(255,232,239,0.92)]">
                    Risposta rapida per urgenze su PC, rete e periferiche.
                  </p>
                  <a
                    href={`tel:${siteConfig.phoneInternational}`}
                    className="mt-4 block rounded-xl border border-[rgba(255,182,201,0.42)] bg-[rgba(255,255,255,0.08)] px-4 py-3 text-center text-[1.34rem] font-extrabold tracking-[0.02em] text-white transition-colors hover:bg-[rgba(255,255,255,0.16)]"
                  >
                    {heroPhoneDisplay}
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
              ) : null}
            </div>
          </div>
        </section>

        <section className="relative bg-[#eceff3] pb-16 pt-8">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(62%_48%_at_50%_0%,rgba(255,46,79,0.14),rgba(255,46,79,0)_70%)]" />

          <div className="relative z-10 mx-auto w-full max-w-[1560px] px-5 md:px-10 lg:px-14">
            <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
              <article className="rounded-[26px] border border-[#dfe5ef] bg-white p-6 shadow-[0_22px_42px_rgba(16,24,40,0.1)] md:p-8">
                <p className="text-[1.08rem] leading-[1.82] text-[#2a3448]">{post.intro}</p>

                <section className="mt-7 rounded-[22px] border border-[rgba(255,121,146,0.42)] bg-[linear-gradient(150deg,rgba(30,7,12,0.98),rgba(68,11,24,0.95)_44%,rgba(26,6,12,0.98)_100%)] p-5 shadow-[0_20px_34px_rgba(16,4,8,0.42)]">
                  <p className="text-[0.73rem] font-semibold uppercase tracking-[0.17em] text-[rgba(255,208,219,0.88)]">Mappa articolo</p>
                  <h2 className="mt-2 text-[1.18rem] font-extrabold leading-tight text-white">Navigazione rapida e priorita</h2>
                  <p className="mt-2 text-[0.98rem] leading-[1.64] text-[rgba(255,229,236,0.88)]">
                    Vai direttamente alla sezione utile e applica i passaggi consigliati senza perdere tempo.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2.5">
                    {sectionAnchors.map((item) => (
                      <a
                        key={`anchor-${item.headingId}`}
                        href={`#${item.headingId}`}
                        className="rounded-full border border-[rgba(255,166,188,0.48)] bg-[rgba(255,255,255,0.06)] px-3.5 py-1.5 text-[0.82rem] font-semibold text-[rgba(255,234,240,0.95)] transition-colors hover:bg-[rgba(255,255,255,0.14)]"
                      >
                        {item.shortTitle}
                      </a>
                    ))}
                  </div>
                </section>

                {quickBullets.length > 0 ? (
                  <section className="mt-6 rounded-2xl border border-[rgba(255,126,150,0.42)] bg-[linear-gradient(145deg,rgba(33,7,14,0.97),rgba(56,10,21,0.94)_48%,rgba(24,6,11,0.98)_100%)] p-5 shadow-[0_16px_32px_rgba(13,3,7,0.4)]">
                    <h2 className="text-[1.12rem] font-extrabold text-white">In questa guida trovi</h2>
                    <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[0.99rem] leading-[1.64] text-[rgba(255,233,239,0.9)]">
                      {quickBullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </section>
                ) : null}

                {isPremiumExperimentPage ? (
                  <section className="mt-6 rounded-2xl border border-[#e3e8f2] bg-white p-5">
                    <h2 className="text-[1.08rem] font-extrabold text-[#182338]">Come avviene l&apos;intervento in pratica</h2>
                    <ol className="mt-3 list-decimal space-y-2.5 pl-5 text-[0.98rem] leading-[1.63] text-[#2a3850]">
                      {interventionFlow.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ol>
                  </section>
                ) : null}

                {normalizedSections.map((section, sectionIndex) => {
                  const bullets = section.bullets ?? [];
                  const immediateActions = bullets.slice(0, 2);
                  const escalationSignals = bullets.slice(2, 4).length > 0 ? bullets.slice(2, 4) : immediateActions;

                  return (
                    <section key={section.title} id={section.headingId} className="mt-9 border-t border-[#e9edf4] pt-7 scroll-mt-32">
                      <p className="inline-flex rounded-full border border-[#e7ccd5] bg-[#fff5f8] px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-[#7b213a]">
                        Focus operativo {sectionIndex + 1}
                      </p>
                      <h2 className="mt-2 text-[clamp(1.7rem,3.2vw,2.2rem)] font-extrabold leading-[1.08] tracking-[-0.02em] text-[#121a2b]">
                        {section.title}
                      </h2>

                      {section.paragraphs.map((paragraph) => (
                        <p key={`${section.title}-${paragraph}`} className="mt-4 text-[1.03rem] leading-[1.74] text-[#283246]">
                          {paragraph}
                        </p>
                      ))}

                      {bullets.length > 0 ? (
                        <ul className="mt-4 list-disc space-y-1.5 pl-6 text-[1.01rem] leading-[1.66] text-[#283246]">
                          {bullets.map((bullet) => (
                            <li key={`${section.title}-signal-${bullet}`}>{bullet}</li>
                          ))}
                        </ul>
                      ) : null}

                      {bullets.length > 0 ? (
                        <aside className="mt-5 rounded-xl border border-[#edd3dc] bg-[#fff8fa] p-4">
                          <p className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-[#7b223a]">Azione consigliata</p>
                          <p className="mt-2 text-[0.94rem] leading-[1.58] text-[#4a2b36]">
                            {immediateActions.join(" ")}
                          </p>
                          {escalationSignals.length > 0 ? (
                            <p className="mt-2 text-[0.9rem] leading-[1.56] text-[#5c3340]">
                              Se continua: {escalationSignals.join(" ")}
                            </p>
                          ) : null}
                        </aside>
                      ) : null}

                      {section.image ? (
                        <figure className="mt-5 overflow-hidden rounded-xl border border-[#e4e9f2] bg-white">
                          <div className="relative h-[340px]">
                            <Image
                              src={section.image.src}
                              alt={section.image.alt}
                              fill
                              quality={88}
                              sizes="(max-width: 1280px) 100vw, 1100px"
                              className="object-cover object-center"
                            />
                          </div>
                          {section.image.caption ? (
                            <figcaption className="bg-[#f6f8fc] px-4 py-2 text-sm text-[#55627b]">{section.image.caption}</figcaption>
                          ) : null}
                        </figure>
                      ) : null}

                      {isPremiumExperimentPage && (sectionIndex === 1 || sectionIndex === 3) ? (
                        <section className="mt-5 rounded-xl border border-[rgba(255,132,158,0.38)] bg-[linear-gradient(160deg,rgba(33,8,14,0.98),rgba(65,11,24,0.95)_52%,rgba(24,6,11,0.98)_100%)] p-4 shadow-[0_12px_24px_rgba(13,3,7,0.38)]">
                          <p className="text-[0.78rem] font-bold uppercase tracking-[0.14em] text-[rgba(255,200,216,0.9)]">Supporto immediato</p>
                          <p className="mt-2 text-[0.95rem] leading-[1.6] text-[rgba(255,232,239,0.93)]">
                            Se questa anomalia si ripete o blocca lavoro/studio, conviene fissare una diagnosi a domicilio.
                          </p>
                          <div className="mt-3 flex flex-wrap gap-2.5">
                            <a
                              href={`tel:${siteConfig.phoneInternational}`}
                              className="inline-flex items-center justify-center rounded-full border border-[#f2b3c0] bg-[linear-gradient(145deg,#ff334e,#c00a28_62%,#7d081a)] px-4 py-2 text-sm font-semibold text-white"
                            >
                              Chiama ora
                            </a>
                            <a
                              href={`https://wa.me/${siteConfig.phoneInternational.replace("+", "")}`}
                              className="inline-flex items-center justify-center rounded-full border border-[rgba(255,170,190,0.45)] bg-[rgba(255,255,255,0.1)] px-4 py-2 text-sm font-semibold text-[rgba(255,236,242,0.95)]"
                            >
                              WhatsApp
                            </a>
                          </div>
                        </section>
                      ) : null}
                    </section>
                  );
                })}

                <section className="mt-8 border-t border-[#e9edf4] pt-6">
                  <h2 className="text-[1.15rem] font-extrabold text-[#182338]">Recap operativo in 3 punti</h2>
                  <ol className="mt-3 list-decimal space-y-2 pl-5 text-[0.98rem] leading-[1.65] text-[#2a3850]">
                    <li>Identifica subito il sintomo principale e fai un controllo mirato.</li>
                    <li>Evita tentativi casuali se il problema torna o peggiora.</li>
                    <li>Prenota una diagnosi rapida a domicilio per risolvere in modo pulito.</li>
                  </ol>
                </section>

                {isPremiumExperimentPage ? (
                  <section className="mt-6 rounded-2xl border border-[#efd5dd] bg-[#fff8fb] p-5">
                    <h2 className="text-[1.05rem] font-extrabold text-[#6f1c34]">Errore costoso da evitare</h2>
                    <p className="mt-2 text-[0.98rem] leading-[1.65] text-[#4a2b36]">
                      Rimandare e provare soluzioni casuali quando il problema torna: spesso aumenta tempi, rischi su dati e costo finale dell&apos;intervento.
                    </p>
                  </section>
                ) : null}

                <section
                  className={`mt-6 rounded-2xl p-5 ${
                    isPremiumExperimentPage
                      ? "border border-[rgba(255,132,158,0.4)] bg-[linear-gradient(150deg,rgba(31,7,13,0.98),rgba(57,10,21,0.95)_48%,rgba(23,6,11,0.98)_100%)] shadow-[0_18px_30px_rgba(12,3,7,0.38)]"
                      : "border border-[#ead4dc] bg-[#fff9fb]"
                  }`}
                >
                  <h2 className={`text-[1.05rem] font-extrabold ${isPremiumExperimentPage ? "text-white" : "text-[#6f1c34]"}`}>
                    Approfondisci per zona e servizio
                  </h2>
                  <div className="mt-3 flex flex-wrap gap-2.5">
                    {post.relatedLinks.map((item) => (
                      <Link
                        key={`article-link-${item.label}`}
                        href={item.href}
                        className={`rounded-full px-3 py-1.5 text-[0.84rem] font-semibold transition-colors ${
                          isPremiumExperimentPage
                            ? "border border-[rgba(255,166,188,0.52)] bg-[rgba(255,255,255,0.08)] text-[rgba(255,234,240,0.95)] hover:bg-[rgba(255,255,255,0.16)]"
                            : "border border-[#e2a6b5] bg-white text-[#5c2340] hover:bg-[#fff1f5]"
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </section>

                <section
                  id="faq"
                  className={`mt-9 rounded-2xl p-5 ${
                    isPremiumExperimentPage
                      ? "border border-[rgba(255,132,158,0.4)] bg-[linear-gradient(152deg,rgba(30,7,12,0.98),rgba(61,11,23,0.95)_52%,rgba(23,6,11,0.98)_100%)] shadow-[0_18px_32px_rgba(12,3,7,0.4)]"
                      : "border border-[#edd0d8] bg-[#fff5f8]"
                  }`}
                >
                  <h2 className={`text-[1.22rem] font-extrabold ${isPremiumExperimentPage ? "text-white" : "text-[#711730]"}`}>
                    Domande frequenti
                  </h2>
                  <div className="mt-4 space-y-3">
                    {post.faq.map((item) => (
                      <details
                        key={item.question}
                        className={`rounded-xl p-4 ${
                          isPremiumExperimentPage
                            ? "border border-[rgba(255,167,188,0.45)] bg-[rgba(255,255,255,0.09)]"
                            : "border border-[#efd7de] bg-white"
                        }`}
                      >
                        <summary
                          className={`cursor-pointer list-none font-semibold ${isPremiumExperimentPage ? "text-white" : "text-[#1a2335]"}`}
                        >
                          {item.question}
                        </summary>
                        <p className={`mt-2 text-[0.98rem] leading-[1.65] ${isPremiumExperimentPage ? "text-[rgba(255,232,239,0.93)]" : "text-[#38445b]"}`}>
                          {item.answer}
                        </p>
                      </details>
                    ))}
                  </div>
                </section>

                <section
                  className={`mt-8 rounded-2xl p-5 ${
                    isPremiumExperimentPage
                      ? "border border-[rgba(255,132,158,0.4)] bg-[linear-gradient(148deg,rgba(30,7,12,0.98),rgba(57,10,21,0.95)_50%,rgba(23,6,11,0.98)_100%)] shadow-[0_18px_30px_rgba(12,3,7,0.38)]"
                      : "border border-[#e4d1d8] bg-[#fff9fb]"
                  }`}
                >
                  <h2 className={`text-[1.18rem] font-extrabold ${isPremiumExperimentPage ? "text-white" : "text-[#6f1c34]"}`}>
                    Continua a leggere
                  </h2>
                  <div className="mt-4 grid gap-3 md:grid-cols-3">
                    {related.slice(0, 3).map((item) => (
                      <Link
                        key={item.slug}
                        href={`/assistenza-a-domicilio/${item.slug}`}
                        className={`rounded-xl p-3 text-sm font-semibold leading-[1.45] transition-colors ${
                          isPremiumExperimentPage
                            ? "border border-[rgba(255,166,188,0.4)] bg-[rgba(255,255,255,0.08)] text-[rgba(255,235,241,0.95)] hover:bg-[rgba(255,255,255,0.14)]"
                            : "border border-[#ead4dc] bg-white text-[#2d3b52] hover:border-[#e2a6b5] hover:text-[#8f1d37]"
                        }`}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </section>
              </article>

              <aside id="zone-di-roma" className="space-y-4 xl:sticky xl:top-28 xl:self-start">
                <section className="rounded-2xl border border-[#dfe5ef] bg-white p-5 shadow-[0_14px_30px_rgba(16,24,40,0.08)]">
                  <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-[#6a7488]">Indice rapido</h2>
                  <ul className="mt-3 space-y-2">
                    {normalizedSections.map((section) => (
                      <li key={section.headingId}>
                        <a
                          href={`#${section.headingId}`}
                          className="text-[0.94rem] font-semibold leading-[1.4] text-[#2f3d57] hover:text-[#8f1d37]"
                        >
                          {section.shortTitle}
                        </a>
                      </li>
                    ))}
                  </ul>
                </section>

                {isPremiumExperimentPage ? (
                  <section className="rounded-2xl border border-[#dfe5ef] bg-white p-5 shadow-[0_14px_30px_rgba(16,24,40,0.08)]">
                    <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-[#6a7488]">Dati rapidi</h2>
                    <ul className="mt-3 space-y-2 text-[0.93rem] text-[#32425e]">
                      <li className="flex items-center justify-between">
                        <span>Tempo lettura</span>
                        <strong>{post.readMinutes} min</strong>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Parole stimate</span>
                        <strong>{wordCount}</strong>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Aggiornato</span>
                        <strong>{formatGuideDate(post.updatedAt)}</strong>
                      </li>
                    </ul>
                  </section>
                ) : null}

                <section id="recensioni" className="rounded-2xl border border-[#dfe5ef] bg-white p-5 shadow-[0_14px_30px_rgba(16,24,40,0.08)]">
                  <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-[#6a7488]">Articoli recenti</h2>
                  <ul className="mt-3 space-y-3">
                    {related.map((item) => (
                      <li key={item.slug}>
                        <Link
                          href={`/assistenza-a-domicilio/${item.slug}`}
                          className="text-[0.95rem] font-semibold leading-[1.4] text-[#2f3d57] hover:text-[#8f1d37]"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>

                <section id="servizi" className="rounded-2xl border border-[#dfe5ef] bg-white p-5 shadow-[0_14px_30px_rgba(16,24,40,0.08)]">
                  <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-[#6a7488]">Link utili</h2>
                  <ul className="mt-3 space-y-2.5">
                    {post.relatedLinks.map((item) => (
                      <li key={item.label}>
                        <Link href={item.href} className="text-[0.95rem] font-semibold text-[#2f3d57] hover:text-[#8f1d37]">
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>

                <section id="contatti" className="rounded-2xl border border-[#efc7d2] bg-[linear-gradient(160deg,#fff5f8,#fffafb)] p-5 shadow-[0_16px_30px_rgba(136,18,44,0.12)]">
                  <h2 className="text-[1rem] font-extrabold text-[#6d1630]">Serve una mano adesso?</h2>
                  <p className="mt-2 text-sm leading-[1.58] text-[#6e4552]">
                    Ti ricontattiamo rapidamente per organizzare l&apos;intervento nella tua zona.
                  </p>
                  <div className="mt-4 flex flex-col gap-2">
                    <a
                      href={`tel:${siteConfig.phoneInternational}`}
                      className="inline-flex items-center justify-center rounded-full border border-[#f2b3c0] bg-[linear-gradient(145deg,#ff334e,#c00a28_62%,#7d081a)] px-4 py-2 text-sm font-semibold text-white"
                    >
                      Chiama ora
                    </a>
                    <a
                      href={`https://wa.me/${siteConfig.phoneInternational.replace("+", "")}`}
                      className="inline-flex items-center justify-center rounded-full border border-[#d6deee] bg-white px-4 py-2 text-sm font-semibold text-[#40506a]"
                    >
                      WhatsApp
                    </a>
                  </div>
                </section>
              </aside>
            </div>
          </div>
        </section>

        <div className="fixed inset-x-3 bottom-3 z-40 flex gap-2 rounded-2xl border border-[rgba(255,126,150,0.38)] bg-[linear-gradient(155deg,rgba(30,7,12,0.96),rgba(62,11,23,0.93)_52%,rgba(22,6,11,0.96)_100%)] p-2 shadow-[0_16px_26px_rgba(10,2,6,0.45)] backdrop-blur md:hidden">
          <a
            href={`tel:${siteConfig.phoneInternational}`}
            className="inline-flex min-w-0 flex-1 items-center justify-center rounded-xl border border-[rgba(255,170,190,0.45)] bg-[linear-gradient(145deg,#ff334e,#c00a28_62%,#7d081a)] px-3 py-2.5 text-sm font-semibold text-white"
          >
            Chiama ora
          </a>
          <a
            href={`https://wa.me/${siteConfig.phoneInternational.replace("+", "")}`}
            className="inline-flex min-w-0 flex-1 items-center justify-center rounded-xl border border-[rgba(255,170,190,0.45)] bg-[rgba(255,255,255,0.1)] px-3 py-2.5 text-sm font-semibold text-[rgba(255,236,242,0.95)]"
          >
            WhatsApp
          </a>
        </div>

        <LuxuryFooterSectionSaved />
      </main>
    </>
  );
}
