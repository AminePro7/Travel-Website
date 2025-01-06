import { motion } from "framer-motion";
import { Search, Calendar, MapPin } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

const popularDestinations = [
  { id: 1, name: "دبي", image: "/destinations/دبي الساحرة.jpg" },
  { id: 2, name: "اسطنبول", image: "/destinations/اسطنبول التاريخية.jpg" },
  { id: 3, name: "القاهرة", image: "/destinations/القاهرة الفرعونية.jpg" },
  { id: 4, name: "المالديف", image: "/destinations/maldives.jpg" },
  { id: 5, name: "جورجيا", image: "/destinations/gorgeia.jpg" }
];

const Hero = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDestination, setSelectedDestination] = useState("");

  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-b from-secondary/90 to-secondary">
      {/* Background Video with adjusted opacity */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60 transform scale-105"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>

        {/* Multi-layer overlay for better depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-secondary/50 to-secondary/70" />
        <div className="absolute inset-0 bg-black/20" /> {/* Subtle dark overlay */}
        
        {/* Pattern overlay for texture */}
        <div className="absolute inset-0 bg-[url('/patterns/grid.png')] opacity-20" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center z-10" dir="rtl">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-heading">
            اكتشف العالم معنا
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 font-body">
            رحلات مميزة، خدمات راقية، وذكريات لا تُنسى
          </p>
        </motion.div>

        {/* Search Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-4xl"
        >
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-3xl shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Destination */}
              <div className="relative">
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <MapPin className="h-5 w-5 text-gray-300" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="وجهتك المفضلة"
                  className="w-full pr-10 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-accent transition-all font-body"
                />
              </div>

              {/* Date */}
              <div className="relative">
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <Calendar className="h-5 w-5 text-gray-300" />
                </div>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  placeholderText="تاريخ السفر"
                  className="w-full pr-10 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-accent transition-all font-body"
                />
              </div>

              {/* Search Button */}
              <button className="w-full bg-accent hover:bg-accent-dark text-white py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 font-body">
                <Search className="h-5 w-5" />
                ابحث عن رحلتك
              </button>
            </div>
          </div>
        </motion.div>

        {/* Popular Destinations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8"
        >
          <h3 className="text-gray-200 mb-4 font-body">الوجهات الأكثر شعبية</h3>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {popularDestinations.map((destination) => (
              <button
                key={destination.id}
                onClick={() => setSelectedDestination(destination.name)}
                className={`flex-shrink-0 px-4 py-2 rounded-full border transition-all duration-300 font-body
                  ${selectedDestination === destination.name
                    ? 'bg-accent text-white border-accent'
                    : 'bg-white/10 text-gray-200 border-white/20 hover:bg-accent hover:border-accent'
                  }`}
              >
                {destination.name}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;