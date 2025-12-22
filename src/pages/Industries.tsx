import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Zap, Factory, Droplets, Wrench, Fuel, Building2, Ship, Plane, Train, Atom } from "lucide-react";
import { Link } from "react-router-dom";

const industries = [
  { 
    icon: Zap, 
    name: "Power Plants",
    description: "Supplying high-quality steel products for thermal, nuclear, and renewable power generation facilities.",
    products: ["Boiler Tubes", "Heat Exchangers", "Pressure Vessels", "Structural Steel"]
  },
  { 
    icon: Factory, 
    name: "Sugar Industries",
    description: "Comprehensive steel solutions for sugar mills and processing plants.",
    products: ["SS Pipes & Tubes", "Flanges", "Fabrication Materials", "Process Equipment"]
  },
  { 
    icon: Droplets, 
    name: "Petrochemical",
    description: "Corrosion-resistant materials for refineries and chemical processing units.",
    products: ["Alloy Steel Pipes", "Stainless Steel Fittings", "Heat Resistant Alloys", "High-Pressure Components"]
  },
  { 
    icon: Wrench, 
    name: "Fabrication",
    description: "Raw materials and components for metal fabrication workshops and industries.",
    products: ["Plates & Sheets", "Structural Sections", "Fasteners", "Welding Materials"]
  },
  { 
    icon: Fuel, 
    name: "Oil & Gas",
    description: "Premium grade materials for upstream, midstream, and downstream operations.",
    products: ["Line Pipes", "Casing & Tubing", "Valves & Fittings", "Offshore Components"]
  },
  { 
    icon: Building2, 
    name: "Construction",
    description: "Structural steel and building materials for commercial and industrial construction.",
    products: ["TMT Bars", "Structural Sections", "Roofing Sheets", "Cladding Materials"]
  },
  { 
    icon: Ship, 
    name: "Shipbuilding",
    description: "Marine-grade materials for ship construction and repair yards.",
    products: ["Marine Grade Steel", "Corrosion Resistant Alloys", "Deck Plates", "Hull Materials"]
  },
  { 
    icon: Plane, 
    name: "Aerospace",
    description: "High-performance alloys for aerospace and defense applications.",
    products: ["Titanium Alloys", "Nickel Superalloys", "High-Strength Steels", "Precision Components"]
  },
  { 
    icon: Train, 
    name: "Railways",
    description: "Quality materials for railway infrastructure and rolling stock.",
    products: ["Rail Steel", "Coach Components", "Fasteners", "Structural Steel"]
  },
  { 
    icon: Atom, 
    name: "Nuclear",
    description: "Specialized materials meeting stringent nuclear industry standards.",
    products: ["Nuclear Grade SS", "Special Alloys", "Reactor Components", "Safety Equipment"]
  },
];

const Industries = () => {
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
            <span className="text-primary font-display text-sm tracking-[0.3em] uppercase">
              Industries
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-accent-foreground mt-4">
              Industries We <span className="text-gradient-copper">Serve</span>
            </h1>
            <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto">
              Delivering quality steel products across diverse industrial sectors with precision and reliability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-copper transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-copper rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <industry.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-3">
                  {industry.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {industry.description}
                </p>
                <div className="space-y-2">
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">Key Products:</span>
                  <div className="flex flex-wrap gap-2">
                    {industry.products.map((product, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground"
                      >
                        {product}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
              Don't See Your <span className="text-gradient-copper">Industry?</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              We cater to a wide range of industries beyond those listed here. Contact us to discuss your specific requirements and how we can support your projects.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-copper text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Contact Us Today
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Industries;
