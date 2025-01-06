import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const features = [
    {
      icon: "",
      title: "دفع آمن",
      description: "طرق دفع متعددة وآمنة"
    },
    {
      icon: "",
      title: "حجز مضمون",
      description: "تأكيد فوري للحجز"
    },
    {
      icon: "",
      title: "دعم 24/7",
      description: "متواجدون دائماً لمساعدتك"
    }
  ];

  const footerLinks = {
    company: [
      { label: "من نحن", href: "#about" },
      { label: "خدماتنا", href: "#services" },
      { label: "الوجهات", href: "#destinations" },
      { label: "اتصل بنا", href: "#contact" }
    ],
    support: [
      { label: "الأسئلة الشائعة", href: "#faq" },
      { label: "سياسة الخصوصية", href: "#privacy" },
      { label: "الشروط والأحكام", href: "#terms" },
      { label: "سياسة الإلغاء", href: "#cancellation" }
    ],
    contact: [
      { icon: <Phone size={20} />, text: "+966 50 123 4567", href: "tel:+966501234567" },
      { icon: <Mail size={20} />, text: "info@silvermuse.com", href: "mailto:info@silvermuse.com" },
      { icon: <MapPin size={20} />, text: "الرياض، المملكة العربية السعودية", href: "#" }
    ]
  };

  return (
    <footer className="bg-secondary pt-16 pb-8 relative overflow-hidden" dir="rtl">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/patterns/grid.png')] opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-secondary-light backdrop-blur-lg rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2 font-heading">{feature.title}</h3>
              <p className="text-gray-300 font-body">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white mb-6 font-heading">
              الجرز الفضي
              <span className="block text-accent">للسياحة والسفر</span>
            </h2>
            <p className="text-gray-300 font-body">
              نقدم لكم أفضل العروض السياحية وأرقى الخدمات لتجربة سفر لا تُنسى
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors duration-300"
              >
                <Facebook size={20} className="text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors duration-300"
              >
                <Twitter size={20} className="text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors duration-300"
              >
                <Instagram size={20} className="text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 font-heading">روابط سريعة</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-accent transition-colors duration-300 font-body"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 font-heading">الدعم</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-accent transition-colors duration-300 font-body"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 font-heading">اتصل بنا</h3>
            <ul className="space-y-4">
              {footerLinks.contact.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href}
                    className="flex items-center space-x-3 space-x-reverse text-gray-300 hover:text-accent transition-colors duration-300 font-body"
                  >
                    <span className="text-accent">{item.icon}</span>
                    <span>{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-white/10 pt-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-bold text-white mb-4 font-heading">اشترك في نشرتنا البريدية</h3>
            <p className="text-gray-300 mb-6 font-body">احصل على أحدث العروض والأخبار مباشرة إلى بريدك الإلكتروني</p>
            <form className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="بريدك الإلكتروني"
                className="flex-1 px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent font-body"
              />
              <button 
                type="submit"
                className="bg-accent hover:bg-accent-dark text-white px-6 py-2 rounded-xl transition-all duration-300 transform hover:scale-105 font-body"
              >
                اشترك
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-12 text-gray-400 font-body">
          <p> {new Date().getFullYear()} الجرز الفضي للسياحة والسفر. جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;