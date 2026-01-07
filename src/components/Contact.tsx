import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: Phone,
      label: t.contact.phone,
      value: "+41 32 474 44 80",
      href: "tel:+41324744480",
    },
    {
      icon: Mail,
      label: t.contact.email,
      value: "elomiesch@gmail.com",
      href: "mailto:elomiesch@gmail.com",
    },
    {
      icon: MapPin,
      label: t.contact.address,
      value: "Route de Beurnevésin 24, 2933 Lugnez",
      href: "https://maps.google.com/?q=Route+de+Beurnevésin+24,+2933+Lugnez",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <span className="text-sm uppercase tracking-widest text-primary">
            {t.contact.label}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl mt-2">
            {t.contact.title1}
            <br />
            <span className="text-primary">{t.contact.title2}</span>
          </h2>
          <p className="text-foreground/70 mt-4">{t.contact.description}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <a
                  key={index}
                  href={item.href}
                  target={item.label === t.contact.address ? "_blank" : undefined}
                  rel={item.label === t.contact.address ? "noopener noreferrer" : undefined}
                  className="flex items-start gap-4 p-6 rounded-lg bg-secondary/50 hover:bg-secondary/80 transition-colors group"
                >
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-accent/20 text-accent group-hover:bg-accent/30 transition-colors flex-shrink-0 mt-0.5">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-serif font-semibold text-foreground mb-1">
                      {item.label}
                    </h4>
                    <p className="text-foreground/70 break-all">
                      {item.value}
                    </p>
                  </div>
                </a>
              );
            })}

            <div className="pt-4">
              <Button
                asChild
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <a href="tel:+41324744480">
                  <Phone className="h-5 w-5 mr-2" />
                  {t.contact.callNow}
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-lg overflow-hidden shadow-medium h-96 md:h-full min-h-96"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2721.5234847302444!2d7.098856!3d47.48434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478f7f8a9a9a9a9d%3A0x1234567890abcdef!2sRoute%20de%20Beurnevésin%2024%2C%202933%20Lugnez!5e0!3m2!1sen!2sch!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Changer d'Hair Location Map"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
