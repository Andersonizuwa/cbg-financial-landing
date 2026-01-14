import { Shield, Eye, Users, FileCheck, ClipboardCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Users,
      title: 'Private, Human-Led Advisory',
      description: 'We work directly with clients through one-on-one consultations to assess fit, eligibility, and strategic direction — no automated approvals or generic advice.',
    },
    {
      icon: FileCheck,
      title: 'Eligibility-Driven Guidance',
      description: 'We help clients understand which grant, funding, or investment pathways are realistic and worth pursuing — and which are not.',
    },
    {
      icon: Eye,
      title: 'Transparent Advisory Fees',
      description: 'Our services are advisory-based with clearly explained fees. Your first consultation with us is always free.',
    },
    {
      icon: ClipboardCheck,
      title: 'Preparation & Positioning Support',
      description: 'We help clients prepare properly for legitimate opportunities, improving readiness before any applications or investment decisions.',
    },
    {
      icon: Shield,
      title: 'Discretion & Professionalism',
      description: 'We prioritize confidentiality, professionalism, and long-term relationships over volume or quick wins.',
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
            Why Choose AIDVEST Financial Consultants
          </span>
          {/* <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3">
            Why Choose <span className="gradient-text">AIDVEST?</span>
          </h2> */}
          <p className="text-muted-foreground mt-6 text-lg">
            We provide the tools, expertise, and strategic connections that help our clients pursue sustainable, long-term financial outcomes.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
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
