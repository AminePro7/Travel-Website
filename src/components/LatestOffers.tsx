import { Calendar, Clock, MapPin, Users, ArrowLeft, Star } from "lucide-react";
import { motion } from "framer-motion";

const offers = [
  {
    id: 1,
    title: "دبي الساحرة",
    description: "استمتع بتجربة فريدة في مدينة الأحلام والترفيه",
    image: "/destinations/دبي الساحرة.jpg",
    duration: "5 أيام / 4 ليالي",
    location: "الإمارات العربية المتحدة",
    price: {
      old: "4,999",
      new: "3,999"
    },
    rating: 4.9,
    reviews: 220,
    startDate: "15 فبراير 2024",
    guests: "2-4 أشخاص"
  },
  {
    id: 2,
    title: "القاهرة الفرعونية",
    description: "عش تجربة استثنائية في عاصمة الحضارة الفرعونية",
    image: "/destinations/القاهرة الفرعونية.jpg",
    duration: "7 أيام / 6 ليالي",
    location: "مصر",
    price: {
      old: "3,499",
      new: "2,499"
    },
    rating: 4.7,
    reviews: 156,
    startDate: "20 فبراير 2024",
    guests: "2-4 أشخاص"
  },
  {
    id: 3,
    title: "اسطنبول التاريخية",
    description: "اكتشف جمال وعراقة المدينة التي تجمع بين الشرق والغرب",
    image: "/destinations/اسطنبول التاريخية.jpg",
    duration: "6 أيام / 5 ليالي",
    location: "تركيا",
    price: {
      old: "3,999",
      new: "2,999"
    },
    rating: 4.8,
    reviews: 185,
    startDate: "1 مارس 2024",
    guests: "2-4 أشخاص"
  }
];

const LatestOffers = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-secondary to-secondary-light relative overflow-hidden" dir="rtl">
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
            أحدث
            <span className="text-accent"> العروض</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-300 text-lg max-w-2xl mx-auto font-body"
          >
            اكتشف أفضل العروض السياحية لدينا واحجز رحلتك القادمة بأسعار منافسة
          </motion.p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-lg rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
            >
              {/* Offer Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={offer.image} 
                  alt={offer.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-accent text-white px-4 py-1 rounded-full text-sm font-medium">
                  عرض خاص
                </div>
              </div>

              {/* Offer Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-white font-heading">{offer.title}</h3>
                  <div className="flex items-center text-accent">
                    <Star className="w-5 h-5 fill-current" />
                    <span className="ml-1 font-body">{offer.rating}</span>
                  </div>
                </div>

                <p className="text-gray-300 font-body">{offer.description}</p>

                {/* Details */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center text-gray-300 font-body">
                    <Clock className="w-4 h-4 text-accent ml-2" />
                    {offer.duration}
                  </div>
                  <div className="flex items-center text-gray-300 font-body">
                    <MapPin className="w-4 h-4 text-accent ml-2" />
                    {offer.location}
                  </div>
                  <div className="flex items-center text-gray-300 font-body">
                    <Calendar className="w-4 h-4 text-accent ml-2" />
                    {offer.startDate}
                  </div>
                  <div className="flex items-center text-gray-300 font-body">
                    <Users className="w-4 h-4 text-accent ml-2" />
                    {offer.guests}
                  </div>
                </div>

                {/* Reviews */}
                <div className="text-sm text-gray-300 font-body">
                  {offer.reviews} تقييم من عملائنا
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div>
                    <span className="text-gray-400 line-through text-sm font-body">{offer.price.old} ريال</span>
                    <div className="text-2xl font-bold text-white font-heading">{offer.price.new} ريال</div>
                  </div>
                  <button className="bg-accent hover:bg-accent-dark text-white px-6 py-2 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2 font-body">
                    احجز الآن
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="bg-white/10 hover:bg-accent text-white px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 font-body">
            عرض جميع العروض
            <ArrowLeft className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default LatestOffers;