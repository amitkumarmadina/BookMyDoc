import { Facebook, Twitter, Linkedin, Youtube, Github, Stethoscope } from 'lucide-react';
import Container from './Container';

const footerLinks = {
  company: [
    { label: 'About', href: '#about' },
    { label: 'Blog', href: '#blog' },
    { label: 'Careers', href: '#careers' },
    { label: 'Contact Us', href: '#contact' },
  ],
  forPatients: [
    { label: 'Search doctors', href: '#search-doctors' },
    { label: 'Book tests', href: '#book-tests' },
    { label: 'Read health articles', href: '#health-articles' },
  ],
  forDoctors: [
    { label: 'Doctor profile', href: '#doctor-profile' },
    { label: 'Clinic tools', href: '#clinic-tools' },
    { label: 'Reach patients', href: '#reach-patients' },
  ],
  forHospitals: [
    { label: 'Hospital tools', href: '#hospital-tools' },
    { label: 'Wellness plans', href: '#wellness-plans' },
  ],
  more: [
    { label: 'Help', href: '#help' },
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Terms & Conditions', href: '#terms' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Stethoscope className="w-8 h-8 text-teal-400" />
              <span className="text-2xl font-bold">BookMyDoc</span>
            </div>
            <p className="text-gray-400 mb-6">
              Your trusted healthcare partner. Book appointments, consult doctors online, and access quality healthcare services.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-gray-800 hover:bg-gray-700 rounded-full p-2 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-gray-700 rounded-full p-2 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-gray-700 rounded-full p-2 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-gray-700 rounded-full p-2 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-gray-700 rounded-full p-2 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">For Patients</h3>
            <ul className="space-y-2">
              {footerLinks.forPatients.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-teal-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">For Doctors</h3>
            <ul className="space-y-2">
              {footerLinks.forDoctors.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-teal-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">For Hospitals</h3>
            <ul className="space-y-2">
              {footerLinks.forHospitals.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-teal-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">More</h3>
            <ul className="space-y-2">
              {footerLinks.more.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-teal-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400">
            © 2026 BookMyDoc. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
