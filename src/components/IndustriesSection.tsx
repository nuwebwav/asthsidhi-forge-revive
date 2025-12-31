import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import powerPlants from "@/assets/products/power_plants.png";
import sugarIndustry from "@/assets/products/sugar_industry.png";
import fertilizerBanana from "@/assets/products/fertilizer_banana.png";
import petrochemical from "@/assets/products/petrochemical-2.jpg";
import fabrication from "@/assets/products/fabrication.png";
import oilGas from "@/assets/products/petrochemical.png";
// Reusing petrochemical for oil & gas due to generation limit, which is visually similar
//const oilGas = petrochemical;

const industries = [
  { image: powerPlants, name: "Power Plants" },
  { image: sugarIndustry, name: "Sugar Industries" },
  { image: petrochemical, name: "Petrochemical" },
  { image: fabrication, name: "Fabrication" },
  { image: oilGas, name: "Oil & Gas Industries" },
  { image: fertilizerBanana, name: "Fertilizer Industries" },
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-center">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-copper transition-shadow duration-300"
            >
              <img
                src={industry.image}
                alt={industry.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                width="400"
                height="300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute inset-0 flex items-end justify-center p-6">
                <h3 className="font-display text-xl md:text-2xl text-white text-center group-hover:text-white group-hover:scale-105 transition-all duration-300">
                  {industry.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
