import { ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Grants = () => {
  const points = [
    'Business & development grants',
    'Innovation & project-based funding',
    'Institutional & NGO-linked programs',
  ];

  return (
    <section id="grants" className="py-24 bg-secondary-foreground overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              Grant & Funding Advisory
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
              Legitimate Grant & Funding Opportunities
            </h2>
            
            <p className="text-white/80 text-lg md:text-xl mb-10 leading-relaxed max-w-3xl mx-auto">
              We assist qualified clients in identifying and navigating legitimate grant and funding opportunities through a private screening and advisory process.
            </p>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-10 text-left max-w-2xl mx-auto">
              <ul className="space-y-4 mb-8">
                {points.map((point, index) => (
                  <li key={index} className="flex items-center gap-3 text-white">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                      <CheckCircle2 size={16} />
                    </div>
                    <span className="font-medium text-lg">{point}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex items-start gap-3 p-4 bg-primary/10 rounded-xl border border-primary/20">
                <ShieldCheck className="text-primary shrink-0 mt-1" size={20} />
                <p className="text-white/90 text-sm italic">
                  Grant access is eligibility-based and reviewed during a one-on-one consultation.
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <Link to="/contact" className="btn-primary flex items-center gap-2 px-8 py-4 text-lg">
                Speak With an Advisor
                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Grants;
