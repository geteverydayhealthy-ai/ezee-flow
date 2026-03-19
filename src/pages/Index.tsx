import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Layers, Workflow, BarChart3, Zap, Settings, Eye, Target, Users, Bot, Briefcase, Building2, Globe, TrendingUp } from "lucide-react";
import Layout from "@/components/Layout";
import CTASection from "@/components/CTASection";
import { usePageContent } from "@/hooks/usePageContent";
import imgHappyTeam from "@/assets/visuals/v5-happy-team.jpg";

const floatingCards = [
  { label: "Modular\ntech stack", color: "bg-card-teal text-primary-foreground", x: "left-[5%]", y: "top-[8%]", delay: 0, tags: ["Funnels", "Claims", "Data", "Portals", "Policy admin"] },
  { label: "Plug & play\nor custom-built", color: "bg-card-lime", x: "left-[8%]", y: "top-[45%]", delay: 0.1 },
  { label: "For any\ninsurance line", color: "bg-card-sage", x: "left-[25%]", y: "bottom-[5%]", delay: 0.2 },
  { label: "API\nenabled", color: "bg-card-mint", x: "right-[5%]", y: "top-[5%]", delay: 0.15 },
  { label: "Fully\ncompliant", color: "bg-card-aqua", x: "right-[8%]", y: "top-[40%]", delay: 0.25 },
  { label: "Governance\nready", color: "bg-card-lavender", x: "right-[15%]", y: "bottom-[8%]", delay: 0.3 },
  { label: "Fastest\nGTM", color: "bg-card-lime", x: "right-[30%]", y: "bottom-[2%]", delay: 0.35 },
];

const productCards = [
  { title: "The Digital Operating Layer", desc: "A modern technology layer above legacy systems that connects distribution, workflows, governance, and intelligence", href: "/products/digital-operating-layer", icon: Layers },
  { title: "Digital Spine", desc: "Four connected layers: acquisition, workflows, governance, and intelligence in one backbone", href: "/products/digital-spine", icon: Workflow },
  { title: "Insurance CRM + ERP", desc: "Policy-aware sales, servicing, and operational management built for insurance teams", href: "/products/insurance-crm-erp", icon: Users },
  { title: "Lead & Opportunity Engine", desc: "Structured demand capture, routing, and conversion tracking across all channels", href: "/products/lead-opportunity-engine", icon: Target },
  { title: "Claims Movement System", desc: "End-to-end claims intake, coordination, tracking, and resolution workflows", href: "/products/claims-movement-system", icon: Eye },
  { title: "Agency Dashboard", desc: "Distribution visibility, partner performance, and channel management in one view", href: "/products/agency-dashboard", icon: BarChart3 },
  { title: "AI-enabled BI & Analytics", desc: "Real-time intelligence, trend detection, and decision support for insurance leadership", href: "/products/ai-business-intelligence-analytics", icon: Bot },
];

const solutionCards = [
  { title: "Creative Office", desc: "Insurance communication systems that build trust, improve comprehension, and drive conversion", href: "/solutions/creative-office", icon: Briefcase },
  { title: "Performance Marketing", desc: "Measurable acquisition systems with full-funnel tracking tied to actual policy outcomes", href: "/solutions/performance-marketing", icon: Target },
  { title: "App & Tech Development", desc: "Insurance-native portals, apps, and platforms designed around real operational needs", href: "/solutions/app-tech-development", icon: Settings },
  { title: "Agentic AI", desc: "Intelligent automation for servicing, underwriting support, claims, and decision-making", href: "/solutions/agentic-ai", icon: Bot },
  { title: "Backoffice", desc: "Structured workflows, accountability, and visibility for internal insurance operations", href: "/solutions/backoffice", icon: Workflow },
];

const whoWeServe = [
  { icon: Building2, title: "Large & Composite Carriers", desc: "Modernize selected functions or build a connected digital operating model across the enterprise" },
  { icon: TrendingUp, title: "Mid-Sized Insurers", desc: "Deploy modular products to digitize distribution, claims, servicing, and internal operations" },
  { icon: Zap, title: "Startup MGAs & Digital Insurers", desc: "Launch faster with configurable infrastructure purpose-built for insurance from day one" },
  { icon: Globe, title: "Embedded & Ecosystem Players", desc: "Design and deploy insurance distribution through partners, fintechs, and digital platforms" },
];

const principles = [
  { icon: Zap, title: "Fastest go-to-market" },
  { icon: Settings, title: "Nothing hardcoded" },
  { icon: Shield, title: "Configured around your product, business, and governance needs" },
  { icon: Layers, title: "Modular deployment" },
  { icon: Eye, title: "Control built in, not added later" },
];

const Index = () => {
  const { get } = usePageContent("home");

  const heroHeading = get("hero", "heading", "The digital backbone for insurance innovation");
  const heroSubheading = get("hero", "subheading", "Ezee Technologies helps insurers modernize distribution, operations, and customer experience through configurable infrastructure built for how insurance actually works.");
  const thesisEyebrow = get("platform_thesis", "eyebrow", "The platform thesis");
  const thesisHeading = get("platform_thesis", "heading", "The Digital Operating Layer for Insurance");
  const thesisDesc = get("platform_thesis", "description", "A modern technology layer that sits above legacy systems and helps insurers launch digital journeys, automate workflows, integrate partners, and build intelligence. No need to rip out what already works.");
  const posHeading = get("positioning", "heading", "One technology partner. Every layer of insurance modernization.");
  const posDesc = get("positioning", "description", "Whether you are a startup MGA, a mid-sized insurer, or a large composite carrier, Ezee Technologies gives you the infrastructure, architecture, and execution capability to move forward on your own terms.");
  const ctaHeading = get("cta", "heading", "Ready to modernize your insurance operations?");
  const ctaSubheading = get("cta", "subheading", "Whether you need one product, a focused solution, or a broader transformation roadmap, we will help you find the smartest starting point.");
  const ctaLabel = get("cta", "ctaLabel", "Book a Demo");

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[70vh] sm:min-h-[85vh] flex items-center overflow-hidden">
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1440 800" fill="none" preserveAspectRatio="xMidYMid slice">
          <path d="M-50 200 Q 200 350, 400 300 T 720 400 T 1050 350 T 1500 500" stroke="hsl(var(--border))" strokeWidth="1.5" fill="none" />
          <path d="M-50 500 Q 300 250, 500 400 T 900 300 T 1200 450 T 1550 300" stroke="hsl(var(--border))" strokeWidth="1.5" fill="none" />
        </svg>

        <div className="section-container relative z-10 w-full">
          <div className="relative min-h-[400px] sm:min-h-[600px] flex items-center justify-center">
            <div className="hidden lg:block">
              {floatingCards.map((card, i) => (
                <motion.div
                  key={i}
                  className={`absolute ${card.x} ${card.y} ${card.color} rounded-2xl p-4 shadow-sm max-w-[140px] text-center text-sm font-semibold leading-tight`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: card.delay + 0.3, duration: 0.6, ease: "easeOut" }}
                  style={{ animation: `float ${4 + i * 0.5}s ease-in-out infinite ${i * 0.3}s` }}
                >
                  <span className="whitespace-pre-line">{card.label}</span>
                  {card.tags && (
                    <div className="mt-3 flex flex-col gap-1.5">
                      {card.tags.map((tag) => (
                        <span key={tag} className="text-xs bg-background/20 rounded-md px-2 py-0.5">{tag}</span>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div
              className="text-center max-w-3xl mx-auto relative z-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="hero-heading mb-6">{heroHeading}</h1>
              <p className="section-subheading mx-auto mb-10">{heroSubheading}</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/products/digital-operating-layer" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
                  Explore Platform <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-7 py-3.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
                  Book a Demo <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="lg:hidden grid grid-cols-2 gap-3 mt-8">
            {floatingCards.slice(0, 6).map((card, i) => (
              <motion.div
                key={i}
                className={`${card.color} rounded-xl p-3 text-center text-xs font-semibold leading-tight`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 + 0.3 }}
              >
                <span className="whitespace-pre-line">{card.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform thesis */}
      <section className="section-spacing bg-accent/50">
        <div className="section-container">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="eyebrow mb-4">{thesisEyebrow}</p>
            <h2 className="section-heading mb-6">{thesisHeading}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">{thesisDesc}</p>
            <Link to="/products/digital-operating-layer" className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all">
              Explore the Digital Operating Layer <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* What insurers can unlock */}
      <section className="section-spacing">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center mb-16">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="eyebrow mb-4">Capability overview</p>
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight mb-6">What insurers can unlock without ripping everything out</h2>
              <p className="text-muted-foreground leading-relaxed">The Digital Operating Layer lets insurers modernize specific capabilities or build a connected digital architecture. Start with one product. Expand when it makes sense. No forced bundling, no rigid deployment sequences.</p>
            </motion.div>
            <motion.div className="rounded-2xl aspect-[4/3] overflow-hidden" initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <img src={imgHappyTeam} alt="Insurance team collaboration" className="w-full h-full object-cover rounded-2xl" loading="lazy" />
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Layers, text: "Digital distribution across web, app, embedded, and partner channels" },
              { icon: Users, text: "Interactive onboarding and self-service portals for policyholders" },
              { icon: Workflow, text: "Workflow automation across underwriting, servicing, and claims" },
              { icon: Settings, text: "API-based partner and ecosystem integration" },
              { icon: Zap, text: "Configurable product setup and faster launches across insurance lines" },
              { icon: BarChart3, text: "Real-time visibility, reporting, and AI-powered intelligence" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-card rounded-2xl p-6 border border-border hover:border-primary/20 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <item.icon className="w-8 h-8 text-primary mb-4" />
                <p className="text-sm font-medium leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Spine Preview */}
      <section className="section-spacing bg-secondary text-secondary-foreground">
        <div className="section-container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">Core Architecture</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-4">Digital Spine</h2>
            <p className="text-lg text-secondary-foreground/70 max-w-2xl mx-auto">Four layers. One connected insurance operating model.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { layer: "01", title: "Acquisition", desc: "Turn demand into digital insurance journeys across all distribution channels", color: "bg-card-teal", items: ["Digital funnels", "Partner distribution", "Self-service purchase flows"] },
              { layer: "02", title: "Workflows", desc: "Structure internal movement across underwriting, servicing, and claims", color: "bg-card-mint", items: ["Underwriting workflows", "Claims processes", "Task routing and handoffs"] },
              { layer: "03", title: "Governance", desc: "Move faster without losing control over compliance and approvals", color: "bg-card-sage", items: ["Approval logic", "Access controls", "Audit visibility"] },
              { layer: "04", title: "Intelligence", desc: "Turn operational data into sharper decisions and strategic clarity", color: "bg-card-aqua", items: ["Performance dashboards", "Trend detection", "AI-assisted insights"] },
            ].map((item, i) => (
              <motion.div
                key={i}
                className={`${item.color} rounded-2xl p-6 text-foreground flex flex-col`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <span className="text-xs font-bold opacity-50 uppercase tracking-wider">Layer {item.layer}</span>
                <h3 className="text-xl font-bold mt-2 mb-2">{item.title}</h3>
                <p className="text-sm opacity-75 mb-4">{item.desc}</p>
                <ul className="mt-auto space-y-1.5">
                  {item.items.map((point, j) => (
                    <li key={j} className="flex items-center gap-2 text-xs opacity-70">
                      <span className="w-1 h-1 rounded-full bg-foreground/50 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="mt-10">
            <div className="hidden lg:flex items-center justify-center gap-0 mb-6">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  {i < 3 && <div className="w-24 h-px bg-primary/40" />}
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-secondary-foreground/60 max-w-xl mx-auto mb-8">
              Each layer works independently. Together, they form a true insurance operating backbone.
            </p>
            <div className="text-center">
              <Link to="/products/digital-spine" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
                Explore Digital Spine <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="section-spacing">
        <div className="section-container">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="eyebrow mb-4">Who we serve</p>
            <h2 className="section-heading max-w-3xl mx-auto mb-4">Built for insurers at every stage of digital maturity</h2>
            <p className="section-subheading mx-auto">From startup MGAs launching their first digital product to large carriers modernizing complex operations. One technology partner, configured for your reality.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whoWeServe.map((item, i) => (
              <motion.div key={i} className="bg-card rounded-2xl p-7 border border-border text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions preview */}
      <section className="section-spacing bg-accent/50">
        <div className="section-container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="eyebrow mb-4">Execution Pods</p>
            <h2 className="section-heading max-w-3xl mx-auto mb-4">Specialized teams for insurance growth and transformation</h2>
            <p className="section-subheading mx-auto">Focused capabilities that solve specific parts of insurance modernization: from customer-facing communication to technology, AI, and backoffice execution.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutionCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link to={card.href} className="group block bg-card rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-lg transition-all h-full">
                  <card.icon className="w-10 h-10 text-primary mb-5" />
                  <h3 className="text-lg font-bold mb-2">{card.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{card.desc}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products preview */}
      <section className="section-spacing">
        <div className="section-container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="eyebrow mb-4">Platform Products</p>
            <h2 className="section-heading max-w-3xl mx-auto mb-4">Modular products built for real insurance execution</h2>
            <p className="section-subheading mx-auto">Each product solves a specific insurance problem. Deploy one or connect several into a unified operating environment.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {productCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <Link to={card.href} className="group block bg-card rounded-2xl p-7 border border-border hover:border-primary/30 hover:shadow-lg transition-all h-full">
                  <card.icon className="w-9 h-9 text-primary mb-4" />
                  <h3 className="text-base font-bold mb-2">{card.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{card.desc}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                    Explore <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="section-spacing bg-accent/50">
        <div className="section-container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-heading">Built around insurer reality</h2>
            <p className="section-subheading mx-auto mt-4">Not generic enterprise software adapted for insurance. Purpose-built infrastructure shaped around how insurers actually operate.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {principles.map((p, i) => (
              <motion.div
                key={i}
                className="text-center bg-card rounded-2xl p-6 border border-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-4">
                  <p.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm font-semibold leading-snug">{p.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* One-stop positioning */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="section-container text-center max-w-3xl mx-auto">
          <p className="text-2xl sm:text-3xl font-bold mb-4">{posHeading}</p>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">{posDesc}</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-spacing">
        <div className="section-container max-w-3xl">
          <h2 className="section-heading text-center mb-12">Frequently asked questions</h2>
          <div className="space-y-6">
            {[
              { q: "What does Ezee Technologies do?", a: "We help insurers modernize distribution, customer journeys, workflows, governance, and intelligence through configurable, insurance-native infrastructure. We work with insurers of all sizes, from startup MGAs to large composite carriers." },
              { q: "What is the Digital Operating Layer for Insurance?", a: "It is a modern technology layer that sits above your existing core systems. It lets you launch digital journeys, automate workflows, integrate partners, and build intelligence without needing to replace what you already have." },
              { q: "Who is Ezee Technologies built for?", a: "Insurers, MGAs, digital distribution businesses, embedded insurance ecosystems, and any insurance organization that needs modern, configurable technology infrastructure to support growth and operational improvement." },
              { q: "Can we start with just one product?", a: "Yes. Every product is designed to work independently. You can start with a single product and expand over time as your needs grow. No forced bundling." },
              { q: "How is this different from buying a new core system?", a: "Core system replacements are expensive, slow, and high-risk. The Digital Operating Layer modernizes customer journeys, workflows, integrations, and intelligence while preserving your existing core investments." },
            ].map((faq, i) => (
              <div key={i} className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading={ctaHeading}
        subheading={ctaSubheading}
        ctaLabel={ctaLabel}
        ctaHref="/contact"
      />
    </Layout>
  );
};

export default Index;
