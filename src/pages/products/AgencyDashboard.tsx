import { BarChart3 } from "lucide-react";
import ProductPageTemplate from "@/components/ProductPageTemplate";

const AgencyDashboard = () => (
  <ProductPageTemplate
    seoTitle="Agency Dashboard | Ezee Technologies"
    heading="Agency Dashboard"
    subheading="A distribution management platform for brokers, agents, channel teams, and partner networks."
    outcomeLine="Stronger channel visibility. Better partner control. Smarter distribution growth."
    sections={[
      {
        heading: "What it solves",
        content: "Distribution teams need better visibility into policies, pipeline, commissions, activity, and partner performance. Without a structured dashboard, agency networks become hard to manage and even harder to scale.",
        icon: BarChart3,
        visual: "right",
      },
      {
        heading: "What it includes",
        items: ["Partner and agent visibility", "Policy-level tracking", "Production reporting", "Commission view", "Performance monitoring", "Channel activity overview", "Configurable access controls"],
        icon: BarChart3,
        visual: "left",
      },
      {
        heading: "Why it matters",
        content: "As insurance distribution grows across agents, brokers, and ecosystem channels, visibility becomes a competitive advantage. Agency Dashboard helps make distribution more measurable and manageable.",
        icon: BarChart3,
        visual: "right",
      },
    ]}
    relatedLinks={[
      { label: "Lead & Opportunity Engine", href: "/products/lead-opportunity-engine" },
      { label: "Insurance CRM + ERP", href: "/products/insurance-crm-erp" },
      { label: "AI-enabled BI & Analytics", href: "/products/ai-business-intelligence-analytics" },
    ]}
  />
);

export default AgencyDashboard;
