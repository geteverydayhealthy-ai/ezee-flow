import { BarChart3 } from "lucide-react";
import ProductPageTemplate from "@/components/ProductPageTemplate";
import imgSolves from "@/assets/visuals/v5-agency-network.jpg";
import imgIncludes from "@/assets/visuals/v5-agency-collab.jpg";
import imgMatters from "@/assets/visuals/v5-agency-visibility.jpg";

const AgencyDashboard = () => (
  <ProductPageTemplate
    seoTitle="Agency Dashboard for Insurance Distribution | Ezee Technologies"
    heading="Agency Dashboard"
    subheading="A distribution management platform for brokers, agents, channel teams, and partner networks. Giving insurers the visibility and control they need to scale distribution intelligently."
    supportingLine="See your distribution network clearly. Manage it with confidence."
    outcomeLine="Stronger channel visibility. Better partner control. Smarter distribution growth."
    sections={[
      {
        heading: "Why distribution visibility matters",
        content: "As insurance distribution grows across agents, brokers, bancassurance partners, digital affiliates, and ecosystem channels, managing these networks becomes increasingly complex. Distribution teams need clear visibility into policy production, pipeline health, commission structures, partner activity, and performance trends. Without a structured dashboard, agency networks become difficult to manage, hard to optimize, and nearly impossible to scale strategically. The Agency Dashboard gives insurers a single, structured view of their entire distribution ecosystem so they can identify top performers, address underperformance, and make data-driven distribution decisions.",
        icon: BarChart3,
        visual: "right",
        image: imgSolves,
      },
      {
        heading: "What the Agency Dashboard includes",
        items: [
          "Comprehensive partner and agent profiles with onboarding status, performance history, and compliance tracking",
          "Policy-level tracking across agents, branches, and channels with real-time production visibility",
          "Production reporting with month-over-month trends, target tracking, and comparative performance analysis",
          "Commission visibility with calculation logic, payment status, and reconciliation support",
          "Performance monitoring with scorecards, activity metrics, and configurable KPIs per channel",
          "Channel activity overview showing partner engagement, submission patterns, and conversion trends",
          "Configurable access controls allowing different views for headquarters, regional managers, and individual agents",
        ],
        icon: BarChart3,
        visual: "left",
        image: imgIncludes,
      },
      {
        heading: "Scale distribution with intelligence",
        content: "As insurance distribution grows more complex and multi-channel, visibility becomes a competitive advantage. The Agency Dashboard helps insurers make distribution more measurable, more manageable, and more strategically directed. Instead of relying on periodic manual reports, distribution leaders get real-time insight into what is working, what needs attention, and where growth opportunities exist. Whether managing a network of 50 agents or 5,000, the dashboard provides the structure and clarity that modern insurance distribution demands.",
        icon: BarChart3,
        visual: "right",
        image: imgMatters,
      },
    ]}
    faq={[
      { q: "Can agents access their own performance data?", a: "Yes. The dashboard supports role-based access so agents can see their own production, commissions, and metrics while management sees the full network view." },
      { q: "Does it support multiple distribution channel types?", a: "Yes. It supports agents, brokers, bancassurance partners, digital affiliates, and embedded distribution channels in one unified view." },
      { q: "Can it calculate commissions automatically?", a: "Yes. Commission logic is configurable per product, channel, and agent tier, with automated calculation and reconciliation support." },
    ]}
    relatedLinks={[
      { label: "Lead & Opportunity Engine", href: "/products/lead-opportunity-engine" },
      { label: "Insurance CRM + ERP", href: "/products/insurance-crm-erp" },
      { label: "AI-enabled BI & Analytics", href: "/products/ai-business-intelligence-analytics" },
    ]}
  />
);

export default AgencyDashboard;
