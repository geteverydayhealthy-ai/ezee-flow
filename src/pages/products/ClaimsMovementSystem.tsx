import { Eye } from "lucide-react";
import ProductPageTemplate from "@/components/ProductPageTemplate";

const ClaimsMovementSystem = () => (
  <ProductPageTemplate
    seoTitle="Claims Movement System | Ezee Technologies"
    heading="Claims Movement System"
    subheading="A structured workflow platform for claim intake, coordination, visibility, tracking, and turnaround improvement."
    outcomeLine="Better visibility. Better coordination. Better claims experience."
    sections={[
      {
        heading: "What it solves",
        content: "Claims are one of the most sensitive moments in insurance, but they are often managed through fragmented emails, manual updates, and unclear internal movement. This creates poor customer experience and slow internal coordination. Claims Movement System brings structure to the full claims journey.",
        icon: Eye,
        visual: "right",
      },
      {
        heading: "What it includes",
        items: ["FNOL capture", "Claims intake workflows", "Internal routing and assignment", "Document tracking", "Status visibility", "Customer update flows", "Turnaround monitoring"],
        icon: Eye,
        visual: "left",
      },
      {
        heading: "Why it matters",
        content: "Claims handling should not feel opaque or chaotic. This system helps insurers improve both internal control and customer trust by making claims movement visible, trackable, and manageable.",
        icon: Eye,
        visual: "right",
      },
    ]}
    relatedLinks={[
      { label: "Digital Spine", href: "/products/digital-spine" },
      { label: "Insurance CRM + ERP", href: "/products/insurance-crm-erp" },
      { label: "AI-enabled BI & Analytics", href: "/products/ai-business-intelligence-analytics" },
    ]}
  />
);

export default ClaimsMovementSystem;
