import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Download, Phone } from "lucide-react";
import { Button } from "./ui/button";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  {
    label: "Products",
    href: "#products",
    dropdown: [
      { label: "Pipes & Tubes", href: "#products" },
      { label: "Plates & Sheets", href: "#products" },
      { label: "Fasteners", href: "#products" },
      { label: "Pipe & Flange Fittings", href: "#products" },
      { label: "Channel & Angles", href: "#products" },
      { label: "Round/Square Bars", href: "#products" },
    ],
  },
  { label: "Industries", href: "#industries" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-copper rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-xl">AM</span>
            </div>
            <div className="hidden sm:block">
              <span className={`font-display text-xl font-bold ${isScrolled ? "text-foreground" : "text-primary-foreground"}`}>
                Asthsidhi
              </span>
              <span className={`block text-xs tracking-widest uppercase ${isScrolled ? "text-primary" : "text-secondary"}`}>
                Metal
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors ${
                    isScrolled
                      ? "text-foreground hover:text-primary"
                      : "text-primary-foreground/90 hover:text-primary-foreground"
                  }`}
                >
                  {item.label}
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                </a>
                
                <AnimatePresence>
                  {item.dropdown && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 w-56 py-2 bg-card rounded-lg shadow-elevated border border-border"
                    >
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem.label}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-card-foreground hover:bg-muted hover:text-primary transition-colors"
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant={isScrolled ? "outline" : "heroOutline"} size="sm">
              <Download className="w-4 h-4" />
              Brochure
            </Button>
            <Button variant="hero" size="sm">
              <Phone className="w-4 h-4" />
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 ${isScrolled ? "text-foreground" : "text-primary-foreground"}`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border"
          >
            <div className="container mx-auto px-4 py-4">
              {navItems.map((item) => (
                <div key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-3 text-foreground hover:text-primary font-medium border-b border-border/50"
                  >
                    {item.label}
                  </a>
                  {item.dropdown && (
                    <div className="pl-4 bg-muted/50">
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem.label}
                          href={subItem.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block py-2 text-sm text-muted-foreground hover:text-primary"
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="flex flex-col gap-3 mt-4">
                <Button variant="outline" className="w-full">
                  <Download className="w-4 h-4" />
                  Download Brochure
                </Button>
                <Button variant="hero" className="w-full">
                  <Phone className="w-4 h-4" />
                  Contact Us
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
