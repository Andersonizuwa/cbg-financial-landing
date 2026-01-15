import { Building2, Scale, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const InvestmentAdvisory = () => {
  const features = [
    { icon: Building2, title: 'Capital structuring' },
    { icon: Scale, title: 'Private investment opportunities' },
    { icon: ShieldCheck, title: 'Risk & suitability screening' },
  ];

  const steps = [
    {
      number: '01',
      title: 'Initial Consultation',
      description: 'Private assessment of financial objectives and risk profile.',
    },
    {
      number: '02',
      title: 'Suitability Analysis',
      description: 'Rigorous screening of opportunities against client requirements.',
    },
    {
      number: '03',
      title: 'Strategic Structuring',
      description: 'Development of tailored investment frameworks and structures.',
    },
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Investment Advisory & Capital Structuring
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 leading-tight">
                Tailored Guidance for Long-Term Capital Growth
              </h2>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We provide tailored investment guidance and structured opportunities for clients seeking long-term capital growth, subject to suitability and risk assessment.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-lg font-medium text-primary">{feature.title}</span>
                </motion.div>
              ))}
            </div>

            <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
              <p className="text-sm text-primary">
                Our investment services are tailored for each client's suitability and risk appetite.
              </p>
            </div>

            <div className="mt-6">
              <Link to="/consultation" className="btn-primary inline-flex items-center gap-2">
                Investment Advisory <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>

          {/* Right Column - Process Card */}
          <motion.div 
            className="glass-card p-8 md:p-10"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 bg-primary rounded-full" />
              <h3 className="text-2xl font-bold">Private Advisory Process</h3>
            </div>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div 
                  key={index}
                  className="flex gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.15 }}
                >
                  <span className="text-4xl font-bold text-primary/40">{step.number}</span>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentAdvisory;
