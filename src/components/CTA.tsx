import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section id="contact" className="py-24 section-light">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-background via-background to-muted p-12 md:p-16 lg:p-20">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-primary blur-3xl" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Start Your{' '}
              <span className="gradient-text">Investment Journey?</span>
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl mb-10">
              Open your account today and join thousands of successful traders who trust CBG Financial for their investment needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#" className="btn-primary">
                Open an Account
                <ArrowRight size={20} />
              </a>
              <a href="#" className="btn-secondary">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
