import { Nav } from "./nav";
import { Hero } from "./hero";
import { Manifesto } from "./manifesto";
import { ChaosCapability } from "./chaos-capability";
import { Program } from "./program";
import { Artifacts } from "./artifacts";
import { WhoWhy } from "./who-why";
import { Trust } from "./trust";
import { Enroll } from "./enroll";
import { FAQ } from "./faq";
import { FinalCTA } from "./final-cta";
import { Footer } from "./footer";

export function LandingPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="hero-viewport flex h-dvh flex-col">
        <div className="hero-aurora" aria-hidden="true" />
        <div className="relative z-10 flex min-h-0 flex-1 flex-col">
          <Nav />
          <Hero />
        </div>
      </div>
      <main>
        <Manifesto />
        <ChaosCapability />
        <Program />
        <Artifacts />
        <WhoWhy />
        <Trust />
        <Enroll />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
