import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  { number: "01", title: "Planning & Research", description: "Thorough analysis and planning" },
  { number: "02", title: "Design & Ideas", description: "Innovative design solutions" },
  { number: "03", title: "Specialized Projects", description: "Custom manufacturing" },
  { number: "04", title: "Final Outputs", description: "Quality assured delivery" },
];

export const ProcessSteps = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-gradient-steel" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative text-center group"
            >
              <div className="relative inline-block mb-4">
                <span className="font-display text-6xl lg:text-7xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                  {step.number}
                </span>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-copper rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform" />
              </div>
              <h3 className="font-display text-lg lg:text-xl text-accent-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm hidden lg:block">
                {step.description}
              </p>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-[2px] bg-steel/30">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
