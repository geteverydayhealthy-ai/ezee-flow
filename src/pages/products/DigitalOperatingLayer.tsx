import { Layers, Workflow, Shield } from "lucide-react";
import ProductPageTemplate from "@/components/ProductPageTemplate";
import imgSolves from "@/assets/visuals/v5-dol-infrastructure.jpg";
import imgIncludes from "@/assets/visuals/v5-dol-workflows.jpg";
import imgMatters from "@/assets/visuals/v6-dol-governance.jpg";

const DigitalOperatingLayer = () => (
  <ProductPageTemplate
    pageSlug="digital-operating-layer"
    seoTitle="Digital Operating Layer for Insurance | Ezee Technologies"
    heading="The Digital Operating Layer for Insurance"
    subheading="A modern technology layer that sits above legacy systems and helps insurers modernize distribution, workflows, customer experience, integrations, and intelligence without replacing their core systems."
    supportingLine="Modernize what matters. Connect what exists. Scale what works."
    outcomeLine="Modernize faster. Integrate smarter. Scale without rebuilding everything."
    sections={[
      {
        heading: "Why insurers need a Digital Operating Layer",
        content: "Most insurers today are held back by aging core systems, fragmented data, manual workflows, and disconnected partner infrastructure. Replacing everything at once is expensive, disruptive, and high-risk. The Digital Operating Layer provides a smarter path forward. It allows insurers to modernize distribution, customer journeys, internal operations, partner integrations, and business intelligence while preserving their existing core systems. Think of it as the connective layer between what you have today and what your business needs next.",
        icon: Layers,
        visual: "right",
        image: imgSolves,
      },
      {
        heading: "What the Digital Operating Layer enables",
        items: [
          "Digital distribution across web, mobile, embedded, and partner channels so you reach customers where they actually are",
          "Interactive customer onboarding, self-service portals, and digital purchase journeys that reduce friction and improve conversion",
          "Workflow automation across underwriting, policy issuance, servicing, renewals, and claims to cut manual effort and improve turnaround",
          "API-based partner integration for distribution networks, embedded insurance ecosystems, and third-party providers",
          "Configurable product setup that supports different insurance lines, coverage structures, and pricing models without hardcoded logic",
          "Real-time operational visibility, performance dashboards, and AI-enabled decision support",
        ],
        icon: Workflow,
        visual: "left",
        image: imgIncludes,
      },
      {
        heading: "Built for real insurer requirements",
        content: "Unlike generic enterprise platforms that require heavy customization or lock insurers into rigid structures, the Digital Operating Layer adapts around insurer-specific needs. It supports business-specific workflows, product-level configuration, governance controls, multi-level approval logic, distribution variations, and insurer-specific operational structures. Whether you need to launch a new product line, onboard a distribution partner, restructure internal workflows, or add governance checkpoints, the platform supports it through configuration. That means faster deployment, lower risk, and a system that grows with your business instead of constraining it.",
        icon: Shield,
        visual: "right",
        image: imgMatters,
      },
    ]}
    faq={[
      { q: "What is a Digital Operating Layer?", a: "It is a modern technology layer that sits above existing core systems and connects distribution, workflows, governance, and intelligence into one structured digital environment, without requiring a full system replacement." },
      { q: "Can it work with our existing legacy systems?", a: "Yes. It is designed specifically to work alongside existing core administration, policy management, and claims systems. It connects and extends them rather than replacing them." },
      { q: "How is this different from buying a new core system?", a: "A core system replacement is expensive, slow, and high-risk. The Digital Operating Layer modernizes what matters most: customer journeys, workflows, integrations, and intelligence, while preserving your existing investments." },
      { q: "Is it configurable for different insurance lines?", a: "Yes. It supports motor, health, life, general, specialty, and composite insurance lines through configurable product logic, workflow rules, and governance structures." },
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
