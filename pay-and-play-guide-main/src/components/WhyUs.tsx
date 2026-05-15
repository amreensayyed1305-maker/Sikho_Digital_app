import { Camera, Languages, Clock, ShieldCheck } from "lucide-react";
import { tr, useLang } from "@/contexts/LanguageContext";

const features = [
  { icon: Camera, key1: "feat1_t", key2: "feat1_d" },
  { icon: Languages, key1: "feat2_t", key2: "feat2_d" },
  { icon: Clock, key1: "feat3_t", key2: "feat3_d" },
  { icon: ShieldCheck, key1: "feat4_t", key2: "feat4_d" },
];

export const WhyUs = () => {
  const { lang } = useLang();
  return (
    <section id="why" className="relative py-20 md:py-28 bg-gradient-soft">
      <div className="container">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {tr("why_kicker", lang)}
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-extrabold leading-tight text-balance">
            {tr("why_title", lang)}
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.key1} className="rounded-3xl border border-border/60 bg-card p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-warm">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-warm text-primary-foreground shadow-warm">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold">{tr(f.key1, lang)}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{tr(f.key2, lang)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
