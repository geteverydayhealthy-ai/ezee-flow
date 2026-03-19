import SolutionPageTemplate from "@/components/SolutionPageTemplate";
import imgSolves from "@/assets/visuals/v5-creative-studio.jpg";
import imgIncludes from "@/assets/visuals/v5-creative-journey.jpg";
import imgMatters from "@/assets/visuals/v5-creative-impact.jpg";

const CreativeOffice = () => (
  <SolutionPageTemplate
    pageSlug="creative-office"
    heading="Creative Office"
    subheading="Insurance communication systems that make products clearer, more credible, and easier to understand. Helping insurers build trust and improve conversion through better storytelling."
    whatItSolves="Insurance products are inherently complex. They involve technical language, regulatory requirements, and abstract concepts like risk transfer and coverage limits that most customers find difficult to understand. This complexity leads to low engagement, weak trust, poor conversion rates, and customer confusion at critical decision points. The Creative Office solves this by designing communication systems that translate insurance complexity into clear, credible, and engaging experiences across every customer touchpoint."
    whatItIncludes="Brand communication systems and visual identity design that position insurers as modern and trustworthy. Campaign concepts and launch strategies for new products, channels, and markets. Product explainer content that breaks down coverage, benefits, and terms into language customers actually understand. UI/UX content support for digital journeys, portals, and apps so every screen communicates clearly. Landing page content optimized for conversion and search visibility. Customer journey messaging across onboarding, servicing, renewals, and claims."
    whyItMatters="Better communication directly improves trust, comprehension, and conversion across every digital insurance journey. When customers understand what they are buying, when product pages explain value clearly, when onboarding flows feel intuitive, and when brand presence feels credible, the entire business benefits. The Creative Office ensures that communication is never an afterthought but a strategic capability that supports growth, retention, and customer satisfaction."
    images={{ solves: imgSolves, includes: imgIncludes, matters: imgMatters }}
  />
);
export default CreativeOffice;
