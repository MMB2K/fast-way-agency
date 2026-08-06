import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MessageCircle, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { SectionHeading } from "@/components/SectionHeading";
import { useLanguage } from "@/i18n/LanguageContext";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Fast Way Agency" },
      {
        name: "description",
        content:
          "Contactez Fast Way Agency : email fastwayagency97@gmail.com, téléphone +222 37 44 89 97, WhatsApp. Réponse rapide et devis gratuit.",
      },
      { property: "og:title", content: "Contact — Fast Way Agency" },
      { property: "og:description", content: "Parlons de votre projet — réponse sous 24h." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useLanguage();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `[${form.service || t.contact.emailSubjectFallback}] ${t.contact.emailBodyRequestFrom} ${form.name}`,
    );
    const body = encodeURIComponent(
      `${t.contact.emailBodyName} : ${form.name}\n${t.contact.emailBodyEmail} : ${form.email}\n${t.contact.emailBodyPhone} : ${form.phone}\n${t.contact.emailBodyService} : ${form.service}\n\n${t.contact.emailBodyMessage} :\n${form.message}`,
    );
    window.location.href = `mailto:fastwayagency97@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <section className="bg-brand-gradient text-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
          <span className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur">
            {t.contact.badge}
          </span>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight text-balance sm:text-5xl">
            {t.contact.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/85 sm:text-lg">
            {t.contact.subtitle}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-5 md:grid-cols-3">
          <a
            href="mailto:fastwayagency97@gmail.com"
            className="group rounded-3xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-orange/40 hover:shadow-lg"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange/10 text-orange">
              <Mail className="h-6 w-6" />
            </div>
            <h3 className="mt-4 font-display text-lg font-bold">{t.contact.cardEmail}</h3>
            <p className="mt-1.5 break-all text-sm font-medium text-muted-foreground group-hover:text-foreground">
              fastwayagency97@gmail.com
            </p>
          </a>

          <a
            href="tel:+22237448997"
            className="group rounded-3xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-orange/40 hover:shadow-lg"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal/20 text-navy-deep">
              <Phone className="h-6 w-6" />
            </div>
            <h3 className="mt-4 font-display text-lg font-bold">{t.contact.cardPhone}</h3>
            <p className="mt-1.5 text-sm font-medium text-muted-foreground group-hover:text-foreground">
              +222 37 44 89 97
            </p>
          </a>

          <a
            href="https://wa.me/22237448997"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-3xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-whatsapp/60 hover:shadow-lg"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-whatsapp/15 text-whatsapp">
              <MessageCircle className="h-6 w-6" />
            </div>
            <h3 className="mt-4 font-display text-lg font-bold">{t.contact.cardWhatsapp}</h3>
            <p className="mt-1.5 text-sm font-medium text-muted-foreground group-hover:text-foreground">
              {t.contact.cardWhatsappText}
            </p>
          </a>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <SectionHeading
              align="left"
              eyebrow={t.contact.formEyebrow}
              title={t.contact.formTitle}
              description={t.contact.formDescription}
            />
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <Label htmlFor="name">{t.contact.fieldName}</Label>
                  <Input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="mt-1.5 rounded-xl"
                  />
                </div>
                <div>
                  <Label htmlFor="email">{t.contact.fieldEmail}</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="mt-1.5 rounded-xl"
                  />
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <Label htmlFor="phone">{t.contact.fieldPhone}</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="mt-1.5 rounded-xl"
                  />
                </div>
                <div>
                  <Label htmlFor="service">{t.contact.fieldService}</Label>
                  <Select
                    value={form.service}
                    onValueChange={(v) => setForm({ ...form, service: v })}
                  >
                    <SelectTrigger id="service" className="mt-1.5 rounded-xl">
                      <SelectValue placeholder={t.contact.fieldServicePlaceholder} />
                    </SelectTrigger>
                    <SelectContent>
                      {t.contact.serviceOptions.map((opt) => (
                        <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <Label htmlFor="message">{t.contact.fieldMessage}</Label>
                <Textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-1.5 rounded-xl"
                  placeholder={t.contact.fieldMessagePlaceholder}
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full rounded-full bg-orange text-white hover:bg-orange/90 sm:w-auto"
              >
                <Send className="mr-2 h-4 w-4" />
                {t.contact.submit}
              </Button>
            </form>
          </div>

          <aside className="lg:col-span-2">
            <div className="rounded-3xl bg-brand-gradient p-7 text-white shadow-lg">
              <h3 className="font-display text-xl font-bold">{t.contact.infoTitle}</h3>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
                  <span>Nouakchott, Mauritanie</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
                  <div>
                    <div>{t.contact.infoHours1}</div>
                    <div className="text-white/70">{t.contact.infoHours2}</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
                  <a href="tel:+22237448997" className="hover:underline">+222 37 44 89 97</a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
                  <a href="mailto:fastwayagency97@gmail.com" className="break-all hover:underline">
                    fastwayagency97@gmail.com
                  </a>
                </li>
              </ul>
              <a
                href="https://wa.me/22237448997"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-whatsapp/90"
              >
                <MessageCircle className="h-4 w-4" />
                {t.contact.infoWhatsapp}
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
