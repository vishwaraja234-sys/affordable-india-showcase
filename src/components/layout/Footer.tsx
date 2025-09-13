import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
  };

  return (
    <footer className="bg-accent text-accent-foreground">
      {/* Newsletter section */}
      <div className="border-b border-accent-light">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-semibold font-playfair mb-2">
                Stay Updated with Our Latest Deals
              </h3>
              <p className="text-accent-foreground/80">
                Get exclusive offers and new product alerts delivered to your inbox.
              </p>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="flex w-full max-w-md gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-background text-foreground flex-1"
                required
              />
              <Button type="submit" className="bg-primary hover:bg-hover">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="bg-primary text-primary-foreground rounded-lg p-2">
                <span className="text-lg font-bold font-playfair">AI</span>
              </div>
              <span className="text-lg font-bold font-playfair">Affordable India</span>
            </Link>
            <p className="text-accent-foreground/80 mb-4 text-sm leading-relaxed">
              Your trusted partner for quality products at affordable prices. 
              We bring you the best deals across electronics, fashion, home essentials, and more.
            </p>
            <div className="flex space-x-3">
              <Button variant="outline" size="sm" className="border-accent-foreground/20">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="border-accent-foreground/20">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="border-accent-foreground/20">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="border-accent-foreground/20">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-semibold font-playfair mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/category/electronics" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                  Electronics
                </Link>
              </li>
              <li>
                <Link to="/category/fashion" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                  Fashion
                </Link>
              </li>
              <li>
                <Link to="/category/home-garden" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                  Home & Garden
                </Link>
              </li>
              <li>
                <Link to="/category/sports" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                  Sports & Fitness
                </Link>
              </li>
              <li>
                <Link to="/category/beauty" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                  Beauty & Personal Care
                </Link>
              </li>
              <li>
                <Link to="/deals" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                  Deals & Offers
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer service */}
          <div>
            <h4 className="text-lg font-semibold font-playfair mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/contact" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/help" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                  Help & FAQ
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link to="/warranty" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                  Warranty
                </Link>
              </li>
              <li>
                <Link to="/track-order" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                  Track Your Order
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-lg font-semibold font-playfair mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <span className="text-accent-foreground/80">
                  123 Commerce Street<br />
                  New Delhi, India 110001
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-accent-foreground/80">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-accent-foreground/80">support@affordableindia.com</span>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-accent-foreground/20">
              <p className="text-xs text-accent-foreground/60">
                Customer Service Hours:<br />
                Mon-Sat: 9 AM - 8 PM<br />
                Sunday: 10 AM - 6 PM
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-accent-light">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <p className="text-accent-foreground/80">
              © 2024 Affordable India. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;