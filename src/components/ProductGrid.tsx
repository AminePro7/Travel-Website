import { motion } from "framer-motion";
import { MapPin, Calendar, Users, Star } from "lucide-react";

const destinations = [
  {
    id: 1,
    title: "دبي الساحرة",
    image: "/destinations/دبي الساحرة.jpg",
    description: "استمتع بتجربة فريدة في مدينة الأحلام والترفيه",
    rating: 4.9,
    reviews: 220,
    price: "3,999",
    duration: "5 أيام",
    startDate: "15 فبراير 2024",
    location: "الإمارات العربية المتحدة",
    features: ["برج خليفة", "دبي مول", "جزيرة النخلة", "المدينة القديمة"]
  },
  {
    id: 2,
    title: "اسطنبول التاريخية",
    image: "/destinations/اسطنبول التاريخية.jpg",
    description: "اكتشف جمال وعراقة المدينة التي تجمع بين الشرق والغرب",
    rating: 4.8,
    reviews: 185,
    price: "2,999",
    duration: "6 أيام",
    startDate: "1 مارس 2024",
    location: "تركيا",
    features: ["آيا صوفيا", "القصر العثماني", "البسفور", "السوق المغطى"]
  },
  {
    id: 3,
    title: "القاهرة الفرعونية",
    image: "/destinations/القاهرة الفرعونية.jpg",
    description: "عش تجربة استثنائية في عاصمة الحضارة الفرعونية",
    rating: 4.7,
    reviews: 156,
    price: "2,499",
    duration: "7 أيام",
    startDate: "20 فبراير 2024",
    location: "مصر",
    features: ["الأهرامات", "المتحف المصري", "خان الخليلي", "نهر النيل"]
  },
  {
    id: 4,
    title: "جزر المالديف الساحرة",
    image: "/destinations/maldives.jpg",
    description: "استمتع بإقامة فاخرة في أجمل جزر العالم",
    rating: 4.9,
    reviews: 198,
    price: "12,999",
    duration: "7 أيام",
    startDate: "1 فبراير 2024",
    location: "المالديف",
    features: ["شواطئ خاصة", "فنادق فاخرة", "رياضات مائية", "غوص"]
  },
  {
    id: 5,
    title: "تركيا الساحرة",
    image: "/destinations/turkey.jpg",
    description: "اكتشف سحر المدن التركية وثقافتها الغنية",
    rating: 4.8,
    reviews: 165,
    price: "7,999",
    duration: "8 أيام",
    startDate: "15 فبراير 2024",
    location: "تركيا",
    features: ["كابادوكيا", "أنطاليا", "طرابزون", "بورصة"]
  },
  {
    id: 6,
    title: "جورجيا الخلابة",
    image: "/destinations/gorgeia.jpg",
    description: "استمتع بالطبيعة الساحرة والمناظر الجبلية الخلابة",
    rating: 4.7,
    reviews: 142,
    price: "5,499",
    duration: "6 أيام",
    startDate: "10 فبراير 2024",
    location: "جورجيا",
    features: ["تبليسي القديمة", "جبال القوقاز", "ينابيع حارة", "قلعة ناريكالا"]
  }
];

const ProductGrid = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-secondary to-secondary-light relative overflow-hidden" dir="rtl">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/patterns/grid.png')] opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4 font-heading">
            وجهات
            <span className="text-accent"> مميزة</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto font-body">
            اكتشف أجمل الوجهات السياحية حول العالم واحجز رحلتك بأفضل الأسعار
          </p>
        </motion.div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-lg rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
            >
              {/* Destination Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-accent/90 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm font-medium">
                  {destination.price} ريال
                </div>
              </div>

              {/* Destination Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-white font-heading">{destination.title}</h3>
                  <div className="flex items-center text-accent">
                    <Star className="w-5 h-5 fill-current" />
                    <span className="ml-1 font-body">{destination.rating}</span>
                  </div>
                </div>

                <p className="text-gray-300 font-body line-clamp-2">{destination.description}</p>

                {/* Details */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center text-gray-300 font-body">
                    <Calendar className="w-4 h-4 text-accent ml-2" />
                    {destination.duration}
                  </div>
                  <div className="flex items-center text-gray-300 font-body">
                    <MapPin className="w-4 h-4 text-accent ml-2" />
                    {destination.location}
                  </div>
                  <div className="flex items-center text-gray-300 font-body">
                    <Users className="w-4 h-4 text-accent ml-2" />
                    {destination.startDate}
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {destination.features.map((feature, index) => (
                    <span 
                      key={index}
                      className="text-sm bg-white/10 text-gray-300 px-3 py-1 rounded-full font-body"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Reviews */}
                <div className="text-sm text-gray-300 font-body">
                  {destination.reviews} تقييم من عملائنا
                </div>

                {/* Book Button */}
                <button className="w-full bg-accent hover:bg-accent-dark text-white py-3 rounded-xl transition-all duration-300 transform hover:scale-105 font-body">
                  احجز الآن
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;