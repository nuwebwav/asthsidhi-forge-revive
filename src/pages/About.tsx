import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Target, Eye, Shield, Users, Award, Globe, CheckCircle } from "lucide-react";
import { StatsSection } from "@/components/StatsSection";
import { SEO } from "@/components/SEO";

const features = [
  {
    icon: Shield,
    title: "Strengths",
    description:
      "All around qualified professionals, strong network base with manufacturers at global level, timely delivery and cost effective balance.",
  },
  {
    icon: Eye,
    title: "Vision Statement",
    description:
      "To turn into a Star Exporter and most Admired Supplier in the Global Market by giving top notch Products and Services.",
  },
  {
    icon: Target,
    title: "Mission",
    description:
      "To contribute to the growth story of India's economic advancement by providing Quality products and services to leading industries globally.",
  },
];

const values = [
  { icon: Award, title: "Quality Excellence", description: "We never compromise on quality, ensuring every product meets international standards." },
  { icon: Users, title: "Customer Focus", description: "Our customers are at the heart of everything we do. Their success is our success." },
  { icon: Globe, title: "Global Reach", description: "With a worldwide network, we deliver quality products to clients across the globe." },
];

const whyChooseUs = [
  "Over 15+ years of industry experience",
  "ISO 9001:2015 certified company",
  "Wide range of steel products",
  "Competitive pricing",
  "On-time delivery guaranteed",
  "After-sales support",
  "Quality assurance at every step",
  "Trusted by 500+ clients worldwide",
];

const About = () => {
  return (
    <main className="min-h-screen">
      <SEO
        title="About Us - Astsiddhi Metal"
        description="Learn more about Astsiddhi Metal, a leading player in manufacturing, exporting, and stocking industrial raw materials and steel products."
      />
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
              About Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-accent-foreground mt-4">
              Welcome to <span className="text-gradient-copper">Astsiddhi Metal</span>
            </h1>
            <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto">
              A pre-dominant player in the global market for manufacturing, exporting, and stocking industrial raw materials.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                Who We Are
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Astsiddhi Metal is a pre-dominant player in the global market for the
                manufacturing, exporting, subcontracting, importing and stocking industrial
                raw materials and process equipments.
              </p>
              <p className="text-muted-foreground mb-6">
                We owe our flourishing to the possibility of our degree of Products, as our
                customers are completely fulfilled by the degree offered to them. We have made
                a novel spot in this industry due to our commitment to excellence and customer
                satisfaction.
              </p>
              <p className="text-muted-foreground">
                Our team of skilled professionals works tirelessly to ensure that every product
                leaving our facility meets the highest standards of quality and precision. We
                believe in building long-term relationships with our clients through trust,
                reliability, and exceptional service.
              </p>
            </motion.div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="flex gap-5 p-6 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-copper transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-copper rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-display text-sm tracking-[0.3em] uppercase">
              Our Values
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mt-4">
              What Drives <span className="text-gradient-copper">Us</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-8 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-copper transition-all duration-300"
              >
                <div className="w-20 h-20 bg-gradient-copper rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-display text-sm tracking-[0.3em] uppercase">
                Why Choose Us
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mt-4 mb-6">
                Your Trusted <span className="text-gradient-copper">Partner</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                With years of experience in the steel industry, we have built a reputation
                for reliability, quality, and exceptional customer service. Here's why
                clients choose Astsiddhi Metal.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {whyChooseUs.map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground text-sm">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <StatsSection />
      <Footer />
    </main>
  );
};

export default About;
