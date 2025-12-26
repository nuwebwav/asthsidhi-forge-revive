import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import channelAngles from "@/assets/products/channel-angles.jpg";

import productsHeroBanner from "@/assets/products_hero_banner.png";

const specifications = [
  { label: "Channel Size", value: "50mm to 400mm" },
  { label: "Angle Size", value: "20x20mm to 200x200mm" },
  { label: "Length", value: "Up to 12 meters" },
  { label: "Standards", value: "IS, ASTM, EN" },
];

const grades = [
  "SS 304 / 304L",
  "SS 316 / 316L",
  "SS 310 / 310S",
  "SS 321 / 347",
  "Carbon Steel (MS)",
  "Mild Steel IS 2062",
  "ASTM A36",
  "EN 10025",
];

const applications = [
  "Building Construction",
  "Industrial Structures",
  "Bridge Construction",
  "Conveyor Systems",
  "Machine Frames",
  "Platform Construction",
  "Transmission Towers",
  "Storage Racks",
];

const types = [
  { name: "C-Channels", desc: "Standard C-shaped channels for structural framing applications" },
  { name: "U-Channels", desc: "U-shaped sections for edge protection and trim applications" },
  { name: "Equal Angles", desc: "L-shaped sections with equal leg lengths for general construction" },
  { name: "Unequal Angles", desc: "L-shaped sections with different leg lengths for specific requirements" },
  { name: "Slotted Channels", desc: "Pre-punched channels for easy assembly and adjustment" },
  { name: "Lipped Channels", desc: "Channels with inward lips for additional strength" },
];

const ChannelAngles = () => {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={productsHeroBanner}
            alt="Channel & Angles Background"
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
              Channel & <span className="text-gradient-copper">Angles</span>
            </h1>
            <p className="text-gray-200 text-lg mt-6 max-w-2xl mx-auto">
              Structural steel channels and angles for construction and industrial applications.
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
                src={channelAngles}
                alt="Channel & Angles"
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
                Asthsidhi Metal supplies a comprehensive range of structural steel sections
                including channels and angles. Our products are manufactured to international
                standards and are widely used in construction, industrial, and infrastructure projects.
              </p>
              <p className="text-muted-foreground mb-8">
                We maintain large stocks of standard sizes and can also supply custom lengths
                and specifications to meet your project requirements.
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
              Types of <span className="text-gradient-copper">Sections</span>
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
              Need Bulk Quantities?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Contact us for competitive pricing on bulk orders and project requirements.
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

export default ChannelAngles;
