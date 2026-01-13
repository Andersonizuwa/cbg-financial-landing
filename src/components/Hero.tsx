import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Financial Advisory" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(210,40%,25%)] via-[hsl(210,40%,25%,0.85)] to-transparent" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight heading-serif">
              Private Capital Advisory & Funding Access
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8 leading-relaxed">
              We work one-on-one with individuals and organizations to explore legitimate grants, funding opportunities, and investment solutions.
            </p>
            
            <Link to="/consultation" className="btn-primary text-lg">
              Request a Private Consultation
              <ArrowRight size={20} />
            </Link>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-white/60 text-sm">
              <span>Relationship-based</span>
              <span className="hidden sm:inline">•</span>
              <span>Eligibility-driven</span>
              <span className="hidden sm:inline">•</span>
              <span>No public applications</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;