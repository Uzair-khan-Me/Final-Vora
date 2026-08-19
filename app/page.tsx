import Hero from '@/components/Hero';
import SupportedSources from '@/components/SupportedSources';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Platforms from '@/components/Platforms';
import PrivacySection from '@/components/PrivacySection';
import TechnologySection from '@/components/TechnologySection';
import ComparisonSection from '@/components/ComparisonSection';
import DownloadCTA from '@/components/DownloadCTA';
import FAQ from '@/components/FAQ';
import Developer from '@/components/Developer';
import JsonLd from '@/components/JsonLd';
import { homePageJsonLd } from '@/lib/schema';

export default function HomePage() {
  return (
    <>
      <JsonLd data={homePageJsonLd} />
      <Hero />
      <SupportedSources />
      <Features />
      <HowItWorks />
      <Platforms />
      <PrivacySection />
      <TechnologySection />
      <ComparisonSection />
      <DownloadCTA />
      <FAQ />
      <Developer />
    </>
  );
}
