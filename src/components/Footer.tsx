import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/fast-way-logo.png";
import { useLanguage } from "@/i18n/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="mt-20 bg-navy-deep text-white print:hidden">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="Fast Way Agency" className="h-12 w-12 rounded-full" />
            <span className="font-display text-lg font-bold">Fast Way Agency</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            {t.footer.tagline}
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-teal">
            {t.footer.navigation}
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li><Link to="/" className="hover:text-orange">{t.nav.home}</Link></li>
            <li><Link to="/etudes" className="hover:text-orange">{t.nav.etudes}</Link></li>
            <li><Link to="/tourisme-medical" className="hover:text-orange">{t.nav.medical}</Link></li>
            <li><Link to="/mauritanie" className="hover:text-orange">{t.nav.mauritanie}</Link></li>
            <li><Link to="/contact" className="hover:text-orange">{t.footer.contact}</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-teal">
            {t.footer.contact}
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
              <a href="mailto:fastwayagency97@gmail.com" className="break-all hover:text-orange">
                fastwayagency97@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
              <a href="tel:+22237448997" className="hover:text-orange">+222 37 44 89 97</a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
              <span>Nouakchott, Mauritanie</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-5 text-center text-xs text-white/50 sm:px-6">
          © {new Date().getFullYear()} Fast Way Agency. {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}
