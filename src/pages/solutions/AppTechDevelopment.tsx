import SolutionPageTemplate from "@/components/SolutionPageTemplate";
import imgSolves from "@/assets/visuals/v6-apptech-build.jpg";
import imgIncludes from "@/assets/visuals/v5-apptech-architecture.jpg";
import imgMatters from "@/assets/visuals/v6-apptech-launch.jpg";

const AppTechDevelopment = () => (
  <SolutionPageTemplate
    pageSlug="app-tech-development"
    heading="App & Tech Development"
    subheading="Insurance-native product design and engineering for customer journeys, portals, apps, and internal systems. Built around how insurance actually works, not adapted from generic frameworks."
    whatItSolves="Insurers need digital tools that fit insurance workflows, compliance requirements, and customer expectations. Off-the-shelf solutions often lack the domain-specific logic that insurance operations demand: policy-aware customer portals, claims-integrated servicing tools, compliance-aligned onboarding flows, and multi-role admin panels. The App & Tech Development pod designs and builds insurance-native digital products from the ground up, ensuring every platform and application reflects real insurance operational needs."
    whatItIncludes="Customer-facing web portals with self-service capabilities for quotes, policy management, claims filing, and document access. Mobile applications for policyholders, agents, and field teams with offline-capable features. Admin panels and internal management tools designed around insurance operational hierarchies. Digital onboarding journeys with KYC integration, document upload, and real-time validation. Policy lifecycle flows covering quotation, issuance, endorsement, renewal, and cancellation. Claims interfaces for FNOL submission, status tracking, and document management. Modular platform components that can be deployed independently or connected into a broader digital operating environment."
    whyItMatters="When technology is built around insurance workflows rather than adapted from generic frameworks, it becomes more usable, more relevant, and faster to deploy. Insurance teams spend less time working around system limitations and more time serving customers. The result is better digital experiences for customers, more efficient operations for teams, and faster time-to-market for new products and channels."
    images={{ solves: imgSolves, includes: imgIncludes, matters: imgMatters }}
  />
);
export default AppTechDevelopment;
