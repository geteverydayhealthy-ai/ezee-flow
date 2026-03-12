import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

interface PageHeroProps {
  eyebrow?: string;
  heading: string;
  subheading: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  children?: ReactNode;
}

const PageHero = ({ eyebrow, heading, subheading, primaryCta, secondaryCta, children }: PageHeroProps) => (
  <section className="section-spacing">
    <div className="section-container">
      <div className="max-w-3xl mx-auto text-center">
        {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
        <h1 className="hero-heading mb-6">{heading}</h1>
        <p className="section-subheading mx-auto mb-10">{subheading}</p>
        {(primaryCta || secondaryCta) && (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {primaryCta && (
              <Link to={primaryCta.href} className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
                {primaryCta.label} <ArrowRight className="w-4 h-4" />
              </Link>
            )}
            {secondaryCta && (
              <Link to={secondaryCta.href} className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-7 py-3.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
                {secondaryCta.label} <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </div>
        )}
      </div>
      {children}
    </div>
  </section>
);

export default PageHero;
