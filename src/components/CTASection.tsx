import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  heading: string;
  subheading?: string;
  ctaLabel: string;
  ctaHref: string;
}

const CTASection = ({ heading, subheading, ctaLabel, ctaHref }: CTASectionProps) => (
  <section className="section-spacing bg-secondary text-secondary-foreground">
    <div className="section-container text-center">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-6 max-w-3xl mx-auto">{heading}</h2>
      {subheading && <p className="text-lg text-secondary-foreground/70 max-w-2xl mx-auto mb-10">{subheading}</p>}
      <Link to={ctaHref} className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
        {ctaLabel} <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  </section>
);

export default CTASection;
