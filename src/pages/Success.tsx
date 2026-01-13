import { motion } from 'framer-motion';
import { CheckCircle2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Success = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full text-center"
      >
        <div className="glass-card p-8 md:p-12">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <CheckCircle2 size={48} />
            </div>
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            Consultation Request <span className="gradient-text">Received</span>
          </h1>
          
          <div className="space-y-4 text-muted-foreground mb-10">
            <p>Our team reviews each request to determine mutual fit.</p>
            <p>If appropriate, a team member will contact you.</p>
          </div>

          <Button asChild className="w-full btn-primary h-12 text-lg">
            <Link to="/" className="flex items-center justify-center gap-2">
              <ArrowLeft size={20} />
              Go back home
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default Success;
