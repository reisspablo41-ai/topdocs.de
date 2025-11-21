"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "fuehrerschein-uebersetzen-lassen-adac-preise",
    title: "Führerschein übersetzen lassen: Amtlich, online & ADAC Preise",
    excerpt: "Wann braucht man eine beglaubigte Übersetzung und wie teuer ist die ADAC Übersetzung?",
    image: "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "20. Oktober 2025",
    author: "Admin",
  },
  {
    id: 2,
    slug: "umschreibung-auslaendischer-fahrerlaubnis-deutschland",
    title: "Umschreibung einer ausländischen Fahrerlaubnis in Deutschland",
    excerpt: "Voraussetzungen, Fristen und benötigte Unterlagen für die Umschreibung.",
    image: "https://images.pexels.com/photos/532001/pexels-photo-532001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "20. Oktober 2025",
    author: "Admin",
  },
  {
    id: 3,
    slug: "mpu-pruefung-ablauf-tipps-abstinenznachweise",
    title: "MPU Prüfung: Ablauf, Vorbereitung und Abstinenznachweise",
    excerpt: "So bestehen Sie die MPU: Vorbereitung, Gutachten und Nachweise.",
    image: "https://images.pexels.com/photos/590821/pexels-photo-590821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "19. Oktober 2025",
    author: "Admin",
  },
  {
    id: 4,
    slug: "fahrschule-preisliste-deutschland-2025",
    title: "Fahrschule Preisliste 2025: Klassen A, A1, A2, BE",
    excerpt: "Kostenüberblick für Motorradklassen und Führerschein mit Anhänger.",
    image: "https://images.pexels.com/photos/261042/pexels-photo-261042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "18. Oktober 2025",
    author: "Admin",
  },
  {
    id: 5,
    slug: "internationaler-fuehrerschein-deutschland-gueltigkeit",
    title: "Internationaler Führerschein: Beantragung und Gültigkeit",
    excerpt: "Wann ist der internationale Führerschein nötig und wie lange gilt er?",
    image: "https://images.pexels.com/photos/1051071/pexels-photo-1051071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "18. Oktober 2025",
    author: "Admin",
  },
  {
    id: 6,
    slug: "deutscher-fuehrerschein-umtausch-10-jahre-ablaufdatum",
    title: "Deutscher Führerschein: Umtausch nach 10 Jahren",
    excerpt: "Fristen, Unterlagen und Ablauf beim Pflichtumtausch alter Führerscheine.",
    image: "https://images.pexels.com/photos/97050/pexels-photo-97050.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "17. Oktober 2025",
    author: "Admin",
  },
  {
    id: 7,
    slug: "tuerkischer-fuehrerschein-umschreiben-deutschland",
    title: "Türkischen Führerschein umschreiben: Ablauf und Dokumente",
    excerpt: "Welche Nachweise werden verlangt und wann sind Prüfungen nötig?",
    image: "https://images.pexels.com/photos/2549989/pexels-photo-2549989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "17. Oktober 2025",
    author: "Admin",
  },
  {
    id: 8,
    slug: "adac-fuehrerschein-uebersetzung-preis-leitfaden",
    title: "ADAC Führerschein Übersetzung: Preis und Leitfaden",
    excerpt: "So läuft die ADAC-Übersetzung ab und damit rechnen Sie bei den Kosten.",
    image: "https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "16. Oktober 2025",
    author: "Admin",
  },
];

export function BlogSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(4);
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const totalSlides = Math.ceil(blogPosts.length / visibleCount);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 6000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const getVisiblePosts = () => {
    const start = currentIndex * visibleCount;
    return blogPosts.slice(start, start + visibleCount);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="relative">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <AnimatePresence mode="wait">
          {getVisiblePosts().map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Link href={`/blog/${post.slug}`}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="relative aspect-video overflow-hidden rounded-t-xl">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={560}
                      height={420}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  </div>
                  <CardContent className="pt-4">
                    <div className="flex items-center gap-2 text-xs text-zinc-600 mb-2">
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-zinc-900 mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-zinc-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <span className="text-sm font-medium text-blue-600 hover:text-blue-700">
                      Weiterlesen →
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={goToPrev}
          className="p-2 rounded-full border border-zinc-300 hover:bg-blue-50 hover:border-blue-600 transition-colors"
          aria-label="Previous posts"
        >
          <svg
            className="w-5 h-5 text-zinc-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <div className="flex gap-2">
          {[...Array(totalSlides)].map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-blue-600 w-8"
                  : "bg-zinc-300 hover:bg-zinc-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={goToNext}
          className="p-2 rounded-full border border-zinc-300 hover:bg-blue-50 hover:border-blue-600 transition-colors"
          aria-label="Next posts"
        >
          <svg
            className="w-5 h-5 text-zinc-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

