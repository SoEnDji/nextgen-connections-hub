import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';

const Booking = () => {
  const { t } = useLanguage();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.zcal.co/embed/v1/embed.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Layout>
      <section className="py-32 md:py-40 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground leading-tight">
              {t('Gespräch vereinbaren', 'Schedule a meeting')}
            </h1>
            <div
              className="zcal-inline-widget"
              dangerouslySetInnerHTML={{
                __html:
                  '<a href="https://zcal.co/i/cr7qgnh8">2Morrow Lab kennenlernen &amp; Möglichkeiten erkunden - Schedule a meeting</a>',
              }}
            />
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Booking;
