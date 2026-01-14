import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import OurServices from '@/components/OurServices';
import GrantFunding from '@/components/GrantFunding';
import InvestmentAdvisory from '@/components/InvestmentAdvisory';
import WhyChooseUs from '@/components/WhyChooseUs';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <OurServices />
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
