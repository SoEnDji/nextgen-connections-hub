import Layout from '@/components/Layout';
import HeroSection from '@/components/home/HeroSection';
import WasWirNichtSindSection from '@/components/home/WasWirNichtSindSection';
import DreiSaeulenSection from '@/components/home/DreiSaeulenSection';
import StatsSection from '@/components/home/StatsSection';
import WissenschaftSection from '@/components/home/WissenschaftSection';
import NewsletterSection from '@/components/home/NewsletterSection';

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <WasWirNichtSindSection />
      <DreiSaeulenSection />
      <StatsSection />
      <WissenschaftSection />
      <NewsletterSection />
    </Layout>
  );
};

export default Home;
