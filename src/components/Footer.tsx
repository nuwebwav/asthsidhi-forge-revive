import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ArrowRight, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Industries", href: "/industries" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

const products = [
  { label: "Pipes & Tubes", href: "/products/pipes-tubes" },
  { label: "Plates & Sheets", href: "/products/plates-sheets" },
  { label: "Fasteners", href: "/products/fasteners" },
  { label: "Pipe & Flange Fittings", href: "/products/pipe-flanges" },
  { label: "Channel & Angles", href: "/products/channel-angles" },
  { label: "Round/Square Bars", href: "/products/round-square-bars" },
];

export const Footer = () => {
  return (
    <footer id="contact" className="bg-charcoal text-accent-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Astsiddhi Metal Logo" className="h-14 w-auto" />
              <div>
                <span className="font-display text-3xl font-semibold text-primary-foreground">Astsiddhi</span>
                <span className="block text-lg font-medium tracking-widest uppercase text-secondary">Metal</span>
              </div>
            </div>
            <p className="text-white text-sm mb-6 leading-relaxed">
              Astsiddhi Metal is a pre-dominant player in the global market for the manufacturing, exporting,
              subcontracting, importing and stocking industrial raw materials and process equipments.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Facebook, href: "#", label: "Facebook" },
                { Icon: Twitter, href: "#", label: "Twitter" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/astsiddhi-metal-44495b3a2", label: "LinkedIn" },
                { Icon: Instagram, href: "https://www.instagram.com/astsiddhimetal?igsh=MTdlOG0zcGIzMTFybQ==", label: "Instagram" }
              ].map(({ Icon, href, label }, index) => (
                <a
                  key={index}
                  href={href}
                  target={href !== "#" ? "_blank" : undefined}
                  rel={href !== "#" ? "noopener noreferrer" : undefined}
                  className="w-10 h-10 rounded-full bg-charcoal-light hover:bg-primary flex items-center justify-center transition-colors text-white"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-display text-lg mb-6 text-primary-foreground">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white hover:text-gray-300 flex items-center gap-2 transition-colors group"
                  >
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-display text-lg mb-6 text-primary-foreground">Products</h3>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product.label}>
                  <Link
                    to={product.href}
                    className="text-white hover:text-gray-300 flex items-center gap-2 transition-colors group"
                  >
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    {product.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="font-display text-lg mb-6 text-primary-foreground">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                <span className="text-white text-sm">
                  Gr.Floor, Chaili Balaya Building, 106-A, SS Maharaj Marg, 2nd Kumbharwada, Mumbai Maharashtra -400004, INDIA
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-white flex-shrink-0" />
                <div className="text-white text-sm">
                  <p>
                    <a href="tel:+919820521850" className="!text-white hover:text-primary transition-colors">+91 9820521850</a>
                  </p>
                  <p>
                    <a href="tel:+919987233056" className="!text-white hover:text-primary transition-colors">+91 9987233056</a>
                  </p>
                  <p>
                    Telephone No.: <a href="tel:02267437458" className="!text-white hover:text-primary transition-colors">022-6743 7458</a> / <a href="tel:02266109355" className="!text-white hover:text-primary transition-colors">6610 9355</a>
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-white flex-shrink-0" />
                <div className="text-white text-sm">
                  <p>
                    <a href="mailto:astsiddhimetal@gmail.com" className="!text-white hover:text-primary transition-colors">astsiddhimetal@gmail.com</a>
                  </p>
                </div>
              </li>
            </ul>
            <Button variant="hero" size="sm" className="mt-6" aria-label="Request a quote" asChild>
              <Link to="/contact">Get Quote</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-charcoal-light">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white text-sm">
              © {new Date().getFullYear()} Astsiddhi Metal. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
