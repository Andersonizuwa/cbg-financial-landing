import { TrendingUp, PiggyBank, Check, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const CoreFocus = () => {
  const focusAreas = [
    {
      icon: TrendingUp,
      title: 'Grant & Funding Advisory',
      points: [
        'Business & development grants',
        'Project-specific funding',
        'Institutional & NGO-linked programs',
      ],
      disclaimer: 'Grant access is eligibility-based and subject to third-party approval.',
    },
    {
      icon: PiggyBank,
      title: 'Investment Advisory & Capital Structuring',
      points: [
        'Capital structuring',
        'Private investment opportunities',
        'Risk & suitability review',
      ],
      disclaimer: 'All investments carry risk. Returns are not guaranteed.',
    },
  ];

  return (
    <section id="services" className="py-20 section-light">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy heading-serif">
            Our Core Focus
          </h2>
        </motion.div>

        {/* Focus Areas Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {focusAreas.map((area, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="icon-box">
                  <area.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-navy heading-serif">
                  {area.title}
                </h3>
              </div>
              
              <ul className="space-y-3 mb-6">
                {area.points.map((point, i) => (
                  <li key={i} className="flex items-center gap-3 text-muted-foreground">
                    <Check className="w-5 h-5 text-teal shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-start gap-2 pt-4 border-t border-gray-100">
                <AlertCircle className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                <p className="text-xs text-muted-foreground italic">
                  {area.disclaimer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreFocus;