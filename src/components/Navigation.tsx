import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const currentLanguage = i18n.language;
  const languages = {
    en: 'English',
    ja: '日本語'
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsMoreOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const mainMenuItems = [
    { label: t('navigation.about'), href: '/' },
    { label: t('navigation.events'), href: '/events' },
    { label: t('navigation.resources'), href: '/resources' },
    { label: t('navigation.contact'), href: '/contact' },
  ];

  const moreMenuItems = [
    { label: t('navigation.blog.title'), href: '/blog', description: t('navigation.blog.subtitle') },
    { label: t('navigation.youth.title'), href: '/youth', description: t('navigation.youth.subtitle') },
  ];

  const isActive = (href: string) => location.pathname === href;

  const toggleLanguage = () => {
    const newLang = currentLanguage === 'en' ? 'ja' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="fixed z-50 w-full bg-indigo-600">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold text-white">
              Indo-Pacific Youth Forum
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-baseline ml-10 space-x-4">
              {mainMenuItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'bg-indigo-700 text-white'
                      : 'text-white hover:bg-indigo-500'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsMoreOpen(!isMoreOpen)}
                  className={`text-white hover:bg-indigo-500 px-3 py-2 rounded-md text-sm font-medium inline-flex items-center transition-colors duration-200 ${
                    isMoreOpen || moreMenuItems.some(item => isActive(item.href))
                      ? 'bg-indigo-700'
                      : ''
                  }`}
                >
                  {t('navigation.More')}
                  <ChevronDown 
                    className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                      isMoreOpen ? 'transform rotate-180' : ''
                    }`} 
                  />
                </button>
                
                <div
                  className={`absolute right-0 mt-2 w-64 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 transform transition-all duration-200 origin-top-right ${
                    isMoreOpen
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-95 pointer-events-none'
                  }`}
                >
                  <div className="py-2" role="menu">
                    {moreMenuItems.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className={`group flex flex-col px-4 py-3 transition-colors duration-200 ${
                          isActive(item.href)
                            ? 'bg-indigo-50'
                            : 'hover:bg-indigo-50'
                        }`}
                        role="menuitem"
                        onClick={() => setIsMoreOpen(false)}
                      >
                        <span className={`text-sm font-medium ${
                          isActive(item.href)
                            ? 'text-indigo-600'
                            : 'text-gray-900 group-hover:text-indigo-600'
                        }`}>
                          {item.label}
                        </span>
                        <span className="mt-1 text-xs text-gray-500 group-hover:text-indigo-500">
                          {item.description}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <button
                onClick={toggleLanguage}
                className="flex items-center px-3 py-2 text-sm font-medium text-white transition-colors duration-200 rounded-md hover:bg-indigo-500"
              >
                <Globe className="w-4 h-4 mr-1" />
                {languages[currentLanguage as keyof typeof languages]}
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white transition-colors duration-200 rounded-md hover:bg-indigo-500"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden fixed inset-0 bg-indigo-600 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="px-4 pt-4 pb-3">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-white">Indo-Pacific Youth Forum</h1>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-white rounded-md hover:bg-indigo-500"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="mt-8 space-y-3">
            {mainMenuItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'bg-indigo-700 text-white'
                    : 'text-white hover:bg-indigo-500'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            {moreMenuItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'bg-indigo-700 text-white'
                    : 'text-white hover:bg-indigo-500'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={toggleLanguage}
              className="flex items-center w-full px-3 py-2 text-base font-medium text-left text-white transition-colors duration-200 rounded-md hover:bg-indigo-500"
            >
              <Globe className="w-5 h-5 mr-2" />
              {languages[currentLanguage as keyof typeof languages]}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;