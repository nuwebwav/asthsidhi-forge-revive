import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const clients = [
  { name: "TÜV SÜD", initials: "TS" },
  { name: "Bureau Veritas", initials: "BV" },
  { name: "DNV GL", initials: "DNV" },
  { name: "Lloyd's Register", initials: "LR" },
  { name: "SGS", initials: "SGS" },
  { name: "Intertek", initials: "ITK" },
  { name: "ABS", initials: "ABS" },
  { name: "RINA", initials: "RINA" },
];

export const ClientsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 bg-muted" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-display text-sm tracking-[0.3em] uppercase">
            Quality Assurance
          </span>
          <h2 className="font-display text-2xl md:text-3xl text-foreground mt-4">
            Third Party <span className="text-gradient-copper">Inspection</span>
          </h2>
        </motion.div>

        <div className="relative overflow-hidden">
          <motion.div
            animate={{ x: [0, -100 + "%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
            className="flex gap-8"
          >
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 w-40 h-20 bg-card rounded-lg border border-border flex items-center justify-center hover:border-primary transition-colors"
              >
                <span className="font-display text-xl font-bold text-muted-foreground">
                  {client.initials}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
