import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Layers, Workflow, Users, Target, Eye, BarChart3, Bot } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { usePageContent } from "@/hooks/usePageContent";

const products = [
  { title: "The Digital Operating Layer", desc: "Modernize insurance without replacing core systems", href: "/products/digital-operating-layer", icon: Layers },
  { title: "Digital Spine", desc: "Connect acquisition, workflows, governance, and intelligence", href: "/products/digital-spine", icon: Workflow },
  { title: "Insurance CRM + ERP", desc: "Structure sales, servicing, and internal operations", href: "/products/insurance-crm-erp", icon: Users },
  { title: "Lead & Opportunity Engine", desc: "Bring discipline to demand and conversion", href: "/products/lead-opportunity-engine", icon: Target },
  { title: "Claims Movement System", desc: "Improve claim visibility, tracking, and communication", href: "/products/claims-movement-system", icon: Eye },
  { title: "Agency Dashboard", desc: "Manage channel visibility and partner performance", href: "/products/agency-dashboard", icon: BarChart3 },
  { title: "AI-enabled BI & Analytics", desc: "Turn business movement into usable insight", href: "/products/ai-business-intelligence-analytics", icon: Bot },
];

const ProductsOverview = () => {
  const { get } = usePageContent("products-overview");

  const heroHeading = get("hero", "heading", "Products built for modern insurance execution");
  const heroSub = get("hero", "subheading", "Ezee Technologies builds modular products that help insurers modernize customer journeys, operations, distribution, visibility, and decision-making without forcing rigid systems or hardcoded logic.");
  const ctaHeading = get("cta", "heading", "Let's build the right digital layer for your insurance business");
  const ctaLabel = get("cta", "ctaLabel", "Book a Demo");

  return (
    <Layout>
      <PageHero heading={heroHeading} subheading={heroSub} primaryCta={{ label: "Book a Demo", href: "/contact" }} />
      <div className="section-container -mt-8 mb-16">
        <p className="text-center text-sm text-muted-foreground">Built to work independently or together as part of the Digital Operating Layer.</p>
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

      <CTASection heading={ctaHeading} ctaLabel={ctaLabel} ctaHref="/contact" />
    </Layout>
  );
};

export default ProductsOverview;
