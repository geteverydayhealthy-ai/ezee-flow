import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface RelatedLinksProps {
  heading?: string;
  links: { label: string; href: string }[];
}

const RelatedLinks = ({ heading = "Related products", links }: RelatedLinksProps) => (
  <section className="section-spacing border-t border-border">
    <div className="section-container">
      <h3 className="text-xl font-semibold mb-8">{heading}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {links.map((link) => (
          <Link key={link.href} to={link.href} className="group flex items-center justify-between p-5 rounded-xl border border-border hover:border-primary/30 hover:bg-accent transition-all">
            <span className="text-sm font-medium">{link.label}</span>
            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default RelatedLinks;
