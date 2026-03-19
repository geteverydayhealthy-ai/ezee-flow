import { Users } from "lucide-react";
import ProductPageTemplate from "@/components/ProductPageTemplate";
import imgSolves from "@/assets/visuals/v2-crm-team.jpg";
import imgIncludes from "@/assets/visuals/v2-backoffice-ops.jpg";
import imgMatters from "@/assets/visuals/v2-trust-partnership.jpg";

const InsuranceCrmErp = () => (
  <ProductPageTemplate
    seoTitle="Insurance CRM + ERP | Ezee Technologies"
    heading="Insurance CRM + ERP"
    subheading="A structured operating system for insurance sales, servicing, tasks, reporting, and internal coordination — designed around how insurance teams actually work."
    supportingLine="One connected environment for sales, servicing, and operational accountability."
    outcomeLine="More structure for teams. More visibility for management. Less operational leakage."
    sections={[
      {
        heading: "The problem with generic CRMs in insurance",
        content: "Insurance teams often rely on disconnected spreadsheets, chat groups, email chains, generic CRM tools, and manual trackers to manage their daily work. This leads to visibility gaps, missed follow-ups, inconsistent servicing, duplicated effort, and weak reporting discipline. Standard CRMs were not designed for the complexity of insurance operations — they lack policy-aware workflows, renewal tracking, claims coordination, and the multi-role structures that insurance businesses depend on. Insurance CRM + ERP brings all of these activities into one connected operational environment that understands insurance context from the ground up.",
        icon: Users,
        visual: "right",
        image: imgSolves,
      },
      {
        heading: "What Insurance CRM + ERP includes",
        items: [
          "Lead and customer management with full lifecycle tracking from first inquiry through policy issuance and renewal",
          "Team task assignment, workload distribution, and internal coordination tools that keep teams aligned",
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
        content: "This is not a generic CRM adapted for insurance as an afterthought. It is designed around the reality of how insurance teams work — across sales, renewals, servicing, documentation, coordination, compliance, and accountability. Every feature reflects insurance-specific logic: policy-aware customer records, renewal calendar integration, claims-linked servicing, multi-branch management, and governance-aligned operational controls. The result is a system where nothing falls through the cracks, teams are accountable, management has visibility, and the business operates with the discipline that insurance demands.",
        icon: Users,
        visual: "right",
        image: imgMatters,
      },
    ]}
    faq={[
      { q: "How is this different from Salesforce or HubSpot?", a: "Generic CRMs require extensive customization to handle insurance-specific workflows like policy tracking, renewal management, and claims coordination. Insurance CRM + ERP is built natively around these workflows." },
      { q: "Can it integrate with our existing policy administration system?", a: "Yes. It is designed to connect with existing core systems through APIs, enabling synchronized customer records, policy data, and workflow triggers." },
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
