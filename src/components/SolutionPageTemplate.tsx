import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

interface SolutionPageProps {
  heading: string;
  subheading: string;
  whatItSolves: string;
  whatItIncludes: string;
  whyItMatters: string;
  images?: {
    solves?: string;
    includes?: string;
    matters?: string;
  };
}

const SolutionPageTemplate = ({ heading, subheading, whatItSolves, whatItIncludes, whyItMatters, images }: SolutionPageProps) => (
  <Layout>
    <PageHero heading={heading} subheading={subheading} primaryCta={{ label: "Talk to our team", href: "/contact" }} />

    <section className="section-spacing">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">What it solves</h2>
            <p className="text-muted-foreground leading-relaxed">{whatItSolves}</p>
          </motion.div>
          <motion.div
            className="rounded-2xl aspect-[4/3] overflow-hidden bg-card p-2"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {images?.solves ? (
              <img src={images.solves} alt={`${heading} - What it solves`} className="w-full h-full object-contain rounded-xl" loading="lazy" />
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
            {images?.includes ? (
              <img src={images.includes} alt={`${heading} - What it includes`} className="w-full h-full object-contain rounded-xl" loading="lazy" />
            ) : (
              <div className="bg-card-mint w-full h-full rounded-2xl" />
            )}
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:order-2">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">What it includes</h2>
            <p className="text-muted-foreground leading-relaxed">{whatItIncludes}</p>
          </motion.div>
        </div>
      </div>
    </section>

    <section className="section-spacing">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">Why it matters</h2>
            <p className="text-muted-foreground leading-relaxed">{whyItMatters}</p>
          </motion.div>
          <motion.div
            className="rounded-2xl aspect-[4/3] overflow-hidden bg-card p-2"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {images?.matters ? (
              <img src={images.matters} alt={`${heading} - Why it matters`} className="w-full h-full object-contain rounded-xl" loading="lazy" />
            ) : (
              <div className="bg-card-sage w-full h-full rounded-2xl" />
            )}
          </motion.div>
        </div>
      </div>
    </section>

    <CTASection heading="Let's talk about what you need" ctaLabel="Talk to our team" ctaHref="/contact" />
  </Layout>
);

export default SolutionPageTemplate;
