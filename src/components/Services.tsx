import { TrendingUp, Bitcoin, BarChart3, LineChart, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: TrendingUp,
      title: 'Forex Trading',
      description: 'Access the world\'s largest financial market with competitive spreads and leverage up to 1:500.',
    },
    {
      icon: Bitcoin,
      title: 'Crypto Trading',
      description: 'Trade popular cryptocurrencies including Bitcoin, Ethereum, and more with 24/7 market access.',
    },
    {
      icon: BarChart3,
      title: 'Stocks & Indices',
      description: 'Invest in global stocks and indices from major exchanges around the world.',
    },
    {
      icon: LineChart,
      title: 'Investment Advisory',
      description: 'Get personalized investment strategies and portfolio management from our expert advisors.',
    },
  ];

  return (
    <section id="services" className="py-24 section-light">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 text-secondary-foreground">
            Comprehensive Trading Solutions
          </h2>
          <p className="text-muted-foreground mt-6 text-lg">
            From forex and crypto to stocks and personalized advisory, we offer everything you need to succeed in the financial markets.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="feature-card group"
            >
              <div className="icon-box">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all"
              >
                Learn More <ArrowRight size={18} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
