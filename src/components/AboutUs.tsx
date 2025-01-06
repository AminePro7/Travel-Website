import { Award, Heart, Map, Users } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    icon: Users,
    value: "10,000+",
    label: "عميل سعيد",
    description: "من مختلف أنحاء العالم"
  },
  {
    icon: Map,
    value: "50+",
    label: "وجهة سياحية",
    description: "حول العالم"
  },
  {
    icon: Award,
    value: "15+",
    label: "سنوات خبرة",
    description: "في مجال السياحة"
  },
  {
    icon: Heart,
    value: "95%",
    label: "نسبة رضا العملاء",
    description: "تقييمات إيجابية"
  }
];

const AboutUs = () => {
  return (
    <section className="py-24 bg-secondary relative overflow-hidden" dir="rtl">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/patterns/grid.png')] opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-white mb-6 font-heading">
              من 
              <span className="text-accent"> نحن</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-body">
              نحن شركة الجرز الفضي للسياحة والسفر، نقدم خدمات سياحية متكاملة بأعلى معايير الجودة. نسعى دائماً لتقديم تجربة سفر فريدة ومميزة لعملائنا.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <p className="text-gray-300 font-body">خبرة تمتد لأكثر من 15 عاماً في مجال السياحة والسفر</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <p className="text-gray-300 font-body">فريق متخصص من المرشدين السياحيين المحترفين</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <p className="text-gray-300 font-body">برامج سياحية متنوعة تناسب جميع الأذواق والميزانيات</p>
              </div>
            </div>
            <button className="bg-accent hover:bg-accent-dark text-white px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 mt-8 font-body">
              اعرف المزيد
            </button>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2 font-heading">{stat.value}</h3>
                <p className="text-lg font-medium text-accent mb-1 font-heading">{stat.label}</p>
                <p className="text-gray-300 text-sm font-body">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;