import SolutionPageTemplate from "@/components/SolutionPageTemplate";
import imgSolves from "@/assets/visuals/v3-backoffice-flow.jpg";
import imgIncludes from "@/assets/visuals/v3-backoffice-discipline.jpg";
import imgMatters from "@/assets/visuals/v2-governance-shield.jpg";

const Backoffice = () => (
  <SolutionPageTemplate
    heading="Backoffice"
    subheading="Bring discipline, visibility, and continuity to the internal movement of insurance operations — ensuring nothing falls through the cracks between teams, processes, and systems."
    whatItSolves="Insurance operations often break down not in customer-facing moments but in the internal coordination between teams, departments, and processes. Policy issuance gets delayed because of unclear handoffs. Claims coordination suffers from manual tracking. Servicing requests get lost between departments. Reporting is inconsistent because data lives in disconnected systems. The Backoffice solution addresses these internal operational failures by creating structured workflows, clear accountability chains, and real-time visibility across the internal movement of insurance work — from policy administration and claims coordination to servicing, compliance, and management reporting."
    whatItIncludes="Servicing support systems that structure how customer requests, endorsements, cancellations, and document needs are handled internally. Claims coordination support with structured handoffs, document tracking, and turnaround monitoring between claims teams and external parties. Policy administration support with workflow automation for issuance, endorsement processing, and renewal management. Reporting discipline with standardized templates, scheduled generation, and cross-departmental data consolidation. Handoff structure with clear ownership assignment, escalation paths, and completion tracking between teams. Operational workflow management that connects tasks, approvals, and follow-ups into trackable, measurable processes."
    whyItMatters="Operational leakage is one of the most expensive problems in insurance — and one of the hardest to see because it happens between processes rather than within them. When internal operations run with discipline, visibility, and accountability, the entire business benefits: faster turnaround times, fewer errors, better regulatory compliance, stronger customer satisfaction, and reduced operational cost. The Backoffice solution ensures that the internal machinery of insurance runs as smoothly as the customer-facing experience."
    images={{ solves: imgSolves, includes: imgIncludes, matters: imgMatters }}
  />
);
export default Backoffice;
