import SolutionPageTemplate from "@/components/SolutionPageTemplate";
import imgSolves from "@/assets/visuals/v2-backoffice-ops.jpg";
import imgIncludes from "@/assets/visuals/v2-claims-processing.jpg";
import imgMatters from "@/assets/visuals/v2-governance-shield.jpg";

const Backoffice = () => (
  <SolutionPageTemplate
    heading="Backoffice"
    subheading="Bring discipline, visibility, and continuity to the internal movement of insurance operations."
    whatItSolves="Insurance operations often break down in coordination, tracking, follow-through, and cross-team handoffs."
    whatItIncludes="Servicing support, claims coordination support, policy admin support, reporting discipline, handoff structure, and operational workflow management."
    whyItMatters="Operational leakage is reduced and servicing reliability improves."
    images={{ solves: imgSolves, includes: imgIncludes, matters: imgMatters }}
  />
);
export default Backoffice;
