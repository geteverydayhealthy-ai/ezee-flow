import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Layers, Workflow, Shield, BarChart3 } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import { usePageContent } from "@/hooks/usePageContent";

const layers = [
  {
    num: "01",
    title: "Acquisition Layer",
    desc: "Powers how insurers attract, onboard, convert, and digitally serve customers across every distribution channel.",
    outcome: "Turn demand into digital insurance journeys.",
    items: ["Digital funnels and quote journeys", "Web and app-based onboarding", "Lead capture and self-service purchase flows", "Partner and embedded distribution journeys", "Renewal and upsell automation"],
    color: "bg-card-teal",
    icon: Layers,
  },
  {
    num: "02",
    title: "Workflows Layer",
    desc: "Structures the internal movement of insurance operations across teams, systems, and processes with defined handoffs and accountability.",
    outcome: "Make insurance operations move with discipline.",
    items: ["Underwriting and policy issuance workflows", "Claims coordination and routing", "Servicing processes and approvals", "Task assignment and escalation paths", "Turnaround monitoring and SLA tracking"],
    color: "bg-card-mint",
    icon: Workflow,
  },
  {
    num: "03",
    title: "Governance Layer",
    desc: "Ensures digital insurance execution remains controlled, compliant, and aligned with insurer-specific rules and regulatory requirements.",
    outcome: "Move faster without losing control.",
    items: ["Approval logic and access controls", "Rule configuration and workflow checkpoints", "Compliance-aligned operational controls", "Product governance and audit visibility", "Insurer-specific business logic enforcement"],
    color: "bg-card-sage",
    icon: Shield,
  },
  {
    num: "04",
    title: "Intelligence Layer",
    desc: "Turns operational, sales, servicing, and claims data into real-time visibility, insight, and better decision-making across the business.",
    outcome: "Turn data into sharper insurance decisions.",
    items: ["Business intelligence dashboards", "Performance visibility and trend detection", "Claims and sales pipeline reporting", "AI-assisted insight generation", "Management reporting and decision support"],
    color: "bg-card-aqua",
    icon: BarChart3,
  },
];

const DigitalSpine = () => {
  const { get } = usePageContent("digital-spine");

  const heroHeading = get("hero", "heading", "Digital Spine");
  const heroSub = get("hero", "subheading", "The structured insurance backbone that connects acquisition, workflows, governance, and intelligence into one modern digital architecture. Built to work with what you have and scale with what you need.");
  const supportLine = get("hero", "supportingLine", "Four layers. One connected insurance operating model.");
  const whatHeading = get("what_it_is", "heading", "What Digital Spine is");
  const whatDesc = get("what_it_is", "description", "Digital Spine is the core orchestration architecture inside Ezee Technologies' Digital Operating Layer. Instead of forcing insurers to replace existing systems, it connects the most important layers of modern insurance execution through one structured backbone. How you acquire customers, how operations move internally, how governance is maintained, and how data becomes useful intelligence. Each layer is independently deployable, but the real value comes when they work together.");
  const outcomeText = get("outcome", "text", "Acquire better. Operate smarter. Govern properly. See clearly.");
  const ctaHeading = get("cta", "heading", "Let's build the right digital backbone for your insurance business");
  const ctaLabel = get("cta", "ctaLabel", "Book a Demo");

  return (
    <Layout>
      <PageHero heading={heroHeading} subheading={heroSub} primaryCta={{ label: "Book a Demo", href: "/contact" }} secondaryCta={{ label: "Explore Products", href: "/products" }} />

      <div className="section-container -mt-8 mb-16">
        <p className="text-center text-lg font-medium text-primary">{supportLine}</p>
      </div>

      <section className="section-spacing bg-accent/50">
        <div className="section-container max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="section-heading mb-6">{whatHeading}</h2>
            <p className="text-muted-foreground leading-relaxed">{whatDesc}</p>
          </motion.div>
        </div>
      </section>

      {/* The Four Layers - Premium Section */}
      <section className="section-spacing">
        <div className="section-container">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="eyebrow mb-4">Architecture</p>
            <h2 className="section-heading">The four layers of Digital Spine</h2>
          </motion.div>

          <div className="space-y-6">
            {layers.map((layer, i) => (
              <motion.div
                key={i}
                className={`${layer.color} rounded-2xl overflow-hidden`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="p-8 lg:p-10">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-1 flex lg:flex-col items-center lg:items-start gap-3">
                      <span className="text-xs font-bold opacity-40 uppercase tracking-wider whitespace-nowrap">Layer {layer.num}</span>
                      <layer.icon className="w-8 h-8 text-foreground/30" />
                    </div>
                    <div className="lg:col-span-5">
                      <h3 className="text-2xl font-bold mb-3 text-foreground">{layer.title}</h3>
                      <p className="text-sm text-foreground/70 leading-relaxed mb-4">{layer.desc}</p>
                      <p className="text-sm font-semibold text-foreground/80">{layer.outcome}</p>
                    </div>
                    <div className="lg:col-span-6">
                      <div className="bg-foreground/5 rounded-xl p-5">
                        <p className="text-xs font-semibold uppercase tracking-wider opacity-50 mb-3">Key capabilities</p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {layer.items.map((item, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm text-foreground/70">
                              <span className="w-1.5 h-1.5 rounded-full bg-foreground/30 mt-1.5 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Connected Backbone Visual */}
          <div className="mt-12">
            <div className="hidden lg:flex items-center justify-center gap-0 mb-6">
              {layers.map((layer, i) => (
                <div key={i} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-primary" />
                    <span className="text-[10px] font-semibold text-muted-foreground mt-1">{layer.title.split(" ")[0]}</span>
                  </div>
                  {i < 3 && <div className="w-28 h-px bg-primary/30 -mt-4" />}
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground max-w-xl mx-auto">
              Each layer is useful on its own. The real strength comes from their connection, creating a true insurance operating backbone that grows with your business.
            </p>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-secondary text-secondary-foreground">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Why the four layers matter together</h2>
            <p className="text-secondary-foreground/70 leading-relaxed">
              Acquisition brings customers in. Workflows move the business forward. Governance keeps operations controlled. Intelligence helps you improve what happens next. Separately, each layer solves a real problem. Together, they form a connected operating model that scales.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Faster go-to-market for digital products",
              "Better digital customer journeys across channels",
              "More structured and trackable internal operations",
              "Configurable governance and compliance controls",
              "Real-time visibility into business performance",
              "Smarter, data-driven decision-making at every level",
            ].map((item, i) => (
              <motion.div key={i} className="bg-secondary-foreground/5 rounded-xl p-5 text-sm font-medium" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="section-container text-center">
          <p className="text-2xl sm:text-3xl font-bold">{outcomeText}</p>
        </div>
      </section>

      <section className="section-spacing">
        <div className="section-container max-w-3xl">
          <h2 className="section-heading text-center mb-12">Frequently asked questions</h2>
          <div className="space-y-6">
            {[
              { q: "What is Digital Spine?", a: "Digital Spine is the core orchestration architecture inside the Digital Operating Layer. It connects Acquisition, Workflows, Governance, and Intelligence into one structured insurance backbone that works with your existing systems." },
              { q: "Why does Digital Spine matter?", a: "Without a common digital backbone, insurers end up with fragmented tools, duplicated effort, weak visibility, and slower execution. Digital Spine provides the connective tissue that modern insurance operations need." },
              { q: "Can Digital Spine work with existing systems?", a: "Yes. It is designed to connect with existing core systems and surrounding tools rather than requiring a full replacement. It extends what you already have with modern orchestration and digital capabilities." },
              { q: "Do we need to deploy all four layers at once?", a: "No. Each layer is independently deployable. You can start with the layer that addresses your most pressing need and expand over time." },
              { q: "What insurance lines does it support?", a: "Digital Spine supports motor, health, life, general, specialty, and composite insurance through configurable product logic, workflow rules, and governance structures." },
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

      <CTASection heading={ctaHeading} ctaLabel={ctaLabel} ctaHref="/contact" />
    </Layout>
  );
};

export default DigitalSpine;
