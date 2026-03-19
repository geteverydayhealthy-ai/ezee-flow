import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Map, Globe, CheckCircle2, Target, Shield, Layers } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { usePageContent } from "@/hooks/usePageContent";

const playbooks = [
  {
    title: "Blueprint & Strategy",
    href: "/playbooks/blueprint-strategy",
    desc: "A structured 4-to-8-week engagement that maps your current landscape, identifies priorities, and defines a clear digital transformation roadmap before any platform build begins.",
    items: ["Current-state assessment and gap analysis", "Target architecture definition", "Phase-wise delivery plan with milestones", "Priority journey mapping and governance framework"],
    icon: Map,
  },
  {
    title: "Embedded Insurance Infrastructure",
    href: "/playbooks/embedded-insurance-infrastructure",
    desc: "A strategic design engagement that defines how insurance should be distributed through partners, ecosystems, fintechs, and digital channels with clear architecture, partner roles, and operating models.",
    items: ["Partner ecosystem and journey design", "Integration architecture and API patterns", "Governance and compliance framework", "Operating model and responsibility mapping"],
    icon: Globe,
  },
];

const valuePoints = [
  { icon: Target, title: "Reduce implementation risk", desc: "Define the right priorities before committing budget to technology development" },
  { icon: Shield, title: "Align stakeholders early", desc: "Get leadership, operations, and technology teams on the same page with a shared roadmap" },
  { icon: Layers, title: "Get actionable outputs", desc: "Receive journey maps, architecture recommendations, and rollout sequences you can act on immediately" },
];

const PlaybooksOverview = () => {
  const { get } = usePageContent("playbooks-overview");

  const heroHeading = get("hero", "heading", "Playbooks: Strategic clarity before platform investment");
  const heroSub = get("hero", "subheading", "Ezee Playbooks are structured consulting engagements that help insurers define the right strategy, architecture, and execution plan before committing to a full technology build. The strategic foundation that makes every subsequent investment smarter.");
  const ctaHeading = get("cta", "heading", "Start with clarity. Build with confidence.");
  const ctaSub = get("cta", "subheading", "Book a Playbook consultation to define the right starting point for your insurance transformation.");
  const ctaLabel = get("cta", "ctaLabel", "Book a Consultation");

  return (
    <Layout>
      <PageHero heading={heroHeading} subheading={heroSub} primaryCta={{ label: "Book a Consultation", href: "/contact" }} />

      {/* What is a Playbook */}
      <section className="section-spacing bg-accent/50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">What is a Playbook?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A Playbook is a focused strategic engagement, typically lasting 4 to 8 weeks, where Ezee Technologies works with your leadership and operations teams to assess, plan, and design before you build.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {valuePoints.map((point, i) => (
              <motion.div key={i} className="bg-card rounded-2xl p-6 border border-border text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mx-auto mb-4">
                  <point.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{point.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{point.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Playbook difference */}
      <section className="section-spacing">
        <div className="section-container max-w-3xl mx-auto">
          <h2 className="section-heading text-center mb-6">How Playbooks are different from generic consulting</h2>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            Unlike traditional consulting reports that end up on a shelf, Playbooks produce specific, implementable outputs that directly inform your technology decisions.
          </p>
          <div className="space-y-4">
            {[
              "Journey maps that show exactly which customer and operational flows to digitize first",
              "Architecture recommendations that specify system design, integration patterns, and capability priorities",
              "Modular rollout sequences that break transformation into manageable phases with clear dependencies",
              "Governance frameworks that define approval logic, compliance alignment, and operational controls",
              "Capability priorities that align investment with measurable business impact",
            ].map((item, i) => (
              <motion.div key={i} className="flex items-start gap-3 bg-card rounded-xl p-4 border border-border" initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who are Playbooks for */}
      <section className="section-spacing bg-accent/50">
        <div className="section-container">
          <h2 className="section-heading text-center mb-6">Who are Playbooks for?</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
            Playbooks are designed for insurers, MGAs, and distribution companies that are planning a digital transformation but want strategic clarity before committing to a full technology investment.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {playbooks.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Link to={p.href} className="group block bg-card rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-lg transition-all h-full">
                  <p.icon className="w-10 h-10 text-primary mb-5" />
                  <h3 className="text-xl font-bold mb-3">{p.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-5">{p.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {p.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-spacing">
        <div className="section-container max-w-3xl">
          <h2 className="section-heading text-center mb-12">Frequently asked questions</h2>
          <div className="space-y-6">
            {[
              { q: "How long does a Playbook engagement take?", a: "Most Playbook engagements are completed within 4 to 8 weeks, depending on the scope and complexity of the insurer's current environment." },
              { q: "What do we get at the end of a Playbook?", a: "You receive actionable deliverables including journey maps, architecture recommendations, rollout sequences, governance frameworks, and priority definitions that directly inform your technology investment decisions." },
              { q: "Do we need to buy Ezee products after a Playbook?", a: "No. Playbook outputs are vendor-neutral and can inform any technology decision. However, the recommendations naturally align with Ezee's modular product architecture if you choose to proceed." },
              { q: "Can a Playbook be done remotely?", a: "Yes. Playbook engagements can be conducted through a combination of remote workshops, stakeholder interviews, and collaborative working sessions." },
              { q: "What if we already know what we need?", a: "If you have clear requirements, you can skip the Playbook and engage directly with Ezee's product or solution teams. Playbooks are specifically for situations where strategic clarity is needed before building." },
            ].map((f, i) => (
              <div key={i} className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-semibold mb-2">{f.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading={ctaHeading} subheading={ctaSub} ctaLabel={ctaLabel} ctaHref="/contact" />
    </Layout>
  );
};

export default PlaybooksOverview;
