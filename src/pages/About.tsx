import { motion } from "framer-motion";
import { Zap, Settings, Shield, Layers, Eye, Target } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

const principles = [
  { icon: Zap, title: "Fastest go-to-market" },
  { icon: Settings, title: "Nothing hardcoded" },
  { icon: Target, title: "Customization around insurer needs, business requirements, product requirements, and governance requirements" },
  { icon: Layers, title: "Product flexibility without architectural chaos" },
  { icon: Shield, title: "Governance and control built into the system" },
  { icon: Eye, title: "Modular deployment rather than bloated transformation" },
];

const About = () => (
  <Layout>
    <PageHero
      heading="Built to bring structure to insurance transformation"
      subheading="Ezee Technologies exists to help insurance businesses modernize with systems that are practical, scalable, configurable, and grounded in real operational needs."
      primaryCta={{ label: "Talk to our team", href: "/contact" }}
    />

    <section className="section-spacing bg-accent/50">
      <div className="section-container max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Who we are</h2>
          <p className="text-muted-foreground leading-relaxed text-center">
            Ezee Technologies is an insurance-native technology and execution company. We help insurers modernize customer journeys, distribution, workflows, governance, and intelligence through configurable infrastructure built around insurer requirements.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="section-spacing">
      <div className="section-container">
        <h2 className="section-heading text-center mb-16">Our principles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {principles.map((p, i) => (
            <motion.div key={i} className="flex items-start gap-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                <p.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="text-sm font-medium leading-relaxed pt-3">{p.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-primary text-primary-foreground">
      <div className="section-container text-center">
        <p className="text-2xl sm:text-3xl font-bold">Insurance does not need another dashboard. It needs a new operating layer.</p>
      </div>
    </section>

    <CTASection heading="Let's talk about what you need to modernize" ctaLabel="Talk to our team" ctaHref="/contact" />
  </Layout>
);

export default About;
