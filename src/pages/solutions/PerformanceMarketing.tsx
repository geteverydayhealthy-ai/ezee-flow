import SolutionPageTemplate from "@/components/SolutionPageTemplate";
import imgSolves from "@/assets/visuals/v3-perf-acquisition.jpg";
import imgIncludes from "@/assets/visuals/v3-perf-funnel.jpg";
import imgMatters from "@/assets/visuals/v3-perf-outcome.jpg";

const PerformanceMarketing = () => (
  <SolutionPageTemplate
    heading="Performance Marketing"
    subheading="Growth systems for insurers that need measurable customer acquisition, stronger funnel logic, and better conversion discipline. Turning marketing spend into actual policy sales."
    whatItSolves="Insurance growth often fails not because of insufficient spend, but because marketing activity is disconnected from funnel design, audience quality, landing page experience, and post-lead handling. Insurers invest in digital advertising, social media, and partner promotions but struggle to measure what actually drives policy sales versus what generates noise. Without structured funnel logic, audience segmentation, and conversion tracking, marketing budgets produce leads that never convert. Performance Marketing solves this by connecting acquisition strategy to conversion discipline across the full insurance customer funnel."
    whatItIncludes="Paid acquisition strategy designed for insurance-specific customer journeys and regulatory requirements. Landing page direction with conversion-optimized design and messaging. Full-funnel design from awareness through consideration, quote, and purchase with stage-appropriate messaging. Tracking infrastructure with attribution modeling, conversion pixels, and analytics integration. Audience testing and segmentation to identify the most responsive and valuable customer profiles. Campaign optimization with A/B testing, budget allocation, and creative performance analysis. Performance reporting with cost-per-lead, cost-per-acquisition, and ROAS metrics tied to actual policy outcomes."
    whyItMatters="Growth becomes more predictable, more measurable, and more directly tied to actual business outcomes when marketing and conversion are treated as one connected system. Insurers who implement performance marketing discipline spend less per acquired customer, convert at higher rates, and can scale acquisition with confidence because they understand exactly what works and where to invest next."
    images={{ solves: imgSolves, includes: imgIncludes, matters: imgMatters }}
  />
);
export default PerformanceMarketing;
