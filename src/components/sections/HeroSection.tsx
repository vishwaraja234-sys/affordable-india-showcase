import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Truck, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="hero-text text-foreground mb-6">
              Quality Products at{" "}
              <span className="text-primary">Affordable Prices</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
              Discover amazing deals on electronics, fashion, home essentials, and more. 
              Fast shipping across India with 100% quality guarantee.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Link to="/category/deals">
                <Button variant="hero" size="lg" className="text-lg px-8 py-3">
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/categories">
                <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                  Explore Categories
                </Button>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Truck className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Free Shipping</p>
                  <p className="text-xs text-muted-foreground">Orders above ₹999</p>
                </div>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <div className="bg-secondary/10 p-2 rounded-lg">
                  <Shield className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Quality Guarantee</p>
                  <p className="text-xs text-muted-foreground">100% authentic products</p>
                </div>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <div className="bg-accent/10 p-2 rounded-lg">
                  <RefreshCw className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Easy Returns</p>
                  <p className="text-xs text-muted-foreground">30-day return policy</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src={heroBanner}
                alt="Affordable India - Quality Products"
                className="w-full h-auto object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating deal card */}
            <div className="absolute -bottom-6 -left-6 bg-background p-4 rounded-xl shadow-lg border border-border max-w-48">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">50% OFF</p>
                <p className="text-sm text-muted-foreground">On Electronics</p>
                <p className="text-xs font-medium text-accent">Limited Time Offer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;