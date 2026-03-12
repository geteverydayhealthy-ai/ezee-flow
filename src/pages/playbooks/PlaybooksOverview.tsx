import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Map, Globe } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

const playbooks = [
  {
    title: "Blueprint & Strategy",
    href: "/playbooks/blueprint-strategy",
    desc: "Map the insurer's current landscape, business model, product structure, operational bottlenecks, and desired target state.",
    items: ["Journey maps", "Architecture recommendations", "Modular rollout sequence", "Capability priorities"],
    icon: Map,
  },
  {
    title: "Embedded Insurance Infrastructure",
    href: "/playbooks/embedded-insurance-infrastructure",
    desc: "Define how insurance should be distributed through partners, ecosystems, fintechs, digital channels, or white-label environments.",
    items: ["Embedded journey designs", "Partner interface logic", "Deployment recommendations"],
    icon: Globe,
  },
];

const PlaybooksOverview = () => (
  <Layout>
    <PageHero
      heading="Playbooks before platforms"
      subheading="The smartest insurance technology build starts with the right logic. Ezee Playbooks help insurers define workflows, architecture, and direction before full implementation begins."
      primaryCta={{ label: "Book a Demo", href: "/contact" }}
    />

    <section className="section-spacing bg-accent/50">
      <div className="section-container max-w-3xl mx-auto text-center">
        <p className="text-lg text-muted-foreground leading-relaxed">
          Playbooks are strategic frameworks that reduce implementation waste. They help align business requirements, product logic, governance, and architecture before the build expands.
        </p>
      </div>
    </section>

    <section className="section-spacing">
      <div className="section-container">
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

    <CTASection heading="Let's define the right starting point" ctaLabel="Book a Demo" ctaHref="/contact" />
  </Layout>
);

export default PlaybooksOverview;
