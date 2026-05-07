import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CTABannerProps {
  title: string;
  subtitle?: string;
  ctaLabel?: string;
}

export function CTABanner({ title, subtitle, ctaLabel = "Nous contacter" }: CTABannerProps) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="overflow-hidden rounded-3xl bg-brand-gradient p-8 text-center text-white shadow-xl sm:p-14">
        <h2 className="font-display text-3xl font-bold text-balance sm:text-4xl">{title}</h2>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/80 sm:text-lg">{subtitle}</p>
        )}
        <Button
          asChild
          size="lg"
          className="mt-8 rounded-full bg-orange px-8 text-base font-semibold text-white hover:bg-orange/90"
        >
          <Link to="/contact">
            {ctaLabel} <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
