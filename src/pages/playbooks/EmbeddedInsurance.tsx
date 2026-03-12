import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

const EmbeddedInsurance = () => (
  <Layout>
    <PageHero heading="Embedded Insurance Infrastructure" subheading="Define how insurance should be distributed through partners, ecosystems, fintechs, digital channels, or white-label environments." primaryCta={{ label: "Book a Demo", href: "/contact" }} />

    <section className="section-spacing">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">What this playbook covers</h2>
            <ul className="space-y-3">
              {["Define how insurance should be distributed through partners, ecosystems, fintechs, digital channels, or white-label environments", "Cover partner roles, customer journeys, integration patterns, governance checkpoints, and operating responsibilities", "Outputs may include embedded journey designs, partner interface logic, and deployment recommendations"].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <div className="bg-card-sage rounded-2xl aspect-[4/3] flex items-center justify-center">
            <Globe className="w-20 h-20 text-primary/30" />
          </div>
        </div>
      </div>
    </section>

    <CTASection heading="Let's define the right starting point" ctaLabel="Book a Demo" ctaHref="/contact" />
  </Layout>
);

export default EmbeddedInsurance;
