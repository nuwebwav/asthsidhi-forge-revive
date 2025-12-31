import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";

const slides = [
  {
    image: hero1,
    subtitle: "Welcome to Astsiddhi Metal",
    title: "Trusted Metal Solutions Since Day One",
    highlight: "industrial Metal Raw Materials.",
  },
  {
    image: hero2,
    subtitle: "Welcome to Astsiddhi Metal",
    title: "Industry standards begins with imitation",
    highlight: "but ends in Innovation.",
  },
  {
    image: hero3,
    subtitle: "We are Astsiddhi Metal",
    title: "Quality that speaks for itself",
    highlight: "in every product we deliver.",
  },
  {
    image: hero4,
    subtitle: "We are Astsiddhi Metal",
    title: "Quality that speaks for itself",
    highlight: "in every product we deliver.",
  },
];

export const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section id="home" className="relative h-screen min-h-[600px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="absolute inset-0 w-full h-full object-cover"
            loading={currentSlide === 0 ? "eager" : "lazy"}
            {...(currentSlide === 0 ? { fetchPriority: "high" } : {})}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl"
        >
          <span className="inline-block text-secondary font-display text-sm tracking-[0.3em] uppercase mb-4">
            {slides[currentSlide].subtitle}
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6">
            {slides[currentSlide].title}
            <br />
            <span className="text-gradient-copper">{slides[currentSlide].highlight}</span>
          </h1>
          <Button variant="hero" size="xl" className="group">
            Contact Us
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-background/20 backdrop-blur-sm rounded-full text-primary-foreground hover:bg-primary transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-background/20 backdrop-blur-sm rounded-full text-primary-foreground hover:bg-primary transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${index === currentSlide
              ? "bg-primary w-8"
              : "bg-primary-foreground/50 hover:bg-primary-foreground/80"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
