import { ReactNode } from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import { usePageContent } from "@/hooks/usePageContent";
import fallbackSectionImage from "@/assets/visuals/v8-fallback-challenge-clean.jpg";

interface ProductPageProps {
  pageSlug: string;
  seoTitle: string;
  heading: string;
  subheading: string;
  supportingLine?: string;
  sections: {
    heading: string;
    content?: string;
    items?: string[];
    visual?: "left" | "right";
    icon?: LucideIcon;
    image?: string;
  }[];
  outcomeLine?: string;
  relatedLinks: { label: string; href: string }[];
  faq?: { q: string; a: string }[];
  children?: ReactNode;
}

const ProductPageTemplate = ({
  pageSlug,
  heading,
  subheading,
  supportingLine,
  sections,
  outcomeLine,
  relatedLinks,
  faq,
  children,
}: ProductPageProps) => {
  const { get } = usePageContent(pageSlug);

  const h = get("hero", "heading", heading);
  const sub = get("hero", "subheading", subheading);
  const support = get("hero", "supportingLine", supportingLine || "");
  const outcome = get("outcomeLine", "text", outcomeLine || "");
  const ctaHeading = get("cta", "heading", "Let's build the right digital layer for your insurance business");
  const ctaLabel = get("cta", "ctaLabel", "Book a Demo");

  return (
    <Layout>
      <PageHero
        heading={h}
        subheading={sub}
        primaryCta={{ label: "Book a Demo", href: "/contact" }}
        secondaryCta={{ label: "Explore Platform", href: "/products/digital-operating-layer" }}
      />

      {support && (
        <div className="section-container -mt-8 mb-16">
          <p className="text-center text-lg font-medium text-primary">{support}</p>
        </div>
      )}

      {children}

      {sections.map((section, i) => (
        <section key={i} className={`py-14 sm:py-20 lg:py-28 ${i % 2 === 0 ? "" : "bg-accent/50"}`}>
          <div className="section-container">
            <motion.div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center ${section.visual === "left" ? "lg:flex-row-reverse" : ""}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className={section.visual === "left" ? "lg:order-2" : ""}>
                <h2 className="text-2xl sm:text-3xl font-bold mb-6">{section.heading}</h2>
                {section.content && (
                  <p className="text-muted-foreground leading-relaxed mb-6">{section.content}</p>
                )}
                {section.items && (
                  <ul className="space-y-3">
                    {section.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className={`${section.visual === "left" ? "lg:order-1" : ""}`}>
                <div className="rounded-2xl aspect-[4/3] overflow-hidden">
                  <img src={section.image || fallbackSectionImage} alt={section.heading} className="w-full h-full object-cover rounded-2xl" loading="lazy" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {outcome && (
        <section className="py-12 sm:py-16 bg-primary text-primary-foreground">
          <div className="section-container text-center">
            <p className="text-xl sm:text-2xl md:text-3xl font-bold">{outcome}</p>
          </div>
        </section>
      )}

      {faq && faq.length > 0 && (
        <section className="section-spacing">
          <div className="section-container max-w-3xl">
            <h2 className="section-heading text-center mb-12">Frequently asked questions</h2>
            <div className="space-y-6">
              {faq.map((f, i) => (
                <div key={i} className="bg-card rounded-xl p-6 border border-border">
                  <h3 className="font-semibold mb-2">{f.q}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <RelatedLinks links={relatedLinks} />

      <CTASection
        heading={ctaHeading}
        ctaLabel={ctaLabel}
        ctaHref="/contact"
      />
    </Layout>
  );
};

export default ProductPageTemplate;
