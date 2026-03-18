import { Bot } from "lucide-react";
import ProductPageTemplate from "@/components/ProductPageTemplate";
import imgSolves from "@/assets/visuals/v2-ai-automation.jpg";
import imgIncludes from "@/assets/visuals/v2-digital-infrastructure.jpg";
import imgMatters from "@/assets/visuals/v2-transformation.jpg";

const AIBusinessIntelligence = () => (
  <ProductPageTemplate
    seoTitle="AI-enabled Business Intelligence & Analytics | Ezee Technologies"
    heading="AI-enabled Business Intelligence & Analytics"
    subheading="A decision-support layer that turns insurance data into operational insight, performance visibility, and smarter action."
    outcomeLine="See more clearly. Decide more confidently. Optimize more intelligently."
    sections={[
      {
        heading: "What it solves",
        content: "Insurers often sit on large amounts of operational, claims, sales, servicing, and distribution data but lack a clean way to turn it into usable insight. This leads to slower decisions, weak visibility, and missed optimization opportunities.",
        icon: Bot,
        visual: "right",
        image: imgSolves,
      },
      {
        heading: "What it includes",
        items: ["Performance dashboards", "Operational analytics", "Claims and servicing visibility", "Sales and pipeline reporting", "Trend identification", "AI-assisted insight generation", "Management decision support"],
        icon: Bot,
        visual: "left",
        image: imgIncludes,
      },
      {
        heading: "Why it matters",
        content: "Better reporting is useful. Better insight is transformational. This product helps leadership teams move from static reporting to dynamic operational intelligence so decisions can be faster, sharper, and more grounded in actual business movement.",
        icon: Bot,
        visual: "right",
        image: imgMatters,
      },
    ]}
    relatedLinks={[
      { label: "Digital Operating Layer", href: "/products/digital-operating-layer" },
      { label: "Digital Spine", href: "/products/digital-spine" },
      { label: "Insurance CRM + ERP", href: "/products/insurance-crm-erp" },
      { label: "Lead & Opportunity Engine", href: "/products/lead-opportunity-engine" },
      { label: "Claims Movement System", href: "/products/claims-movement-system" },
      { label: "Agency Dashboard", href: "/products/agency-dashboard" },
    ]}
  />
);

export default AIBusinessIntelligence;
