import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { usePageContent } from "@/hooks/usePageContent";

interface SolutionPageProps {
  pageSlug: string;
  heading: string;
  subheading: string;
  whatItSolves: string;
  whatItIncludes: string;
  whyItMatters: string;
  ctaHeading?: string;
  ctaLabel?: string;
  images?: {
    solves?: string;
    includes?: string;
    matters?: string;
  };
}

const SolutionPageTemplate = ({ pageSlug, heading, subheading, whatItSolves, whatItIncludes, whyItMatters, ctaHeading, ctaLabel, images }: SolutionPageProps) => {
  const { get } = usePageContent(pageSlug);

  const h = get("hero", "heading", heading);
  const sub = get("hero", "subheading", subheading);
  const solves = get("content", "whatItSolves", whatItSolves);
  const includes = get("content", "whatItIncludes", whatItIncludes);
  const matters = get("content", "whyItMatters", whyItMatters);
  const cmsImgSolves = get("images", "solves", "");
  const cmsImgIncludes = get("images", "includes", "");
  const cmsImgMatters = get("images", "matters", "");
  const finalCtaHeading = get("cta", "heading", ctaHeading || "Let's talk about what you need");
  const finalCtaLabel = get("cta", "ctaLabel", ctaLabel || "Talk to our team");

  const imgSolves = cmsImgSolves || images?.solves;
  const imgIncludes = cmsImgIncludes || images?.includes;
  const imgMatters = cmsImgMatters || images?.matters;

  return (
    <Layout>
      <PageHero heading={h} subheading={sub} primaryCta={{ label: "Talk to our team", href: "/contact" }} />

      <section className="section-spacing">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">What it solves</h2>
              <p className="text-muted-foreground leading-relaxed">{solves}</p>
            </motion.div>
            <motion.div
              className="rounded-2xl aspect-[4/3] overflow-hidden bg-card p-2"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {imgSolves ? (
                <img src={imgSolves} alt={`${h} - What it solves`} className="w-full h-full object-contain rounded-xl" loading="lazy" />
              ) : (
                <div className="bg-accent w-full h-full rounded-2xl" />
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-accent/50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              className="rounded-2xl aspect-[4/3] overflow-hidden bg-card p-2 lg:order-1"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {imgIncludes ? (
                <img src={imgIncludes} alt={`${h} - What it includes`} className="w-full h-full object-contain rounded-xl" loading="lazy" />
              ) : (
                <div className="bg-card-mint w-full h-full rounded-2xl" />
              )}
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:order-2">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">What it includes</h2>
              <p className="text-muted-foreground leading-relaxed">{includes}</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">Why it matters</h2>
              <p className="text-muted-foreground leading-relaxed">{matters}</p>
            </motion.div>
            <motion.div
              className="rounded-2xl aspect-[4/3] overflow-hidden bg-card p-2"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {imgMatters ? (
                <img src={imgMatters} alt={`${h} - Why it matters`} className="w-full h-full object-contain rounded-xl" loading="lazy" />
              ) : (
                <div className="bg-card-sage w-full h-full rounded-2xl" />
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection heading={finalCtaHeading} ctaLabel={finalCtaLabel} ctaHref="/contact" />
    </Layout>
  );
};

export default SolutionPageTemplate;
