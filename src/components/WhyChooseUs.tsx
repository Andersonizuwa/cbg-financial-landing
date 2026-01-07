import { Shield, Eye, Zap, HeadphonesIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: 'Bank-Level Security',
      description: 'Your funds and data are protected with advanced encryption and multi-layer security protocols.',
    },
    {
      icon: Eye,
      title: 'Full Transparency',
      description: 'No hidden fees, clear pricing, and real-time reporting on all your trades and investments.',
    },
    {
      icon: Zap,
      title: 'Lightning Fast Execution',
      description: 'Ultra-low latency order execution ensures you never miss a trading opportunity.',
    },
    {
      icon: HeadphonesIcon,
      title: 'Professional Support',
      description: 'Our expert team is available 24/7 to help you with any questions or concerns.',
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Why CBG Financial
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3">
            Why Choose <span className="gradient-text">CBG Financial?</span>
          </h2>
          <p className="text-muted-foreground mt-6 text-lg">
            We provide the tools, resources, and expertise you need to achieve your financial goals.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="glass-card p-8 text-center hover:bg-muted/50 transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
