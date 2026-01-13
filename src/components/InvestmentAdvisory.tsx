import { Scale, Briefcase, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const InvestmentAdvisory = () => {
  const points = [
    {
      title: 'Capital structuring',
      icon: Briefcase,
    },
    {
      title: 'Private investment opportunities',
      icon: Scale,
    },
    {
      title: 'Risk & suitability screening',
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="investment-advisory" className="py-24 bg-secondary-foreground overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              Investment Advisory & Capital Structuring
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
              Tailored Guidance for Long-Term Capital Growth
            </h2>
            
            <p className="text-white/80 text-lg md:text-xl mb-10 leading-relaxed">
              We provide tailored investment guidance and structured opportunities for clients seeking long-term capital growth, subject to suitability and risk assessment.
            </p>

            <div className="space-y-6 mb-10">
              {points.map((point, index) => (
                <div key={index} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <point.icon size={24} />
                  </div>
                  <span className="text-xl font-medium text-white">{point.title}</span>
                </div>
              ))}
            </div>

            <div className="flex items-start gap-3 p-4 bg-primary/10 rounded-xl border border-primary/20 mb-8">
              <CheckCircle2 className="text-primary shrink-0 mt-1" size={18} />
              <p className="text-white/90 text-sm italic">
                Our advisory services are private and focused on long-term sustainability and strategic growth.
              </p>
            </div>

            <Link to="/contact" className="btn-primary flex items-center gap-2 w-fit px-8 py-4 text-lg">
              Schedule a Private Discussion
              <ArrowRight size={20} />
            </Link>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full" />
            <div className="relative glass-card overflow-hidden border-primary/20">
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-2 h-8 bg-primary rounded-full" />
                  <h3 className="text-2xl font-bold text-white">Private Advisory Process</h3>
                </div>
                <div className="space-y-8">
                  {[
                    { step: '01', title: 'Initial Consultation', desc: 'Private assessment of financial objectives and risk profile.' },
                    { step: '02', title: 'Suitability Analysis', desc: 'Rigorous screening of opportunities against client requirements.' },
                    { step: '03', title: 'Strategic Structuring', desc: 'Development of tailored investment frameworks and structures.' },
                  ].map((step, i) => (
                    <div key={i} className="flex gap-6">
                      <span className="text-4xl font-bold text-primary/20">{step.step}</span>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                        <p className="text-white/80 text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentAdvisory;
