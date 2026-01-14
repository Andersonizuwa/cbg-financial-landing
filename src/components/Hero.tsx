import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const stats = [
    { value: '$8.2B', label: 'Assets Under Management' },
    { value: '25K+', label: 'Active Traders' },
    { value: '38+', label: 'Active Partnerships' },
    { value: '11K+', label: 'Grants Approved' },
    { value: '15+', label: 'Years of Experience' },
    { value: '24/7', label: 'Customer Support' },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-background/85" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight italic">
              Private Capital Advisory &{' '}
              <span className="gradient-text">Funding Access</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              We work one-on-one with individuals and businesses to assess fit for grants, funding opportunities, and investment solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/consultation" className="btn-primary">
                Free Private Consultation
                <ArrowRight size={20} />
              </Link>
              <a href="#services" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                Learn how we work
                <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>

          {/* Right Column - Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="glass-card p-6 md:p-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
