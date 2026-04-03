import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import restoBackground from "@/resto.png";
import { LuxuryFooterSectionSaved } from "@/components/landing/LuxuryFooterSectionSaved";
import { LuxuryTopNavbar } from "@/components/landing/LuxuryTopNavbar";
import { localBlogPosts } from "@/lib/local-blog-posts";
import { siteConfig } from "@/lib/seo";

const pageTitle = "Blog assistenza a domicilio Roma: guide pratiche e casi reali";
const pageDescription =
  "Articoli pratici su assistenza informatica a domicilio a Roma: problemi comuni, guide zona per zona e consigli operativi.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "blog assistenza pc roma",
    "guide tecnico computer roma",
    "problemi pc roma",
    "assistenza informatica domicilio roma",
  ],
  alternates: {
    canonical: `${siteConfig.siteUrl}/assistenza-a-domicilio`,
  },
  openGraph: {
    type: "website",
    url: `${siteConfig.siteUrl}/assistenza-a-domicilio`,
    title: pageTitle,
    description: pageDescription,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    images: [
      {
        url: "/backgrounds/cagare.png",
        width: 1920,
        height: 1080,
        alt: "Blog assistenza a domicilio Roma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/backgrounds/cagare.png"],
  },
};

function formatGuideDate(value: string): string {
  return new Date(value).toLocaleDateString("it-IT", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function AssistenzaADomicilioPage() {
  const [featuredPost, ...otherPosts] = localBlogPosts;
  if (!featuredPost) {
    return null;
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.siteUrl },
      { "@type": "ListItem", position: 2, name: "Assistenza a domicilio", item: `${siteConfig.siteUrl}/assistenza-a-domicilio` },
    ],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Articoli assistenza a domicilio Roma",
    itemListElement: localBlogPosts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${siteConfig.siteUrl}/assistenza-a-domicilio/${post.slug}`,
      name: post.title,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <main id="home" className="overflow-x-clip bg-[#eceff3] text-[#101521]">
        <LuxuryTopNavbar />
        <div id="zone-di-roma" className="scroll-mt-28" />
        <div id="recensioni" className="scroll-mt-28" />
        <div id="faq" className="scroll-mt-28" />

        <section className="relative isolate min-h-[32vh] overflow-hidden border-b border-[#2d0b11] pt-24 sm:min-h-[38vh] sm:pt-28">
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
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(24,6,10,0.78)_0%,rgba(24,6,10,0.62)_48%,rgba(24,6,10,0.24)_100%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_58%_at_22%_30%,rgba(255,52,82,0.28),rgba(255,52,82,0)_74%)]" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-[linear-gradient(180deg,rgba(24,6,10,0)_0%,rgba(24,6,10,0.32)_100%)]" />

          <div className="relative z-10 mx-auto w-full max-w-[1560px] px-6 pb-12 md:px-10 md:pb-14 lg:px-14">
            <nav className="mb-8 text-sm text-[rgba(255,228,234,0.9)]">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white">Assistenza a domicilio</span>
            </nav>

            <p className="inline-flex rounded-full border border-[rgba(255,183,197,0.62)] bg-[rgba(23,5,10,0.68)] px-4 py-1 text-[0.68rem] font-semibold tracking-[0.16em] text-[rgba(255,223,232,0.98)]">
              BLOG TECNICO ROMA
            </p>
            <h1
              className="mt-5 max-w-[18ch] text-balance text-[clamp(2.05rem,4.4vw,4.4rem)] font-extrabold leading-[0.94] tracking-[-0.03em] text-white"
              style={{ fontFamily: "var(--font-space)" }}
            >
              Problemi reali, guide chiare e soluzioni a domicilio
            </h1>
            <p className="mt-5 max-w-[70ch] text-[clamp(1rem,1.35vw,1.15rem)] leading-[1.74] text-[rgba(255,230,236,0.94)]">
              Articoli progettati per convertire e posizionare: consigli pratici, casi reali, zone coperte e link diretti ai servizi.
            </p>
          </div>
        </section>

        <section id="servizi" className="relative bg-[#eceff3] pb-16 pt-8">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(64%_50%_at_50%_0%,rgba(255,46,79,0.12),rgba(255,46,79,0)_70%)]" />

          <div className="relative z-10 mx-auto w-full max-w-[1560px] px-5 md:px-10 lg:px-14">
            <article className="mb-6 overflow-hidden rounded-[26px] border border-[#d7deea] bg-white shadow-[0_20px_42px_rgba(16,24,40,0.1)]">
              <div className="grid xl:grid-cols-[1.15fr_1fr]">
                <div className="relative min-h-[320px]">
                  <Image
                    src={featuredPost.heroImage}
                    alt={featuredPost.heroImageAlt}
                    fill
                    quality={95}
                    sizes="(max-width: 1280px) 100vw, 60vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,2,6,0.15),rgba(12,2,6,0.72))]" />
                </div>
                <div className="p-6 md:p-8">
                  <p className="inline-flex rounded-full border border-[#e8bdc8] bg-[#fff4f7] px-2.5 py-0.5 text-xs font-semibold text-[#8f1d37]">
                    Articolo in evidenza
                  </p>
                  <h2 className="mt-3 text-[clamp(1.7rem,2.8vw,2.45rem)] font-extrabold leading-[1.04] text-[#131c2f]">{featuredPost.title}</h2>
                  <p className="mt-3 text-[1rem] leading-[1.7] text-[#52607a]">{featuredPost.excerpt}</p>
                  <div className="mt-4 flex flex-wrap gap-2 text-xs text-[#6f7d96]">
                    <span>{featuredPost.readMinutes} min</span>
                    <span>&middot;</span>
                    <span>{formatGuideDate(featuredPost.updatedAt)}</span>
                    <span>&middot;</span>
                    <span>{featuredPost.zoneLabel}</span>
                  </div>
                  <Link
                    href={`/assistenza-a-domicilio/${featuredPost.slug}`}
                    className="mt-5 inline-flex rounded-full border border-[#f2b3c0] bg-[linear-gradient(145deg,#ff334e,#c00a28_62%,#7d081a)] px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_18px_rgba(136,18,44,0.32)] transition-all duration-250 hover:brightness-110"
                  >
                    Leggi articolo completo
                  </Link>
                </div>
              </div>
            </article>

            <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
              {otherPosts.map((post) => (
                <article
                  key={post.slug}
                  className="overflow-hidden rounded-2xl border border-[#dde3ec] bg-white shadow-[0_14px_30px_rgba(16,24,40,0.08)]"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={post.heroImage}
                      alt={post.heroImageAlt}
                      fill
                      quality={92}
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,2,5,0)_38%,rgba(8,2,5,0.74)_100%)]" />
                  </div>
                  <div className="p-5">
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full border border-[#e8bdc8] bg-[#fff4f7] px-2.5 py-0.5 text-[0.72rem] font-semibold text-[#8f1d37]">
                        {post.problemLabel}
                      </span>
                      <span className="rounded-full border border-[#d8e0ef] bg-[#f3f7ff] px-2.5 py-0.5 text-[0.72rem] font-semibold text-[#44526a]">
                        {post.zoneLabel}
                      </span>
                    </div>
                    <h2 className="mt-3 text-[1.32rem] font-extrabold leading-[1.12] text-[#131c2f]">{post.title}</h2>
                    <p className="mt-3 text-[0.97rem] leading-[1.64] text-[#52607a]">{post.excerpt}</p>
                    <div className="mt-3 flex flex-wrap gap-2 text-xs text-[#6f7d96]">
                      <span>{post.readMinutes} min</span>
                      <span>&middot;</span>
                      <span>{formatGuideDate(post.updatedAt)}</span>
                    </div>
                    <Link
                      href={`/assistenza-a-domicilio/${post.slug}`}
                      className="mt-4 inline-flex rounded-full border border-[#f2b3c0] bg-[linear-gradient(145deg,#ff334e,#c00a28_62%,#7d081a)] px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_18px_rgba(136,18,44,0.32)] transition-all duration-250 hover:brightness-110"
                    >
                      Leggi articolo
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <div id="contatti" className="scroll-mt-28" />
        <LuxuryFooterSectionSaved />
      </main>
    </>
  );
}
