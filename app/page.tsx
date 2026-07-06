"use client";

import { useI18n } from "@/lib/i18n";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { StatBar } from "@/components/sections/StatBar";
import { TrustSnapshot } from "@/components/sections/TrustSnapshot";
import { About } from "@/components/sections/About";
import { WhyMoving } from "@/components/sections/WhyMoving";
import { Financial } from "@/components/sections/Financial";
import { Dogs } from "@/components/sections/Dogs";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { Timeline } from "@/components/sections/Timeline";
import { Faq } from "@/components/sections/Faq";
import { Availability } from "@/components/sections/Availability";
import { Closing } from "@/components/sections/Closing";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  const { t } = useI18n();

  return (
    <>
      <Header />
      <main>
        {/* 1 — Who is this person? */}
        <Hero />
        {/* At-a-glance credibility */}
        <StatBar />
        {/* 2 — Can I trust him? */}
        <TrustSnapshot />
        {/* About / values */}
        <About />
        {/* 4 — Why is he moving? */}
        <WhyMoving />
        {/* Can he pay? — the #1 landlord question */}
        <Financial />
        {/* 5 — What about the dogs? */}
        <Dogs />
        {/* 6 — Will the dogs be a problem in an apartment? */}
        <FeatureGrid
          id="apartment"
          heading={t.apartment.heading}
          subheading={t.apartment.subheading}
          cards={t.apartment.cards}
        />
        {/* 6b — Will he take care of my apartment? */}
        <FeatureGrid
          id="care"
          heading={t.care.heading}
          subheading={t.care.subheading}
          cards={t.care.cards}
          alt
        />
        {/* 3 — Is his income / life stable? */}
        <Timeline />
        {/* 9 — Remaining questions */}
        <Faq />
        {/* Logistics — ready when you are */}
        <Availability />
        {/* 10 — Closing */}
        <Closing />
        {/* 7 — Can I contact him? */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
