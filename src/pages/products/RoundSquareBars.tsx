import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import roundSquareBars from "@/assets/products/round-square-bars.jpg";

import productsHeroBanner from "@/assets/products_hero_banner.png";

const specifications = [
  { label: "Round Bar Dia", value: "3mm to 500mm" },
  { label: "Square Bar Size", value: "6mm to 200mm" },
  { label: "Length", value: "Up to 6 meters" },
  { label: "Finish", value: "Bright, Black, Polished" },
];

const grades = [
  "SS 304 / 304L / 304H",
  "SS 316 / 316L / 316Ti",
  "SS 310 / 310S",
  "SS 321 / 347",
  "SS 410 / 420 / 430",
  "SS 17-4 PH",
  "Carbon Steel EN8/EN9/EN19",
  "Alloy Steel 4140/4340",
];

const applications = [
  "Machining & Fabrication",
  "Shaft Manufacturing",
  "Fastener Production",
  "Automotive Components",
  "Aerospace Industry",
  "Valve & Pump Parts",
  "Tool & Die Making",
  "General Engineering",
];

const types = [
  { name: "Bright Bars", desc: "Cold drawn bars with excellent surface finish for precision machining" },
  { name: "Black Bars", desc: "Hot rolled bars for general engineering and forging applications" },
  { name: "Hex Bars", desc: "Hexagonal bars for bolt and nut manufacturing" },
  { name: "Flat Bars", desc: "Rectangular sections for structural and decorative applications" },
  { name: "Half Round Bars", desc: "Semi-circular profiles for specialized applications" },
  { name: "Polished Bars", desc: "Mirror finish bars for decorative and food-grade applications" },
];

const RoundSquareBars = () => {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={productsHeroBanner}
            alt="Round & Square Bars Background"
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
            <Link to="/products" className="text-white font-display text-sm tracking-[0.3em] uppercase hover:underline">
              Our Products
            </Link>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mt-4">
              Round & Square <span className="text-gradient-copper">Bars</span>
            </h1>
            <p className="text-gray-200 text-lg mt-6 max-w-2xl mx-auto">
              Quality round and square bars for machining, fabrication, and engineering applications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={roundSquareBars}
                alt="Round & Square Bars"
                className="w-full rounded-xl shadow-elevated"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl text-foreground mb-6">
                Product Overview
              </h2>
              <p className="text-muted-foreground mb-6">
                Asthsidhi Metal offers a wide range of round and square bars in various materials
                and finishes. Our bars are manufactured to close tolerances and are ideal for
                machining, forging, and general engineering applications.
              </p>
              <p className="text-muted-foreground mb-8">
                We stock both bright finished (cold drawn) and black (hot rolled) bars in
                standard sizes and can also supply custom sizes and lengths as per your requirements.
              </p>

              <h3 className="font-display text-xl text-foreground mb-4">Specifications</h3>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {specifications.map((spec) => (
                  <div key={spec.label} className="p-4 bg-muted rounded-lg">
                    <span className="text-xs text-primary uppercase tracking-wider">{spec.label}</span>
                    <p className="text-foreground font-medium mt-1">{spec.value}</p>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-copper text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                <Phone className="w-5 h-5" />
                Request Quote
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Types Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl text-foreground">
              Types of <span className="text-gradient-copper">Bars</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {types.map((type, index) => (
              <motion.div
                key={type.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors"
              >
                <h3 className="font-display text-lg text-foreground mb-2">{type.name}</h3>
                <p className="text-muted-foreground text-sm">{type.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Grades & Applications */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-display text-2xl text-foreground mb-6">Available Grades</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {grades.map((grade) => (
                  <div key={grade} className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-foreground text-sm">{grade}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-display text-2xl text-foreground mb-6">Applications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {applications.map((app) => (
                  <div key={app} className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-foreground text-sm">{app}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-copper">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl text-primary-foreground mb-6">
              Need Custom Sizes?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              We can supply bars in custom diameters, lengths, and tolerances as per your drawings.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-background text-foreground rounded-lg font-medium hover:bg-background/90 transition-colors"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default RoundSquareBars;
