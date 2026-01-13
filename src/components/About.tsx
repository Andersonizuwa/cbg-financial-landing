import { Building2, Briefcase, Users, GraduationCap, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const clientTypes = [
    {
      icon: Briefcase,
      title: 'Entrepreneurs & Business Owners',
      points: [
        'High-intent entrepreneurs',
        'Clear project requirements',
        'Professional documents accessible',
      ],
    },
    {
      icon: Building2,
      title: 'Project-Based Organizations',
      points: [
        'Project-specific funding',
        'Institutional NGO-linked programs',
      ],
    },
    {
      icon: Users,
      title: 'High-Net-Worth Individuals',
      points: [
        'Discreet-seeking programs',
        'Seeking structured solutions to objectives',
      ],
    },
    {
      icon: GraduationCap,
      title: 'Professionals Seeking Capital Guidance',
      points: [
        'Understanding investments',
        'Entitled to assurance or investigations',
      ],
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-6 heading-serif">
            Who We Work With
          </h2>
          <p className="text-muted-foreground text-lg">
            We work with clients who are seeking structured, legitimate financial pathways — not quick wins.
          </p>
        </motion.div>

        {/* Client Types Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clientTypes.map((client, index) => (
            <motion.div 
              key={index}
              className="feature-card text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="icon-box mx-auto">
                <client.icon className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-navy mb-4">
                {client.title}
              </h3>
              <ul className="text-left space-y-2">
                {client.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;