import { Target } from "lucide-react";
import ProductPageTemplate from "@/components/ProductPageTemplate";
import imgSolves from "@/assets/visuals/v6-lead-funnel.jpg";
import imgIncludes from "@/assets/visuals/v6-lead-growth.jpg";
import imgMatters from "@/assets/visuals/v6-lead-analytics.jpg";

const LeadOpportunityEngine = () => (
  <ProductPageTemplate
    pageSlug="lead-opportunity-engine"
    seoTitle="Lead & Opportunity Engine for Insurance | Ezee Technologies"
    heading="Lead & Opportunity Engine"
    subheading="A demand management system built for insurance distribution, conversion, routing, and follow-through. Because leads are only valuable when they are captured properly, routed quickly, and moved through a defined conversion process."
    supportingLine="From lead capture to conversion: structured, tracked, and optimized."
    outcomeLine="Capture better. Route faster. Convert with more discipline."
    sections={[
      {
        heading: "Why insurance lead management needs structure",
        content: "Insurance leads arrive from dozens of sources: digital campaigns, partner referrals, website forms, walk-ins, social media, agent networks. Most insurers lose significant value because these leads are managed through disconnected tools with no unified tracking, no clear routing logic, and no consistent follow-up discipline. The Lead & Opportunity Engine creates structure around inbound demand, partner-generated leads, digital campaigns, and sales opportunities so that every potential customer is handled with discipline and every conversion step is visible.",
        icon: Target,
        visual: "right",
        image: imgSolves,
      },
      {
        heading: "What the Lead & Opportunity Engine includes",
        items: [
          "Multi-channel lead capture from web forms, landing pages, partner portals, social campaigns, and offline sources into one unified pipeline",
          "Smart routing and assignment based on product type, geography, team capacity, and priority rules",
          "Opportunity movement tracking with stage-based pipeline control that shows exactly where each opportunity stands",
          "Source attribution and conversion reporting that reveals which channels, campaigns, and partners drive the most valuable leads",
          "Automated follow-up workflows with reminders, escalations, and re-engagement triggers to prevent lead decay",
          "Team productivity visibility showing response times, follow-up discipline, and conversion performance by individual and team",
        ],
        icon: Target,
        visual: "left",
        image: imgIncludes,
      },
      {
        heading: "Turn demand into managed opportunity",
        content: "Many insurers invest heavily in lead generation but lose value through poor handling, slow follow-up, and disconnected reporting. The Lead & Opportunity Engine closes this gap by connecting demand generation with sales execution. Every lead is assigned, every follow-up is tracked, every stage transition is recorded, and every outcome is measurable. Whether leads come from digital performance marketing, partner referrals, agency networks, or direct channels, the engine provides one consistent view of the entire demand-to-conversion pipeline.",
        icon: Target,
        visual: "right",
        image: imgMatters,
      },
    ]}
    faq={[
      { q: "Can it handle leads from multiple distribution channels?", a: "Yes. It captures and unifies leads from digital campaigns, partner portals, agency referrals, website forms, social media, and offline sources into one structured pipeline." },
      { q: "Does it integrate with marketing tools?", a: "Yes. It connects with common digital marketing platforms, email tools, and campaign management systems through API integration." },
      { q: "How does lead routing work?", a: "Leads are automatically routed based on configurable rules including product type, geography, priority level, team capacity, and source channel." },
    ]}
    relatedLinks={[
      { label: "Insurance CRM + ERP", href: "/products/insurance-crm-erp" },
      { label: "Agency Dashboard", href: "/products/agency-dashboard" },
      { label: "AI-enabled BI & Analytics", href: "/products/ai-business-intelligence-analytics" },
    ]}
  />
);

export default LeadOpportunityEngine;
