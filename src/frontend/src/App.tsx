import { Toaster } from "@/components/ui/sonner";
import AFISection from "./components/AFISection";
import ContactSection from "./components/ContactSection";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";
import ForWhomSection from "./components/ForWhomSection";
import HeroSection from "./components/HeroSection";
import HowItWorksSection from "./components/HowItWorksSection";
import Navigation from "./components/Navigation";
import PositioningSection from "./components/PositioningSection";
import WhatWeDoSection from "./components/WhatWeDoSection";
import WhyNowSection from "./components/WhyNowSection";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster
        theme="dark"
        position="top-right"
        toastOptions={{
          style: {
            background: "oklch(0.16 0.014 252)",
            border: "1px solid oklch(0.26 0.014 252)",
            color: "oklch(0.93 0.006 252)",
          },
        }}
      />
      <Navigation />
      <main>
        <HeroSection />
        <WhatWeDoSection />
        <WhyNowSection />
        <HowItWorksSection />
        <AFISection />
        <FeaturesSection />
        <ForWhomSection />
        <PositioningSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
