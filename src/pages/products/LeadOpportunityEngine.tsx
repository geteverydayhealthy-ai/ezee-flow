import { Target } from "lucide-react";
import ProductPageTemplate from "@/components/ProductPageTemplate";
import imgSolves from "@/assets/visuals/v2-lead-funnel.jpg";
import imgIncludes from "@/assets/visuals/v2-growth-marketing.jpg";
import imgMatters from "@/assets/visuals/v2-analytics-visibility.jpg";

const LeadOpportunityEngine = () => (
  <ProductPageTemplate
    seoTitle="Lead & Opportunity Engine for Insurance | Ezee Technologies"
    heading="Lead & Opportunity Engine"
    subheading="A demand management system built for insurance distribution, conversion, routing, and follow-through — ensuring no opportunity is wasted."
    supportingLine="From lead capture to conversion — structured, tracked, and optimized."
    outcomeLine="Capture better. Route faster. Convert with more discipline."
    sections={[
      {
        heading: "Why insurance lead management needs structure",
        content: "Insurance leads are only valuable if they are captured properly, routed quickly, tracked consistently, and moved through a defined conversion process. Most insurers and distributors lose significant value because leads arrive from multiple sources — digital campaigns, partner referrals, website forms, walk-ins, social media — but are managed through disconnected tools with no unified tracking. The Lead & Opportunity Engine helps insurers create structure around inbound demand, partner-generated leads, digital campaigns, and sales opportunities so that every potential customer is handled with discipline and every conversion step is visible.",
        icon: Target,
        visual: "right",
        image: imgSolves,
      },
      {
        heading: "What the Lead & Opportunity Engine includes",
        items: [
          "Multi-channel lead capture from web forms, landing pages, partner portals, social campaigns, and offline sources — all into one unified pipeline",
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
        content: "Many insurers invest heavily in lead generation but lose value through poor handling, slow follow-up times, and disconnected reporting. The Lead & Opportunity Engine closes this gap by creating a disciplined system that connects demand generation with sales execution. It ensures that every lead is assigned, every follow-up is tracked, every stage transition is recorded, and every outcome is measurable. Whether leads come from digital performance marketing, partner referrals, agency networks, or direct channels, the engine provides one consistent view of the entire demand-to-conversion pipeline.",
        icon: Target,
        visual: "right",
        image: imgMatters,
      },
    ]}
    faq={[
      { q: "Can it handle leads from multiple distribution channels?", a: "Yes. The engine captures and unifies leads from digital campaigns, partner portals, agency referrals, website forms, social media, and offline sources into one structured pipeline." },
      { q: "Does it integrate with marketing tools?", a: "Yes. It can connect with common digital marketing platforms, email tools, and campaign management systems through API integration." },
      { q: "How does lead routing work?", a: "Leads are automatically routed based on configurable rules — including product type, geography, priority level, team capacity, and source channel." },
    ]}
    relatedLinks={[
      { label: "Insurance CRM + ERP", href: "/products/insurance-crm-erp" },
      { label: "Agency Dashboard", href: "/products/agency-dashboard" },
      { label: "AI-enabled BI & Analytics", href: "/products/ai-business-intelligence-analytics" },
    ]}
  />
);

export default LeadOpportunityEngine;
