import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from 'react';

const Consultation = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://formspree.io/f/xzddbyjp", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        navigate("/success");
      } else {
        alert("There was an error submitting your request. Please try again.");
      }
    } catch (error) {
      alert("There was an error submitting your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto"
      >
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        <div className="glass-card p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            Consultation <span className="gradient-text">Request Form</span>
          </h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="full-name">Full Name</Label>
              <Input id="full-name" name="Full Name" placeholder="John Doe" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" name="Email Address" type="email" placeholder="john@example.com" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number (optional but recommended)</Label>
              <Input id="phone" name="Phone Number" type="tel" placeholder="+1 (555) 000-0000" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="guidance">What are you seeking guidance for?</Label>
              <Select name="Seeking Guidance For" required>
                <SelectTrigger>
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Grants & Funding">Grants & Funding</SelectItem>
                  <SelectItem value="Investment Advisory">Investment Advisory</SelectItem>
                  <SelectItem value="Both">Both</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="describe">Which best describes you?</Label>
              <Select name="Describes You" required>
                <SelectTrigger>
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Individual / Professional">Individual / Professional</SelectItem>
                  <SelectItem value="Business Owner">Business Owner</SelectItem>
                  <SelectItem value="Organization / Nonprofit">Organization / Nonprofit</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="situation">Briefly describe your situation or objective</Label>
              <Textarea 
                id="situation" 
                name="Situation or Objective" 
                placeholder="Project, business, funding goal, or investment interest" 
                required 
                className="min-h-[120px]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="referral">Referral</Label>
              <Input id="referral" name="Referral" placeholder="Where did you hear about us?" required />
            </div>

            <div className="pt-4">
              <Button type="submit" className="w-full btn-primary h-12 text-lg" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Request"}
              </Button>
              <p className="text-xs text-muted-foreground mt-4 text-center italic">
                Consultations are eligibility-based. Grant access and investment outcomes are subject to third-party approval and market risk.
              </p>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Consultation;
