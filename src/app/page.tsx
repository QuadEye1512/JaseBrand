import { HeroSection } from "@/components/sections/hero-section";
import { ReportPatterns } from "@/components/sections/report-patterns";
import { TargetProfile } from "@/components/sections/target-profile";
import { ScamFlow } from "@/components/sections/scam-flow";
import { CtaSection } from "@/components/sections/cta-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <ReportPatterns />
      <TargetProfile />
      <ScamFlow />
      <CtaSection />
    </main>
  );
}
