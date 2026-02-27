import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import detailNotebook from '@/assets/detail-notebook.jpg';

const fade = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const AiCopilotSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          {...fade}
          className="relative rounded-[2.5rem] overflow-hidden bg-foreground"
        >
          <div className="grid lg:grid-cols-2">
            {/* Text */}
            <div className="relative z-10 p-10 md:p-16 lg:p-20 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 bg-accent-electric/20 text-accent-electric px-4 py-2 rounded-full text-xs font-heading font-bold tracking-wide uppercase w-fit mb-8">
                <Sparkles className="w-3.5 h-3.5" />
                {t('Dein KI-Co-Pilot', 'Your AI Co-Pilot')}
              </div>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.08] tracking-tight text-white mb-6">
                {t('Du gestaltest dein Leben.', 'Your AI co-pilot helps you think clearly.')}
              </h2>
              <div className="space-y-4 text-lg leading-relaxed">
                <p className="text-white/50">
                  {t(
                    'Dein KI-Co-Pilot hilft dir, klarer zu denken, Zusammenhänge zu erkennen und Ideen in konkrete Schritte zu bringen.',
                    'See patterns. Turn ideas into action.'
                  )}
                </p>
                <p className="text-white/50">
                  {t(
                    'Nicht um für dich zu entscheiden. Sondern um Möglichkeiten zu erweitern.',
                    "It doesn't design your life. You do. It simply helps you move with intention."
                  )}
                </p>
                <p className="text-white/80 font-medium">
                  {t(
                    'In jede 2Morrow Lab Erfahrung integriert.',
                    'Built into every 2Morrow Lab experience.'
                  )}
                </p>
              </div>
            </div>
            {/* Image */}
            <div className="relative hidden lg:block">
              <img src={detailNotebook} alt="" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/50 to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AiCopilotSection;
