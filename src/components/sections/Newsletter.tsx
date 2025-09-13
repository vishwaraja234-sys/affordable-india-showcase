import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Gift } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubscribing(true);

    // Simulate newsletter subscription
    setTimeout(() => {
      toast({
        title: "Successfully Subscribed!",
        description: "Welcome to Affordable India! Check your email for exclusive deals.",
      });
      setEmail("");
      setIsSubscribing(false);
    }, 1000);
  };

  return (
    <section className="py-16 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-primary-foreground/20 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 border border-primary-foreground/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-primary-foreground/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="bg-primary-foreground/10 p-3 rounded-full">
              <Mail className="h-8 w-8" />
            </div>
            <div className="bg-primary-foreground/10 p-3 rounded-full">
              <Gift className="h-8 w-8" />
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">
            Get Exclusive Deals & Updates
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about flash sales, 
            new arrivals, and special discounts. Plus, get 10% off your first order!
          </p>

          {/* Newsletter form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-3">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-primary-foreground text-foreground placeholder:text-muted-foreground"
              />
              <Button
                type="submit"
                disabled={isSubscribing}
                className="bg-secondary hover:bg-secondary-light text-secondary-foreground px-6"
              >
                {isSubscribing ? "Subscribing..." : "Subscribe"}
              </Button>
            </div>
          </form>

          {/* Benefits */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-primary-foreground/80">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-secondary rounded-full"></span>
              <span>Exclusive flash sales</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-secondary rounded-full"></span>
              <span>New product alerts</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-secondary rounded-full"></span>
              <span>10% welcome discount</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-secondary rounded-full"></span>
              <span>No spam, unsubscribe anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;