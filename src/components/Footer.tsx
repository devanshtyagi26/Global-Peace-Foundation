import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
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
  Heart,
} from "lucide-react";

const Footer = () => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const location = useLocation();

  // Scroll to top when navigating
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <footer className="relative text-white bg-gradient-to-b from-gray-900 to-[#033558]">
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="absolute p-2 text-[#033558] transition-all duration-300 transform -translate-x-1/2 bg-white rounded-full shadow-lg -top-5 left-1/2 hover:shadow-xl hover:scale-110 focus:outline-none group"
        aria-label="Scroll to top"
      >
        <ArrowUpCircle className="w-8 h-8 animate-bounce group-hover:animate-none" />
      </button>

      {/* Main footer content */}
      <div className="px-4 pt-16 pb-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 mb-12 md:grid-cols-2 lg:grid-cols-4">
          {/* About Section */}
          <div className="space-y-4 animate-fade-slide-up">
            <h3 className="text-xl font-bold">{t("footer.about.title")}</h3>
            <p className="text-sm leading-relaxed text-gray-300">
              {t("footer.about.description")}
            </p>
            <div className="flex space-x-4">
{/*               <a
                href="https://facebook.com"
                className="text-gray-300 transition-colors duration-300 transform hover:text-white hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a> */}
              <a
                href="https://x.com/ippf_gpfindia?s=09"
                className="text-gray-300 transition-colors duration-300 transform hover:text-white hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/ippf_gpfindia?igsh=OW45a2VqcGtneDZu"
                className="text-gray-300 transition-colors duration-300 transform hover:text-white hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/indo-pacific-peace-forum/"
                className="text-gray-300 transition-colors duration-300 transform hover:text-white hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div
            className="space-y-4 animate-fade-slide-up"
            style={{ animationDelay: "150ms" }}
          >
            <h3 className="text-xl font-bold">
              {t("footer.quickLinks.title")}
            </h3>
            <ul className="space-y-2">
              {[
                { name: t("footer.quickLinks.links.about"), path: "/" },
                { name: t("footer.quickLinks.links.events"), path: "/events" },
                {
                  name: t("footer.quickLinks.links.blueEconomy"),
                  path: "/blueEconomy",
                },
                {
                  name: t("footer.quickLinks.links.diaspora"),
                  path: "/diaspora",
                },
                {
                  name: t("footer.quickLinks.links.resources"),
                  path: "/resources",
                },
                {
                  name: t("footer.quickLinks.links.contact"),
                  path: "/contact",
                },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="inline-block text-gray-300 transition-colors duration-300 transform hover:text-white hover:translate-x-2"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div
            className="space-y-6 w-[19rem] animate-fade-slide-up"
            style={{ animationDelay: "300ms" }}
          >
            <h3 className="text-xl font-bold">{t("footer.contact.title")}</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 group">
                <Mail className="w-5 h-5 text-[#678cb8] transition-colors duration-300 group-hover:text-indigo-300" />
                <span className="text-gray-300 transition-colors duration-300 group-hover:text-white">
                  {t("footer.contact.email")}
                </span>
              </li>
              <li className="flex items-center space-x-3 group">
                <Phone className="w-5 h-5 text-[#678cb8] transition-colors duration-300 group-hover:text-indigo-300" />
                <span className="text-gray-300 transition-colors duration-300 group-hover:text-white">
<<<<<<< HEAD
                  {t("footer.contact.phone")}
=======
                  +91 85958 41086
>>>>>>> 6cd891415f4e04b7ad8b5927c977e70cc6ac68e7
                </span>
              </li>
              <li className="flex items-center space-x-3 group">
                <MapPin className="w-5 h-5 text-[#678cb8] transition-colors duration-300 group-hover:text-indigo-300" />
                <span className="text-gray-300 transition-colors duration-300 group-hover:text-white">
                  {t("footer.contact.address")}
                </span>
              </li>
              <li className="flex items-center space-x-3 group">
                <Globe className="w-5 h-5 text-[#678cb8] transition-colors duration-300 group-hover:text-indigo-300" />
                <span className="text-gray-300 transition-colors duration-300 group-hover:text-white">
<<<<<<< HEAD
                  {t("footer.contact.website")}
=======
                  www.indopacificpeaceforum.org
>>>>>>> 6cd891415f4e04b7ad8b5927c977e70cc6ac68e7
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div
            className="space-y-4 animate-fade-slide-up"
            style={{ animationDelay: "450ms" }}
          >
            <h3 className="text-xl font-bold">
              {t("footer.newsletter.title")}
            </h3>
            <p className="text-sm text-gray-300">
              {t("footer.newsletter.description")}
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder={t("footer.newsletter.placeholder")}
                className="w-full px-4 py-2 text-white placeholder-gray-400 transition-all duration-300 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-[#678cb8] text-white rounded-lg hover:bg-indigo-500 transition-all duration-300 transform hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {t("footer.newsletter.button")}
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 mt-8 border-t border-gray-800">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-gray-400">
              {t("footer.bottom.copyright", { year: new Date().getFullYear() })}
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <Link
                to="/privacy-policy"
                className="transition-colors duration-300 hover:text-white"
              >
                {t("footer.bottom.privacyPolicy")}
              </Link>
              <Link
                to="/terms-conditions"
                className="transition-colors duration-300 hover:text-white"
              >
                {t("footer.bottom.termsConditions")}
              </Link>
              <span className="flex items-center space-x-1">
                <span>{t("footer.bottom.madeWith")}</span>
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
