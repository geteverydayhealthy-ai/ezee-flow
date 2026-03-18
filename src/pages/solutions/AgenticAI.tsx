import SolutionPageTemplate from "@/components/SolutionPageTemplate";
import imgSolves from "@/assets/visuals/agentic-ai.jpg";
import imgIncludes from "@/assets/visuals/intelligence-insight.jpg";
import imgMatters from "@/assets/visuals/digital-infrastructure.jpg";

const AgenticAI = () => (
  <SolutionPageTemplate
    heading="Agentic AI"
    subheading="Apply AI to insurance servicing, underwriting support, claims enablement, decision support, and internal productivity."
    whatItSolves="Insurance teams deal with repetitive decisions, fragmented information, slow internal movement, and manual guidance loops."
    whatItIncludes="AI servicing assistants, knowledge copilots, underwriting support tools, claims support automation, workflow triggers, and decision support systems."
    whyItMatters="Teams move faster, answer better, and operate with more structured intelligence."
    images={{ solves: imgSolves, includes: imgIncludes, matters: imgMatters }}
  />
);
export default AgenticAI;
