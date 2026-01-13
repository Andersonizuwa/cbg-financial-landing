import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Grants from '@/components/Grants';
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
        <About />
        <Services />
        <Grants />
        <InvestmentAdvisory />
        <WhyChooseUs />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
