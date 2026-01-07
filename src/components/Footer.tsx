import { useLanguage } from "@/hooks/useLanguage";
import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-2">
              Changer d'Hair
            </h3>
            <p className="text-background/80 text-sm mb-4">{t.footer.tagline}</p>
            <p className="text-background/70 text-sm leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">
              {t.footer.navigation}
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#a-propos"
                  className="text-background/80 hover:text-background transition-colors text-sm"
                >
                  {t.footer.about}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-background/80 hover:text-background transition-colors text-sm"
                >
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a
                  href="#galerie"
                  className="text-background/80 hover:text-background transition-colors text-sm"
                >
                  {t.nav.gallery}
                </a>
              </li>
              <li>
                <a
                  href="#horaires"
                  className="text-background/80 hover:text-background transition-colors text-sm"
                >
                  {t.nav.hours}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-background/80 hover:text-background transition-colors text-sm"
                >
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">
              {t.contact.label}
            </h4>
            <div className="space-y-3 text-sm mb-6">
              <a
                href="tel:+41324744480"
                className="flex items-center gap-2 text-background/80 hover:text-background transition-colors"
              >
                <Phone className="h-4 w-4" />
                +41 32 474 44 80
              </a>
              <a
                href="mailto:elomiesch@gmail.com"
                className="flex items-center gap-2 text-background/80 hover:text-background transition-colors break-all"
              >
                <Mail className="h-4 w-4 flex-shrink-0" />
                elomiesch@gmail.com
              </a>
              <a
                href="https://maps.google.com/?q=Route+de+Beurnevésin+24,+2933+Lugnez"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-background/80 hover:text-background transition-colors"
              >
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>Route de Beurnevésin 24<br />2933 Lugnez</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/SalondeCoiffureChangerdHair"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-background/20 text-background hover:bg-background/30 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/changer_d_hair"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-background/20 text-background hover:bg-background/30 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-background/20 pt-8">
          <p className="text-center text-background/70 text-sm">
            © 2024 Changer d'Hair. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
