import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-900">About Aidvest Financial Consultants</h2>
          <div className="space-y-6 text-lg text-gray-800">
            <p>
              At Aidvest Financial Consultants, we believe that every individual and organization deserves access to clarity, strategic insight, and tailored guidance when exploring financial opportunities.
            </p>
            <p>
              Many people are unaware of the full range of legitimate grants, funding programs, and growth pathways available to them — or how to prepare effectively to pursue them. We bridge that gap by providing one-on-one advisory services, helping clients understand what options truly fit their goals and readiness.
            </p>
            <p>
              Our team combines deep industry insight with a client-first approach, working closely with you to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>evaluate your objectives,</li>
              <li>assess eligibility for funding and growth opportunities,</li>
              <li>and prepare you to position yourself with confidence.</li>
            </ul>
            <p>
              We don’t automate approvals, promote hype, or promise outcomes — instead, we focus on professional guidance, transparent advice, and real conversations designed to empower your next steps.
            </p>
            <p>
              You don’t have to navigate financial opportunities alone. Start with a private consultation to discover what’s possible for you.
            </p>
            <p className="font-medium text-primary">
              👉 Schedule your private consultation today.
            </p>
          </div>

          <div className="mt-12 p-8 bg-secondary rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to explore what’s possible for you?</h3>
            <p className="mb-8 text-gray-700">Speak with a member of our advisory team through a private consultation.</p>
            <Link to="/consultation" className="btn-primary inline-flex items-center gap-2">
              Request Your Consultation
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;