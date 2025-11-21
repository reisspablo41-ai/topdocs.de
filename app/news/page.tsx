"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface NewsArticle {
  slug: string;
  title: string;
  image: string;
  date: string;
  category: string;
  excerpt: string;
}

const newsArticles: NewsArticle[] = [
  {
    slug: "niederlassungserlaubnis-deutschland-seo-guide",
    title: "Niederlassungserlaubnis Deutschland – Kompakter Leitfaden",
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "21. Oktober 2025",
    category: "Compliance",
    excerpt:
      "Schritt-für-Schritt zur unbefristeten Aufenthaltserlaubnis: Voraussetzungen, Unterlagen, Behördentermine und Vorteile.",
  },
  {
    slug: "arbeitserlaubnis-deutschland-seo-zusammenfassung",
    title: "Arbeitserlaubnis Deutschland – Kurze Zusammenfassung",
    image:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "20. Oktober 2025",
    category: "Compliance",
    excerpt:
      "Voraussetzungen, Varianten und Antragstellung bei der Ausländerbehörde – kompakt erklärt.",
  },
  {
    slug: "am-fuhrerschein-alles-was-du-wissen-musst",
    title: "Am Führerschein: Alles, was du wissen musst",
    image: "https://onlinelegitdocuments.com/wp-content/uploads/2023/01/driver-1.jpg",
    date: "17. Oktober 2025",
    category: "Führerschein",
    excerpt:
      "Ablauf, Vorbereitungstipps und häufige Fehler – kurz und hilfreich.",
  },
  {
    slug: "motorrad-fuhrerschein-deutschland-alles-wissen",
    title: "Motorrad Führerschein in Deutschland – Überblick",
    image: "https://onlinelegitdocuments.com/wp-content/uploads/2023/01/driver-2.jpg",
    date: "18. Oktober 2025",
    category: "Führerschein",
    excerpt:
      "Klassen, Voraussetzungen und Erwerbsprozess verständlich dargestellt.",
  },
  {
    slug: "wann-fuhrerschein-umtauschen-alles-wissen",
    title: "Wann muss ich meinen Führerschein umtauschen?",
    image: "https://onlinelegitdocuments.com/wp-content/uploads/2023/01/driver-3.jpg",
    date: "19. Oktober 2025",
    category: "Führerschein",
    excerpt:
      "Fristen, Anforderungen und rechtzeitiger Umtausch kompakt.",
  },
];

const categories = ["Alle", "Führerschein", "Pässe", "Compliance"];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("Alle");

  const filteredArticles =
    activeCategory === "Alle"
      ? newsArticles
      : newsArticles.filter((article) => article.category === activeCategory);

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 space-y-12">
      {/* Hero */}
      <motion.section
        initial="initial"
        animate="animate"
        variants={fadeInUp}
        className="rounded-3xl bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 text-white p-10 md:p-16 shadow-lg"
      >
        <p className="text-sm uppercase tracking-[0.4em] text-white/80 mb-4">
          Blog & Aktualisierungen
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
          Bleiben Sie aktuell zu Identität, Genehmigungen und Compliance.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white/90 max-w-3xl">
          Praktische Hinweise, Erinnerungen und Einblicke, um Anforderungen sicher zu erfüllen.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/contact">
            <Button className="bg-white text-blue-700 hover:bg-zinc-100">
              Mit Experten sprechen
            </Button>
          </Link>
          <a
            href="#latest-news"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white font-semibold"
          >
            Aktuelle Beiträge ansehen
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </motion.section>

      {/* Filters */}
      <section className="space-y-4">
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "bg-blue-600 text-white shadow-sm"
                  : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <p className="text-sm text-zinc-500">
          Showing {filteredArticles.length} article{filteredArticles.length !== 1 ? "s" : ""} in{" "}
          {activeCategory === "All" ? "all categories" : activeCategory}
        </p>
      </section>

      {/* News Cards */}
      <motion.section
        id="latest-news"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {filteredArticles.map((article) => (
          <motion.div key={article.slug} variants={fadeInUp}>
            <Card className="h-full flex flex-col overflow-hidden">
              <div className="relative w-full h-52">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  unoptimized
                />
                <span className="absolute top-4 left-4 inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
                  {article.category}
                </span>
              </div>
              <CardHeader className="flex-1">
                <p className="text-xs uppercase tracking-wider text-zinc-500 mb-2">
                  {article.date}
                </p>
                <CardTitle className="text-xl leading-tight text-zinc-900">
                  <Link href={`/news/${article.slug}`} className="hover:text-blue-600 transition-colors">
                    {article.title}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <p className="text-sm text-zinc-700 leading-relaxed">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <Link
                    href={`/news/${article.slug}`}
                    className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1"
                  >
                    Read more
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <span className="text-xs text-zinc-500 uppercase tracking-wide">3 min read</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.section>

      {/* CTA */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="rounded-2xl border border-zinc-200 p-8 text-center space-y-4"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-zinc-900">
          Need personalized guidance for your next document?
        </h2>
        <p className="text-zinc-700 max-w-2xl mx-auto">
          Our consultants monitor global compliance updates so you don&apos;t have to. Reach out for
          tailored checklists, document reviews, and expedited scheduling support.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact">
            <Button>Contact us</Button>
          </Link>
          <Link href="/how-to-order">
            <Button variant="outline">How to order</Button>
          </Link>
        </div>
      </motion.section>
    </main>
  );
}


