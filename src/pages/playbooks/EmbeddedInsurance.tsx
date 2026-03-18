import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import imgVisual from "@/assets/visuals/embedded-insurance.jpg";

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
          <motion.div
            className="rounded-2xl aspect-[4/3] overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src={imgVisual} alt="Embedded Insurance visual" className="w-full h-full object-cover rounded-2xl" loading="lazy" />
          </motion.div>
        </div>
      </div>
    </section>

    <CTASection heading="Let's define the right starting point" ctaLabel="Book a Demo" ctaHref="/contact" />
  </Layout>
);

export default EmbeddedInsurance;
