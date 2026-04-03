import Image from "next/image";
import Link from "next/link";

import { localBlogPosts } from "@/lib/local-blog-posts";

const featuredGuides = localBlogPosts.slice(0, 6);

export function SeoGuidesTeaserSection() {
  return (
    <section id="guide-roma" className="relative -mt-px overflow-hidden bg-[#080306] py-14 md:py-18 lg:py-20">
      <Image
        src="/backgrounds/sfondotest2.png"
        alt=""
        fill
        quality={95}
        sizes="100vw"
        loading="lazy"
        className="pointer-events-none absolute inset-0 z-0 object-cover object-center opacity-[0.3]"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0.04)_18%,rgba(30,8,14,0.68)_44%,rgba(9,2,6,0.96)_100%)]" />
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(66%_52%_at_50%_8%,rgba(255,72,103,0.2),rgba(255,72,103,0)_72%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-24 bg-[linear-gradient(180deg,rgba(248,248,248,0.62)_0%,rgba(248,248,248,0.3)_30%,rgba(248,248,248,0)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-28 bg-[linear-gradient(180deg,rgba(9,2,6,0)_0%,rgba(28,5,11,0.54)_56%,rgba(88,10,24,0.48)_100%)]" />

      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-6 md:px-10 lg:px-12">
        <div className="mx-auto max-w-[900px] text-center">
          <p className="inline-flex rounded-full border border-[rgba(255,156,178,0.52)] bg-[rgba(27,5,11,0.78)] px-4 py-1 text-[0.68rem] font-semibold tracking-[0.14em] text-[rgba(255,218,227,0.98)]">
            GUIDE SEO LOCALI
          </p>
          <h2
            className="mx-auto mt-3 max-w-[16ch] text-[clamp(1.9rem,4.5vw,3.35rem)] font-extrabold leading-[0.95] tracking-[-0.02em] text-white"
            style={{ fontFamily: "var(--font-space)" }}
          >
            Problemi reali, soluzioni pratiche zona per zona
          </h2>
          <p className="mx-auto mt-3 max-w-[66ch] text-[rgba(255,218,228,0.9)]">
            Contenuti utili su PC lento, Wi-Fi, malware, stampanti e backup con indicazioni rapide e link diretti ai servizi.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {featuredGuides.map((guide) => {
            return (
              <article
                key={guide.slug}
                className="group relative overflow-hidden rounded-2xl border border-[rgba(255,122,151,0.46)] bg-[linear-gradient(160deg,rgba(20,4,10,0.97),rgba(11,3,8,0.96)_58%,rgba(42,8,18,0.9)_100%)] p-4 shadow-[0_22px_40px_rgba(0,0,0,0.62),0_0_24px_rgba(188,26,64,0.16),inset_0_1px_0_rgba(255,223,231,0.1)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[rgba(255,163,186,0.78)] hover:shadow-[0_30px_50px_rgba(0,0,0,0.72),0_0_36px_rgba(210,36,74,0.24),inset_0_1px_0_rgba(255,234,240,0.14)]"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(95%_54%_at_50%_0%,rgba(255,72,103,0.2),rgba(255,72,103,0)_74%)] opacity-95" />
                <div className="pointer-events-none absolute inset-x-[12%] top-0 h-px bg-[linear-gradient(90deg,rgba(255,175,194,0),rgba(255,175,194,0.92),rgba(255,175,194,0))]" />

                <div className="relative z-10">
                  <div className="flex flex-wrap gap-1.5">
                    <span className="rounded-full border border-[rgba(255,156,178,0.52)] bg-[rgba(28,5,12,0.76)] px-2 py-0.5 text-[0.7rem] font-semibold text-[rgba(255,218,227,0.96)]">
                      {guide.problemLabel}
                    </span>
                    <span className="rounded-full border border-[rgba(255,156,178,0.52)] bg-[rgba(28,5,12,0.76)] px-2 py-0.5 text-[0.7rem] font-semibold text-[rgba(255,218,227,0.96)]">
                      {guide.zoneLabel}
                    </span>
                  </div>

                  <h3 className="mt-2 text-[1.12rem] font-bold leading-[1.18] text-white">{guide.title}</h3>
                  <p className="mt-2 text-sm leading-[1.52] text-[rgba(255,219,229,0.9)]">{guide.excerpt}</p>

                  <Link
                    href={`/assistenza-a-domicilio/${guide.slug}`}
                    className="mt-3 inline-flex rounded-full border border-[rgba(255,177,191,0.82)] bg-[linear-gradient(145deg,#ff394f,#bf0a2b_58%,#730617)] px-3.5 py-1.5 text-xs font-semibold text-white shadow-[0_14px_24px_rgba(0,0,0,0.44),0_0_22px_rgba(255,45,84,0.34)] transition-all duration-250 hover:brightness-110"
                  >
                    Leggi articolo
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-7 text-center">
          <Link
            href="/assistenza-a-domicilio"
            className="inline-flex rounded-full border border-[rgba(255,196,207,0.82)] bg-[linear-gradient(145deg,#ff3b52,#be0b2c_58%,#720516)] px-6 py-2.5 text-sm font-bold text-white shadow-[0_14px_28px_rgba(0,0,0,0.48),0_0_24px_rgba(255,50,88,0.34)] transition-all duration-250 hover:brightness-110"
          >
            Vedi tutti gli articoli
          </Link>
        </div>
      </div>
    </section>
  );
}
