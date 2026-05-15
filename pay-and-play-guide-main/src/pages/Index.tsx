import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { BentoCourses } from "@/components/BentoCourses";
import { WhyUs } from "@/components/WhyUs";
import { CtaBand } from "@/components/CtaBand";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <BentoCourses />
          <WhyUs />
          <CtaBand />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
