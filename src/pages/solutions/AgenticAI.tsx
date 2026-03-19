import SolutionPageTemplate from "@/components/SolutionPageTemplate";
import imgSolves from "@/assets/visuals/v3-ai-servicing.jpg";
import imgIncludes from "@/assets/visuals/v3-ai-copilot.jpg";
import imgMatters from "@/assets/visuals/v3-ai-leadership.jpg";

const AgenticAI = () => (
  <SolutionPageTemplate
    heading="Agentic AI"
    subheading="Apply artificial intelligence to insurance servicing, underwriting support, claims enablement, decision support, and internal productivity — making teams faster and smarter without replacing human judgment."
    whatItSolves="Insurance teams deal with repetitive decisions, fragmented information across systems, slow internal communication, manual guidance loops, and an ever-growing volume of data that exceeds human processing capacity. Underwriters spend time on routine assessments that follow predictable patterns. Servicing teams answer the same customer questions repeatedly. Claims coordinators manually track documents and deadlines. Leadership teams make strategic decisions based on incomplete data. Agentic AI addresses these challenges by embedding intelligent automation and AI-powered assistance into the workflows where insurance teams spend their time — augmenting human capability rather than replacing it."
    whatItIncludes="AI-powered servicing assistants that handle routine customer inquiries, policy questions, and status updates with accurate, context-aware responses. Knowledge copilots that help underwriters, claims teams, and servicing staff access relevant information, guidelines, and precedents faster. Underwriting support tools that pre-screen applications, flag risk indicators, and suggest assessment priorities based on historical patterns. Claims support automation for document classification, completeness checking, and workflow routing. Intelligent workflow triggers that initiate actions based on data patterns, deadlines, or threshold events. Decision support systems that surface relevant insights, comparisons, and recommendations to help leadership teams make better-informed choices."
    whyItMatters="Teams move faster, answer with more accuracy, and operate with structured intelligence instead of manual effort. AI does not replace the expertise of insurance professionals — it amplifies it. When an underwriter gets a pre-screened risk summary, when a claims coordinator gets automatic document classification, when a servicing agent gets instant access to policy context, the entire operation becomes more responsive, more consistent, and more scalable. Agentic AI makes insurance teams more capable without adding headcount."
    images={{ solves: imgSolves, includes: imgIncludes, matters: imgMatters }}
  />
);
export default AgenticAI;
