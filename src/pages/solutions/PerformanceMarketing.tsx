import SolutionPageTemplate from "@/components/SolutionPageTemplate";
import imgSolves from "@/assets/visuals/performance-growth.jpg";
import imgIncludes from "@/assets/visuals/lead-conversion.jpg";
import imgMatters from "@/assets/visuals/intelligence-insight.jpg";

const PerformanceMarketing = () => (
  <SolutionPageTemplate
    heading="Performance Marketing"
    subheading="Growth systems for insurers that need measurable acquisition, stronger funnel logic, and better conversion discipline."
    whatItSolves="Insurance growth often fails because spend is disconnected from funnel design, audience quality, and post-lead handling."
    whatItIncludes="Paid acquisition strategy, landing page direction, funnel design, tracking structure, audience testing, campaign optimization, and performance reporting."
    whyItMatters="Growth becomes more predictable, more measurable, and more tied to actual business outcomes."
    images={{ solves: imgSolves, includes: imgIncludes, matters: imgMatters }}
  />
);
export default PerformanceMarketing;
