import SolutionPageTemplate from "@/components/SolutionPageTemplate";
import imgSolves from "@/assets/visuals/creative-communication.jpg";
import imgIncludes from "@/assets/visuals/acquisition-journey.jpg";
import imgMatters from "@/assets/visuals/performance-growth.jpg";

const CreativeOffice = () => (
  <SolutionPageTemplate
    heading="Creative Office"
    subheading="Insurance communication systems that make products clearer, more credible, and easier to understand."
    whatItSolves="Insurance products are often difficult to explain, difficult to trust, and difficult to make engaging."
    whatItIncludes="Brand communication systems, campaign concepts, product explainers, UI/UX content support, launch assets, landing page content, and customer journey messaging."
    whyItMatters="Better communication improves trust, comprehension, and conversion across every digital journey."
    images={{ solves: imgSolves, includes: imgIncludes, matters: imgMatters }}
  />
);
export default CreativeOffice;
