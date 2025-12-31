import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Shield, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const features = [
  {
    icon: Shield,
    title: "Strengths",
    description:
      "All around qualified professionals, strong network base with manufacturers at global level, timely delivery and cost effective balance.",
  },
  {
    icon: Eye,
    title: "Vision Statement",
    description:
      "To turn into a Star Exporter and most Admired Supplier in the Global Market by giving top notch Products and Services.",
  },
  {
    icon: Target,
    title: "Mission",
    description:
      "To contribute to the growth story of India's economic advancement by providing Quality products and services to leading industries globally.",
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 lg:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-display text-sm tracking-[0.3em] uppercase">
              About Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mt-4 mb-6">
              Welcome to <span className="text-gradient-copper">Astsiddhi Metal</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Astsiddhi Metal is a pre-dominant player in the global market for the
              manufacturing, exporting, subcontracting, importing and stocking industrial
              raw materials and process equipments.
            </p>
            <p className="text-muted-foreground mb-8">
              We owe our flourishing to the possibility of our degree of Products, as our
              customers are completely fulfilled by the degree offered to them. We have made
              a novel spot in this industry due to our commitment to excellence and customer
              satisfaction.
            </p>
            <Button variant="hero" className="group">
              More About Us
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>

          {/* Right Content - Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex gap-5 p-6 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-copper transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-copper rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
