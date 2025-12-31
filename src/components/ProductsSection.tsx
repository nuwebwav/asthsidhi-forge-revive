import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import pipesTubes from "@/assets/products/pipes-tubes.jpg";
import platesSheets from "@/assets/products/plates-sheets.jpg";
import fasteners from "@/assets/products/fasteners.jpg";
import pipeFlanges from "@/assets/products/pipe-flanges.jpg";
import channelAngles from "@/assets/products/channel-angles.jpg";
import roundSquareBars from "@/assets/products/round-square-bars.jpg";

const products = [
  { image: pipesTubes, title: "Pipes & Tubes", path: "/products/pipes-tubes" },
  { image: platesSheets, title: "Plates & Sheets", path: "/products/plates-sheets" },
  { image: fasteners, title: "Fasteners", path: "/products/fasteners" },
  { image: pipeFlanges, title: "Pipe & Flange Fittings", path: "/products/pipe-flanges" },
  { image: channelAngles, title: "Channel & Angles", path: "/products/channel-angles" },
  { image: roundSquareBars, title: "Round/Square Bars", path: "/products/round-square-bars" },
];

export const ProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="products" className="py-20 lg:py-32 bg-muted" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display text-sm tracking-[0.3em] uppercase">
            Our Products
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mt-4">
            Quality <span className="text-gradient-copper">Steel Products</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-elevated transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                  width="500"
                  height="400"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <h3 className="font-display text-xl text-primary-foreground mb-3 group-hover:text-white transition-colors">
                  {product.title}
                </h3>
                <Link
                  to={product.path}
                  className="inline-flex items-center gap-2 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="absolute top-4 right-4 w-10 h-10 bg-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all">
                <ArrowRight className="w-5 h-5 text-primary-foreground" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
