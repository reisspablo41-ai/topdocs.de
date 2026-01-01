'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CircularProgress } from '@/components/ui/circular-progress';
import { TestimonialsSlider } from '@/components/testimonials-slider';
import { BlogSlider } from '@/components/blog-slider';
import { ContactForm } from '@/components/contact-form';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  return (
    <main className="space-y-20">
      <motion.section
        className="relative overflow-hidden min-h-screen flex items-center justify-center w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/29402986/pexels-photo-29402986.jpeg)',
          }}
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <motion.div
          className="relative z-20 mx-auto max-w-6xl w-full px-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Vertrauenswürdige Identitäts- und Genehmigungsservices
          </motion.h1>
          <motion.p
            className="mt-6 text-lg md:text-xl lg:text-2xl text-white/95 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Schnell, sicher und professionell – Beratung zu offiziellen Pässen,
            Führerscheinen, Ausweisen und Aufenthaltstiteln.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Link href="/#services">
              <Button size="lg">Jetzt starten</Button>
            </Link>
            <Link href="/#contact">
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                Support kontaktieren
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>

      <div className="mx-auto max-w-6xl px-4 py-12 space-y-20">
        <motion.section
          id="services"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="text-2xl font-semibold">
            Leistungen
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            <motion.div variants={fadeInUp}>
              <Card>
                <CardHeader>
                  <CardTitle>Pässe</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Klare Anforderungen, konforme Formulare und Zeitpläne
                    für die offizielle Ausstellung.
                  </p>
                  <Link href="/#how-it-works" className="mt-4 inline-block">
                    <Button variant="outline" size="sm">
                      Mehr erfahren
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Card>
                <CardHeader>
                  <CardTitle>Führerscheine</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Voraussetzungen, Prüfungen und Unterstützung bei
                    Verlängerungen.
                  </p>
                  <Link href="/#how-it-works" className="mt-4 inline-block">
                    <Button variant="outline" size="sm">
                      Mehr erfahren
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Card>
                <CardHeader>
                  <CardTitle>Ausweise</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Identitätsprüfung, Dokumenten-Checklisten und
                    Ersatzverfahren.
                  </p>
                  <Link href="/#how-it-works" className="mt-4 inline-block">
                    <Button variant="outline" size="sm">
                      Mehr erfahren
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Card>
                <CardHeader>
                  <CardTitle>Aufenthaltstitel</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Kategorien, Nachweise und typische Bearbeitungszeiten.
                  </p>
                  <Link href="/#how-it-works" className="mt-4 inline-block">
                    <Button variant="outline" size="sm">
                      Mehr erfahren
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            className="mt-10 grid gap-6 lg:grid-cols-2"
          >
            <motion.div variants={fadeInUp}>
              <Card>
                <CardHeader>
                  <CardTitle>Produktion & Lieferung</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Vorbereitungszeiten liegen meist bei 1–3 Tagen; die
                    Lieferung variiert je nach Dokument und Land. Wir bieten
                    realistische Zeitpläne, Status-Updates und Unterstützung.
                  </p>
                  <ul className="mt-4 list-disc space-y-2 pl-6">
                    <li>Checklisten passend zu Ihrem Standort</li>
                    <li>Abgabekalender gemäß Behördenprozessen</li>
                    <li>Meilenstein-Tracking und Erinnerungen</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Card>
                <CardHeader>
                  <CardTitle>Sicherheit & Vertraulichkeit</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Ihre Daten werden sorgfältig behandelt. Wir setzen auf
                    sichere Prozesse und datenschutzfreundliche Unterstützung.
                  </p>
                  <ul className="mt-4 list-disc space-y-2 pl-6">
                    <li>Minimale Datenerhebung</li>
                    <li>Vertrauliche Kommunikationskanäle</li>
                    <li>Datenschutzbewusste Zustellung</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Our Service Section */}
        <motion.section
          id="about"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="grid gap-8 lg:grid-cols-2 items-center"
        >
          <motion.div variants={fadeInUp} className="space-y-4 md:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-zinc-900">
              UNSER SERVICE
            </h2>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-zinc-900">
              BRAUCHEN SIE EIN DOKUMENT?
            </h3>
            <p className="text-lg text-zinc-800">
              Seit 1995 im Geschäft – wir bieten die besten Services.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                <p className="text-zinc-800 font-medium">Reisedokumente</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                <p className="text-zinc-800 font-medium">Reisegenehmigung</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                <p className="text-zinc-800 font-medium">SSD-Lösungen</p>
              </div>
            </div>
            <p className="text-base text-zinc-700 leading-relaxed">
              Erfahrung mit amerikanischen, europäischen, australischen, britischen
              und asiatischen Pässen. Echter deutscher Führerschein und Reisepass
              ebenfalls verfügbar.
            </p>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="relative overflow-hidden rounded-xl aspect-4/3"
          >
            <Image
              src="https://images.pexels.com/photos/4922080/pexels-photo-4922080.jpeg"
              alt="Person holding a passport"
              width={800}
              height={600}
              className="w-full h-full object-cover rounded-xl"
              unoptimized
            />
          </motion.div>
        </motion.section>
      </div>

      {/* Mission Section with Teal Background */}
      <motion.section
        id="mission"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeInUp}
        className="w-full bg-blue-600 text-white py-12 md:py-16 lg:py-20 px-4 md:px-6"
      >
        <div className="mx-auto max-w-6xl">
          <motion.h2
            variants={fadeInUp}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-center max-w-4xl mx-auto leading-tight mb-8"
          >
            Unsere Mission: Für Sie da sein und stets die passende Lösung finden
          </motion.h2>
          <motion.div variants={fadeInUp} className="flex justify-center">
            <Link href="/#contact">
              <Button
                size="lg"
                className="bg-white text-zinc-900 hover:bg-zinc-100 font-semibold"
              >
                Kontakt aufnehmen
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <div className="mx-auto max-w-6xl px-4 py-12 space-y-20">
        {/* Statistics Section with Counter Animation */}
        <motion.section
          id="stats"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="grid gap-8 lg:grid-cols-2 items-center"
        >
          <motion.div variants={fadeInUp} className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
              <CircularProgress
                value={315}
                max={1000}
                suffix="+"
                label="Abgeschlossene Fälle"
                size={120}
              />
              <CircularProgress
                value={966}
                max={1000}
                suffix="+"
                label="Zufriedene Kunden"
                size={120}
              />
              <CircularProgress
                value={868}
                max={1000}
                suffix="+"
                label="Experten"
                size={120}
              />
            </div>
            <div className="pt-4">
              <p className="text-xl md:text-2xl font-semibold text-zinc-900 mb-4">
                Über 10.000 zufriedene Kunden vertrauen uns
              </p>
              <p className="text-base text-zinc-700 leading-relaxed">
                Unsere Erfolgsquote spricht für sich. Wir liefern Ergebnisse,
                die Erwartungen übertreffen, und schaffen langfristiges Vertrauen.
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="relative overflow-hidden rounded-xl aspect-4/3"
          >
            <Image
              src="https://images.pexels.com/photos/45113/pexels-photo-45113.jpeg"
              alt="Professional document services"
              width={800}
              height={600}
              className="w-full h-full object-cover rounded-xl"
              unoptimized
            />
          </motion.div>
        </motion.section>
      </div>

      {/* Book Consultation Section */}
      <motion.section
        id="cta"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
        className="w-full bg-blue-600 text-white py-12 md:py-16 px-4 md:px-6"
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2 items-center">
            <motion.div variants={fadeInUp}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
                Wir liefern die besten Dokument- und Serviceleistungen
              </h2>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="flex justify-center md:justify-end"
            >
              <Link href="/#contact">
                <Button
                  size="lg"
                  className="w-full md:w-auto bg-white text-zinc-900 hover:bg-zinc-100 font-semibold"
                >
                  Beratung vereinbaren
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <div className="mx-auto max-w-6xl px-4 py-12 space-y-20">
        <motion.section
          id="why"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="text-2xl font-semibold">
            Warum wir
          </motion.h2>
          <ul className="mt-4 space-y-2 text-zinc-900">
            <li>Bewährte Zuverlässigkeit und klare, präzise Beratung.</li>
            <li>Professionelle Standards mit Fokus auf Rechtssicherheit.</li>
            <li>Sichere und vertrauliche Datenverarbeitung.</li>
            <li>Reaktionsschneller 24/7 Support.</li>
          </ul>
          <motion.div
            variants={staggerContainer}
            className="mt-8 grid gap-6 sm:grid-cols-2"
          >
            <motion.div variants={fadeInUp}>
              <Card>
                <CardHeader>
                  <CardTitle>Quality Standards</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    We focus on clarity and completeness. From forms to
                    supporting evidence, our guidance helps you avoid delays and
                    maintain quality throughout the process.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Card>
                <CardHeader>
                  <CardTitle>Global Awareness</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Requirements vary widely. We provide general guidance and
                    highlight jurisdiction-specific considerations so you can
                    prepare confidently.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.section>

        <section id="how-it-works">
          <h2 className="text-2xl font-semibold">How It Works</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>1. Ziel teilen</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Teilen Sie uns Ihr Anliegen und den Standort mit. Wir
                  skizzieren die Anforderungen.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>2. Vorbereiten & Prüfen</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Dokumente mit unserer Checkliste zusammenstellen. Wir prüfen
                  auf Vollständigkeit und Konformität.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>3. Einreichen & Nachverfolgen</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Bei der Behörde einreichen und Fristen mit unserem Support
                  im Blick behalten.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Unser Team reagiert rund um die Uhr, damit Sie vorankommen.
                  Zeitnahe Updates, Antworten und Verweise auf offizielle
                  Ressourcen.
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6">
                  <li>Checklistenhilfe und Dokumentenprüfung</li>
                  <li>Zeitplanberatung</li>
                  <li>Esklation und nächste Schritte</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Zustellung & Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Wenn möglich, liefern wir Status-Updates und Tipps für
                  sichere, zuverlässige Zustellung.
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6">
                  <li>Statusbenachrichtigungen</li>
                  <li>Sichere Zustellungspraktiken</li>
                  <li>Folgemaßnahmen und Verlängerungen</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="ready">
          <div className="rounded-xl border border-zinc-200 p-8 text-center">
            <h2 className="text-2xl font-semibold">Bereit zu starten?</h2>
            <p className="mt-2 text-zinc-800">
              Beginnen Sie mit Ihrem Dokumententyp oder kontaktieren Sie unseren
              24/7 Support.
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <Link href="/#services">
                <Button>Jetzt starten</Button>
              </Link>
              <Link href="/#contact">
                <Button variant="outline">Kontakt</Button>
              </Link>
            </div>
          </div>
        </section>

        <section id="seo" className="rounded-xl border border-zinc-200 p-8">
          <h2 className="text-2xl font-semibold">Führerschein & Übersetzung – SEO Themen</h2>
          <p className="mt-2 text-zinc-800">
            Hinweise zu Umschreibung, Übersetzung und internationalen Regelungen. Diese Stichworte helfen Ihnen, schnell die passenden Informationen zu finden.
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Übersetzung & ADAC</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Führerschein übersetzen lassen online</li>
                  <li>Amtliche und beglaubigte Übersetzung</li>
                  <li>ADAC Führerschein übersetzen, Preise</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Umschreibung & Prüfungen</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Umschreibung ausländischer Fahrerlaubnis</li>
                  <li>Theoretische und praktische Prüfung</li>
                  <li>MPU Prüfung, Abstinenznachweise</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Gültigkeit & International</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Deutscher Führerschein im Ausland</li>
                  <li>Internationaler Führerschein</li>
                  <li>Ablaufdatum und Umtausch nach 10 Jahren</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Kosten & Klassen</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Fahrschule Preisliste</li>
                  <li>A, A1, A2 und Anhänger</li>
                  <li>Türkischen Führerschein umschreiben</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Why Choose Our Platform Section */}
        <motion.section
          id="platform"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="grid lg:grid-cols-2 gap-0 overflow-hidden rounded-xl"
        >
          {/* Left Section - Blue/Teal Background */}
          <motion.div
            variants={fadeInUp}
            className="bg-blue-600 text-white p-8 md:p-12 lg:p-16 flex flex-col justify-center relative"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Über 10.000 zufriedene Kunden vertrauen uns
            </h2>
            <div className="relative mt-8 aspect-4/3 rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/842961/pexels-photo-842961.jpeg"
                alt="Person putting a passport on bag"
                width={800}
                height={600}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
          </motion.div>

          {/* Right Section - White Background */}
          <motion.div
            variants={fadeInUp}
            className="bg-white p-8 md:p-12 lg:p-16 flex flex-col justify-center relative"
          >
            <p className="text-sm text-zinc-600 uppercase tracking-wide mb-2">
              Unternehmen, auf die Sie setzen können
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 mb-6">
              Warum unsere Plattform
            </h2>
            <p className="text-lg text-zinc-700 mb-8 leading-relaxed">
              Höchste Qualität bei Dokumenten und Services – weltweit, 24/7.
            </p>

            <div className="space-y-6">
              {/* Global Partnership */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-zinc-900 mb-2">
                    Globale Partnerschaften
                  </h3>
                  <p className="text-zinc-700">
                    Partnerschaften mit Behörden und Institutionen.
                  </p>
                </div>
              </div>

              {/* Committed to Quality */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-zinc-900 mb-2">
                    Qualität verpflichtet
                  </h3>
                  <p className="text-zinc-700">
                    Erstklassige Dokumente und Services.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative mt-8 aspect-4/3 rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/1058959/pexels-photo-1058959.jpeg"
                alt="Brown leather duffel bag"
                width={800}
                height={600}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
          </motion.div>
        </motion.section>

        <section id="overview">
          <h2 className="text-2xl font-semibold">Detailed Overview</h2>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Pässe</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Wir erläutern Voraussetzungen, benötigte Nachweise und
                  typische Fristen für Passanträge.
                </p>
                <p className="mt-3">
                  Regionale Unterschiede, Terminvergabe und Nachverfolgung –
                  für eine sichere Vorbereitung.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Führerscheine</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Schritte für Lernführerschein, Theorie, Praxis und
                  Verlängerungen.
                </p>
                <p className="mt-3">
                  Typische Bearbeitungszeiten und Statusnachverfolgung mit
                  Hinweisen zu Portalen und Terminen.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Ausweise</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Unterstützung bei nationalen oder staatlichen Ausweisen –
                  Identitätsnachweise, Fotos, Gebühren und Ersatz.
                </p>
                <p className="mt-3">
                  Praktische Tipps zu Qualität und Abgabe – online und vor Ort.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Aufenthaltstitel</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Temporär, dauerhaft, Studium oder Arbeit – Kategorien und
                  Checklisten.
                </p>
                <p className="mt-3">
                  Verlängerungen, Statusänderungen und typische Prüfzeiten.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Sicherheitspraktiken</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Ihre Privatsphäre zählt. Datenschutzfreundliche Praktiken,
                  minimale Datenerhebung und sichere Kommunikation.
                </p>
                <p className="mt-3">
                  Sichere Aufbewahrung, sorgfältiger Umgang und Ordnung Ihrer
                  Unterlagen.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Support & Verfügbarkeit</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Fragen entstehen in jedem Schritt. Unser Team hilft rund um
                  die Uhr bei Anforderungen, Abgaben und nächsten Schritten.
                </p>
                <p className="mt-3">
                  Von schnellen Klärungen bis zur gründlichen Prüfung – klare
                  Kommunikation.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-10 rounded-xl border border-zinc-200 p-6">
            <h3 className="text-lg font-semibold">Hinweis zur Compliance</h3>
            <p className="mt-2 text-zinc-800">
              Alle Informationen dienen der Unterstützung rechtmäßiger Anträge
              bei offiziellen Behörden. Prüfen Sie stets die aktuellen
              Anforderungen Ihrer Zuständigkeit.
            </p>
            <p className="mt-2 text-zinc-800">
              Wir stellen keine Anträge für Sie; wir bieten Beratung und
              Unterstützung für Ihre eigenen Einreichungen.
            </p>
          </div>
        </section>

        <section id="testimonials">
          <h2 className="text-2xl font-semibold">Testimonials</h2>
          <p className="mt-2 text-zinc-600 mb-8">
            Das sagen unsere Kunden über Klarheit, Termintreue und Support.
          </p>
          <TestimonialsSlider />
        </section>

        {/* News & Articles Section */}
        <motion.section
          id="news"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-semibold text-center mb-8"
          >
            Blog & Artikel
          </motion.h2>
          <BlogSlider />
        </motion.section>


        <section id="contact">
          <h2 className="text-2xl font-semibold">Contact & Support</h2>
          <p className="mt-2 text-zinc-600">
            Wir sind rund um die Uhr erreichbar, um Sie zu unterstützen.
          </p>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>24/7 Unterstützung</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-2 pl-6">
                  <li>E-Mail: Kontakt@topdocz.de</li>
                  <li>Schnelle Antworten und praktische Schritte</li>
                  <li>Links zu offiziellen Ressourcen</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Erste Schritte</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Teilen Sie Dokumententyp und Standort. Sie erhalten eine
                  passende Checkliste und Zeitplanübersicht.
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6">
                  <li>Grundvoraussetzungen</li>
                  <li>Hinweise zu Nachweisen</li>
                  <li>Tipps zur Einreichung und Nachverfolgung</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8">
            <ContactForm />
          </div>
        </section>

        <section id="pricing">
          <h2 className="text-2xl font-semibold">Savings & Packages</h2>
          <p className="mt-2 text-zinc-600">
            Transparente Preise und Unterstützung für mehrere Antragsteller.
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Individuell</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Fokussierte Beratung und Dokumentenprüfung für einen Antrag.
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6">
                  <li>Checkliste und Prüfung</li>
                  <li>Zeitplanplanung</li>
                  <li>Support per E-Mail</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Mehrere Antragsteller</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Koordinierte Unterstützung für Haushalte oder Teams.
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6">
                  <li>Gruppierte Checklisten</li>
                  <li>Konsolidierte Updates</li>
                  <li>Flexible Terminierung</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </main>
  );
}
