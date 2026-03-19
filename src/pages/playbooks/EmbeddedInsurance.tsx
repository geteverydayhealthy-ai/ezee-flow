import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import imgVisual from "@/assets/visuals/v5-embedded-ecosystem.jpg";

const EmbeddedInsurance = () => (
  <Layout>
    <PageHero heading="Embedded Insurance Infrastructure Playbook" subheading="A strategic design engagement that defines how insurance should be distributed through partners, ecosystems, fintechs, digital channels, and white-label environments. With clear architecture, partner roles, and operating models." primaryCta={{ label: "Book a Consultation", href: "/contact" }} />

    <section className="section-spacing bg-accent/50">
      <div className="section-container max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">What is the Embedded Insurance Playbook?</h2>
        <p className="text-muted-foreground leading-relaxed">
          Embedded insurance is one of the fastest-growing distribution models in the industry, but executing it well requires more than connecting an API. It requires a clear understanding of partner roles, customer journey design, integration architecture, governance structures, and operating responsibilities. This Playbook helps insurers design their embedded distribution strategy from the ground up, ensuring that every partnership, channel, and integration is structured for scalability, compliance, and commercial success.
        </p>
      </div>
    </section>

    <section className="section-spacing">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">What this Playbook delivers</h2>
            <ul className="space-y-4">
              {[
                { title: "Partner ecosystem design", desc: "Definition of partner types, roles, responsibilities, revenue models, and integration requirements for each distribution channel." },
                { title: "Embedded journey architecture", desc: "Customer journey designs for embedded insurance within partner platforms, including trigger points, product presentation, purchase flow, and post-sale servicing." },
                { title: "Integration pattern definition", desc: "Technical architecture for API-based integration with partner systems, including data exchange models, authentication, and real-time processing requirements." },
                { title: "Governance and compliance framework", desc: "Regulatory alignment checks, approval workflows, data handling agreements, and compliance controls specific to embedded distribution." },
                { title: "Operating model recommendations", desc: "Clear definition of who does what, from lead handling and customer communication to claims processing and servicing responsibilities across insurer and partner." },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-sm">{item.title}</span>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-0.5">{item.desc}</p>
                  </div>
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
            <img src={imgVisual} alt="Embedded insurance ecosystem" className="w-full h-full object-cover rounded-2xl" loading="lazy" />
          </motion.div>
        </div>
      </div>
    </section>

    <section className="section-spacing bg-accent/50">
      <div className="section-container max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Who is this Playbook for?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            "Insurers exploring embedded distribution through fintech or ecosystem partners",
            "Companies planning white-label insurance offerings for partner channels",
            "Distribution businesses building API-based insurance integration capabilities",
            "Insurers that need to define partner operating models before technology investment",
            "Organizations evaluating B2B2C distribution strategies for insurance products",
            "Teams that need governance frameworks for multi-partner distribution networks",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 bg-card rounded-xl p-4 border border-border">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    <CTASection heading="Design your embedded insurance strategy with clarity" subheading="Book a consultation to define the right partner, integration, and operating model for embedded distribution." ctaLabel="Book a Consultation" ctaHref="/contact" />
  </Layout>
);

export default EmbeddedInsurance;
