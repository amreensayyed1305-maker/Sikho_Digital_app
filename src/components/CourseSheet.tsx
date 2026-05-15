import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { Course } from "@/data/courses";
import { useLang } from "@/contexts/LanguageContext";
import { CheckCircle2 } from "lucide-react";

const pick = (o: Record<string, string | undefined> & { en: string }, lang: string) =>
  o[lang] ?? o.en;

export const CourseSheet = ({
  course,
  open,
  onOpenChange,
}: {
  course: Course | null;
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) => {
  const { lang } = useLang();
  if (!course) return null;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-full sm:max-w-xl p-0 border-l border-accent/10">
        <ScrollArea className="h-screen">
          <div className="bg-gradient-sunset px-8 pt-10 pb-8">
            <div className="text-5xl mb-4">{course.emoji}</div>
            <SheetHeader className="space-y-2 text-left">
              <SheetTitle className="font-display text-3xl font-bold text-accent">
                {pick(course.title, lang)}
              </SheetTitle>
              <SheetDescription className="text-accent/80 text-base">
                {pick(course.blurb, lang)}
              </SheetDescription>
            </SheetHeader>
          </div>

          <ol className="px-8 py-8 space-y-5">
            {course.steps.map((step, i) => (
              <li key={i} className="group relative flex gap-4 rounded-2xl border border-border/60 bg-card p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-warm">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-warm font-display text-lg font-bold text-primary-foreground shadow-warm">
                  {i + 1}
                </div>
                <div className="flex-1 space-y-2">
                  <h4 className="font-display text-lg font-semibold leading-tight">
                    {pick(step.title, lang)}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
  {pick(step.desc, lang)}
</p>

{step.image && (
  <img
    src={step.image}
    alt={pick(step.title, lang)}
    className="w-full rounded-2xl mt-4 shadow-lg"
  />
)}
                  {/* Illustrative phone screenshot frame */}
                  <div className="mt-3 relative aspect-[4/3] overflow-hidden rounded-xl border border-border/60 bg-gradient-soft">
                    <div className="absolute inset-3 rounded-lg bg-card shadow-inner flex flex-col">
                      <div className="flex items-center gap-1 px-3 py-2 border-b border-border/60">
                        <span className="h-2 w-2 rounded-full bg-destructive/60" />
                        <span className="h-2 w-2 rounded-full bg-primary/60" />
                        <span className="h-2 w-2 rounded-full bg-accent/40" />
                        <span className="ml-auto text-[10px] uppercase tracking-wider text-muted-foreground">
                          screen {i + 1}
                        </span>
                      </div>
                      <div className="flex-1 grid place-items-center text-5xl opacity-90">
                        {course.emoji}
                      </div>
                      <div className="px-3 py-2 border-t border-border/60 text-[11px] text-muted-foreground truncate">
                        {pick(step.title, lang)}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
            <li className="mt-6 flex items-center justify-center gap-2 rounded-2xl bg-secondary/60 p-5 text-accent">
              <CheckCircle2 className="h-5 w-5" />
              <span className="font-display font-semibold">You did it! Practice once on your own.</span>
            </li>
          </ol>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
