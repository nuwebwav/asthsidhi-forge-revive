import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Factory, Droplets, Wrench, Fuel } from "lucide-react";

const industries = [
  { icon: Zap, name: "Power Plants" },
  { icon: Factory, name: "Sugar Industries" },
  { icon: Droplets, name: "Petrochemical" },
  { icon: Wrench, name: "Fabrication" },
  { icon: Fuel, name: "Oil & Gas Industries" },
];

export const IndustriesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="industries" className="py-20 lg:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display text-sm tracking-[0.3em] uppercase">
            Industries
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mt-4">
            Industries We <span className="text-gradient-copper">Serve</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 lg:gap-10">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-2xl bg-card border-2 border-border hover:border-primary flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:shadow-copper hover:-translate-y-2 cursor-pointer">
                <div className="w-14 h-14 rounded-xl bg-muted group-hover:bg-gradient-copper flex items-center justify-center transition-all duration-300">
                  <industry.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <span className="font-display text-sm text-center text-foreground px-2">
                  {industry.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
