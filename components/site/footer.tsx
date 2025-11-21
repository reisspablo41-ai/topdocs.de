import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full bg-blue-600 text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Image
                src="/images/logo.png"
                alt="Top Docs Deutschland"
                width={160}
                height={36}
                priority
              />
            </div>
            <p className="text-sm text-white/90 mb-4">
              Vertrauenswürdige Identitäts- und Genehmigungsservices seit 1995.
              Professionelle Beratung zu Pässen, Führerscheinen, Ausweisen und
              Aufenthaltstiteln.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span>📞</span>
              <a 
                href="tel:+447404846207" 
                className="hover:text-white/80 transition-colors"
              >
                +447404846207
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm mt-2">
              <span>📧</span>
              <a 
                href="mailto:info@onlinelegitdocuments.com" 
                className="hover:text-white/80 transition-colors"
              >
                info@onlinelegitdocuments.com
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Leistungen</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  href="/#services" 
                  className="text-white/90 hover:text-white transition-colors"
                >
                  Pässe
                </Link>
              </li>
              <li>
                <Link 
                  href="/#services" 
                  className="text-white/90 hover:text-white transition-colors"
                >
                  Führerscheine
                </Link>
              </li>
              <li>
                <Link 
                  href="/#services" 
                  className="text-white/90 hover:text-white transition-colors"
                >
                  Ausweise
                </Link>
              </li>
              <li>
                <Link 
                  href="/#services" 
                  className="text-white/90 hover:text-white transition-colors"
                >
                  Aufenthaltstitel
                </Link>
              </li>
              <li>
                <Link 
                  href="/#services" 
                  className="text-white/90 hover:text-white transition-colors"
                >
                  Arbeitserlaubnis
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Schnellzugriff</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  href="/news" 
                  className="text-white/90 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  href="/#about" 
                  className="text-white/90 hover:text-white transition-colors"
                >
                  Über uns
                </Link>
              </li>
              <li>
                <Link 
                  href="/#how-it-works" 
                  className="text-white/90 hover:text-white transition-colors"
                >
                  Ablauf
                </Link>
              </li>
              <li>
                <Link 
                  href="/#pricing" 
                  className="text-white/90 hover:text-white transition-colors"
                >
                  Preise
                </Link>
              </li>
              <li>
                <Link 
                  href="/#contact" 
                  className="text-white/90 hover:text-white transition-colors"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Rechtliches & Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  href="/legal/privacy" 
                  className="text-white/90 hover:text-white transition-colors"
                >
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link 
                  href="/legal/terms" 
                  className="text-white/90 hover:text-white transition-colors"
                >
                  Nutzungsbedingungen
                </Link>
              </li>
              <li>
                <a 
                  href="https://wa.me/447404846207" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  WhatsApp-Support
                </a>
              </li>
              <li>
                <span className="text-white/90">24/7 Kundensupport</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/80">
            <p>
              © {new Date().getFullYear()} topdocs. Alle Rechte vorbehalten.
            </p>
            <p className="text-center md:text-right">
              Weltweit im Einsatz seit 1995
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}