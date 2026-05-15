import { Sparkles } from "lucide-react";
import { tr, useLang } from "@/contexts/LanguageContext";

export const Footer = () => {
  const { lang } = useLang();
  return (
    <footer id="help" className="border-t border-border/60 py-12">
      <div className="container flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2 font-display text-lg font-extrabold">
          <span className="grid h-9 w-9 place-items-center rounded-2xl bg-gradient-warm text-primary-foreground shadow-warm">
            <Sparkles className="h-4 w-4" />
          </span>
          {tr("brand", lang)}
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {tr("brand", lang)} — Digital literacy for Bharat. Made with ♥
        </p>
      </div>
    </footer>
  );
};
