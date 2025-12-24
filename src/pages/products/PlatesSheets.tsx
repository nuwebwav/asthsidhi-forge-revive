import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import platesSheets from "@/assets/products/plates-sheets.jpg";

const specifications = [
  { label: "Thickness", value: "0.3mm to 200mm" },
  { label: "Width", value: "1000mm to 3000mm" },
  { label: "Length", value: "2000mm to 12000mm" },
  { label: "Surface", value: "2B, BA, No.1, No.4, Mirror" },
];

const grades = [
  "SS 304 / 304L / 304H",
  "SS 316 / 316L / 316Ti",
  "SS 310 / 310S / 310H",
  "SS 321 / 321H",
  "SS 347 / 347H",
  "SS 409 / 410 / 430",
  "Duplex 2205 / 2507",
  "Carbon Steel A516 Gr.60/70",
];

const applications = [
  "Pressure Vessels",
  "Heat Exchangers",
  "Storage Tanks",
  "Chemical Processing",
  "Food Processing Equipment",
  "Architectural Cladding",
  "Marine Applications",
  "Heavy Machinery",
];

const types = [
  { name: "Hot Rolled Plates", desc: "High strength plates for structural and pressure vessel applications" },
  { name: "Cold Rolled Sheets", desc: "Precision sheets with excellent surface finish for decorative use" },
  { name: "Chequered Plates", desc: "Anti-slip plates for flooring and platform applications" },
  { name: "Perforated Sheets", desc: "Custom perforated patterns for filtration and decorative purposes" },
];

const PlatesSheets = () => {
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
            <Link to="/products" className="text-primary font-display text-sm tracking-[0.3em] uppercase hover:underline">
              Our Products
            </Link>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-accent-foreground mt-4">
              Plates & <span className="text-gradient-copper">Sheets</span>
            </h1>
            <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto">
              Premium quality steel plates and sheets available in various thicknesses, grades, and surface finishes.
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
                src={platesSheets}
                alt="Plates & Sheets"
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
                We offer a wide range of plates and sheets in various materials including stainless steel, 
                carbon steel, and alloy steel. Our products are available in multiple thicknesses and 
                surface finishes to meet diverse industrial requirements.
              </p>
              <p className="text-muted-foreground mb-8">
                All our plates and sheets undergo rigorous quality testing to ensure they meet 
                international standards for mechanical properties and chemical composition.
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
              Types of <span className="text-gradient-copper">Plates & Sheets</span>
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
              Need Custom Sizes?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              We offer cutting and processing services to deliver plates and sheets in your required dimensions.
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

export default PlatesSheets;
