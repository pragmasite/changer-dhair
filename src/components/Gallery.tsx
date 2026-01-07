import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Gallery = () => {
  const { t, lang } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentSlide, setCurrentSlide] = useState(0);

  // Gallery descriptions in different languages
  const galleryItems = [
    {
      src: "/images/gallery-1.svg",
      alt: lang === "fr" ? "Coupe moderne" : lang === "de" ? "Moderner Schnitt" : "Modern Cut",
    },
    {
      src: "/images/gallery-2.svg",
      alt: lang === "fr" ? "Coloration tendance" : lang === "de" ? "Trendy Färbung" : "Trendy Coloring",
    },
    {
      src: "/images/gallery-3.svg",
      alt: lang === "fr" ? "Styling professionnel" : lang === "de" ? "Professionelle Frisur" : "Professional Styling",
    },
    {
      src: "/images/gallery-4.svg",
      alt: lang === "fr" ? "Extensions qualité" : lang === "de" ? "Hochwertige Erweiterungen" : "Quality Extensions",
    },
    {
      src: "/images/gallery-5.svg",
      alt: lang === "fr" ? "Lissage Kérasilk" : lang === "de" ? "Kérasilk-Glättung" : "Kérasilk Straightening",
    },
    {
      src: "/images/gallery-6.svg",
      alt: lang === "fr" ? "Mise en plis" : lang === "de" ? "Hochsteckfrisur" : "Updo Styling",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? galleryItems.length - 1 : prev - 1
    );
  };

  return (
    <section id="galerie" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">
            {t.gallery.label}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl mt-2">
            {t.gallery.title}
          </h2>
          <p className="text-foreground/70 mt-4 max-w-2xl mx-auto">
            {t.gallery.description}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Slider view for 6+ images */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative aspect-[16/10] bg-muted rounded-2xl overflow-hidden shadow-medium"
            >
              <img
                src={galleryItems[currentSlide].src}
                alt={galleryItems[currentSlide].alt}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-serif text-lg font-semibold">
                  {galleryItems[currentSlide].alt}
                </p>
              </div>
            </motion.div>

            {/* Navigation buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary/80 hover:bg-primary text-white rounded-full p-3 transition-colors z-10"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary/80 hover:bg-primary text-white rounded-full p-3 transition-colors z-10"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Slide indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {galleryItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentSlide
                      ? "bg-primary w-8"
                      : "bg-muted-foreground/50 w-2 hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Thumbnail grid */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mt-8">
            {galleryItems.map((item, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                }
                transition={{ duration: 0.6, delay: 0.2 + index * 0.05 }}
                onClick={() => setCurrentSlide(index)}
                className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                  index === currentSlide
                    ? "border-primary scale-105"
                    : "border-transparent hover:border-primary/50 opacity-70 hover:opacity-100"
                }`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full object-cover"
                />
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
