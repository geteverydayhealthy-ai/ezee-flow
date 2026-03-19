import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import imgVisual from "@/assets/visuals/v5-blueprint-plan.jpg";

const BlueprintStrategy = () => (
  <Layout>
    <PageHero heading="Blueprint & Strategy Playbook" subheading="A structured discovery and planning engagement that maps your current landscape, defines priorities, and creates a clear digital transformation roadmap before any platform build begins." primaryCta={{ label: "Book a Consultation", href: "/contact" }} />

    <section className="section-spacing bg-accent/50">
      <div className="section-container max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">What is the Blueprint & Strategy Playbook?</h2>
        <p className="text-muted-foreground leading-relaxed">
          This is a focused consulting engagement for insurers who are planning digital transformation but need strategic clarity before committing resources. Over 4 to 8 weeks, Ezee Technologies works with your leadership and operations teams to assess your current state, identify operational bottlenecks, define a target architecture, and create a phased implementation roadmap that reduces risk and maximizes impact.
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
                { title: "Current-state assessment", desc: "A comprehensive map of your existing business model, product structure, distribution channels, technology landscape, and operational pain points." },
                { title: "Target architecture definition", desc: "A clear vision of where your digital infrastructure needs to go, including system architecture, integration approach, and capability priorities." },
                { title: "Priority journey mapping", desc: "Identification and design of the most impactful customer and operational journeys to digitize first, based on business value and feasibility." },
                { title: "Phase-wise delivery plan", desc: "A modular rollout sequence that breaks transformation into manageable phases with clear milestones, dependencies, and governance checkpoints." },
                { title: "Governance framework", desc: "Recommendations for approval logic, compliance alignment, access controls, and operational oversight structures." },
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
            <img src={imgVisual} alt="Blueprint and strategy planning" className="w-full h-full object-cover rounded-2xl" loading="lazy" />
          </motion.div>
        </div>
      </div>
    </section>

    <section className="section-spacing bg-accent/50">
      <div className="section-container max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Who is this Playbook for?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            "Insurers planning their first digital transformation initiative",
            "Companies with legacy systems that need a modernization roadmap",
            "Leadership teams evaluating technology investment options",
            "Organizations that want to reduce implementation risk before building",
            "MGAs or distribution companies exploring new digital capabilities",
            "Insurance businesses that need stakeholder alignment on priorities",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 bg-card rounded-xl p-4 border border-border">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    <CTASection heading="Start with the right plan. Build with confidence." subheading="Book a Blueprint & Strategy consultation to define your transformation roadmap." ctaLabel="Book a Consultation" ctaHref="/contact" />
  </Layout>
);

export default BlueprintStrategy;
