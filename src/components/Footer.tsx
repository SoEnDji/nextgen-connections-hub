import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="section-dark noise-overlay">
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h3 className="font-heading text-2xl font-bold mb-4">2Morrow Lab</h3>
            <p className="opacity-60 max-w-md leading-relaxed">
              {t(
                'Eine Plattform für Entwicklungspartnerschaften.',
                'A platform for development partnerships.'
              )}
              <br />
              {t(
                'Junge Menschen. Unternehmen. Schulen. Gemeinsam.',
                'Young people. Companies. Schools. Together.'
              )}
            </p>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 opacity-40">
              {t('Navigation', 'Navigation')}
            </h4>
            <nav className="flex flex-col gap-2.5">
              <Link to="/der-weg" className="text-sm opacity-60 hover:opacity-100 hover:text-accent transition-all">
                {t('Der Weg', 'The Path')}
              </Link>
              <Link to="/schools" className="text-sm opacity-60 hover:opacity-100 hover:text-accent transition-all">
                {t('Für Schulen', 'For Schools')}
              </Link>
              <Link to="/companies" className="text-sm opacity-60 hover:opacity-100 hover:text-accent transition-all">
                {t('Für Unternehmen', 'For Companies')}
              </Link>
              <Link to="/netzwerkpartner" className="text-sm opacity-60 hover:opacity-100 hover:text-accent transition-all">
                {t('Für Netzwerkpartner', 'For Network Partners')}
              </Link>
              <Link to="/about" className="text-sm opacity-60 hover:opacity-100 hover:text-accent transition-all">
                {t('Über uns', 'About')}
              </Link>
              <Link to="/contact" className="text-sm opacity-60 hover:opacity-100 hover:text-accent transition-all">
                {t('Kontakt', 'Contact')}
              </Link>
            </nav>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 opacity-40">
              {t('Rechtliches', 'Legal')}
            </h4>
            <nav className="flex flex-col gap-2.5">
              <Link to="/impressum" className="text-sm opacity-60 hover:opacity-100 hover:text-accent transition-all">{t('Impressum', 'Imprint')}</Link>
              <Link to="/datenschutz" className="text-sm opacity-60 hover:opacity-100 hover:text-accent transition-all">{t('Datenschutz', 'Privacy')}</Link>
            </nav>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-sm opacity-30">
          © {new Date().getFullYear()} 2Morrow Lab. {t('Alle Rechte vorbehalten.', 'All rights reserved.')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
