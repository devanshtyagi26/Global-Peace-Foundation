import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  Globe, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  ArrowUpCircle,
  Heart 
} from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative text-white bg-gradient-to-b from-gray-900 to-indigo-900">
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="absolute p-2 text-indigo-600 transition-all duration-300 transform -translate-x-1/2 bg-white rounded-full shadow-lg -top-5 left-1/2 hover:shadow-xl hover:scale-110 focus:outline-none group"
        aria-label="Scroll to top"
      >
        <ArrowUpCircle className="w-8 h-8 animate-bounce group-hover:animate-none" />
      </button>

      {/* Main footer content */}
      <div className="px-4 pt-16 pb-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 mb-12 md:grid-cols-2 lg:grid-cols-4">
          {/* About Section */}
          <div className="space-y-4 animate-fade-slide-up">
            <h3 className="text-xl font-bold">About Us</h3>
            <p className="text-sm leading-relaxed text-gray-300">
              The Indo-Pacific Youth Forum is a platform that empowers young minds to connect, collaborate, and create solutions for a better tomorrow. We focus on leadership, innovation, and global challenges.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-300 transition-colors duration-300 transform hover:text-white hover:scale-110" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" className="text-gray-300 transition-colors duration-300 transform hover:text-white hover:scale-110" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" className="text-gray-300 transition-colors duration-300 transform hover:text-white hover:scale-110" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" className="text-gray-300 transition-colors duration-300 transform hover:text-white hover:scale-110" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 animate-fade-slide-up" style={{ animationDelay: '150ms' }}>
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              {['About Us', 'Events', 'Resources', 'Blog', 'Contact Us'].map((item, index) => (
                <li key={index}>
                  <Link 
                    to={`/${item.replace(/\s+/g, '-').toLowerCase()}`}
                    className="inline-block text-gray-300 transition-colors duration-300 transform hover:text-white hover:translate-x-2"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 animate-fade-slide-up" style={{ animationDelay: '300ms' }}>
            <h3 className="text-xl font-bold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 group">
                <Mail className="w-5 h-5 text-indigo-400 transition-colors duration-300 group-hover:text-indigo-300" />
                <span className="text-gray-300 transition-colors duration-300 group-hover:text-white">
                  support@ipyf.org
                </span>
              </li>
              <li className="flex items-center space-x-3 group">
                <Phone className="w-5 h-5 text-indigo-400 transition-colors duration-300 group-hover:text-indigo-300" />
                <span className="text-gray-300 transition-colors duration-300 group-hover:text-white">
                  +1 (123) 456-7890
                </span>
              </li>
              <li className="flex items-center space-x-3 group">
                <MapPin className="w-5 h-5 text-indigo-400 transition-colors duration-300 group-hover:text-indigo-300" />
                <span className="text-gray-300 transition-colors duration-300 group-hover:text-white">
                  123 Innovation Drive, Singapore
                </span>
              </li>
              <li className="flex items-center space-x-3 group">
                <Globe className="w-5 h-5 text-indigo-400 transition-colors duration-300 group-hover:text-indigo-300" />
                <span className="text-gray-300 transition-colors duration-300 group-hover:text-white">
                  www.ipyf.org
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4 animate-fade-slide-up" style={{ animationDelay: '450ms' }}>
            <h3 className="text-xl font-bold">Newsletter</h3>
            <p className="text-sm text-gray-300">
              Stay updated with the latest events, resources, and opportunities. Subscribe to our newsletter.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-2 text-white placeholder-gray-400 transition-all duration-300 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition-all duration-300 transform hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 mt-8 border-t border-gray-800">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Indo-Pacific Youth Forum. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <Link to="/privacy-policy" className="transition-colors duration-300 hover:text-white">
                Privacy Policy
              </Link>
              <Link to="/terms-conditions" className="transition-colors duration-300 hover:text-white">
                Terms & Conditions
              </Link>
              <span className="flex items-center space-x-1">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
