import { LandingPage } from "@/components/landing/LandingPage";
import { mainServiceAreas, seoFaq, siteConfig } from "@/lib/seo";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  name: siteConfig.name,
  url: siteConfig.siteUrl,
  image: `${siteConfig.siteUrl}/backgrounds/chat.webp`,
  description:
    "Assistenza informatica a domicilio a Roma per riparazione PC e notebook, rete Wi-Fi, stampanti e supporto tecnico rapido.",
  telephone: siteConfig.phoneInternational,
  email: siteConfig.email,
  priceRange: "EUR",
  areaServed: [
    { "@type": "City", name: "Roma" },
    ...mainServiceAreas.map((zone) => ({ "@type": "Place", name: zone })),
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.city,
    addressRegion: siteConfig.region,
    addressCountry: siteConfig.country,
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: siteConfig.phoneInternational,
      availableLanguage: ["Italian"],
      areaServed: "Roma",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servizi assistenza informatica a domicilio",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Riparazione PC e notebook" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Assistenza Wi-Fi e rete domestica" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Configurazione stampanti e periferiche" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Recupero dati e backup" } },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: seoFaq.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <LandingPage />
    </>
  );
}
