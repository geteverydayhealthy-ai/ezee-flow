import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Layers, Workflow, Users, Target, Eye, BarChart3, Bot } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { usePageContent } from "@/hooks/usePageContent";

const products = [
  { title: "The Digital Operating Layer", desc: "A modern technology layer above legacy systems that connects distribution, workflows, governance, and intelligence into one structured digital environment", href: "/products/digital-operating-layer", icon: Layers },
  { title: "Digital Spine", desc: "Four connected architecture layers: acquisition, workflows, governance, and intelligence in one insurance backbone", href: "/products/digital-spine", icon: Workflow },
  { title: "Insurance CRM + ERP", desc: "Policy-aware sales, servicing, task management, and operational accountability built for insurance teams", href: "/products/insurance-crm-erp", icon: Users },
  { title: "Lead & Opportunity Engine", desc: "Structured demand capture, routing, and conversion tracking across all distribution channels", href: "/products/lead-opportunity-engine", icon: Target },
  { title: "Claims Movement System", desc: "End-to-end claims intake, coordination, tracking, and resolution with structured workflows", href: "/products/claims-movement-system", icon: Eye },
  { title: "Agency Dashboard", desc: "Distribution visibility, partner performance tracking, and channel management in one view", href: "/products/agency-dashboard", icon: BarChart3 },
  { title: "AI-enabled BI & Analytics", desc: "Real-time intelligence, trend detection, and AI-assisted decision support for insurance leadership", href: "/products/ai-business-intelligence-analytics", icon: Bot },
];

const ProductsOverview = () => {
  const { get } = usePageContent("products-overview");

  const heroHeading = get("hero", "heading", "Products built for modern insurance execution");
  const heroSub = get("hero", "subheading", "Ezee Technologies builds modular products that help insurers modernize customer journeys, operations, distribution, visibility, and decision-making. Configurable, not hardcoded. Modular, not monolithic.");
  const ctaHeading = get("cta", "heading", "Let's build the right digital layer for your insurance business");
  const ctaLabel = get("cta", "ctaLabel", "Book a Demo");

  return (
    <Layout>
      <PageHero heading={heroHeading} subheading={heroSub} primaryCta={{ label: "Book a Demo", href: "/contact" }} secondaryCta={{ label: "Explore Digital Spine", href: "/products/digital-spine" }} />
      <div className="section-container -mt-8 mb-16">
        <p className="text-center text-sm text-muted-foreground">Each product works independently or together as part of the Digital Operating Layer.</p>
      </div>

      <section className="section-spacing">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                <Link to={p.href} className="group block bg-card rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-lg transition-all h-full">
                  <p.icon className="w-10 h-10 text-primary mb-5" />
                  <h3 className="text-lg font-bold mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.desc}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                    Explore <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How products connect */}
      <section className="section-spacing bg-accent/50">
        <div className="section-container max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">How products work together</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Each product solves a specific insurance problem. The Lead Engine captures demand. The CRM manages the relationship. The Claims System handles resolution. The Agency Dashboard provides channel visibility. BI & Analytics turns it all into intelligence. Together, they form the Digital Operating Layer.
          </p>
          <Link to="/products/digital-operating-layer" className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all">
            Learn about the Digital Operating Layer <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <CTASection heading={ctaHeading} ctaLabel={ctaLabel} ctaHref="/contact" />
    </Layout>
  );
};

export default ProductsOverview;
