import Layout from '@/components/Layout';
import HeroSection from '@/components/home/HeroSection';
import ShiftSection from '@/components/home/ShiftSection';
import EmpowermentSection from '@/components/home/EmpowermentSection';
import RoleCardsSection from '@/components/home/RoleCardsSection';
import AiCopilotSection from '@/components/home/AiCopilotSection';
import ValuePropositionSection from '@/components/home/ValuePropositionSection';
import NewsletterSection from '@/components/home/NewsletterSection';

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <ValuePropositionSection />
      <ShiftSection />
      <EmpowermentSection />
      <RoleCardsSection />
      <AiCopilotSection />
      <NewsletterSection />
    </Layout>
  );
};

export default Home;
