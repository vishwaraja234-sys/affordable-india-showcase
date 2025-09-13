import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Mumbai, Maharashtra",
      rating: 5,
      text: "Amazing quality products at such affordable prices! I've ordered multiple times and the customer service is excellent. Fast delivery too!",
      product: "Wireless Headphones",
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      location: "Delhi, NCR",
      rating: 5,
      text: "Found the exact smartphone I wanted at 30% less than other sites. Authentic product with proper warranty. Highly recommended!",
      product: "Smartphone",
    },
    {
      id: 3,
      name: "Anita Patel",
      location: "Ahmedabad, Gujarat",
      rating: 5,
      text: "The home decor items I ordered transformed my living room completely. Great quality and the delivery was faster than expected.",
      product: "Home Decor Set",
    },
    {
      id: 4,
      name: "Vikram Singh",
      location: "Jaipur, Rajasthan",
      rating: 5,
      text: "Best place for affordable electronics. Got my laptop and accessories here. Everything was genuine and well-packaged.",
      product: "Laptop & Accessories",
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground"
        }`}
      />
    ));
  };

  return (
    <section className="py-16 bg-gradient-hero">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="section-title text-foreground">What Our Customers Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real reviews from real customers who trust Affordable India for their shopping needs
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Testimonial text */}
                <blockquote className="text-muted-foreground mb-4 italic">
                  "{testimonial.text}"
                </blockquote>

                {/* Customer info */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-primary">Purchased:</p>
                    <p className="text-sm text-muted-foreground">{testimonial.product}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-8 bg-background/80 backdrop-blur-sm rounded-lg p-6 shadow-sm">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">4.8/5</p>
              <p className="text-sm text-muted-foreground">Average Rating</p>
            </div>
            <div className="h-12 w-px bg-border"></div>
            <div className="text-center">
              <p className="text-2xl font-bold text-secondary">50,000+</p>
              <p className="text-sm text-muted-foreground">Happy Customers</p>
            </div>
            <div className="h-12 w-px bg-border"></div>
            <div className="text-center">
              <p className="text-2xl font-bold text-accent">98%</p>
              <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;