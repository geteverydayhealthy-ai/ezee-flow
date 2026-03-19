import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useState, useCallback, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Products
import ProductsOverview from "./pages/products/ProductsOverview";
import DigitalOperatingLayer from "./pages/products/DigitalOperatingLayer";
import DigitalSpine from "./pages/products/DigitalSpine";
import InsuranceCrmErp from "./pages/products/InsuranceCrmErp";
import LeadOpportunityEngine from "./pages/products/LeadOpportunityEngine";
import ClaimsMovementSystem from "./pages/products/ClaimsMovementSystem";
import AgencyDashboard from "./pages/products/AgencyDashboard";
import AIBusinessIntelligence from "./pages/products/AIBusinessIntelligence";

// Solutions
import SolutionsOverview from "./pages/solutions/SolutionsOverview";
import CreativeOffice from "./pages/solutions/CreativeOffice";
import PerformanceMarketing from "./pages/solutions/PerformanceMarketing";
import AppTechDevelopment from "./pages/solutions/AppTechDevelopment";
import AgenticAI from "./pages/solutions/AgenticAI";
import Backoffice from "./pages/solutions/Backoffice";

// Playbooks
import PlaybooksOverview from "./pages/playbooks/PlaybooksOverview";
import BlueprintStrategy from "./pages/playbooks/BlueprintStrategy";
import EmbeddedInsurance from "./pages/playbooks/EmbeddedInsurance";

// Other
import About from "./pages/About";
import Contact from "./pages/Contact";
import LoadingScreen from "./components/LoadingScreen";

// Admin CMS
import { AuthProvider } from "./hooks/useAuth";
import ProtectedRoute from "./components/admin/ProtectedRoute";
import AdminLayout from "./components/admin/AdminLayout";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminPages from "./pages/admin/AdminPages";
import AdminForms from "./pages/admin/AdminForms";
import AdminSubmissions from "./pages/admin/AdminSubmissions";
import AdminBlog from "./pages/admin/AdminBlog";
import AdminUsers from "./pages/admin/AdminUsers";

const queryClient = new QueryClient();

// Scroll to top on route change
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const App = () => {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AnimatePresence mode="wait">
          {loading && <LoadingScreen key="loading" onComplete={handleLoadingComplete} />}
        </AnimatePresence>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />

            {/* Products */}
            <Route path="/products" element={<ProductsOverview />} />
            <Route path="/products/digital-operating-layer" element={<DigitalOperatingLayer />} />
            <Route path="/products/digital-spine" element={<DigitalSpine />} />
            <Route path="/products/insurance-crm-erp" element={<InsuranceCrmErp />} />
            <Route path="/products/lead-opportunity-engine" element={<LeadOpportunityEngine />} />
            <Route path="/products/claims-movement-system" element={<ClaimsMovementSystem />} />
            <Route path="/products/agency-dashboard" element={<AgencyDashboard />} />
            <Route path="/products/ai-business-intelligence-analytics" element={<AIBusinessIntelligence />} />

            {/* Solutions */}
            <Route path="/solutions" element={<SolutionsOverview />} />
            <Route path="/solutions/creative-office" element={<CreativeOffice />} />
            <Route path="/solutions/performance-marketing" element={<PerformanceMarketing />} />
            <Route path="/solutions/app-tech-development" element={<AppTechDevelopment />} />
            <Route path="/solutions/agentic-ai" element={<AgenticAI />} />
            <Route path="/solutions/backoffice" element={<Backoffice />} />

            {/* Playbooks */}
            <Route path="/playbooks" element={<PlaybooksOverview />} />
            <Route path="/playbooks/blueprint-strategy" element={<BlueprintStrategy />} />
            <Route path="/playbooks/embedded-insurance-infrastructure" element={<EmbeddedInsurance />} />

            {/* Other */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
