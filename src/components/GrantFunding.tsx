import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const GrantFunding = () => {
  const benefits = [
    'Business & development grants',
    'Innovation & project-based funding',
    'Institutional & NGO-linked programs',
  ];

  return (
    <section id="grants" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Grant & Funding Advisory
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 italic">
            Legitimate Grant & Funding Opportunities
          </h2>
          <p className="text-muted-foreground mt-6 text-lg max-w-3xl mx-auto">
            We assist qualified clients in identifying and navigating legitimate grant and funding opportunities through a private screening and advisory process.
          </p>
        </motion.div>

        <motion.div 
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="glass-card p-8 md:p-10 space-y-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-lg font-medium text-foreground">{benefit}</span>
              </div>
            ))}
            
            <div className="mt-8 bg-primary/10 border border-primary/30 rounded-lg p-4 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
              <p className="text-sm text-primary">
                Grant access is eligibility-based and reviewed during a one-on-one consultation.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GrantFunding;
