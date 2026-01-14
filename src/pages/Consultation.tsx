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
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guidanceType: '',
    clientType: '',
    message: '',
    referral: ''
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
    
    try {
      const response = await fetch('https://formspree.io/f/xzddbyjp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitted(true);
        toast({
          title: "Request Submitted!",
          description: "We've received your consultation request.",
        });
      } else {
        toast({
          title: "Error",
          description: "There was a problem submitting your request. Please try again.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem submitting your request. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center p-4 pt-32">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-card border border-border p-8 rounded-2xl max-w-lg w-full text-center shadow-lg"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Send className="text-primary" size={32} />
            </div>
            <h2 className="text-2xl font-bold mb-4">Consultation Request Received</h2>
            <div className="space-y-4 text-muted-foreground mb-8">
              <p>Our team reviews each request to determine mutual fit.</p>
              <p>If appropriate, a team member will contact you.</p>
            </div>
            <Link to="/">
              <Button className="w-full btn-primary gap-2">
                <ArrowLeft size={18} />
                Back to home page
              </Button>
            </Link>
          </motion.div>
        </main>
        <Footer />
      </div>
    );
  }

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
                    <SelectItem value="grants">Grants & Funding</SelectItem>
                    <SelectItem value="investment">Investment Advisory</SelectItem>
                    <SelectItem value="both">Both</SelectItem>
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
                    <SelectItem value="individual">Individual / Professional</SelectItem>
                    <SelectItem value="business">Business Owner</SelectItem>
                    <SelectItem value="nonprofit">Organization / Nonprofit</SelectItem>
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

              <div className="space-y-2">
                <Label htmlFor="referral">Referral (Where did you hear about us)</Label>
                <Input
                  id="referral"
                  name="referral"
                  placeholder="e.g. Social Media, Friend, Search Engine"
                  value={formData.referral}
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
              Consultations are eligibility-based. Grant access and investment outcomes are subject to third-party approval and market risk.
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Consultation;
