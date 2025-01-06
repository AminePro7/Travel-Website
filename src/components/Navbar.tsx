import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-secondary/80 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <a href="/" className="flex flex-col items-end">
              <span className="text-2xl font-bold text-white font-heading">
                الجرز الفضي
              </span>
              <span className="text-sm text-accent/90 font-body">
                للسياحة والسفر
              </span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-6"
            >
              <a href="#home" className="text-white hover:text-accent transition-colors font-body">
                الرئيسية
              </a>
              <a href="#offers" className="text-white hover:text-accent transition-colors font-body">
                العروض
              </a>
              <a href="#destinations" className="text-white hover:text-accent transition-colors font-body">
                الوجهات
              </a>
              <a href="#about" className="text-white hover:text-accent transition-colors font-body">
                من نحن
              </a>
              <a href="#contact" className="text-white hover:text-accent transition-colors font-body">
                اتصل بنا
              </a>
            </motion.div>
            
            <motion.button
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-accent hover:bg-accent-dark text-white px-6 py-2 rounded-xl transition-all duration-300 transform hover:scale-105 font-body"
            >
              احجز الآن
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-accent transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-secondary/95 backdrop-blur-lg"
          >
            <div className="px-4 py-6 space-y-4">
              <a href="#home" className="block text-white hover:text-accent transition-colors font-body">
                الرئيسية
              </a>
              <a href="#offers" className="block text-white hover:text-accent transition-colors font-body">
                العروض
              </a>
              <a href="#destinations" className="block text-white hover:text-accent transition-colors font-body">
                الوجهات
              </a>
              <a href="#about" className="block text-white hover:text-accent transition-colors font-body">
                من نحن
              </a>
              <a href="#contact" className="block text-white hover:text-accent transition-colors font-body">
                اتصل بنا
              </a>
              <button className="w-full bg-accent hover:bg-accent-dark text-white px-6 py-2 rounded-xl transition-all duration-300 font-body">
                احجز الآن
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;