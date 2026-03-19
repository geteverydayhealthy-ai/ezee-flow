import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";

const products = [
  { label: "The Digital Operating Layer", href: "/products/digital-operating-layer" },
  { label: "Digital Spine", href: "/products/digital-spine" },
  { label: "Insurance CRM + ERP", href: "/products/insurance-crm-erp" },
  { label: "Lead & Opportunity Engine", href: "/products/lead-opportunity-engine" },
  { label: "Claims Movement System", href: "/products/claims-movement-system" },
  { label: "Agency Dashboard", href: "/products/agency-dashboard" },
  { label: "AI-enabled BI & Analytics", href: "/products/ai-business-intelligence-analytics" },
];

const solutions = [
  { label: "Creative Office", href: "/solutions/creative-office" },
  { label: "Performance Marketing", href: "/solutions/performance-marketing" },
  { label: "App & Tech Development", href: "/solutions/app-tech-development" },
  { label: "Agentic AI", href: "/solutions/agentic-ai" },
  { label: "Backoffice", href: "/solutions/backoffice" },
];

const playbooks = [
  { label: "Blueprint & Strategy", href: "/playbooks/blueprint-strategy" },
  { label: "Embedded Insurance Infrastructure", href: "/playbooks/embedded-insurance-infrastructure" },
];

interface DropdownProps {
  label: string;
  items: { label: string; href: string }[];
  isActive: boolean;
}

const NavDropdown = ({ label, items, isActive }: DropdownProps) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${isActive ? "text-primary" : "text-foreground"}`}>
        {label} <ChevronDown className="w-3.5 h-3.5" />
      </button>
      {open && (
        <div className="absolute top-full left-0 pt-2 z-50">
          <div className="bg-card rounded-xl shadow-xl border border-border p-2 min-w-[260px]">
            {items.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="block px-4 py-2.5 text-sm text-foreground hover:bg-accent rounded-lg transition-colors"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname.startsWith(path);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="section-container flex items-center justify-between h-20">
        {/* Logo */}
         <Link to="/" className="flex-shrink-0">
          <img src={logo} alt="Ezee Technologies" className="h-14 sm:h-16 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link to="/" className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === "/" ? "text-primary" : "text-foreground"}`}>
            Home
          </Link>
          <NavDropdown label="Solutions" items={solutions} isActive={isActive("/solutions")} />
          <NavDropdown label="Products" items={products} isActive={isActive("/products")} />
          <NavDropdown label="Playbooks" items={playbooks} isActive={isActive("/playbooks")} />
          <Link to="/about" className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/about") ? "text-primary" : "text-foreground"}`}>
            About
          </Link>
          <Link to="/contact" className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/contact") ? "text-primary" : "text-foreground"}`}>
            Contact
          </Link>
        </nav>

        {/* CTA */}
        <Link to="/contact" className="hidden lg:flex items-center gap-2 bg-secondary text-secondary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
          Book a Demo <ArrowRight className="w-4 h-4" />
        </Link>

        {/* Mobile toggle */}
        <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="section-container py-6 space-y-1">
            <Link to="/" className="block py-3 text-base font-medium" onClick={() => setMobileOpen(false)}>Home</Link>
            
            {[
              { label: "Solutions", items: solutions, key: "solutions" },
              { label: "Products", items: products, key: "products" },
              { label: "Playbooks", items: playbooks, key: "playbooks" },
            ].map(({ label, items, key }) => (
              <div key={key}>
                <button
                  className="flex items-center justify-between w-full py-3 text-base font-medium"
                  onClick={() => setMobileSubmenu(mobileSubmenu === key ? null : key)}
                >
                  {label} <ChevronDown className={`w-4 h-4 transition-transform ${mobileSubmenu === key ? "rotate-180" : ""}`} />
                </button>
                {mobileSubmenu === key && (
                  <div className="pl-4 space-y-1">
                    {items.map((item) => (
                      <Link key={item.href} to={item.href} className="block py-2 text-sm text-muted-foreground" onClick={() => setMobileOpen(false)}>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <Link to="/about" className="block py-3 text-base font-medium" onClick={() => setMobileOpen(false)}>About</Link>
            <Link to="/contact" className="block py-3 text-base font-medium" onClick={() => setMobileOpen(false)}>Contact</Link>
            
            <Link to="/contact" className="flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-5 py-3 rounded-full text-sm font-semibold mt-4" onClick={() => setMobileOpen(false)}>
              Book a Demo <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
