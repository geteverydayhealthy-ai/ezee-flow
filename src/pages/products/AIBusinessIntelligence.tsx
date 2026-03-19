import { Bot } from "lucide-react";
import ProductPageTemplate from "@/components/ProductPageTemplate";
import imgSolves from "@/assets/visuals/v2-ai-automation.jpg";
import imgIncludes from "@/assets/visuals/v4-tech-dev.jpg";
import imgMatters from "@/assets/visuals/v2-transformation.jpg";

const AIBusinessIntelligence = () => (
  <ProductPageTemplate
    seoTitle="AI-enabled Business Intelligence & Analytics for Insurance | Ezee Technologies"
    heading="AI-enabled Business Intelligence & Analytics"
    subheading="A decision-support layer that turns insurance operational data into actionable insight, performance visibility, and smarter business decisions across the entire value chain."
    supportingLine="From static reports to dynamic intelligence. Built for insurance leadership."
    outcomeLine="See more clearly. Decide more confidently. Optimize more intelligently."
    sections={[
      {
        heading: "Why insurers need smarter intelligence",
        content: "Insurers generate enormous volumes of operational, claims, sales, servicing, and distribution data every day. But most lack a clean, structured way to turn that data into usable insight. Traditional reporting tools produce static reports that arrive too late to influence decisions. Data sits in silos across departments. Leadership teams make strategic decisions based on incomplete pictures. AI-enabled BI & Analytics closes this gap by providing a structured intelligence layer that connects to operational data sources and delivers real-time, actionable insight to the people who need it most.",
        icon: Bot,
        visual: "right",
        image: imgSolves,
      },
      {
        heading: "What AI-enabled BI & Analytics includes",
        items: [
          "Performance dashboards showing real-time business metrics across sales, operations, claims, and distribution channels",
          "Operational analytics that surface bottlenecks, turnaround issues, and workflow inefficiencies before they impact customers",
          "Claims and servicing visibility with trend analysis, resolution tracking, and quality monitoring",
          "Sales and pipeline reporting with conversion analysis, channel performance, and revenue forecasting",
          "Trend identification using AI-assisted pattern recognition across historical and real-time data",
          "AI-assisted insight generation that highlights anomalies, opportunities, and risk signals proactively",
          "Management decision support with scenario analysis, comparative reporting, and strategic planning tools",
        ],
        icon: Bot,
        visual: "left",
        image: imgIncludes,
      },
      {
        heading: "From reporting to real intelligence",
        content: "Better reporting is useful. Better insight is transformational. This product helps insurance leadership teams move from static, backward-looking reporting to dynamic operational intelligence. When an underwriting team can see approval patterns in real time, when a claims leader can identify bottleneck trends before they escalate, when a distribution head can compare channel performance across geographies, that is the difference between managing reactively and leading proactively. AI-enabled BI & Analytics makes that shift possible.",
        icon: Bot,
        visual: "right",
        image: imgMatters,
      },
    ]}
    faq={[
      { q: "Does this replace our existing BI tools?", a: "It can work alongside existing tools or serve as the primary intelligence layer. It is designed to connect to insurance-specific data sources and deliver insurance-relevant insight." },
      { q: "What kind of AI capabilities are included?", a: "Pattern recognition, anomaly detection, trend identification, and proactive insight generation, all trained on insurance operational data patterns." },
      { q: "Can different teams see different dashboards?", a: "Yes. Dashboards are configurable by role, department, and access level so leadership, operations, claims, and distribution teams each see what is most relevant." },
    ]}
    relatedLinks={[
      { label: "Digital Operating Layer", href: "/products/digital-operating-layer" },
      { label: "Digital Spine", href: "/products/digital-spine" },
      { label: "Insurance CRM + ERP", href: "/products/insurance-crm-erp" },
      { label: "Claims Movement System", href: "/products/claims-movement-system" },
    ]}
  />
);

export default AIBusinessIntelligence;
