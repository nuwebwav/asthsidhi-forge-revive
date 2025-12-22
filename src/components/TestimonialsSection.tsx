import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    text: "Best part of Asthsidhi Metal is that they communicate well in advance. Set a plan, schedule & check twice before they supply. Their team has vast knowledge of stainless steel pipes and tubes. Excellent service!",
    author: "Rajesh Kumar",
    position: "Procurement Manager",
  },
  {
    text: "We use Asthsidhi Metal because their standard is quality, performance, and pricing. If I were to describe them in one word, it would be 'solid', just like their products.",
    author: "Amit Sharma",
    position: "Operations Director",
  },
  {
    text: "They bring a wealth of knowledge as well as a personal touch so often missing from other firms. They helped us to have a better handle on everything.",
    author: "Priya Patel",
    position: "Project Lead",
  },
  {
    text: "Outstanding quality and reliable delivery. Asthsidhi Metal has been our trusted partner for over 5 years. Their commitment to excellence is unmatched in the industry.",
    author: "Vikram Singh",
    position: "CEO, Steel Works Ltd",
  },
];

export const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-gradient-steel" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display text-sm tracking-[0.3em] uppercase">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-accent-foreground mt-4">
            What People <span className="text-gradient-copper">Say</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-2xl p-8 lg:p-12 shadow-elevated relative"
          >
            <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/20" />
            <p className="text-lg lg:text-xl text-card-foreground leading-relaxed mb-8 relative z-10">
              "{testimonials[currentIndex].text}"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-copper flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-xl">
                  {testimonials[currentIndex].author.charAt(0)}
                </span>
              </div>
              <div>
                <h4 className="font-display text-lg text-foreground">
                  {testimonials[currentIndex].author}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {testimonials[currentIndex].position}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-card hover:bg-primary text-foreground hover:text-primary-foreground transition-colors shadow-lg"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-primary w-6" : "bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-card hover:bg-primary text-foreground hover:text-primary-foreground transition-colors shadow-lg"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
