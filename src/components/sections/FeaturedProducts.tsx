import { useState } from "react";
import ProductCard from "@/components/ui/ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  const [wishlist, setWishlist] = useState<string[]>([]);

  // Mock data - in real app, this would come from Shopify API
  const featuredProducts = [
    {
      id: "1",
      name: "Wireless Bluetooth Headphones - Premium Sound Quality",
      price: 2999,
      originalPrice: 4999,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop&crop=center",
      rating: 4.5,
      reviewCount: 128,
      discount: 40,
      isBestSeller: true,
    },
    {
      id: "2",
      name: "Smart Fitness Band with Heart Rate Monitor",
      price: 1599,
      originalPrice: 2499,
      image: "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=400&h=400&fit=crop&crop=center",
      rating: 4.3,
      reviewCount: 89,
      discount: 36,
      isNew: true,
    },
    {
      id: "3",
      name: "Cotton Blend Casual T-Shirt - Comfortable Fit",
      price: 599,
      originalPrice: 999,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&crop=center",
      rating: 4.2,
      reviewCount: 156,
      discount: 40,
    },
    {
      id: "4",
      name: "Stainless Steel Water Bottle - 1 Liter",
      price: 799,
      originalPrice: 1299,
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop&crop=center",
      rating: 4.6,
      reviewCount: 203,
      discount: 38,
      isBestSeller: true,
    },
    {
      id: "5",
      name: "LED Desk Lamp with USB Charging Port",
      price: 1299,
      originalPrice: 1999,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=center",
      rating: 4.4,
      reviewCount: 67,
      discount: 35,
    },
    {
      id: "6",
      name: "Portable Bluetooth Speaker - Waterproof",
      price: 1899,
      originalPrice: 2999,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop&crop=center",
      rating: 4.7,
      reviewCount: 234,
      discount: 37,
      isNew: true,
    },
  ];

  const handleAddToCart = (productId: string) => {
    // In real app, this would add to cart context/store
    console.log("Added to cart:", productId);
  };

  const handleToggleWishlist = (productId: string) => {
    setWishlist(prev => 
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <section className="py-16 bg-surface">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="section-title text-foreground">Featured Products</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of trending products with amazing deals
          </p>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 mb-12">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onAddToCart={handleAddToCart}
              onToggleWishlist={handleToggleWishlist}
              isInWishlist={wishlist.includes(product.id)}
            />
          ))}
        </div>

        {/* View all button */}
        <div className="text-center">
          <Link to="/products">
            <Button size="lg" variant="outline" className="px-8">
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;