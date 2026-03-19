import { motion } from "framer-motion";
import { Zap, Settings, Shield, Layers, Eye, Target, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import imgMission from "@/assets/visuals/v2-happy-team.jpg";
import imgVision from "@/assets/visuals/v2-workflow-process.jpg";

const principles = [
  { icon: Zap, title: "Fastest go-to-market", desc: "We help insurers launch digital products, channels, and journeys faster than traditional approaches through modular, configurable infrastructure." },
  { icon: Settings, title: "Nothing hardcoded", desc: "Every workflow, product rule, approval logic, and governance control is configurable — adapting to each insurer's specific requirements without custom development." },
  { icon: Target, title: "Insurer-specific customization", desc: "Our platforms are configured around each insurer's product structure, business model, distribution approach, and governance framework." },
  { icon: Layers, title: "Modular deployment", desc: "Insurers can start with one product or solution and expand over time. No forced bundling, no all-or-nothing commitments." },
  { icon: Shield, title: "Governance built in", desc: "Compliance controls, approval logic, audit trails, and access management are embedded into every layer — not added as afterthoughts." },
  { icon: Eye, title: "Operational visibility", desc: "Real-time dashboards, performance analytics, and AI-enabled intelligence give leadership teams the visibility they need to make better decisions." },
];

const About = () => (
  <Layout>
    <PageHero
      heading="Insurance-native technology. Built for insurer reality."
      subheading="Ezee Technologies exists to help insurance businesses modernize with systems that are practical, scalable, configurable, and grounded in real operational needs — not generic enterprise software adapted for insurance."
      primaryCta={{ label: "Talk to our team", href: "/contact" }}
    />

    <section className="section-spacing bg-accent/50">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">Who we are</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Ezee Technologies is an insurance-native technology and execution company. We help insurers modernize customer journeys, distribution networks, operational workflows, governance structures, and business intelligence through configurable infrastructure built specifically for the insurance industry.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We believe insurance technology should work around insurer requirements — not force insurers into rigid systems. That principle drives everything we build: from our Digital Operating Layer and Digital Spine architecture to our modular products and specialized execution pods.
            </p>
          </motion.div>
          <motion.div
            className="rounded-2xl aspect-[4/3] overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src={imgMission} alt="Ezee Technologies team collaborating" className="w-full h-full object-cover rounded-2xl" loading="lazy" />
          </motion.div>
        </div>
      </div>
    </section>

    <section className="section-spacing">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            className="rounded-2xl aspect-[4/3] overflow-hidden lg:order-1"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src={imgVision} alt="Insurance transformation vision" className="w-full h-full object-cover rounded-2xl" loading="lazy" />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:order-2">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">What we believe</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Insurance does not need another generic dashboard or another rigid enterprise platform. It needs a new operating layer — one that connects distribution, workflows, governance, and intelligence into a modern, scalable digital backbone.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We believe the smartest insurance technology investment is one that starts with clarity, deploys with modularity, and scales with configuration instead of custom code. That is why we built the Digital Operating Layer, the Digital Spine, and a suite of modular products that work independently or together.
            </p>
            <Link to="/products/digital-operating-layer" className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all">
              Explore the Digital Operating Layer <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>

    <section className="section-spacing bg-accent/50">
      <div className="section-container">
        <h2 className="section-heading text-center mb-16">Our principles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {principles.map((p, i) => (
            <motion.div key={i} className="bg-card rounded-2xl p-6 border border-border" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4">
                <p.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
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

    <CTASection heading="Let's talk about what you need to modernize" subheading="Whether you need a focused product, a transformation roadmap, or a connected operating architecture — we will help you identify the smartest next step." ctaLabel="Talk to our team" ctaHref="/contact" />
  </Layout>
);

export default About;
