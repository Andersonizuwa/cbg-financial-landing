import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const OurServices = () => {
  const services = [
    {
      title: "1. Strategic Eligibility Assessment",
      description: "We help you understand which grants, funding programs, and income growth opportunities you may qualify for — based on your goals, profile, and readiness. This assessment is not an application, but a clarity session that helps shape your next best step.",
      benefit: "You stop guessing and start planning with confidence."
    },
    {
      title: "2. Preparation & Positioning Guidance",
      description: "Once we identify opportunities that make sense for you, we help you get ready. This includes reviewing your documentation, advising on framing your objectives, and preparing you to engage with opportunity owners or gatekeepers — increasing your chances of success.",
      benefit: "You show up prepared and positioned — not unprepared and uncertain."
    },
    {
      title: "3. Investment & Growth Strategy Advisory",
      description: "For clients interested in capital growth, we provide bespoke financial insight tailored to your situation. Rather than offering generic products, we discuss strategies that align with your goals, risk tolerance, and timeline.",
      benefit: "You make informed decisions, not uninformed bets."
    },
    {
      title: "4. Ongoing Advisory & Support (Retainer)",
      description: "Some clients prefer continuous guidance. Our ongoing advisory services provide regular check-ins, access to insight updates, and priority support as you pursue your financial goals.",
      benefit: "Steady guidance through evolving opportunities."
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-green-900">Our Services — Designed Around Your Financial Goals</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-4 text-green-900">{service.title}</h3>
              <p className="text-gray-700 mb-6">{service.description}</p>
              <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                <p className="text-sm font-medium text-primary">
                  <span className="font-bold">Benefit:</span> {service.benefit}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto p-8 bg-secondary rounded-2xl text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to explore what’s possible for you?</h3>
          <p className="mb-8 text-gray-700">Speak with a member of our advisory team through a private consultation.</p>
          <Link to="/consultation" className="btn-primary inline-flex items-center gap-2">
            Request Your Consultation
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurServices;