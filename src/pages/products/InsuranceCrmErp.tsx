import { Users } from "lucide-react";
import ProductPageTemplate from "@/components/ProductPageTemplate";

const InsuranceCrmErp = () => (
  <ProductPageTemplate
    seoTitle="Insurance CRM + ERP | Ezee Technologies"
    heading="Insurance CRM + ERP"
    subheading="A structured operating system for insurance sales, servicing, tasks, reporting, and internal coordination."
    outcomeLine="More structure for teams. More visibility for management. Less operational leakage."
    sections={[
      {
        heading: "What it solves",
        content: "Insurance teams often work across spreadsheets, chats, email chains, disconnected CRMs, and manual trackers. This creates visibility gaps, missed follow-ups, inconsistent servicing, and weak reporting discipline. Insurance CRM + ERP brings these activities into one connected operational environment.",
        icon: Users,
        visual: "right",
      },
      {
        heading: "What it includes",
        items: ["Lead and customer management", "Team task assignment", "Pipeline visibility", "Servicing workflow tracking", "Operational dashboards", "Reporting discipline", "Insurer-specific process configuration"],
        icon: Users,
        visual: "left",
      },
      {
        heading: "Why it matters",
        content: "This is not a generic CRM adapted later for insurance. It is designed around how insurance teams actually work across sales, renewals, servicing, documentation, coordination, and accountability.",
        icon: Users,
        visual: "right",
      },
    ]}
    relatedLinks={[
      { label: "Lead & Opportunity Engine", href: "/products/lead-opportunity-engine" },
      { label: "Claims Movement System", href: "/products/claims-movement-system" },
      { label: "AI-enabled BI & Analytics", href: "/products/ai-business-intelligence-analytics" },
    ]}
  />
);

export default InsuranceCrmErp;
