import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Users, Target, Heart, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To make quality products accessible and affordable for every Indian family, without compromising on authenticity or service.",
    },
    {
      icon: Heart,
      title: "Customer First",
      description: "Every decision we make puts our customers at the center. Your satisfaction and trust drive everything we do.",
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "We partner only with trusted suppliers and brands to ensure every product meets our high standards of quality.",
    },
    {
      icon: Users,
      title: "Community Impact",
      description: "Building a platform that connects Indian families with products they love while supporting local and global businesses.",
    },
  ];

  const stats = [
    { label: "Happy Customers", value: "50,000+" },
    { label: "Products Delivered", value: "2,00,000+" },
    { label: "Cities Served", value: "500+" },
    { label: "Customer Satisfaction", value: "98%" },
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Affordable India | Our Story & Mission</title>
        <meta 
          name="description" 
          content="Learn about Affordable India's mission to provide quality products at affordable prices. Discover our story, values, and commitment to customer satisfaction." 
        />
        <link rel="canonical" href="https://affordableindia.com/about" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Hero section */}
          <section className="py-16 bg-gradient-hero">
            <div className="container mx-auto px-4 text-center">
              <h1 className="hero-text text-foreground mb-6">
                About <span className="text-primary">Affordable India</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Born from the vision of making quality products accessible to every Indian family, 
                we're more than just an e-commerce platform – we're your trusted shopping partner.
              </p>
            </div>
          </section>

          {/* Story section */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="section-title text-foreground">Our Story</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Founded in 2023, Affordable India started with a simple yet powerful idea: 
                      why should quality products be out of reach for the average Indian family? 
                      We saw a gap in the market where customers had to choose between affordability and quality.
                    </p>
                    <p>
                      Our journey began by partnering directly with manufacturers and trusted suppliers, 
                      cutting out middlemen to offer genuine products at prices that make sense. 
                      Today, we serve customers across 500+ cities in India, delivering smiles along with packages.
                    </p>
                    <p>
                      What makes us different is our commitment to transparency, authenticity, and 
                      customer service that goes beyond the sale. Every product is carefully curated, 
                      every price is thoughtfully set, and every customer interaction is handled with care.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&crop=center"
                    alt="Affordable India team working together"
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg">
                    <p className="text-sm font-semibold">Trusted by 50,000+ families</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Values section */}
          <section className="py-16 bg-surface">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="section-title text-foreground">Our Values</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  These core principles guide every decision we make and every interaction we have
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => (
                  <Card key={index} className="text-center hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <value.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-3">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Stats section */}
          <section className="py-16 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold font-playfair mb-4">
                  Growing Together with India
                </h2>
                <p className="text-primary-foreground/80 max-w-2xl mx-auto">
                  Numbers that reflect our commitment and your trust
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold font-playfair mb-2">
                      {stat.value}
                    </div>
                    <div className="text-primary-foreground/80 text-sm">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Team section */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4 text-center">
              <h2 className="section-title text-foreground">Meet Our Leadership</h2>
              <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
                Passionate leaders committed to transforming online shopping in India
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
                    alt="Founder & CEO"
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-semibold text-foreground">Rajesh Kumar</h3>
                  <p className="text-sm text-primary mb-2">Founder & CEO</p>
                  <p className="text-sm text-muted-foreground">
                    15+ years in e-commerce and retail, passionate about affordable technology access.
                  </p>
                </div>

                <div className="text-center">
                  <img
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face"
                    alt="Head of Operations"
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-semibold text-foreground">Priya Sharma</h3>
                  <p className="text-sm text-primary mb-2">Head of Operations</p>
                  <p className="text-sm text-muted-foreground">
                    Expert in supply chain management with focus on customer satisfaction.
                  </p>
                </div>

                <div className="text-center">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
                    alt="Head of Technology"
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-semibold text-foreground">Amit Patel</h3>
                  <p className="text-sm text-primary mb-2">Head of Technology</p>
                  <p className="text-sm text-muted-foreground">
                    Building scalable platforms that make shopping simple and secure.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default About;