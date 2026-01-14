import { motion } from 'framer-motion';
import { ArrowLeft, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Consultation = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guidanceType: '',
    clientType: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Request Submitted!",
      description: "We'll contact you within 24 hours to schedule your free consultation.",
    });
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      guidanceType: '',
      clientType: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center">
              Consultation <span className="gradient-text">Request Form</span>
            </h1>
            <p className="text-muted-foreground mb-10 text-center">
              Complete the form below and our team will reach out to schedule your private consultation.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-muted border-border"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-muted border-border"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number (optional but recommended)</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-muted border-border"
                />
              </div>

              <div className="space-y-2">
                <Label>What are you seeking guidance for?</Label>
                <Select 
                  value={formData.guidanceType} 
                  onValueChange={(value) => handleSelectChange('guidanceType', value)}
                >
                  <SelectTrigger className="bg-muted border-border">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="grants">Grant & Funding Opportunities</SelectItem>
                    <SelectItem value="investment">Investment Advisory</SelectItem>
                    <SelectItem value="capital">Capital Structuring</SelectItem>
                    <SelectItem value="trading">Trading Services</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Which best describes you?</Label>
                <Select 
                  value={formData.clientType} 
                  onValueChange={(value) => handleSelectChange('clientType', value)}
                >
                  <SelectTrigger className="bg-muted border-border">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="individual">Individual Investor</SelectItem>
                    <SelectItem value="business">Business Owner</SelectItem>
                    <SelectItem value="institution">Institutional Client</SelectItem>
                    <SelectItem value="startup">Startup Founder</SelectItem>
                    <SelectItem value="ngo">NGO / Non-Profit</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Briefly describe your situation or objective</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Project, business, funding goal, or investment interest"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-muted border-border"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  'Submitting...'
                ) : (
                  <>
                    Submit Request
                    <Send size={18} />
                  </>
                )}
              </Button>
            </form>

            <p className="text-xs text-muted-foreground mt-6 text-center">
              By submitting this form, you agree to our{' '}
              <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
              {' '}and{' '}
              <Link to="/terms" className="text-primary hover:underline">Terms of Service</Link>.
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Consultation;
