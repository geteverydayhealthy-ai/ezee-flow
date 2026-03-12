import { ReactNode } from "react";
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
}

const SolutionPageTemplate = ({ heading, subheading, whatItSolves, whatItIncludes, whyItMatters }: SolutionPageProps) => (
  <Layout>
    <PageHero heading={heading} subheading={subheading} primaryCta={{ label: "Talk to our team", href: "/contact" }} />

    <section className="section-spacing">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">What it solves</h2>
            <p className="text-muted-foreground leading-relaxed">{whatItSolves}</p>
          </motion.div>
          <div className="bg-accent rounded-2xl aspect-[4/3]" />
        </div>
      </div>
    </section>

    <section className="section-spacing bg-accent/50">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="bg-card-mint rounded-2xl aspect-[4/3] lg:order-1" />
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
          <div className="bg-card-sage rounded-2xl aspect-[4/3]" />
        </div>
      </div>
    </section>

    <CTASection heading="Let's talk about what you need" ctaLabel="Talk to our team" ctaHref="/contact" />
  </Layout>
);

export default SolutionPageTemplate;
