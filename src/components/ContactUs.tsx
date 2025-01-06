import { Mail, MapPin, Phone, Clock, Send } from "lucide-react";
import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: Phone,
    title: "اتصل بنا",
    details: [
      { label: "الهاتف", value: "+966 50 123 4567", href: "tel:+966501234567" },
      { label: "الواتساب", value: "+966 50 123 4567", href: "https://wa.me/966501234567" }
    ]
  },
  {
    icon: Mail,
    title: "راسلنا",
    details: [
      { label: "البريد الإلكتروني", value: "info@silvermuse.com", href: "mailto:info@silvermuse.com" },
      { label: "الدعم الفني", value: "support@silvermuse.com", href: "mailto:support@silvermuse.com" }
    ]
  },
  {
    icon: MapPin,
    title: "موقعنا",
    details: [
      { label: "العنوان", value: "الرياض، المملكة العربية السعودية", href: "#" },
      { label: "الرمز البريدي", value: "12345", href: "#" }
    ]
  },
  {
    icon: Clock,
    title: "ساعات العمل",
    details: [
      { label: "أيام العمل", value: "السبت - الخميس", href: "#" },
      { label: "الأوقات", value: "9:00 صباحاً - 6:00 مساءً", href: "#" }
    ]
  }
];

const ContactUs = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-secondary-light to-secondary relative overflow-hidden" dir="rtl">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/patterns/grid.png')] opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-4 font-heading"
          >
            تواصل
            <span className="text-accent"> معنا</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-300 text-lg max-w-2xl mx-auto font-body"
          >
            نحن هنا لمساعدتك في تخطيط رحلتك المثالية. تواصل معنا وسنرد عليك في أقرب وقت ممكن
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-lg p-8 rounded-3xl"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white mb-2 font-body">الاسم</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent font-body"
                    placeholder="أدخل اسمك"
                  />
                </div>
                <div>
                  <label className="block text-white mb-2 font-body">البريد الإلكتروني</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent font-body"
                    placeholder="أدخل بريدك الإلكتروني"
                  />
                </div>
              </div>
              <div>
                <label className="block text-white mb-2 font-body">الموضوع</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent font-body"
                  placeholder="موضوع الرسالة"
                />
              </div>
              <div>
                <label className="block text-white mb-2 font-body">الرسالة</label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none font-body"
                  placeholder="اكتب رسالتك هنا..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-accent hover:bg-accent-dark text-white px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 font-body"
              >
                <Send className="w-5 h-5" />
                إرسال الرسالة
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                  <info.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 font-heading">{info.title}</h3>
                <div className="space-y-3">
                  {info.details.map((detail, idx) => (
                    <a
                      key={idx}
                      href={detail.href}
                      className="block text-gray-300 hover:text-accent transition-colors duration-300 font-body"
                    >
                      <span className="text-sm text-gray-400">{detail.label}:</span>
                      <br />
                      {detail.value}
                    </a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-white/5 backdrop-blur-lg p-2 rounded-3xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.674754711131!2d46.675391776121416!3d24.713552146895193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f0e0c0b0b0b0b%3A0x0!2sRiyadh%2C%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-2xl"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;