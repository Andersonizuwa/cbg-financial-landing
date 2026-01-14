import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section id="contact" className="py-24 section-light">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div 
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-background via-background to-muted p-12 md:p-16 lg:p-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-primary blur-3xl" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text">Ready to Start Your Investment Journey?</span>
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl mb-10">
              Get a free consultation today and join thousands of successful traders who trust AIDVEST Financial Consultants for their investment needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                Get a free consultation
                <ArrowRight size={20} />
              </Link>
              <Link to="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
