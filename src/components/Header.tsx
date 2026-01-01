import { useState } from 'react';
import { Menu, X, ChevronDown, Stethoscope } from 'lucide-react';
import Button from './Button';
import Container from './Container';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <Container>
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Stethoscope className="w-8 h-8 text-teal-600" />
            <span className="text-2xl font-bold text-gray-900">BookMyDoc</span>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            <a href="#find-doctors" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
              Find Doctors
            </a>
            <a href="#video-consult" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
              Video Consult
            </a>
            <a href="#lab-tests" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
              Lab Tests
            </a>
            <a href="#surgeries" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
              Surgeries
            </a>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <button className="flex items-center gap-1 text-gray-700 hover:text-teal-600 transition-colors text-sm">
              For Corporates
              <ChevronDown className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-1 text-gray-700 hover:text-teal-600 transition-colors text-sm">
              For Providers
              <ChevronDown className="w-4 h-4" />
            </button>
            <a href="#help" className="text-gray-700 hover:text-teal-600 transition-colors text-sm">
              Security & Help
            </a>
            <Button variant="outline" size="sm">
              Login / Signup
            </Button>
          </div>

          <button
            className="lg:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col gap-4">
              <a href="#find-doctors" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
                Find Doctors
              </a>
              <a href="#video-consult" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
                Video Consult
              </a>
              <a href="#lab-tests" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
                Lab Tests
              </a>
              <a href="#surgeries" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
                Surgeries
              </a>
              <div className="border-t pt-4 flex flex-col gap-3">
                <button className="text-left text-gray-700 text-sm">For Corporates</button>
                <button className="text-left text-gray-700 text-sm">For Providers</button>
                <a href="#help" className="text-gray-700 text-sm">Security & Help</a>
                <Button variant="outline" size="sm" className="w-full">
                  Login / Signup
                </Button>
              </div>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}
