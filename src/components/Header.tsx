import { useLanguage } from '@/contexts/LanguageContext';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';

const Header = () => {
  const { lang, setLang, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    // { path: '/programs', label: t('Programme', 'Programs') }, // hidden, kept as backup
    { path: '/schools', label: t('Für Schulen', 'For Schools') },
    { path: '/companies', label: t('Für Unternehmen', 'For Companies') },
    { path: '/about', label: t('Über uns', 'About') },
    { path: '/manifesto', label: t('Warum und Wofür', 'Why and What For') },
    { path: '/der-weg', label: t('Der Weg', 'The Path') },
    { path: '/contact', label: t('Kontakt', 'Contact') },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-heading text-xl font-bold tracking-tight text-foreground">
          2Morrow Lab
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isActive(item.path) ? 'text-accent' : 'text-muted-foreground'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={() => setLang(lang === 'de' ? 'en' : 'de')}
            className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-accent transition-colors px-3 py-1.5 rounded-full border border-border/50 hover:border-accent/40"
          >
            <Globe className="w-3.5 h-3.5" />
            {lang === 'de' ? 'EN' : 'DE'}
          </button>
        </nav>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => setLang(lang === 'de' ? 'en' : 'de')}
            className="flex items-center gap-1 text-sm font-medium text-muted-foreground px-2 py-1 rounded-full border border-border/50"
          >
            <Globe className="w-3.5 h-3.5" />
            {lang === 'de' ? 'EN' : 'DE'}
          </button>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="text-foreground">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border/50 overflow-hidden"
          >
            <nav className="px-6 py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`text-lg font-medium transition-colors ${
                    isActive(item.path) ? 'text-accent' : 'text-foreground'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
