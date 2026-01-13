import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import pipesTubes from "@/assets/products/pipes-tubes.jpg";

import productsHeroBanner from "@/assets/products_hero_banner.png";

const specifications = [
  { label: "Outer Diameter", value: "6mm to 914mm" },
  { label: "Wall Thickness", value: "0.5mm to 50mm" },
  { label: "Length", value: "Up to 12 meters" },
  { label: "Type", value: "Seamless & Welded" },
];

const grades = [
  "SS 304 / 304L / 304H",
  "SS 316 / 316L / 316Ti",
  "SS 321 / 321H",
  "SS 347 / 347H",
  "SS 310 / 310S",
  "Duplex 2205 / 2507",
  "Carbon Steel A106 Gr.B",
  "Alloy Steel A335 P11/P22/P91",
];

const applications = [
  "Oil & Gas Industry",
  "Petrochemical Plants",
  "Power Generation",
  "Chemical Processing",
  "Water Treatment",
  "Food & Beverage Industry",
  "Pharmaceutical Industry",
  "Marine Applications",
];

const types = [
  { name: "Seamless Pipes", desc: "Hot finished and cold drawn seamless pipes for high-pressure applications" },
  { name: "Welded Pipes", desc: "ERW and SAW welded pipes for general and structural applications" },
  { name: "Square/Rectangular Tubes", desc: "Hollow sections for structural and decorative purposes" },
  { name: "Capillary Tubes", desc: "Precision tubes for instrumentation and medical applications" },
];

const PipesTubes = () => {
  return (
    <main className="min-h-screen">
      <SEO
        title="Pipes & Tubes - Astsiddhi Metal"
        description="High-quality stainless steel, carbon steel, and alloy steel pipes and tubes for various industrial applications including Oil & Gas, Power Gen, and more."
      />
      <Navbar />

      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={productsHeroBanner}
            alt="Pipes & Tubes Background"
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
              Pipes & <span className="text-gradient-copper">Tubes</span>
            </h1>
            <p className="text-gray-200 text-lg mt-6 max-w-2xl mx-auto">
              High-quality stainless steel, carbon steel, and alloy steel pipes and tubes for various industrial applications.
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
                src={pipesTubes}
                alt="Pipes & Tubes"
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
                Astsiddhi Metal offers a comprehensive range of pipes and tubes manufactured to
                international standards. Our products are sourced from leading manufacturers and
                undergo rigorous quality checks to ensure superior performance in demanding applications.
              </p>
              <p className="text-muted-foreground mb-8">
                Whether you need seamless pipes for high-pressure applications or welded tubes for
                structural purposes, we have the right solution for your requirements.
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
              Types of <span className="text-gradient-copper">Pipes & Tubes</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
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
              Need Custom Specifications?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              We can supply pipes and tubes in custom sizes, grades, and specifications as per your requirements.
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

export default PipesTubes;
