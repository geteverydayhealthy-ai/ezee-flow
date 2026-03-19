import { Eye } from "lucide-react";
import ProductPageTemplate from "@/components/ProductPageTemplate";
import imgSolves from "@/assets/visuals/v5-claims-journey.jpg";
import imgIncludes from "@/assets/visuals/v5-claims-coordination.jpg";
import imgMatters from "@/assets/visuals/v5-claims-resolution.jpg";

const ClaimsMovementSystem = () => (
  <ProductPageTemplate
    pageSlug="claims-movement-system"
    seoTitle="Claims Movement System for Insurance | Ezee Technologies"
    heading="Claims Movement System"
    subheading="A structured workflow platform for claim intake, coordination, tracking, and turnaround improvement. Bringing discipline to the most critical moment in insurance."
    supportingLine="From first notification to resolution: structured, visible, and controlled."
    outcomeLine="Better visibility. Better coordination. Better claims experience."
    sections={[
      {
        heading: "Why claims need a dedicated movement system",
        content: "Claims are one of the most sensitive and operationally complex moments in the insurance lifecycle. Yet in many organizations, claims are still managed through fragmented emails, manual spreadsheet updates, unclear handoffs, and disconnected communication. This leads to poor customer experience, slow resolution, internal coordination failures, and increased complaint risk. The Claims Movement System brings structure to the full claims journey, from first notification of loss through intake, assessment, coordination, documentation, approval, and resolution, so that every claim moves through a defined, trackable process.",
        icon: Eye,
        visual: "right",
        image: imgSolves,
      },
      {
        heading: "What the Claims Movement System includes",
        items: [
          "First Notification of Loss (FNOL) capture through digital forms, portals, or agent submissions with structured data collection",
          "Claims intake workflows that validate, classify, and route claims based on type, severity, and product line",
          "Internal routing and team assignment with workload balancing, escalation paths, and specialist allocation",
          "Document tracking and management for policy documents, medical reports, damage assessments, and supporting evidence",
          "Real-time status visibility for internal teams, management, and customer-facing updates",
          "Customer communication flows with automated status updates, next-step notifications, and resolution confirmations",
          "Turnaround monitoring with SLA tracking, bottleneck identification, and performance reporting",
        ],
        icon: Eye,
        visual: "left",
        image: imgIncludes,
      },
      {
        heading: "Build trust through claims transparency",
        content: "Claims handling should never feel opaque or chaotic. The Claims Movement System helps insurers improve both internal operational control and customer trust by making claims movement visible, trackable, and manageable at every step. When customers can see progress, when teams can coordinate without confusion, and when management can monitor turnaround and quality, the entire claims experience improves. For insurers, this translates into faster resolution, fewer complaints, better regulatory compliance, and stronger customer retention. A well-handled claim builds more loyalty than a well-sold policy.",
        icon: Eye,
        visual: "right",
        image: imgMatters,
      },
    ]}
    faq={[
      { q: "Does the system handle all types of insurance claims?", a: "Yes. It is configurable across motor, health, life, property, and general insurance claims with product-specific workflow variations." },
      { q: "Can customers track their claim status?", a: "Yes. The system supports customer-facing status updates through portals, email notifications, and SMS triggers." },
      { q: "Does it integrate with existing claims systems?", a: "Yes. It connects with existing core claims administration systems through APIs, enabling synchronized data and workflow triggers." },
    ]}
    relatedLinks={[
      { label: "Digital Spine", href: "/products/digital-spine" },
      { label: "Insurance CRM + ERP", href: "/products/insurance-crm-erp" },
      { label: "AI-enabled BI & Analytics", href: "/products/ai-business-intelligence-analytics" },
    ]}
  />
);

export default ClaimsMovementSystem;
