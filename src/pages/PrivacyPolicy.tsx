import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto max-w-4xl"
      >
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        <div className="glass-card p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="gradient-text">Privacy Policy</span>
          </h1>
          <p className="text-muted-foreground mb-8">Last updated: January 8, 2026</p>

          <div className="space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Information We Collect</h2>
              <p>We collect information you provide directly to us, including your name, email address, phone number, and any other information you choose to provide when contacting us or using our services. We may also collect information about your device and how you interact with our website.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. How We Use Your Information</h2>
              <p>We use the information we collect to provide, maintain, and improve our services, communicate with you about our products and services, respond to your inquiries, and comply with legal obligations. We may also use your information to send you promotional communications, which you can opt out of at any time.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. Information Sharing</h2>
              <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as necessary to provide our services, comply with the law, or protect our rights. We may share anonymized, aggregated data for analytical purposes.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. Data Security</h2>
              <p>We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Your Rights</h2>
              <p>You have the right to access, correct, or delete your personal information at any time. You may also request a copy of the data we hold about you. To exercise these rights, please contact us using the information provided on our contact page.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">6. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date. We encourage you to review this policy periodically.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">7. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us through our <Link to="/contact" className="text-primary hover:underline">contact page</Link>.</p>
            </section>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicy;
