import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import Layout from "@/components/Layout";

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
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      <section className="section-spacing">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="hero-heading mb-6">Let's talk about what you need to modernize</h1>
              <p className="section-subheading mb-12">
                Whether you need a focused product, a transformation roadmap, or a connected operating architecture, we'll help you identify the smartest next step.
              </p>

              <div className="space-y-6">
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
            </motion.div>

            {/* Right - Form */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              {submitted ? (
                <div className="bg-card rounded-2xl border border-border p-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Mail className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Thank you</h3>
                  <p className="text-muted-foreground">We'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-card rounded-2xl border border-border p-8 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Name</label>
                      <input type="text" required className="w-full px-4 py-3 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Company</label>
                      <input type="text" required className="w-full px-4 py-3 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Work Email</label>
                      <input type="email" required className="w-full px-4 py-3 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Phone Number</label>
                      <input type="tel" className="w-full px-4 py-3 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">What do you need help with?</label>
                    <select required className="w-full px-4 py-3 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                      <option value="">Select an option</option>
                      {helpOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Message</label>
                    <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
                  </div>
                  <button type="submit" className="w-full bg-primary text-primary-foreground py-3.5 rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity">
                    Send message
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
          <div className="bg-card rounded-xl p-6 border border-border">
            <h3 className="font-semibold mb-2">How do I start with Ezee Technologies?</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">The best starting point is a demo request or strategy conversation. From there, Ezee Technologies can recommend the smartest path based on your current architecture and priorities.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
