import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import pipesTubes from "@/assets/products/pipes-tubes.jpg";
import platesSheets from "@/assets/products/plates-sheets.jpg";
import fasteners from "@/assets/products/fasteners.jpg";
import pipeFlanges from "@/assets/products/pipe-flanges.jpg";
import channelAngles from "@/assets/products/channel-angles.jpg";
import roundSquareBars from "@/assets/products/round-square-bars.jpg";

const products = [
  {
    id: "pipes-tubes",
    image: pipesTubes,
    title: "Pipes & Tubes",
    description: "High-quality stainless steel, carbon steel, and alloy steel pipes and tubes for various industrial applications.",
    features: ["Seamless & Welded", "Various Grades", "Custom Sizes", "Corrosion Resistant"]
  },
  {
    id: "plates-sheets",
    image: platesSheets,
    title: "Plates & Sheets",
    description: "Premium quality steel plates and sheets available in various thicknesses and grades.",
    features: ["Multiple Thicknesses", "Hot & Cold Rolled", "Cut to Size", "Surface Finish Options"]
  },
  {
    id: "fasteners",
    image: fasteners,
    title: "Fasteners",
    description: "Complete range of industrial fasteners including bolts, nuts, screws, and washers.",
    features: ["High Tensile", "Stainless Steel", "Various Standards", "Custom Manufacturing"]
  },
  {
    id: "pipe-flanges",
    image: pipeFlanges,
    title: "Pipe & Flange Fittings",
    description: "Precision-engineered pipe fittings and flanges for secure connections.",
    features: ["ANSI/ASME Standards", "All Pressure Ratings", "Various Materials", "Tight Tolerances"]
  },
  {
    id: "channel-angles",
    image: channelAngles,
    title: "Channel & Angles",
    description: "Structural steel channels and angles for construction and industrial use.",
    features: ["Standard & Custom Sizes", "High Strength", "Precision Cut", "Various Grades"]
  },
  {
    id: "round-square-bars",
    image: roundSquareBars,
    title: "Round/Square Bars",
    description: "Quality round and square bars for machining and fabrication needs.",
    features: ["Bright & Black Finish", "Close Tolerances", "Multiple Grades", "Custom Lengths"]
  },
];

const materials = [
  "Stainless Steel (SS 304, 304L, 316, 316L, 321, 347)",
  "Carbon Steel (A105, A106, A234)",
  "Alloy Steel (Chrome Moly, F11, F22, F91)",
  "Duplex & Super Duplex Steel",
  "Nickel Alloys (Inconel, Monel, Hastelloy)",
  "Titanium & Copper Alloys",
  "Copper (C11000, C10200, C26000, C46400, C21000)",
  "Brass (C36000, C27000, C28000, C46400, C51000)",
  "Aluminum (1050, 6061, 6063, 5083, 7075, 3003, 1100)",
];

import productsHeroBanner from "@/assets/products_hero_banner.png";

const Products = () => {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={productsHeroBanner}
            alt="Products Hero Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/75" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="text-white font-display text-sm tracking-[0.3em] uppercase">
              Our Products
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mt-4">
              Quality <span className="text-gradient-copper">Steel Products</span>
            </h1>
            <p className="text-gray-200 text-lg mt-6 max-w-2xl mx-auto">
              Comprehensive range of industrial steel products manufactured to the highest international standards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-elevated transition-all duration-500 border border-border"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl text-foreground mb-3">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {product.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={`/products/${product.id}`}
                    className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-primary font-display text-sm tracking-[0.3em] uppercase">
              Materials
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mt-4">
              Available <span className="text-gradient-copper">Materials</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto"
          >
            {materials.map((material, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors"
              >
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground text-sm">{material}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-copper">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl text-primary-foreground mb-6">
              Need Custom Specifications?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Contact us for custom sizes, grades, and specifications. Our team is ready to assist you with your requirements.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-background text-foreground rounded-lg font-medium hover:bg-background/90 transition-colors"
            >
              Get a Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Products;
