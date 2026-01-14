import Header from '@/components/Header';
import Hero from '@/components/Hero';
import GrantFunding from '@/components/GrantFunding';
import InvestmentAdvisory from '@/components/InvestmentAdvisory';
import WhyChooseUs from '@/components/WhyChooseUs';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <GrantFunding />
        <InvestmentAdvisory />
        <WhyChooseUs />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
