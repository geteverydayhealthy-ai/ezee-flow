import { motion } from "framer-motion";
import { Zap, Settings, Shield, Layers, Eye, Target, ArrowRight, Building2, Globe, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import imgMission from "@/assets/visuals/v8-team-collaboration.jpg";
import imgVision from "@/assets/visuals/v5-about-infrastructure.jpg";
import { usePageContent } from "@/hooks/usePageContent";

const principlesData = [
  { icon: Zap, title: "Fastest go-to-market", desc: "We help insurers launch digital products, channels, and journeys faster through modular, configurable infrastructure that removes the traditional bottlenecks." },
  { icon: Settings, title: "Nothing hardcoded", desc: "Every workflow, product rule, approval logic, and governance control is configurable. Your system adapts to your requirements, not the other way around." },
  { icon: Target, title: "Insurer-specific configuration", desc: "Our platforms are configured around each insurer's product structure, business model, distribution channels, and governance framework." },
  { icon: Layers, title: "Modular deployment", desc: "Start with one product or solution and expand over time. No forced bundling, no all-or-nothing commitments." },
  { icon: Shield, title: "Governance built in", desc: "Compliance controls, approval logic, audit trails, and access management are embedded into every layer from day one." },
  { icon: Eye, title: "Operational visibility", desc: "Real-time dashboards, performance analytics, and AI-powered intelligence give leadership teams the visibility they need to make better decisions." },
];

const whoWeServeData = [
  { icon: Building2, title: "Large & Composite Carriers", desc: "Modernize selected functions or build a connected digital operating model across the enterprise without disrupting core systems." },
  { icon: TrendingUp, title: "Mid-Sized Insurers", desc: "Deploy modular products to digitize distribution, claims, servicing, and internal operations at a pace that works for your team." },
  { icon: Zap, title: "MGAs & Digital Insurers", desc: "Launch with configurable infrastructure purpose-built for insurance. Move fast without the technical debt of building from scratch." },
  { icon: Globe, title: "Embedded & Ecosystem Players", desc: "Design and deploy insurance distribution through partners, fintechs, and digital platforms with the architecture to scale." },
];

const About = () => {
  const { get } = usePageContent("about");

  const heroHeading = get("hero", "heading", "Insurance-native technology. Built for insurer reality.");
  const heroSub = get("hero", "subheading", "Ezee Technologies exists to help insurance businesses modernize with systems that are practical, scalable, and grounded in real operational needs. Not generic enterprise software adapted for insurance. Purpose-built infrastructure for how insurers actually work.");
  const whoHeading = get("who_we_are", "heading", "Who we are");
  const whoP1 = get("who_we_are", "p1", "Ezee Technologies is an insurance-native technology company. We help insurers modernize customer journeys, distribution networks, operational workflows, governance structures, and business intelligence through configurable infrastructure designed specifically for the insurance industry.");
  const whoP2 = get("who_we_are", "p2", "We work with insurers of all sizes: from startup MGAs and digital-first players to mid-sized carriers and large composite insurers. Our approach is the same regardless of scale. Understand the business, configure the right architecture, deploy in phases, and support the growth.");
  const whoP3 = get("who_we_are", "p3", "We believe insurance technology should work around insurer requirements, not force insurers into rigid structures. That principle drives everything we build.");
  const believeHeading = get("what_we_believe", "heading", "What we believe");
  const believeP1 = get("what_we_believe", "p1", "Insurance does not need another generic dashboard or another rigid enterprise platform. It needs a new operating layer that connects distribution, workflows, governance, and intelligence into a modern, scalable digital backbone.");
  const believeP2 = get("what_we_believe", "p2", "The smartest insurance technology investment is one that starts with clarity, deploys with modularity, and scales with configuration instead of custom code. That is exactly why we built the Digital Operating Layer, the Digital Spine, and a suite of modular products that work independently or together.");
  const quoteText = get("quote", "text", "Insurance does not need another dashboard. It needs a new operating layer.");
  const ctaHeading = get("cta", "heading", "Let's talk about what you need to modernize");
  const ctaSub = get("cta", "subheading", "Whether you need a focused product, a transformation roadmap, or a connected operating architecture, we will help you identify the smartest next step.");
  const ctaLabel = get("cta", "ctaLabel", "Talk to our team");

  return (
    <Layout>
      <PageHero heading={heroHeading} subheading={heroSub} primaryCta={{ label: "Talk to our team", href: "/contact" }} />

      <section className="section-spacing bg-accent/50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">{whoHeading}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">{whoP1}</p>
              <p className="text-muted-foreground leading-relaxed mb-4">{whoP2}</p>
              <p className="text-muted-foreground leading-relaxed">{whoP3}</p>
            </motion.div>
            <motion.div className="rounded-2xl aspect-[4/3] overflow-hidden" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <img src={imgMission} alt="Ezee Technologies team" className="w-full h-full object-cover rounded-2xl" loading="lazy" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div className="rounded-2xl aspect-[4/3] overflow-hidden lg:order-1" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <img src={imgVision} alt="Digital infrastructure" className="w-full h-full object-cover rounded-2xl" loading="lazy" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:order-2">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">{believeHeading}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">{believeP1}</p>
              <p className="text-muted-foreground leading-relaxed mb-6">{believeP2}</p>
              <Link to="/products/digital-operating-layer" className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all">
                Explore the Digital Operating Layer <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="section-spacing bg-accent/50">
        <div className="section-container">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="eyebrow mb-4">Who we serve</p>
            <h2 className="section-heading max-w-3xl mx-auto mb-4">Built for insurers at every stage</h2>
            <p className="section-subheading mx-auto">Whether you are launching your first digital product or modernizing a complex enterprise operation, we configure around your reality.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whoWeServeData.map((item, i) => (
              <motion.div key={i} className="bg-card rounded-2xl p-7 border border-border" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="section-spacing">
        <div className="section-container">
          <h2 className="section-heading text-center mb-16">Our principles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {principlesData.map((p, i) => (
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

      <section className="py-12 sm:py-16 bg-primary text-primary-foreground">
        <div className="section-container text-center">
          <p className="text-xl sm:text-2xl md:text-3xl font-bold">{quoteText}</p>
        </div>
      </section>

      <CTASection heading={ctaHeading} subheading={ctaSub} ctaLabel={ctaLabel} ctaHref="/contact" />
    </Layout>
  );
};

export default About;
