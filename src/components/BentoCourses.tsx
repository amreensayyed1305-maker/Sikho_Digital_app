import { useState } from "react";
import { courses, type Course } from "@/data/courses";
import { tr, useLang } from "@/contexts/LanguageContext";
import { CourseSheet } from "./CourseSheet";
import { ArrowUpRight } from "lucide-react";

const sizeClass: Record<Course["size"], string> = {
  sm: "md:col-span-3 md:row-span-1",
  md: "md:col-span-4 md:row-span-1",
  lg: "md:col-span-6 md:row-span-2",
  xl: "md:col-span-8 md:row-span-2",
};

const toneClass: Record<Course["tone"], string> = {
  saffron: "bg-gradient-warm text-primary-foreground",
  peach: "bg-secondary text-secondary-foreground",
  cocoa: "bg-gradient-cocoa text-primary-foreground",
  cream: "bg-card text-foreground border border-border",
};

const pick = (o: Record<string, string | undefined> & { en: string }, lang: string) =>
  o[lang] ?? o.en;

export const BentoCourses = () => {
  const { lang } = useLang();
  const [active, setActive] = useState<Course | null>(null);

  return (
    <section id="courses" className="relative py-20 md:py-28">
      <div className="container">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {tr("section_courses_kicker", lang)}
            </span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-extrabold leading-tight text-balance">
              {tr("section_courses_title", lang)}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 md:auto-rows-[180px] gap-5">
          {courses.map((c, i) => (
            <button
              key={c.id}
              onClick={() => setActive(c)}
              className={`${sizeClass[c.size]} ${toneClass[c.tone]} group relative overflow-hidden rounded-3xl p-6 text-left shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-pop animate-fade-up`}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="absolute -right-6 -bottom-6 text-[7rem] leading-none opacity-20 group-hover:opacity-30 transition-opacity">
                {c.emoji}
              </div>
              <div className="relative flex h-full flex-col">
                <div className="flex items-start justify-between">
                  <span className="text-3xl">{c.emoji}</span>
                  <ArrowUpRight className="h-5 w-5 opacity-70 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
                <h3 className="mt-auto font-display text-xl md:text-2xl font-bold leading-tight">
                  {pick(c.title, lang)}
                </h3>
                <p className="mt-1 text-sm opacity-85 line-clamp-2">{pick(c.blurb, lang)}</p>
                <div className="mt-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider opacity-90">
                  <span>{c.steps.length} {tr("steps_count", lang)}</span>
                  <span>•</span>
                  <span>{tr("view_steps", lang)}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <CourseSheet course={active} open={!!active} onOpenChange={(o) => !o && setActive(null)} />
    </section>
  );
};
