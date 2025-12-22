import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    text: "Best part of Asthsidhi Metal is that they communicate well in advance. Set a plan, schedule & check twice before they supply. Their team has vast knowledge of stainless steel pipes and tubes. Excellent service!",
    author: "Rajesh Kumar",
    position: "Procurement Manager",
    company: "Steel Works Ltd",
    rating: 5,
  },
  {
    text: "We use Asthsidhi Metal because their standard is quality, performance, and pricing. If I were to describe them in one word, it would be 'solid', just like their products.",
    author: "Amit Sharma",
    position: "Operations Director",
    company: "Industrial Solutions",
    rating: 5,
  },
  {
    text: "They bring a wealth of knowledge as well as a personal touch so often missing from other firms. They helped us to have a better handle on everything.",
    author: "Priya Patel",
    position: "Project Lead",
    company: "Construct Pro",
    rating: 5,
  },
  {
    text: "Outstanding quality and reliable delivery. Asthsidhi Metal has been our trusted partner for over 5 years. Their commitment to excellence is unmatched in the industry.",
    author: "Vikram Singh",
    position: "CEO",
    company: "Metal Fab Industries",
    rating: 5,
  },
  {
    text: "The team at Asthsidhi Metal goes above and beyond to ensure customer satisfaction. Their technical expertise and prompt service have made them our go-to supplier.",
    author: "Sunita Reddy",
    position: "Purchase Head",
    company: "Power Gen Corp",
    rating: 5,
  },
  {
    text: "We've been working with Asthsidhi Metal for the past decade. Their consistency in quality and competitive pricing has helped us maintain our edge in the market.",
    author: "Mohammed Khan",
    position: "Managing Director",
    company: "Gulf Engineering",
    rating: 5,
  },
  {
    text: "From quotation to delivery, the entire process is seamless. Their documentation and quality certifications are always in order. A truly professional organization.",
    author: "Deepak Mehta",
    position: "Quality Manager",
    company: "Precision Fabricators",
    rating: 5,
  },
  {
    text: "Asthsidhi Metal has been instrumental in our project's success. Their ability to source specialized materials on short notice is remarkable.",
    author: "Anita Joshi",
    position: "Project Manager",
    company: "Infrastructure Ltd",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Banner */}
      <section className="pt-32 pb-20 bg-gradient-steel">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="text-primary font-display text-sm tracking-[0.3em] uppercase">
              Testimonials
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-accent-foreground mt-4">
              What Our Clients <span className="text-gradient-copper">Say</span>
            </h1>
            <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our valued clients have to say about working with us.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-8 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-copper transition-all duration-300"
              >
                <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/20" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                
                <p className="text-foreground leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-copper flex items-center justify-center">
                    <span className="text-primary-foreground font-display font-bold">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-display text-foreground">
                      {testimonial.author}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {testimonial.position}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-copper">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="font-display text-4xl md:text-5xl text-primary-foreground mb-2">500+</div>
              <div className="text-primary-foreground/80">Happy Clients</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="font-display text-4xl md:text-5xl text-primary-foreground mb-2">15+</div>
              <div className="text-primary-foreground/80">Years Experience</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="font-display text-4xl md:text-5xl text-primary-foreground mb-2">1000+</div>
              <div className="text-primary-foreground/80">Projects Completed</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="font-display text-4xl md:text-5xl text-primary-foreground mb-2">50+</div>
              <div className="text-primary-foreground/80">Countries Served</div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Testimonials;
