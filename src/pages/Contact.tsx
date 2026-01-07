import { motion } from 'framer-motion';
import { Mail, Phone, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-lg w-full"
      >
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        <div className="glass-card p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-muted-foreground mb-8">
            Ready to start your investment journey? Reach out to us through any of the channels below.
          </p>

          <div className="space-y-6">
            {/* Email */}
            <motion.a
              href="mailto:contact@cbgfinancial.com"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors group"
            >
              <div className="icon-box">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email Us</p>
                <p className="font-semibold group-hover:text-primary transition-colors">
                  contact@cbgfinancial.com
                </p>
              </div>
            </motion.a>

            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors group"
            >
              <div className="icon-box">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">WhatsApp</p>
                <p className="font-semibold group-hover:text-primary transition-colors">
                  +1 (234) 567-890
                </p>
              </div>
            </motion.a>
          </div>

          <p className="text-xs text-muted-foreground mt-8 text-center">
            Our team typically responds within 24 hours during business days.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
