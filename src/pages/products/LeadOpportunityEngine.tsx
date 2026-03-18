import { Target } from "lucide-react";
import ProductPageTemplate from "@/components/ProductPageTemplate";
import imgSolves from "@/assets/visuals/lead-conversion.jpg";
import imgIncludes from "@/assets/visuals/acquisition-journey.jpg";
import imgMatters from "@/assets/visuals/performance-growth.jpg";

const LeadOpportunityEngine = () => (
  <ProductPageTemplate
    seoTitle="Lead & Opportunity Engine | Ezee Technologies"
    heading="Lead & Opportunity Engine"
    subheading="A demand management system built for insurance distribution, conversion, routing, and follow-through."
    outcomeLine="Capture better. Route faster. Convert with more discipline."
    sections={[
      {
        heading: "What it solves",
        content: "Insurance leads are only valuable if they are captured properly, routed quickly, tracked consistently, and moved through a defined conversion process. This product helps insurers and distributors create structure around inbound demand, partner leads, digital campaigns, and sales opportunities.",
        icon: Target,
        visual: "right",
        image: imgSolves,
      },
      {
        heading: "What it includes",
        items: ["Lead capture across channels", "Smart routing and assignment", "Opportunity movement tracking", "Stage-based pipeline control", "Source and conversion reporting", "Follow-up workflows", "Team productivity visibility"],
        icon: Target,
        visual: "left",
        image: imgIncludes,
      },
      {
        heading: "Why it matters",
        content: "Many insurers focus on lead generation but lose value in poor handling, slow follow-up, and disconnected reporting. The Lead & Opportunity Engine helps turn demand into managed opportunity.",
        icon: Target,
        visual: "right",
        image: imgMatters,
      },
    ]}
    relatedLinks={[
      { label: "Insurance CRM + ERP", href: "/products/insurance-crm-erp" },
      { label: "Agency Dashboard", href: "/products/agency-dashboard" },
      { label: "AI-enabled BI & Analytics", href: "/products/ai-business-intelligence-analytics" },
    ]}
  />
);

export default LeadOpportunityEngine;
