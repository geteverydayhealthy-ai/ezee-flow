import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, Target, Settings, Bot, Workflow } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { usePageContent } from "@/hooks/usePageContent";

const solutions = [
  { title: "Creative Office", desc: "Insurance communication systems that make products clearer, more credible, and easier to understand.", href: "/solutions/creative-office", icon: Briefcase },
  { title: "Performance Marketing", desc: "Growth systems for insurers that need measurable acquisition, stronger funnel logic, and better conversion discipline.", href: "/solutions/performance-marketing", icon: Target },
  { title: "App & Tech Development", desc: "Insurance-native product design and engineering for customer journeys, portals, apps, and internal systems.", href: "/solutions/app-tech-development", icon: Settings },
  { title: "Agentic AI", desc: "Apply AI to insurance servicing, underwriting support, claims enablement, decision support, and internal productivity.", href: "/solutions/agentic-ai", icon: Bot },
  { title: "Backoffice", desc: "Bring discipline, visibility, and continuity to the internal movement of insurance operations.", href: "/solutions/backoffice", icon: Workflow },
];

const SolutionsOverview = () => {
  const { get } = usePageContent("solutions-overview");

  const heroHeading = get("hero", "heading", "Specialized solutions for modern insurance businesses");
  const heroSub = get("hero", "subheading", "Ezee Technologies combines insurance-native design, growth, technology, operations, and AI into focused execution pods that solve real business problems across the insurance value chain.");
  const introText = get("intro", "text", "Some insurers need a stronger growth funnel. Some need digital infrastructure. Some need operational modernization. Some need all of it working together. Our solution model is modular by design.");
  const ctaHeading = get("cta", "heading", "Let's talk about what you need to modernize");
  const ctaLabel = get("cta", "ctaLabel", "Talk to our team");

  return (
    <Layout>
      <PageHero heading={heroHeading} subheading={heroSub} primaryCta={{ label: "Talk to our team", href: "/contact" }} />

      <section className="section-spacing bg-accent/50">
        <div className="section-container max-w-3xl mx-auto text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">{introText}</p>
        </div>
      </section>

      <section className="section-spacing">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Link to={s.href} className="group block bg-card rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-lg transition-all h-full">
                  <s.icon className="w-10 h-10 text-primary mb-5" />
                  <h3 className="text-lg font-bold mb-3">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-accent/50">
        <div className="section-container max-w-3xl">
          <h2 className="section-heading text-center mb-12">Frequently asked questions</h2>
          <div className="space-y-6">
            {[
              { q: "Can Ezee Technologies support only one part of a transformation?", a: "Yes. Solutions are modular. An insurer can engage one execution pod or combine several depending on the need." },
              { q: "Do we need to buy every product first?", a: "No. Products and solutions can be deployed independently or connected over time as part of a broader operating model." },
            ].map((f, i) => (
              <div key={i} className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-semibold mb-2">{f.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading={ctaHeading} ctaLabel={ctaLabel} ctaHref="/contact" />
    </Layout>
  );
};

export default SolutionsOverview;
