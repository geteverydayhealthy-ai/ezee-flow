import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Layers, Workflow, Shield, BarChart3 } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";

const layers = [
  {
    num: "01",
    title: "Acquisition Layer",
    desc: "Powers how insurers attract, onboard, convert, and digitally serve customers across channels.",
    outcome: "Turn demand into digital insurance journeys.",
    items: ["Digital funnels", "Web-based onboarding", "App-based onboarding", "Quote journeys", "Lead capture", "Self-service purchase flows", "Partner distribution journeys", "Embedded insurance journeys", "Renewal and upsell journeys"],
    color: "bg-card-teal",
    icon: Layers,
  },
  {
    num: "02",
    title: "Workflows Layer",
    desc: "Structures the internal movement of insurance operations across teams, systems, and processes.",
    outcome: "Make insurance operations move with discipline.",
    items: ["Underwriting workflows", "Claims workflows", "Policy issuance movement", "Servicing processes", "Approvals and escalations", "Team routing", "Task movement", "Internal handoffs", "Turnaround monitoring"],
    color: "bg-card-mint",
    icon: Workflow,
  },
  {
    num: "03",
    title: "Governance Layer",
    desc: "Ensures digital insurance execution remains controlled, configurable, compliant, and aligned with insurer rules.",
    outcome: "Move faster without losing control.",
    items: ["Approval logic", "Access controls", "Rule configuration", "Workflow checkpoints", "Audit visibility", "Compliance-aligned controls", "Insurer-specific business logic", "Product governance", "Operational oversight"],
    color: "bg-card-sage",
    icon: Shield,
  },
  {
    num: "04",
    title: "Intelligence Layer",
    desc: "Turns operational, sales, servicing, and claims data into visibility, insight, and better decision-making.",
    outcome: "Turn data into sharper insurance decisions.",
    items: ["Business intelligence dashboards", "Operational analytics", "Performance visibility", "Claims intelligence", "Sales and pipeline reporting", "AI-assisted insight generation", "Trend detection", "Decision support", "Management reporting"],
    color: "bg-card-aqua",
    icon: BarChart3,
  },
];

const DigitalSpine = () => (
  <Layout>
    <PageHero
      heading="Digital Spine"
      subheading="The structured insurance backbone that connects acquisition, workflows, governance, and intelligence into one modern digital architecture."
      primaryCta={{ label: "Book a Demo", href: "/contact" }}
    />

    <div className="section-container -mt-8 mb-16">
      <p className="text-center text-lg font-medium text-primary">Four layers. One connected insurance operating model.</p>
    </div>

    {/* What it is */}
    <section className="section-spacing bg-accent/50">
      <div className="section-container max-w-3xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="section-heading mb-6">What Digital Spine is</h2>
          <p className="text-muted-foreground leading-relaxed">
            Digital Spine is the core orchestration platform inside Ezee Technologies' Digital Operating Layer. It connects the most important layers of modern insurance execution — how insurers acquire customers, run operations, maintain governance, and generate intelligence — through one connected architecture instead of fragmented systems.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Four Layers - Flagship visual */}
    <section className="section-spacing">
      <div className="section-container">
        <h2 className="section-heading text-center mb-16">The four layers of Digital Spine</h2>

        {/* Architecture diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-16">
          {layers.map((layer, i) => (
            <motion.div
              key={i}
              className={`${layer.color} rounded-2xl p-6 text-foreground relative overflow-hidden`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <span className="text-xs font-bold opacity-40 uppercase tracking-wider">Layer {layer.num}</span>
              <h3 className="text-xl font-bold mt-2 mb-3">{layer.title}</h3>
              <p className="text-sm opacity-80 mb-4">{layer.desc}</p>
              <div className="bg-foreground/5 rounded-xl p-3 mb-4">
                <ul className="space-y-1.5">
                  {layer.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs">
                      <span className="w-1 h-1 rounded-full bg-foreground/40 mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-xs font-semibold opacity-70">{layer.outcome}</p>
            </motion.div>
          ))}
        </div>

        {/* Connection visual */}
        <div className="relative">
          <svg className="w-full h-8 hidden lg:block" viewBox="0 0 1200 32">
            <line x1="150" y1="16" x2="1050" y2="16" stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray="8 4" />
            {[150, 450, 750, 1050].map((x, i) => (
              <circle key={i} cx={x} cy="16" r="6" fill="hsl(var(--primary))" />
            ))}
          </svg>
          <p className="text-center text-sm text-muted-foreground mt-4 max-w-xl mx-auto">
            Each layer is useful on its own. The real strength comes from their connection — creating a true insurance operating backbone.
          </p>
        </div>
      </div>
    </section>

    {/* Why they matter together */}
    <section className="section-spacing bg-secondary text-secondary-foreground">
      <div className="section-container max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Why the four layers matter together</h2>
        <p className="text-secondary-foreground/70 leading-relaxed mb-10">
          Acquisition brings customers in. Workflows move the business forward. Governance keeps operations controlled. Intelligence helps improve what happens next.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {["Faster go-to-market", "Better digital customer journeys", "More structured internal operations", "Configurable governance controls", "Stronger operational visibility", "Smarter decision-making"].map((item, i) => (
            <div key={i} className="bg-secondary-foreground/5 rounded-xl p-4 text-sm font-medium">{item}</div>
          ))}
        </div>
      </div>
    </section>

    {/* Outcome */}
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="section-container text-center">
        <p className="text-2xl sm:text-3xl font-bold">Acquire better. Operate smarter. Govern properly. See clearly.</p>
      </div>
    </section>

    {/* FAQ */}
    <section className="section-spacing">
      <div className="section-container max-w-3xl">
        <h2 className="section-heading text-center mb-12">Frequently asked questions</h2>
        <div className="space-y-6">
          {[
            { q: "What is Digital Spine?", a: "Digital Spine is the core orchestration architecture inside the Digital Operating Layer. It connects Acquisition, Workflows, Governance, and Intelligence into one structured insurance backbone." },
            { q: "Why does Digital Spine matter?", a: "Without a common digital backbone, insurers often end up with fragmented tools, duplicated effort, weak visibility, and slower execution." },
            { q: "Can Digital Spine work with existing systems?", a: "Yes. It is designed to connect with existing core systems and surrounding tools rather than requiring a full replacement first." },
          ].map((f, i) => (
            <div key={i} className="bg-card rounded-xl p-6 border border-border">
              <h3 className="font-semibold mb-2">{f.q}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <RelatedLinks links={[
      { label: "Digital Operating Layer", href: "/products/digital-operating-layer" },
      { label: "Insurance CRM + ERP", href: "/products/insurance-crm-erp" },
      { label: "Claims Movement System", href: "/products/claims-movement-system" },
      { label: "AI-enabled BI & Analytics", href: "/products/ai-business-intelligence-analytics" },
    ]} />

    <CTASection
      heading="Let's build the right digital layer for your insurance business"
      ctaLabel="Book a Demo"
      ctaHref="/contact"
    />
  </Layout>
);

export default DigitalSpine;
