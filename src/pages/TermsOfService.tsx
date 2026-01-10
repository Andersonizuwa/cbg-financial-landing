import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
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
            <span className="gradient-text">Terms of Service</span>
          </h1>
          <p className="text-muted-foreground mb-8">Last updated: January 8, 2026</p>

          <div className="space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Acceptance of Terms</h2>
              <p>By accessing and using AIDVEST Financial Consultants services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. We reserve the right to modify these terms at any time, and your continued use constitutes acceptance of any changes.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. Eligibility</h2>
              <p>Our services are available only to individuals who are at least 18 years old and can form legally binding contracts. By using our services, you represent that you meet these requirements and have the legal capacity to enter into this agreement.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. Services Description</h2>
              <p>AIDVEST Financial Consultants provides information and advisory services related to forex trading, cryptocurrency, stocks, indices, and investment strategies. Our services are for informational purposes only and should not be construed as personalized financial advice.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. Risk Disclosure</h2>
              <p>Trading in financial instruments carries a high level of risk and may not be suitable for all investors. You should be aware that you could lose some or all of your invested capital. Past performance is not indicative of future results. You should seek independent financial advice before making any investment decisions.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. User Responsibilities</h2>
              <p>You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to provide accurate, current, and complete information and to update such information as necessary.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">6. Intellectual Property</h2>
              <p>All content on our website, including text, graphics, logos, and software, is the property of AIDVEST Financial Consultants and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">7. Limitation of Liability</h2>
              <p>AIDVEST Financial Consultants shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from your use of our services. This includes, but is not limited to, losses arising from trading activities, technical failures, or reliance on information provided.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">8. Governing Law</h2>
              <p>These Terms of Service shall be governed by and construed in accordance with applicable laws. Any disputes arising from these terms shall be resolved through appropriate legal channels.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">9. Contact</h2>
              <p>For any questions regarding these Terms of Service, please reach out through our <Link to="/contact" className="text-primary hover:underline">contact page</Link>.</p>
            </section>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TermsOfService;
