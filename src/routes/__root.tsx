import { Outlet, Link, createRootRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { useLanguage } from "@/i18n/LanguageContext";

function NotFoundComponent() {
  const { t } = useLanguage();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-bold text-navy-deep">404</h1>
        <h2 className="mt-4 font-display text-xl font-semibold">{t.notFound.title}</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          {t.notFound.text}
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-orange px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-orange/90"
          >
            {t.notFound.back}
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
