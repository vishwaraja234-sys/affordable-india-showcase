import { useState } from "react";
import { Star, Heart, ShoppingCart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  discount?: number;
  isNew?: boolean;
  isBestSeller?: boolean;
  onAddToCart?: (productId: string) => void;
  onToggleWishlist?: (productId: string) => void;
  isInWishlist?: boolean;
}

const ProductCard = ({
  id,
  name,
  price,
  originalPrice,
  image,
  rating,
  reviewCount,
  discount,
  isNew,
  isBestSeller,
  onAddToCart,
  onToggleWishlist,
  isInWishlist = false,
}: ProductCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onAddToCart?.(id);
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onToggleWishlist?.(id);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-3 w-3 ${
          i < Math.floor(rating)
            ? "text-yellow-400 fill-yellow-400"
            : "text-muted-foreground"
        }`}
      />
    ));
  };

  return (
    <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-brand hover:-translate-y-1">
      <div className="relative">
        {/* Product image */}
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={image}
            alt={name}
            className={`w-full h-full object-cover transition-all duration-300 group-hover:scale-105 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setImageLoaded(true)}
            loading="lazy"
          />
          {!imageLoaded && (
            <div className="absolute inset-0 bg-muted animate-pulse" />
          )}
        </div>

        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {isNew && (
            <Badge className="bg-secondary text-secondary-foreground text-xs">
              New
            </Badge>
          )}
          {isBestSeller && (
            <Badge className="bg-primary text-primary-foreground text-xs">
              Best Seller
            </Badge>
          )}
          {discount && discount > 0 && (
            <Badge className="bg-destructive text-destructive-foreground text-xs">
              -{discount}%
            </Badge>
          )}
        </div>

        {/* Quick actions */}
        <div className="absolute top-2 right-2 flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            variant="outline"
            size="sm"
            className="h-8 w-8 p-0 bg-background/90 backdrop-blur-sm"
            onClick={handleToggleWishlist}
          >
            <Heart
              className={`h-4 w-4 ${
                isInWishlist ? "text-red-500 fill-red-500" : "text-muted-foreground"
              }`}
            />
          </Button>
          <Link to={`/product/${id}`}>
            <Button
              variant="outline"
              size="sm"
              className="h-8 w-8 p-0 bg-background/90 backdrop-blur-sm"
            >
              <Eye className="h-4 w-4 text-muted-foreground" />
            </Button>
          </Link>
        </div>

        {/* Quick add to cart */}
        <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            onClick={handleAddToCart}
            className="w-full bg-primary/90 backdrop-blur-sm hover:bg-primary"
            size="sm"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>

      <CardContent className="p-4">
        <Link to={`/product/${id}`} className="block">
          {/* Product name */}
          <h3 className="font-medium text-sm line-clamp-2 mb-2 group-hover:text-primary transition-colors">
            {name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-2">
            <div className="flex">{renderStars(rating)}</div>
            <span className="text-xs text-muted-foreground">
              ({reviewCount})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-primary">
              ₹{price.toLocaleString()}
            </span>
            {originalPrice && originalPrice > price && (
              <span className="text-sm text-muted-foreground line-through">
                ₹{originalPrice.toLocaleString()}
              </span>
            )}
          </div>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ProductCard;