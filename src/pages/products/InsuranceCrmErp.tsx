import { Users } from "lucide-react";
import ProductPageTemplate from "@/components/ProductPageTemplate";
import imgSolves from "@/assets/visuals/v5-crm-team.jpg";
import imgIncludes from "@/assets/visuals/v5-crm-focus.jpg";
import imgMatters from "@/assets/visuals/v5-crm-partnership.jpg";

const InsuranceCrmErp = () => (
  <ProductPageTemplate
    seoTitle="Insurance CRM + ERP | Ezee Technologies"
    heading="Insurance CRM + ERP"
    subheading="A structured operating system for insurance sales, servicing, tasks, reporting, and internal coordination. Designed around how insurance teams actually work, not how generic CRM vendors think they should."
    supportingLine="One connected environment for sales, servicing, and operational accountability."
    outcomeLine="More structure for teams. More visibility for management. Less operational leakage."
    sections={[
      {
        heading: "The problem with generic CRMs in insurance",
        content: "Insurance teams often run on disconnected spreadsheets, chat groups, email chains, and generic CRM tools that were never built for insurance. The result is missed follow-ups, inconsistent servicing, duplicated effort, and weak reporting. Standard CRMs lack policy-aware workflows, renewal tracking, claims coordination, and the multi-role structures that insurance teams depend on. Insurance CRM + ERP brings all of these activities into one connected operational environment that understands insurance context from the ground up.",
        icon: Users,
        visual: "right",
        image: imgSolves,
      },
      {
        heading: "What Insurance CRM + ERP includes",
        items: [
          "Lead and customer management with full lifecycle tracking from first inquiry through policy issuance and renewal",
          "Team task assignment, workload distribution, and internal coordination tools that keep everyone aligned",
          "Pipeline visibility across sales stages, products, branches, and distribution channels",
          "Servicing workflow tracking for endorsements, cancellations, document requests, and customer communications",
          "Operational dashboards for management-level visibility into team performance, turnaround times, and bottlenecks",
          "Reporting discipline with scheduled reports, activity logs, and performance metrics tied to actual business outcomes",
          "Insurer-specific process configuration that adapts to how each insurance company structures its operations",
        ],
        icon: Users,
        visual: "left",
        image: imgIncludes,
      },
      {
        heading: "Why insurance needs its own CRM + ERP",
        content: "This is not a generic CRM with an insurance label on it. It is designed around the reality of how insurance teams work: across sales, renewals, servicing, documentation, coordination, compliance, and accountability. Every feature reflects insurance-specific logic. Policy-aware customer records. Renewal calendar integration. Claims-linked servicing. Multi-branch management. Governance-aligned operational controls. The result is a system where nothing falls through the cracks, teams are accountable, management has visibility, and the business operates with the discipline that insurance demands.",
        icon: Users,
        visual: "right",
        image: imgMatters,
      },
    ]}
    faq={[
      { q: "How is this different from Salesforce or HubSpot?", a: "Generic CRMs require extensive customization to handle insurance-specific workflows like policy tracking, renewal management, and claims coordination. Insurance CRM + ERP is built natively around these workflows." },
      { q: "Can it integrate with our existing policy administration system?", a: "Yes. It connects with existing core systems through APIs, enabling synchronized customer records, policy data, and workflow triggers." },
      { q: "Does it support multi-branch operations?", a: "Yes. It supports multi-branch, multi-team, and multi-role structures with configurable access controls and reporting hierarchies." },
    ]}
    relatedLinks={[
      { label: "Lead & Opportunity Engine", href: "/products/lead-opportunity-engine" },
      { label: "Claims Movement System", href: "/products/claims-movement-system" },
      { label: "Agency Dashboard", href: "/products/agency-dashboard" },
      { label: "AI-enabled BI & Analytics", href: "/products/ai-business-intelligence-analytics" },
    ]}
  />
);

export default InsuranceCrmErp;
