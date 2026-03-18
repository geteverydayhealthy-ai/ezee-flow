import SolutionPageTemplate from "@/components/SolutionPageTemplate";
import imgSolves from "@/assets/visuals/v2-app-development.jpg";
import imgIncludes from "@/assets/visuals/v2-digital-infrastructure.jpg";
import imgMatters from "@/assets/visuals/v2-team-collaboration.jpg";

const AppTechDevelopment = () => (
  <SolutionPageTemplate
    heading="App & Tech Development"
    subheading="Insurance-native product design and engineering for customer journeys, portals, apps, and internal systems."
    whatItSolves="Insurers need digital tools that fit insurance workflows rather than generic software forced into insurance later."
    whatItIncludes="Web portals, mobile apps, self-service tools, admin panels, digital onboarding, policy flows, claims interfaces, and modular platform components."
    whyItMatters="Technology becomes more usable, more relevant, and faster to deploy around real insurance operations."
    images={{ solves: imgSolves, includes: imgIncludes, matters: imgMatters }}
  />
);
export default AppTechDevelopment;
