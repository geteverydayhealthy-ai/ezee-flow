import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { usePageContent } from "@/hooks/usePageContent";

const CONTACT_FORM_SLUG = "contact-form";

const helpOptions = [
  "Digital Operating Layer discussion",
  "Digital Spine",
  "Insurance CRM + ERP",
  "Lead & Opportunity Engine",
  "Claims Movement System",
  "Agency Dashboard",
  "AI-enabled Business Intelligence & Analytics",
  "Solutions / execution pods",
  "Playbooks / strategy",
  "General inquiry",
];

const Contact = () => {
  const { get } = usePageContent("contact");
  const heroHeading = get("hero", "heading", "Let's talk about what you need to modernize");
  const heroSub = get("hero", "subheading", "Whether you need a focused product, a transformation roadmap, or a connected operating architecture, we will help you identify the smartest next step.");

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    help_with: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data: form } = await supabase
        .from("forms")
        .select("id")
        .eq("slug", CONTACT_FORM_SLUG)
        .eq("is_active", true)
        .maybeSingle();

      if (form) {
        const { error } = await supabase.from("form_submissions").insert({
          form_id: form.id,
          data: formData as any,
          source_url: window.location.href,
        });
        if (error) throw error;
      }

      setSubmitted(true);
      toast.success("Message sent successfully!");
    } catch (err: any) {
      console.error("Submission error:", err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <section className="section-spacing">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="hero-heading mb-6">{heroHeading}</h1>
              <p className="section-subheading mb-12">{heroSub}</p>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">Office</p>
                    <p className="text-sm text-muted-foreground">302, Plot # LS 6/7, Street 09, Block 14, Gulistan-e-Johar, Karachi, Pakistan</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">Phone</p>
                    <p className="text-sm text-muted-foreground">Support: 0334-8230456</p>
                    <p className="text-sm text-muted-foreground">Sales: 0334-8230456</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">Email</p>
                    <p className="text-sm text-muted-foreground">
                      <a href="mailto:consultation@ezeetechnologies.com" className="hover:text-primary transition-colors">consultation@ezeetechnologies.com</a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick links */}
              <div>
                <p className="font-semibold text-sm mb-3">Not sure where to start?</p>
                <div className="space-y-2">
                  <Link to="/products/digital-operating-layer" className="flex items-center gap-2 text-sm text-primary font-medium hover:gap-3 transition-all">
                    Explore the Digital Operating Layer <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link to="/playbooks" className="flex items-center gap-2 text-sm text-primary font-medium hover:gap-3 transition-all">
                    Learn about our Playbooks <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Right - Form */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              {submitted ? (
                <div className="bg-card rounded-2xl border border-border p-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Mail className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Thank you</h3>
                  <p className="text-muted-foreground mb-6">We will review your inquiry and get back to you shortly.</p>
                  <Link to="/" className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all">
                    Back to homepage <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-card rounded-2xl border border-border p-8 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Name</label>
                      <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Company</label>
                      <input type="text" name="company" required value={formData.company} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Work Email</label>
                      <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Phone Number</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">What do you need help with?</label>
                    <select name="help_with" required value={formData.help_with} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                      <option value="">Select an option</option>
                      {helpOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Message</label>
                    <textarea name="message" rows={4} value={formData.message} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
                  </div>
                  <button type="submit" disabled={isSubmitting} className="w-full bg-primary text-primary-foreground py-3.5 rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity disabled:opacity-50">
                    {isSubmitting ? "Sending..." : "Send message"}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-spacing bg-accent/50">
        <div className="section-container max-w-3xl">
          <h2 className="section-heading text-center mb-12">Frequently asked questions</h2>
          <div className="space-y-6">
            {[
              { q: "How do I start with Ezee Technologies?", a: "The best starting point is a demo request or strategy conversation. From there, we can recommend the smartest path based on your current architecture and priorities." },
              { q: "Can I start with just one product or solution?", a: "Yes. Everything is modular. You can start with a single product, one solution pod, or a Playbook engagement and expand over time." },
              { q: "How long does a typical engagement take?", a: "It depends on the scope. A Playbook takes 4 to 8 weeks. A single product deployment can be configured and launched in phases. We will define the timeline together based on your needs." },
            ].map((f, i) => (
              <div key={i} className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-semibold mb-2">{f.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
