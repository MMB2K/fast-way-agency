import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import logo from "@/assets/fast-way-logo.png";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/i18n/LanguageContext";

export function Header() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  const navItems = [
    { to: "/" as const, label: t.nav.home },
    { to: "/etudes" as const, label: t.nav.etudes },
    { to: "/partenaires" as const, label: t.nav.partenaires },
    { to: "/a-propos" as const, label: t.nav.apropos },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md print:hidden">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-20 sm:px-6">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logo} alt="Fast Way Agency" className="h-10 w-10 rounded-full object-cover sm:h-12 sm:w-12" />
          <span className="font-display text-base font-bold leading-tight text-navy-deep sm:text-lg">
            Fast Way<span className="hidden sm:inline"> Agency</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
              activeProps={{ className: "bg-muted text-navy-deep font-semibold" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <Button asChild className="rounded-full bg-orange text-white hover:bg-orange/90">
            <Link to="/contact">{t.nav.contactCta}</Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-base font-medium text-foreground/80 hover:bg-muted"
                activeProps={{ className: "bg-muted text-navy-deep font-semibold" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-2 w-full rounded-full bg-orange text-white hover:bg-orange/90">
              <Link to="/contact" onClick={() => setOpen(false)}>{t.nav.contactCta}</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
