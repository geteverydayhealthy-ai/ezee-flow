import { Layers, Workflow, Shield, BarChart3 } from "lucide-react";
import ProductPageTemplate from "@/components/ProductPageTemplate";

const DigitalOperatingLayer = () => (
  <ProductPageTemplate
    seoTitle="Digital Operating Layer for Insurance | Ezee Technologies"
    heading="The Digital Operating Layer for Insurance"
    subheading="A modern technology layer that sits above legacy systems and helps insurers modernize distribution, workflows, customer experience, integrations, and intelligence without replacing their core systems."
    outcomeLine="Modernize faster. Integrate smarter. Scale without rebuilding everything."
    sections={[
      {
        heading: "Why it matters",
        content: "Most insurers are constrained by legacy systems, fragmented data, manual workflows, and disconnected partner infrastructure. Replacing everything at once is expensive, slow, and risky. The Digital Operating Layer provides a smarter path: modernize what matters, connect what exists, and create a scalable foundation for future growth.",
        icon: Layers,
        visual: "right",
      },
      {
        heading: "What it enables",
        items: [
          "Digital distribution across web, app, embedded, and partner channels",
          "Interactive onboarding and self-service",
          "Workflow automation across underwriting, servicing, and claims",
          "API-based partner integration",
          "Configurable product setup",
          "Real-time visibility and AI-enabled decision support",
        ],
        icon: Workflow,
        visual: "left",
      },
      {
        heading: "Built for insurer reality",
        content: "The Digital Operating Layer is designed to adapt around insurer requirements instead of forcing insurers into rigid software. It supports business-specific workflows, product-level configuration, governance controls, approval logic, distribution variations, and insurer-specific operational structures.",
        icon: Shield,
        visual: "right",
      },
    ]}
    relatedLinks={[
      { label: "Digital Spine", href: "/products/digital-spine" },
      { label: "Insurance CRM + ERP", href: "/products/insurance-crm-erp" },
      { label: "Claims Movement System", href: "/products/claims-movement-system" },
      { label: "AI-enabled BI & Analytics", href: "/products/ai-business-intelligence-analytics" },
    ]}
  />
);

export default DigitalOperatingLayer;
