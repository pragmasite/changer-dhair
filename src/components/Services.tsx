import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { Scissors, Palette, Sparkles, Zap } from "lucide-react";

const Services = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const icons = [Scissors, Palette, Sparkles, Zap];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">
            {t.services.label}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl mt-2">
            {t.services.title}
          </h2>
          <p className="text-foreground/70 mt-4 max-w-2xl mx-auto">
            {t.services.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {t.services.items.slice(0, 4).map((service, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                className="bg-secondary/50 rounded-lg p-6 shadow-soft hover:shadow-medium transition-all hover:-translate-y-1 group"
              >
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-accent/20 text-accent group-hover:bg-accent/30 transition-colors mb-4">
                  <Icon className="h-6 w-6" />
                </div>
                <h4 className="font-serif text-lg font-bold text-foreground mb-2">
                  {service.title}
                </h4>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {t.services.items.slice(4).map((service, index) => {
            const Icon = icons[(index + 4) % icons.length];
            return (
              <motion.div
                key={index + 4}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-secondary/50 rounded-lg p-6 shadow-soft hover:shadow-medium transition-all hover:-translate-y-1 group"
              >
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-accent/20 text-accent group-hover:bg-accent/30 transition-colors mb-4">
                  <Icon className="h-6 w-6" />
                </div>
                <h4 className="font-serif text-lg font-bold text-foreground mb-2">
                  {service.title}
                </h4>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
