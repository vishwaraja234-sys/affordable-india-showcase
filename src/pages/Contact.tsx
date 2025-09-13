import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, MessageCircle, HelpCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Office",
      details: ["123 Commerce Street", "New Delhi, India 110001"],
      color: "text-primary",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 98765 43210", "Mon-Sat: 9 AM - 8 PM"],
      color: "text-secondary",
    },
    {
      icon: Mail,
      title: "Email Support",
      details: ["support@affordableindia.com", "Response within 24 hours"],
      color: "text-accent",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon-Sat: 9 AM - 8 PM", "Sunday: 10 AM - 6 PM"],
      color: "text-muted-foreground",
    },
  ];

  const faqs = [
    {
      question: "How can I track my order?",
      answer: "You can track your order using the tracking link sent to your email or by logging into your account.",
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for most items. Products should be in original condition with packaging.",
    },
    {
      question: "Do you offer cash on delivery?",
      answer: "Yes, we offer cash on delivery for orders above ₹500 in selected cities.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - Affordable India | Customer Support & Help</title>
        <meta 
          name="description" 
          content="Get in touch with Affordable India's customer support team. Find our contact information, business hours, and get help with your orders." 
        />
        <link rel="canonical" href="https://affordableindia.com/contact" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Hero section */}
          <section className="py-16 bg-gradient-hero">
            <div className="container mx-auto px-4 text-center">
              <h1 className="hero-text text-foreground mb-6">
                <span className="text-primary">Contact</span> Us
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We're here to help! Reach out to us for any questions, concerns, 
                or feedback about your shopping experience.
              </p>
            </div>
          </section>

          {/* Contact form and info */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact form */}
                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <MessageCircle className="h-5 w-5 text-primary" />
                        Send us a Message
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                              Full Name *
                            </label>
                            <Input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              placeholder="Enter your full name"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                              Email Address *
                            </label>
                            <Input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              placeholder="Enter your email"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Subject *
                          </label>
                          <Input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            required
                            placeholder="What is this regarding?"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Message *
                          </label>
                          <Textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            rows={5}
                            placeholder="Tell us how we can help you..."
                          />
                        </div>
                        
                        <Button 
                          type="submit" 
                          className="w-full" 
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Sending..." : "Send Message"}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>

                {/* Contact information */}
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className={`${info.color} bg-muted/50 p-3 rounded-lg`}>
                            <info.icon className="h-6 w-6" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground mb-2">
                              {info.title}
                            </h3>
                            {info.details.map((detail, detailIndex) => (
                              <p key={detailIndex} className="text-muted-foreground text-sm">
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* FAQ section */}
          <section className="py-16 bg-surface">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="section-title text-foreground flex items-center justify-center gap-2">
                  <HelpCircle className="h-8 w-8 text-primary" />
                  Frequently Asked Questions
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Quick answers to common questions
                </p>
              </div>

              <div className="max-w-3xl mx-auto space-y-4">
                {faqs.map((faq, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-foreground mb-3">
                        {faq.question}
                      </h3>
                      <p className="text-muted-foreground">
                        {faq.answer}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-8">
                <p className="text-muted-foreground mb-4">
                  Can't find what you're looking for?
                </p>
                <Button variant="outline">
                  View All FAQs
                </Button>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Contact;