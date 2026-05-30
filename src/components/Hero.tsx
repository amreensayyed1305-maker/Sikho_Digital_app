import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";
import { tr, useLang } from "@/contexts/LanguageContext";
import heroImg from "@/assets/hero-learning.jpg";

export const Hero = () => {
  const { lang } = useLang();

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-32 -left-24 h-[420px] w-[420px] rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-24 h-[420px] w-[420px] rounded-full bg-accent/15 blur-3xl" />

      <div className="container relative grid gap-12 md:grid-cols-2 md:items-center">
        <div className="animate-fade-up space-y-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            ● {tr("hero_kicker", lang)}
          </span>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] text-balance">
            {tr("hero_title", lang)}
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground leading-relaxed">
            {tr("hero_sub", lang)}
          </p>

          <div className="flex flex-wrap gap-3">
            <Button variant="hero" size="xl" className="gap-2">
              {tr("cta_start", lang)} <ArrowRight className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="xl" className="gap-2 rounded-full" asChild>
              <a href="#courses"><PlayCircle className="h-5 w-5" /> {tr("cta_browse", lang)}</a>
            </Button>
          </div>

          <dl className="flex gap-8 pt-4">
            {[
              { k: "10K+", v: tr("stat_learners", lang) },
              { k: "20+", v: tr("stat_courses", lang) },
              { k: "11", v: tr("stat_languages", lang) },
            ].map((s) => (
              <div key={s.v}>
                <dt className="font-display text-3xl font-bold text-accent">{s.k}</dt>
                <dd className="text-xs uppercase tracking-wider text-muted-foreground">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative animate-fade-up [animation-delay:120ms]">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-sunset blur-2xl opacity-60" />
          <div className="relative overflow-hidden rounded-[2rem] border border-accent/10 bg-card shadow-pop">
            <img src={heroImg} alt="Friendly digital literacy learning illustration" className="h-full w-full object-cover" />
          </div>
          <div className="animate-float absolute -left-6 top-10 hidden md:flex items-center gap-3 rounded-2xl bg-card/95 backdrop-blur px-4 py-3 shadow-warm border border-border/60">
            <span className="text-2xl">💸</span>
            <div className="text-sm">
              <div className="font-semibold">UPI Payment</div>
              <div className="text-xs text-muted-foreground">Step 4 of 6</div>
            </div>
          </div>
          <div className="animate-float [animation-delay:1.2s] absolute -right-4 bottom-10 hidden md:flex items-center gap-3 rounded-2xl bg-card/95 backdrop-blur px-4 py-3 shadow-warm border border-border/60">
            <span className="text-2xl">🚆</span>
            <div className="text-sm">
              <div className="font-semibold">Train ticket</div>
              <div className="text-xs text-muted-foreground">PNR ready</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
