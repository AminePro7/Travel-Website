import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductGrid from "../components/ProductGrid";
import AboutUs from "../components/AboutUs";
import LatestOffers from "../components/LatestOffers";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ProductGrid />
      <AboutUs />
      <LatestOffers />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Index;