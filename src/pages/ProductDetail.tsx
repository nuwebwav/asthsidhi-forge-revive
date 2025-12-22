import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import pipesTubes from "@/assets/products/pipes-tubes.jpg";
import platesSheets from "@/assets/products/plates-sheets.jpg";
import fasteners from "@/assets/products/fasteners.jpg";
import pipeFlanges from "@/assets/products/pipe-flanges.jpg";
import channelAngles from "@/assets/products/channel-angles.jpg";
import roundSquareBars from "@/assets/products/round-square-bars.jpg";

const productsData: Record<string, {
  image: string;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  specifications: { label: string; value: string }[];
  applications: string[];
  grades: string[];
}> = {
  "pipes-tubes": {
    image: pipesTubes,
    title: "Pipes & Tubes",
    description: "High-quality stainless steel, carbon steel, and alloy steel pipes and tubes.",
    longDescription: "Our comprehensive range of pipes and tubes are manufactured to meet the highest international standards. We offer seamless and welded options in various grades and sizes to suit diverse industrial applications. Each product undergoes rigorous quality testing to ensure durability and performance.",
    features: ["Seamless & Welded Options", "Various Grade Availability", "Custom Size Manufacturing", "Corrosion Resistant Finish", "High Pressure Rating", "Temperature Resistant"],
    specifications: [
      { label: "Outer Diameter", value: "6mm to 914mm" },
      { label: "Wall Thickness", value: "0.5mm to 50mm" },
      { label: "Length", value: "Up to 12 meters" },
      { label: "Standards", value: "ASTM, ASME, DIN, JIS" },
    ],
    applications: ["Oil & Gas Pipelines", "Chemical Processing", "Power Generation", "Pharmaceutical Industry", "Food Processing", "Water Treatment"],
    grades: ["SS 304/304L", "SS 316/316L", "SS 321", "SS 347", "Carbon Steel A106", "Alloy Steel P11/P22"],
  },
  "plates-sheets": {
    image: platesSheets,
    title: "Plates & Sheets",
    description: "Premium quality steel plates and sheets in various thicknesses.",
    longDescription: "We supply premium quality steel plates and sheets that meet stringent quality standards. Available in hot rolled and cold rolled variants, our plates and sheets are suitable for a wide range of structural and industrial applications.",
    features: ["Hot & Cold Rolled", "Multiple Thickness Options", "Cut to Size Service", "Various Surface Finishes", "High Flatness Tolerance", "Edge Preparation Available"],
    specifications: [
      { label: "Thickness", value: "0.5mm to 200mm" },
      { label: "Width", value: "Up to 3000mm" },
      { label: "Length", value: "Up to 12000mm" },
      { label: "Standards", value: "ASTM, EN, JIS, IS" },
    ],
    applications: ["Shipbuilding", "Pressure Vessels", "Structural Fabrication", "Storage Tanks", "Heavy Machinery", "Construction"],
    grades: ["SS 304/304L", "SS 316/316L", "Mild Steel", "Boiler Quality", "Corten Steel", "Hardox"],
  },
  "fasteners": {
    image: fasteners,
    title: "Fasteners",
    description: "Complete range of industrial fasteners for all applications.",
    longDescription: "Our fastener range includes bolts, nuts, screws, washers, and studs manufactured from premium materials. We maintain strict quality control to ensure each fastener meets the required strength and dimensional specifications.",
    features: ["High Tensile Strength", "Corrosion Resistant", "Multiple Standards", "Custom Manufacturing", "Thread Rolling", "Heat Treatment Available"],
    specifications: [
      { label: "Size Range", value: "M3 to M100" },
      { label: "Length", value: "Up to 3000mm" },
      { label: "Grade", value: "4.6, 8.8, 10.9, 12.9" },
      { label: "Standards", value: "ISO, DIN, ASTM, BS" },
    ],
    applications: ["Structural Connections", "Machinery Assembly", "Automotive Industry", "Construction", "Petrochemical", "Railways"],
    grades: ["SS 304", "SS 316", "Alloy Steel", "Carbon Steel", "Brass", "Inconel"],
  },
  "pipe-flanges": {
    image: pipeFlanges,
    title: "Pipe & Flange Fittings",
    description: "Precision-engineered fittings and flanges for secure connections.",
    longDescription: "Our pipe fittings and flanges are precision-engineered to provide leak-proof connections in piping systems. We offer a complete range including elbows, tees, reducers, caps, and various flange types to meet all connection requirements.",
    features: ["ANSI/ASME Compliant", "All Pressure Ratings", "Precision Machined", "Tight Tolerances", "RTJ & RF Face", "Various Connection Types"],
    specifications: [
      { label: "Size Range", value: "1/2\" to 48\"" },
      { label: "Pressure Class", value: "150# to 2500#" },
      { label: "Schedule", value: "SCH 10 to SCH XXS" },
      { label: "Standards", value: "ANSI B16.5, B16.9, B16.11" },
    ],
    applications: ["Process Piping", "Pressure Vessels", "Heat Exchangers", "Refineries", "Power Plants", "Chemical Plants"],
    grades: ["SS 304/304L", "SS 316/316L", "Carbon Steel A105", "Alloy Steel F11/F22", "Duplex", "Inconel"],
  },
  "channel-angles": {
    image: channelAngles,
    title: "Channel & Angles",
    description: "Structural steel channels and angles for construction.",
    longDescription: "We supply a comprehensive range of structural steel sections including channels and angles. These products are essential for construction, fabrication, and industrial applications where strength and reliability are paramount.",
    features: ["Standard & Custom Sizes", "High Strength Steel", "Precision Cut Lengths", "Multiple Grades", "Hot Rolled & Cold Formed", "Galvanized Options"],
    specifications: [
      { label: "Channel Size", value: "ISMC 75 to ISMC 400" },
      { label: "Angle Size", value: "25x25 to 200x200mm" },
      { label: "Length", value: "Up to 12 meters" },
      { label: "Standards", value: "IS, ASTM, BS, DIN" },
    ],
    applications: ["Building Construction", "Industrial Sheds", "Bridges", "Transmission Towers", "Material Handling", "Mining Equipment"],
    grades: ["Mild Steel", "SS 304", "SS 316", "E250", "E350", "E450"],
  },
  "round-square-bars": {
    image: roundSquareBars,
    title: "Round/Square Bars",
    description: "Quality round and square bars for machining needs.",
    longDescription: "Our bar products include round bars, square bars, and hexagonal bars in various grades and finishes. These are ideal for machining, fabrication, and manufacturing applications requiring precision and consistency.",
    features: ["Bright & Black Finish", "Close Tolerances", "Multiple Grades", "Custom Lengths", "Centerless Ground", "Peeled & Polished"],
    specifications: [
      { label: "Round Bar Dia", value: "3mm to 500mm" },
      { label: "Square Bar Size", value: "8mm to 250mm" },
      { label: "Length", value: "Up to 6 meters" },
      { label: "Tolerance", value: "h9, h11 or custom" },
    ],
    applications: ["CNC Machining", "Shaft Manufacturing", "Fastener Production", "Automotive Parts", "Tool & Die", "General Engineering"],
    grades: ["SS 303", "SS 304", "SS 316", "EN8", "EN24", "EN31"],
  },
};

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = productId ? productsData[productId] : null;

  if (!product) {
    return (
      <main className="min-h-screen">
        <Navbar />
        <section className="pt-32 pb-20 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-4xl text-foreground mb-4">Product Not Found</h1>
            <Link to="/products" className="text-primary hover:underline">
              Back to Products
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Banner */}
      <section className="pt-32 pb-12 bg-gradient-steel">
        <div className="container mx-auto px-4">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl text-accent-foreground"
          >
            {product.title}
          </motion.h1>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-auto rounded-xl shadow-elevated"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-2xl text-foreground mb-4">Overview</h2>
              <p className="text-muted-foreground mb-8">{product.longDescription}</p>

              <h3 className="font-display text-xl text-foreground mb-4">Key Features</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link to="/contact">
                <Button variant="hero" size="lg">
                  Request a Quote
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl text-foreground text-center mb-12"
          >
            Specifications
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {product.specifications.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-card rounded-xl border border-border text-center"
              >
                <div className="text-sm text-muted-foreground mb-2">{spec.label}</div>
                <div className="font-display text-lg text-foreground">{spec.value}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications & Grades */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-display text-2xl text-foreground mb-6">Applications</h3>
              <ul className="space-y-3">
                {product.applications.map((app, index) => (
                  <li key={index} className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-foreground">{app}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-display text-2xl text-foreground mb-6">Available Grades</h3>
              <div className="flex flex-wrap gap-3">
                {product.grades.map((grade, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-copper text-primary-foreground rounded-lg font-medium"
                  >
                    {grade}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-copper">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl text-primary-foreground mb-4">
            Need This Product?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Contact us for pricing, availability, and custom specifications.
          </p>
          <Link to="/contact">
            <Button variant="outline" size="lg" className="bg-background text-foreground hover:bg-background/90">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ProductDetail;
