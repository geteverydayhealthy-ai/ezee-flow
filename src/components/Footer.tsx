import { Link } from "react-router-dom";
import logoWhite from "@/assets/logo-white.png";
import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="section-container py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img src={logoWhite} alt="Ezee Technologies" className="h-10 w-auto mb-6" />
            <p className="text-sm text-secondary-foreground/70 leading-relaxed">
              Insurance-native digital infrastructure company building the Digital Operating Layer for Insurance.
            </p>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="inline-flex mt-4 text-secondary-foreground/60 hover:text-secondary-foreground transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading font-semibold text-sm mb-4 text-secondary-foreground/90">Products</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Digital Operating Layer", href: "/products/digital-operating-layer" },
                { label: "Digital Spine", href: "/products/digital-spine" },
                { label: "Insurance CRM + ERP", href: "/products/insurance-crm-erp" },
                { label: "Lead & Opportunity Engine", href: "/products/lead-opportunity-engine" },
                { label: "Claims Movement System", href: "/products/claims-movement-system" },
                { label: "Agency Dashboard", href: "/products/agency-dashboard" },
                { label: "BI & Analytics", href: "/products/ai-business-intelligence-analytics" },
              ].map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="text-sm text-secondary-foreground/60 hover:text-secondary-foreground transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-heading font-semibold text-sm mb-4 text-secondary-foreground/90">Solutions</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Creative Office", href: "/solutions/creative-office" },
                { label: "Performance Marketing", href: "/solutions/performance-marketing" },
                { label: "App & Tech Development", href: "/solutions/app-tech-development" },
                { label: "Agentic AI", href: "/solutions/agentic-ai" },
                { label: "Backoffice", href: "/solutions/backoffice" },
              ].map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="text-sm text-secondary-foreground/60 hover:text-secondary-foreground transition-colors">{l.label}</Link>
                </li>
              ))}
              <li className="pt-2">
                <h4 className="font-heading font-semibold text-sm mb-2 text-secondary-foreground/90">Company</h4>
              </li>
              {[
                { label: "About", href: "/about" },
                { label: "Playbooks", href: "/playbooks" },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="text-sm text-secondary-foreground/60 hover:text-secondary-foreground transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-sm mb-4 text-secondary-foreground/90">Contact</h4>
            <div className="space-y-3 text-sm text-secondary-foreground/60">
              <p>302, Plot # LS 6/7, Street 09, Block 14, Gulistan-e-Johar, Karachi, Pakistan</p>
              <p>Support: 0334-8230456</p>
              <p>Sales: 0334-8230456</p>
              <p>
                <a href="mailto:consultation@ezeetechnologies.com" className="hover:text-secondary-foreground transition-colors">
                  consultation@ezeetechnologies.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 mt-12 pt-8 text-center text-sm text-secondary-foreground/40">
          © {new Date().getFullYear()} Ezee Technologies. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
