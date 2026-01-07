import { Shield, TrendingUp, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3">
                Your Trusted Partner in{' '}
                <span className="gradient-text">Financial Growth</span>
              </h2>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              CBG Financial is a leading brokerage firm dedicated to empowering traders and investors worldwide. With cutting-edge technology, expert guidance, and a commitment to transparency, we help you navigate global markets with confidence.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Whether you're a seasoned trader or just starting your investment journey, our comprehensive suite of tools and personalized support ensures you have everything you need to succeed.
            </p>
            <a href="#contact" className="btn-primary inline-flex">
              Start Your Journey
            </a>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="space-y-6">
            <div className="glass-card p-6 flex gap-5 items-start">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Regulated & Secure</h3>
                <p className="text-muted-foreground">
                  Fully licensed and regulated broker with industry-leading security measures to protect your investments.
                </p>
              </div>
            </div>

            <div className="glass-card p-6 flex gap-5 items-start">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Advanced Technology</h3>
                <p className="text-muted-foreground">
                  State-of-the-art trading platforms with real-time data, advanced charting, and fast execution.
                </p>
              </div>
            </div>

            <div className="glass-card p-6 flex gap-5 items-start">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
                <p className="text-muted-foreground">
                  Dedicated account managers and 24/7 customer support to assist you every step of the way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
