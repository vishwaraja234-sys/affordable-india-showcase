import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Smartphone, 
  Shirt, 
  Home, 
  Dumbbell, 
  Sparkles, 
  Car,
  Baby,
  BookOpen 
} from "lucide-react";

const Categories = () => {
  const categories = [
    {
      id: "electronics",
      name: "Electronics",
      icon: Smartphone,
      description: "Smartphones, Laptops & More",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      href: "/category/electronics",
    },
    {
      id: "fashion",
      name: "Fashion",
      icon: Shirt,
      description: "Clothing & Accessories",
      color: "text-pink-600",
      bgColor: "bg-pink-50",
      href: "/category/fashion",
    },
    {
      id: "home-garden",
      name: "Home & Garden",
      icon: Home,
      description: "Furniture & Decor",
      color: "text-green-600",
      bgColor: "bg-green-50",
      href: "/category/home-garden",
    },
    {
      id: "sports",
      name: "Sports & Fitness",
      icon: Dumbbell,
      description: "Exercise & Outdoor Gear",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      href: "/category/sports",
    },
    {
      id: "beauty",
      name: "Beauty & Personal Care",
      icon: Sparkles,
      description: "Skincare & Cosmetics",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      href: "/category/beauty",
    },
    {
      id: "automotive",
      name: "Automotive",
      icon: Car,
      description: "Car Accessories & Parts",
      color: "text-gray-600",
      bgColor: "bg-gray-50",
      href: "/category/automotive",
    },
    {
      id: "baby-kids",
      name: "Baby & Kids",
      icon: Baby,
      description: "Toys & Baby Products",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      href: "/category/baby-kids",
    },
    {
      id: "books",
      name: "Books & Media",
      icon: BookOpen,
      description: "Books, Movies & Games",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      href: "/category/books",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="section-title text-foreground">Shop by Category</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find exactly what you're looking for in our organized categories
          </p>
        </div>

        {/* Categories grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link key={category.id} to={category.href}>
              <Card className="group hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className={`${category.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className={`h-8 w-8 ${category.color}`} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;