import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Top Docs Deutschland",
    template: "%s | Top Docs Deutschland",
  },
  description:
    "Top Docs Deutschland – Beratung zu Pässen, deutschen Führerscheinen, beglaubigten Übersetzungen (ADAC), Umschreibung ausländischer Fahrerlaubnisse, Aufenthaltstiteln, Arbeitserlaubnis und MPU.",
  applicationName: "Top Docs Deutschland",
  keywords: [
    "deutscher führerschein",
    "führerschein übersetzen lassen",
    "beglaubigte übersetzung führerschein",
    "ADAC führerschein übersetzung",
    "mpu prüfung",
    "umschreibung ausländischer fahrerlaubnis",
    "aufenthaltstitel",
    "arbeitserlaubnis",
    "pass",
    "führerschein übersetzung englisch",
  ],
  authors: [{ name: "Top Docs Deutschland" }],
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "Top Docs Deutschland",
    description:
      "Beratung zu Pässen, Führerscheinen, Übersetzung (ADAC), Umschreibung ausländischer Fahrerlaubnisse, Aufenthaltstiteln, Arbeitserlaubnis und MPU.",
    siteName: "Top Docs Deutschland",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Top Docs Deutschland",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Docs Deutschland",
    description:
      "Pässe, Führerscheine, Übersetzungen (ADAC), Umschreibung, Aufenthaltstitel, Arbeitserlaubnis, MPU.",
    images: ["/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={`${inter.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
