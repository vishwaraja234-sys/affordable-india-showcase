import { useState } from "react";
import { Search, ShoppingCart, Menu, X, User, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Link, useNavigate } from "react-router-dom";

interface HeaderProps {
  cartItemsCount?: number;
}

const Header = ({ cartItemsCount = 0 }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const navigationItems = [
    { label: "Electronics", href: "/category/electronics" },
    { label: "Fashion", href: "/category/fashion" },
    { label: "Home & Garden", href: "/category/home-garden" },
    { label: "Sports", href: "/category/sports" },
    { label: "Beauty", href: "/category/beauty" },
    { label: "Deals", href: "/deals" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      {/* Top bar with offers */}
      <div className="bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-2 text-center">
          <p className="text-sm font-medium">
            🎉 Free Shipping on Orders Above ₹999 | Use Code: SAVE50
          </p>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-primary text-primary-foreground rounded-lg p-2">
              <span className="text-xl font-bold font-playfair">AI</span>
            </div>
            <div>
              <h1 className="text-xl font-bold font-playfair text-primary">
                Affordable India
              </h1>
              <p className="text-xs text-muted-foreground">Quality • Affordable • Trusted</p>
            </div>
          </Link>

          {/* Search bar - Desktop */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="Search for products, brands, categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pr-12 py-3 rounded-full border-2 border-muted focus:border-primary"
              />
              <Button
                type="submit"
                size="sm"
                className="absolute right-1 top-1/2 transform -translate-y-1/2 rounded-full"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </form>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            {/* Account */}
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <User className="h-5 w-5 mr-2" />
              Account
            </Button>

            {/* Wishlist */}
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <Heart className="h-5 w-5" />
            </Button>

            {/* Cart */}
            <Link to="/cart">
              <Button variant="outline" size="sm" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartItemsCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs">
                    {cartItemsCount}
                  </Badge>
                )}
              </Button>
            </Link>

            {/* Mobile menu toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile search */}
        <form onSubmit={handleSearch} className="md:hidden mt-4">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pr-12 rounded-full"
            />
            <Button
              type="submit"
              size="sm"
              className="absolute right-1 top-1/2 transform -translate-y-1/2 rounded-full"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </form>
      </div>

      {/* Navigation */}
      <nav className="hidden md:block bg-surface border-t border-border">
        <div className="container mx-auto px-4">
          <ul className="flex items-center space-x-8 py-3">
            {navigationItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="container mx-auto px-4 py-4">
            <ul className="space-y-3">
              {navigationItems.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="block py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-3 border-t border-border">
                <Link
                  to="/account"
                  className="flex items-center py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User className="h-4 w-4 mr-2" />
                  My Account
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;