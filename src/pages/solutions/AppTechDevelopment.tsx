import SolutionPageTemplate from "@/components/SolutionPageTemplate";
import imgSolves from "@/assets/visuals/v2-app-development.jpg";
import imgIncludes from "@/assets/visuals/v3-apptech-engineering.jpg";
import imgMatters from "@/assets/visuals/v2-team-collaboration.jpg";

const AppTechDevelopment = () => (
  <SolutionPageTemplate
    heading="App & Tech Development"
    subheading="Insurance-native product design and engineering for customer journeys, portals, apps, and internal systems — built around how insurance actually works."
    whatItSolves="Insurers need digital tools that fit insurance workflows, compliance requirements, and customer expectations — not generic software products that require extensive customization to work in an insurance context. Off-the-shelf solutions often lack the domain-specific logic that insurance operations demand: policy-aware customer portals, claims-integrated servicing tools, compliance-aligned onboarding flows, and multi-role admin panels. The App & Tech Development pod solves this by designing and building insurance-native digital products from the ground up — ensuring that every platform, portal, and application reflects real insurance operational needs rather than forcing insurance processes into generic technology frameworks."
    whatItIncludes="Customer-facing web portals with self-service capabilities for quotes, policy management, claims filing, and document access. Mobile applications for policyholders, agents, and field teams with offline-capable features. Admin panels and internal management tools designed around insurance operational hierarchies and approval workflows. Digital onboarding journeys with KYC integration, document upload, and real-time validation. Policy lifecycle flows covering quotation, issuance, endorsement, renewal, and cancellation. Claims interfaces for FNOL submission, status tracking, and document management. Modular platform components that can be deployed independently or connected into a broader digital operating environment."
    whyItMatters="When technology is built around insurance workflows rather than adapted from generic frameworks, it becomes more usable, more relevant, and faster to deploy. Insurance teams spend less time working around system limitations and more time serving customers. The result is better digital experiences for customers, more efficient operations for teams, and faster time-to-market for new products and channels."
    images={{ solves: imgSolves, includes: imgIncludes, matters: imgMatters }}
  />
);
export default AppTechDevelopment;
