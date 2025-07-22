import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Egg } from "lucide-react";
import { useLocation } from "wouter";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [, setLocation] = useLocation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed header
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  const handleNavClick = (item: any) => {
    if (item.isPage) {
      setLocation(`/${item.id.replace('ai-pm', 'ai-product-manager')}`);
      setIsOpen(false);
    } else {
      scrollToSection(item.id);
    }
  };

  const navItems = [
    { label: "Our Approach", id: "approach" },
    { label: "Services", id: "services" },
    { label: "Projects", id: "projects" },
    { label: "Team", id: "team" },
    { label: "FAQ", id: "faq" },
    { label: "AI Product Manager", id: "ai-pm", isPage: true },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="/" target="_self" rel="noopener noreferrer">
          <div className="flex items-center">
            <Egg className="h-8 w-8 text-teal-500 " />
            <span className="text-xl font-bold text-gray-900">Buildwise</span>
          </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-700 hover:text-teal-600 transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <Button 
                className="bg-teal-500 hover:bg-teal-600"
                onClick={() => setLocation("/ai-product-manager")}
              >
                Get Started
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="text-left text-gray-700 hover:text-teal-600 transition-colors py-2"
                    >
                      {item.label}
                    </button>
                  ))}
                  <Button 
                    onClick={() => setLocation("/ai-product-manager")}
                    className="bg-teal-500 hover:bg-teal-600 mt-4"
                  >
                    Get Started
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
