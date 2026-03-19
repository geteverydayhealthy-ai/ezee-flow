import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { usePageContent } from "@/hooks/usePageContent";
import fallbackSolves from "@/assets/visuals/v8-fallback-challenge-clean.jpg";
import fallbackIncludes from "@/assets/visuals/v8-fallback-capabilities-clean.jpg";
import fallbackMatters from "@/assets/visuals/v8-fallback-impact-clean.jpg";

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

/** Split a long paragraph into individual points by sentence boundaries */
const splitIntoPoints = (text: string): string[] => {
  return text
    .split(/\.\s+/)
    .map((s) => s.replace(/\.$/, "").trim())
    .filter((s) => s.length > 15);
};

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.96 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

const SolutionPageTemplate = ({
  pageSlug,
  heading,
  subheading,
  whatItSolves,
  whatItIncludes,
  whyItMatters,
  ctaHeading,
  ctaLabel,
  images,
}: SolutionPageProps) => {
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

  const imgSolves = cmsImgSolves || images?.solves || fallbackSolves;
  const imgIncludes = cmsImgIncludes || images?.includes || fallbackIncludes;
  const imgMatters = cmsImgMatters || images?.matters || fallbackMatters;

  const solvesPoints = splitIntoPoints(solves);
  const includesPoints = splitIntoPoints(includes);
  const mattersPoints = splitIntoPoints(matters);

  return (
    <Layout>
      <PageHero heading={h} subheading={sub} primaryCta={{ label: "Talk to our team", href: "/contact" }} />

      {/* ── Section 1: What it solves ── */}
      <section className="py-14 sm:py-20 lg:py-28">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-20 items-start">
            <motion.div {...fadeUp} className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                <span className="w-8 h-px bg-primary" />
                The Challenge
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-foreground">
                What it solves
              </h2>
              {solvesPoints.length > 1 ? (
                <div className="space-y-4 pt-2">
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {solvesPoints[0]}.
                  </p>
                  <ul className="space-y-3 pt-2">
                    {solvesPoints.slice(1).map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground leading-relaxed">{point}.</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <p className="text-base text-muted-foreground leading-relaxed">{solves}</p>
              )}
            </motion.div>

            <motion.div {...scaleIn} className="rounded-2xl aspect-[4/3] overflow-hidden bg-muted/30">
              <img src={imgSolves} alt={`${h} - What it solves`} className="w-full h-full object-cover rounded-2xl" loading="lazy" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Section 2: What it includes ── */}
      <section className="py-20 lg:py-28 bg-accent/40">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
            <motion.div {...scaleIn} className="rounded-2xl aspect-[4/3] overflow-hidden bg-card lg:order-1">
              <img src={imgIncludes} alt={`${h} - What it includes`} className="w-full h-full object-cover rounded-2xl" loading="lazy" />
            </motion.div>

            <motion.div {...fadeUp} className="lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                <span className="w-8 h-px bg-primary" />
                What's Inside
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-foreground">
                What it includes
              </h2>
              {includesPoints.length > 1 ? (
                <div className="space-y-3 pt-2">
                  {includesPoints.map((point, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start gap-3 p-3 rounded-xl bg-background/70 border border-border/50"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: i * 0.06 }}
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground leading-relaxed">{point}.</span>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <p className="text-base text-muted-foreground leading-relaxed">{includes}</p>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Why it matters ── */}
      <section className="py-20 lg:py-28">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
            <motion.div {...fadeUp} className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                <span className="w-8 h-px bg-primary" />
                The Impact
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-foreground">
                Why it matters
              </h2>
              {mattersPoints.length > 1 ? (
                <div className="space-y-5 pt-2">
                  {mattersPoints.map((point, i) => (
                    <motion.div
                      key={i}
                      className="relative pl-6 border-l-2 border-primary/20"
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: i * 0.08 }}
                    >
                      <p className="text-sm text-muted-foreground leading-relaxed">{point}.</p>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <p className="text-base text-muted-foreground leading-relaxed">{matters}</p>
              )}
            </motion.div>

            <motion.div {...scaleIn} className="rounded-2xl aspect-[4/3] overflow-hidden bg-muted/30">
              <img src={imgMatters} alt={`${h} - Why it matters`} className="w-full h-full object-cover rounded-2xl" loading="lazy" />
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection heading={finalCtaHeading} ctaLabel={finalCtaLabel} ctaHref="/contact" />
    </Layout>
  );
};

export default SolutionPageTemplate;
