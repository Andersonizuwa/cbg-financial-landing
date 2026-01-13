import { motion } from 'framer-motion';
import { useState } from 'react';
import { toast } from 'sonner';

const WhyChooseUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    interest: 'grants',
    description: '',
  });

  const steps = [
    {
      number: '1',
      title: 'Initial Private Consultation',
      description: 'We understand your goals, situation, and expectations.',
    },
    {
      number: '2',
      title: 'One-on-One Screening',
      description: 'We assess suitability for grants, funding, or investment pathways.',
    },
    {
      number: '3',
      title: 'Advisory & Next Steps',
      description: "If there's a fit, we outline viable options and proceed accordingly.",
    },
    {
      number: '4',
      title: 'Preparation Strategies',
      description: 'Start with a prioritize goal, and access readiness.',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you! We will contact you shortly.');
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      interest: 'grants',
      description: '',
    });
  };

  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-4 heading-serif">
            Why Choose CBG Financial
          </h2>
          <p className="text-muted-foreground text-lg">
            Expertise and integrity in grant and capital advisory
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Steps */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid sm:grid-cols-2 gap-6">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-teal flex items-center justify-center text-white font-bold text-lg shrink-0">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <p className="mt-8 text-sm text-muted-foreground italic">
              Not all inquiries will be a fit — and that's intentional.
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-navy mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-navy mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-navy mb-1.5">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-navy mb-1.5">
                  Area of Interest
                </label>
                <div className="flex flex-wrap gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="interest"
                      value="grants"
                      checked={formData.interest === 'grants'}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-4 h-4 text-teal"
                    />
                    <span className="text-sm text-muted-foreground">Grants & Funding</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="interest"
                      value="investment"
                      checked={formData.interest === 'investment'}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-4 h-4 text-teal"
                    />
                    <span className="text-sm text-muted-foreground">Investment Advisory</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="interest"
                      value="both"
                      checked={formData.interest === 'both'}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-4 h-4 text-teal"
                    />
                    <span className="text-sm text-muted-foreground">Both</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-navy mb-1.5">
                  Brief Description (optional)
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-colors resize-none"
                  placeholder="Tell us briefly about your goals..."
                />
              </div>

              <button type="submit" className="btn-primary w-full">
                Submit Inquiry
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;