import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import Categories from "@/components/sections/Categories";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import Testimonials from "@/components/sections/Testimonials";
import Newsletter from "@/components/sections/Newsletter";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Affordable India - Quality Products at Affordable Prices</title>
        <meta 
          name="description" 
          content="Discover amazing deals on electronics, fashion, home essentials and more at Affordable India. Quality products with fast shipping across India." 
        />
        <meta 
          name="keywords" 
          content="affordable shopping, online store India, electronics, fashion, home decor, quality products, deals, discounts" 
        />
        <link rel="canonical" href="https://affordableindia.com" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header cartItemsCount={0} />
        
        <main>
          <HeroSection />
          <Categories />
          <FeaturedProducts />
          <Testimonials />
          <Newsletter />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
