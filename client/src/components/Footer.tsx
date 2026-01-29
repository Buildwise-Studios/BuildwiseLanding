import { Egg, Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { FiFacebook, FiInstagram } from "react-icons/fi";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="bg-teal-500 rounded-lg p-2 mr-3">
                <Egg className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">Buildwise</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Powered by AI. Built in Hong Kong.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/charles-fauchet-gaminginfluence/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="text-gray-400 hover:text-teal-500 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </button>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61577737420712"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="text-gray-400 hover:text-teal-500 transition-colors">
                  <FiFacebook className="h-5 w-5" />
                </button>
              </a>
              <a
                href="https://www.instagram.com/buildwise852/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="text-gray-400 hover:text-teal-500 transition-colors">
                  <FiInstagram className="h-5 w-5" />
                </button>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => scrollToSection("approach")}
                  className="text-gray-300 hover:text-teal-500 transition-colors"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("verticals")}
                  className="text-gray-300 hover:text-teal-500 transition-colors"
                >
                  Verticals
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-gray-300 hover:text-teal-500 transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("team")}
                  className="text-gray-300 hover:text-teal-500 transition-colors"
                >
                  Team
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="text-gray-300 hover:text-teal-500 transition-colors"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-teal-500 mr-3" />
                <a
                  href="mailto:charles@voxelai.ai"
                  className="text-gray-300 hover:text-teal-500 transition-colors"
                >
                  contact@buildwise-studios.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-teal-500 mr-3" />
                <a
                  href="tel:+85269784602"
                  className="text-gray-300 hover:text-teal-500 transition-colors"
                >
                  +852 6978 4602
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-teal-500 mr-3 mt-1" />
                <span className="text-gray-300">Hong Kong</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2025 Metaverse Lab Limited. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="/privacy-policy" target="_blank">
                <button className="text-gray-400 hover:text-teal-500 transition-colors">
                  Privacy Policy
                </button>
              </a>
              <a href="/terms-of-services" target="_blank">
                <button className="text-gray-400 hover:text-teal-500 transition-colors">
                  Terms of Service
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
