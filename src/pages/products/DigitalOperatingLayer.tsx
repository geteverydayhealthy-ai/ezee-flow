import { Layers, Workflow, Shield } from "lucide-react";
import ProductPageTemplate from "@/components/ProductPageTemplate";
import imgSolves from "@/assets/visuals/v2-digital-infrastructure.jpg";
import imgIncludes from "@/assets/visuals/v3-dol-workflows.jpg";
import imgMatters from "@/assets/visuals/v3-dol-control.jpg";

const DigitalOperatingLayer = () => (
  <ProductPageTemplate
    seoTitle="Digital Operating Layer for Insurance | Ezee Technologies"
    heading="The Digital Operating Layer for Insurance"
    subheading="A modern technology layer that sits above legacy systems and helps insurers modernize distribution, workflows, customer experience, integrations, and intelligence without replacing their core systems."
    supportingLine="Modernize what matters. Connect what exists. Scale what works."
    outcomeLine="Modernize faster. Integrate smarter. Scale without rebuilding everything."
    sections={[
      {
        heading: "Why insurers need a Digital Operating Layer",
        content: "Most insurers today are constrained by aging core systems, fragmented data environments, manual workflows, and disconnected partner infrastructure. Replacing everything at once is expensive, disruptive, and risky. The Digital Operating Layer provides a smarter path forward — it allows insurers to modernize distribution, customer journeys, internal operations, partner integrations, and business intelligence without replacing their existing core systems. It acts as the connective layer between what exists and what the business needs next, enabling faster go-to-market, better digital experiences, and stronger operational control across the insurance value chain.",
        icon: Layers,
        visual: "right",
        image: imgSolves,
      },
      {
        heading: "What the Digital Operating Layer enables",
        items: [
          "Digital distribution across web, mobile app, embedded, and partner channels — enabling insurers to reach customers through the channels that matter most",
          "Interactive customer onboarding, self-service portals, and digital purchase journeys that reduce friction and increase conversion",
          "Workflow automation across underwriting, policy issuance, servicing, renewals, and claims — reducing manual effort and improving turnaround",
          "API-based partner integration for distribution networks, embedded insurance ecosystems, and third-party service providers",
          "Configurable product setup that supports different insurance lines, coverage structures, and pricing models without hardcoded logic",
          "Real-time operational visibility, performance dashboards, and AI-enabled decision support that turns business data into actionable intelligence",
        ],
        icon: Workflow,
        visual: "left",
        image: imgIncludes,
      },
      {
        heading: "Built for real insurer requirements",
        content: "Unlike generic enterprise platforms that require heavy customization or force insurers into rigid structures, the Digital Operating Layer is designed to adapt around insurer-specific requirements. It supports business-specific workflows, product-level configuration, governance controls, multi-level approval logic, distribution variations, and insurer-specific operational structures. Whether an insurer needs to launch a new product line, onboard a distribution partner, restructure internal workflows, or add governance checkpoints, the platform supports it through configuration rather than custom development. This means faster deployment, lower risk, and a system that grows with the business instead of constraining it.",
        icon: Shield,
        visual: "right",
        image: imgMatters,
      },
    ]}
    faq={[
      { q: "What is a Digital Operating Layer?", a: "A Digital Operating Layer is a modern technology layer that sits above existing core systems and connects distribution, workflows, governance, and intelligence into one structured digital environment — without requiring a full system replacement." },
      { q: "Can the Digital Operating Layer work with legacy systems?", a: "Yes. It is designed specifically to work alongside existing core administration, policy management, and claims systems. It connects and extends them rather than replacing them." },
      { q: "How is this different from buying a new core system?", a: "A core system replacement is expensive, slow, and high-risk. The Digital Operating Layer modernizes what matters most — customer journeys, workflows, integrations, and intelligence — while preserving existing investments." },
      { q: "Is the Digital Operating Layer configurable for different insurance lines?", a: "Yes. It supports motor, health, life, general, specialty, and composite insurance lines through configurable product logic, workflow rules, and governance structures." },
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
