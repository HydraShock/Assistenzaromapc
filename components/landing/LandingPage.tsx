"use client";

import { AppointmentContactSection } from "./AppointmentContactSection";
import { ClientReviewsSection } from "./ClientReviewsSection";
import { CrimsonLampCardsSection } from "./CrimsonLampCardsSection";
import { PrimaryHeroSection } from "./PrimaryHeroSection";
// Optional: import { PrimaryHeroSectionWow } from "./PrimaryHeroSectionWow";
import { CoverageZonesSection } from "./CoverageZonesSection";
import { LuxuryFooterSectionSaved } from "./LuxuryFooterSectionSaved";
import { LuxuryTopNavbar } from "./LuxuryTopNavbar";
import { PremiumFaqSection } from "./PremiumFaqSection";
import { ServicesGridSection } from "./ServicesGridSection";
import { UltraRapidRomeSection } from "./UltraRapidRomeSection";

export function LandingPage() {
  return (
    <main className="overflow-x-clip bg-[#050505] text-white">
      <LuxuryTopNavbar />
      <div id="home">
        <PrimaryHeroSection />
        {/* To switch hero: replace <PrimaryHeroSection /> with <PrimaryHeroSectionWow /> */}
      </div>
      <div className="cv-auto">
        <ServicesGridSection />
      </div>
      <div id="zone-di-roma" className="cv-auto">
        <CoverageZonesSection />
      </div>
      <div id="contatti" className="cv-auto">
        <AppointmentContactSection />
      </div>
      <div className="cv-auto">
        <CrimsonLampCardsSection variant="super-red" />
      </div>
      <div id="recensioni" className="cv-auto">
        <ClientReviewsSection />
      </div>
      <div className="cv-auto">
        <UltraRapidRomeSection />
      </div>
      <div id="faq" className="cv-auto">
        <PremiumFaqSection idPrefix="premium-faq-ciccio" />
      </div>
      <div className="cv-auto">
        <LuxuryFooterSectionSaved />
      </div>
    </main>
  );
}
