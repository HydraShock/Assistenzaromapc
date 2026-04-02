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
      <ServicesGridSection />
      <div id="zone-di-roma">
        <CoverageZonesSection />
      </div>
      <div id="contatti">
        <AppointmentContactSection />
      </div>
      <CrimsonLampCardsSection variant="super-red" />
      <div id="recensioni">
        <ClientReviewsSection />
      </div>
      <UltraRapidRomeSection />
      <div id="faq">
        <PremiumFaqSection idPrefix="premium-faq-ciccio" />
      </div>
      <LuxuryFooterSectionSaved />
    </main>
  );
}
