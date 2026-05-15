import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { tr, useLang } from "@/contexts/LanguageContext";

export const CtaBand = () => {
  const { lang } = useLang();
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-cocoa px-8 py-16 md:px-16 md:py-20 text-primary-foreground shadow-pop">
          <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-primary/30 blur-3xl" />
          <div className="pointer-events-none absolute -left-10 bottom-0 h-60 w-60 rounded-full bg-primary-glow/30 blur-3xl" />
          <div className="relative max-w-2xl">
            <h2 className="font-display text-4xl md:text-5xl font-extrabold leading-tight text-balance">
              {tr("cta_band_title", lang)}
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              {tr("cta_band_sub", lang)}
            </p>
            <Button variant="hero" size="xl" className="mt-8 gap-2">
              {tr("cta_start", lang)} <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
