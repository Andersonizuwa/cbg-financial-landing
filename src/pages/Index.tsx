import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import CoreFocus from '@/components/CoreFocus';
import WhyChooseUs from '@/components/WhyChooseUs';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <CoreFocus />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
};

export default Index;