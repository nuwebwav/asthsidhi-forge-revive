import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import pipeFlanges from "@/assets/products/pipe-flanges.jpg";

const specifications = [
  { label: "Size Range", value: "1/2\" to 72\"" },
  { label: "Pressure Class", value: "150# to 2500#" },
  { label: "Standards", value: "ANSI/ASME B16.5, B16.47" },
  { label: "Facing", value: "RF, RTJ, FF" },
];

const grades = [
  "SS 304 / 304L / 304H",
  "SS 316 / 316L / 316Ti",
  "SS 321 / 347",
  "Duplex 2205 / 2507",
  "Carbon Steel A105",
  "Alloy Steel A182 F11/F22/F91",
  "Inconel 600/625/800",
  "Monel 400/K500",
];

const applications = [
  "Oil & Gas Pipelines",
  "Petrochemical Plants",
  "Refineries",
  "Power Plants",
  "Chemical Processing",
  "Water Treatment Plants",
  "Pharmaceutical Industry",
  "Food Processing",
];

const types = [
  { name: "Weld Neck Flanges", desc: "High-stress applications with excellent weld integrity" },
  { name: "Slip-On Flanges", desc: "Easy installation for low-pressure applications" },
  { name: "Blind Flanges", desc: "End closures for piping systems and pressure vessels" },
  { name: "Socket Weld Flanges", desc: "Small bore piping connections" },
  { name: "Threaded Flanges", desc: "Non-welded connections for special applications" },
  { name: "Lap Joint Flanges", desc: "Easy alignment and bolt hole matching" },
  { name: "Orifice Flanges", desc: "Flow measurement applications" },
  { name: "Spectacle Blinds", desc: "Isolation and maintenance operations" },
];

const fittings = [
  { name: "Elbows", desc: "45° and 90° bends in LR and SR configurations" },
  { name: "Tees", desc: "Equal and reducing tees for branch connections" },
  { name: "Reducers", desc: "Concentric and eccentric size transitions" },
  { name: "Caps", desc: "End closures for piping systems" },
  { name: "Couplings", desc: "Full and half couplings for connections" },
  { name: "Unions", desc: "Easy disconnect fittings" },
];

const PipeFlanges = () => {
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
              Pipe & Flange <span className="text-gradient-copper">Fittings</span>
            </h1>
            <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto">
              Precision-engineered pipe fittings and flanges for secure, leak-proof connections.
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
                src={pipeFlanges}
                alt="Pipe & Flange Fittings"
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
                We supply a complete range of flanges and pipe fittings manufactured to 
                ANSI/ASME, DIN, and other international standards. Our products are sourced 
                from certified manufacturers and come with full material certification.
              </p>
              <p className="text-muted-foreground mb-8">
                All flanges and fittings undergo dimensional inspection, hydrostatic testing, 
                and chemical/mechanical testing to ensure reliable performance in critical applications.
              </p>

              <h3 className="font-display text-xl text-foreground mb-4">Flange Specifications</h3>
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

      {/* Flange Types */}
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
              Types of <span className="text-gradient-copper">Flanges</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Pipe Fittings */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl text-foreground">
              Pipe <span className="text-gradient-copper">Fittings</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fittings.map((fitting, index) => (
              <motion.div
                key={fitting.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-muted rounded-xl border border-border hover:border-primary/50 transition-colors"
              >
                <h3 className="font-display text-lg text-foreground mb-2">{fitting.name}</h3>
                <p className="text-muted-foreground text-sm">{fitting.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Grades & Applications */}
      <section className="py-20 bg-muted">
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
                  <div key={grade} className="flex items-center gap-2 p-3 bg-card rounded-lg">
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
                  <div key={app} className="flex items-center gap-2 p-3 bg-card rounded-lg">
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
              We can supply flanges and fittings in special ratings, facings, and materials as per your requirements.
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

export default PipeFlanges;
