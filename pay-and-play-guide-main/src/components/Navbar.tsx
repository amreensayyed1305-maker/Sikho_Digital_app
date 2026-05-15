import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { AuthDialog } from "./AuthDialog";
import { tr, useLang } from "@/contexts/LanguageContext";
import { Sparkles } from "lucide-react";

export const Navbar = () => {
  const { lang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [auth, setAuth] = useState<{ open: boolean; mode: "login" | "signup" }>({ open: false, mode: "login" });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/60 shadow-soft" : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between py-3">
          <a href="#top" className="flex items-center gap-2 font-display text-xl font-extrabold">
            <span className="grid h-9 w-9 place-items-center rounded-2xl bg-gradient-warm text-primary-foreground shadow-warm">
              <Sparkles className="h-4 w-4" />
            </span>
            <span>{tr("brand", lang)}</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground/70">
            <a href="#courses" className="hover:text-foreground transition-colors">{tr("nav_courses", lang)}</a>
            <a href="#why" className="hover:text-foreground transition-colors">{tr("nav_about", lang)}</a>
            <a href="#help" className="hover:text-foreground transition-colors">{tr("nav_help", lang)}</a>
          </nav>

          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <Button variant="ghost" size="sm" onClick={() => setAuth({ open: true, mode: "login" })} className="hidden sm:inline-flex">
              {tr("login", lang)}
            </Button>
            <Button variant="hero" size="sm" onClick={() => setAuth({ open: true, mode: "signup" })}>
              {tr("signup", lang)}
            </Button>
          </div>
        </div>
      </header>
      <AuthDialog open={auth.open} onOpenChange={(o) => setAuth((a) => ({ ...a, open: o }))} initial={auth.mode} />
    </>
  );
};
