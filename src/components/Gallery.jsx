import { motion } from 'framer-motion';

const images = [
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511081692775-05d0f180a065?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhZmV8ZW58MHx8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_photo-1674327105074-46dd8319164b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNhZmV8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1481833761820-0509d3217039?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhZmV8ZW58MHx8MHx8fDA%3D"
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-coffee-900">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-gold-500 tracking-[0.2em] uppercase text-sm font-medium mb-4"
            >
              Atmosphere
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-heading text-white"
            >
              The Experience
            </motion.h3>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-6 md:mt-0"
          >
            <p className="text-coffee-200 max-w-sm text-right font-light italic">
              "A space designed to inspire, comfort, and stimulate the senses."
            </p>
          </motion.div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-2xl overflow-hidden group break-inside-avoid"
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-colors duration-500 z-10" />
              <motion.img 
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.8 }}
                src={src} 
                alt={`Premium aesthetic cafe atmosphere view ${index + 1}`} 
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-white border border-white px-6 py-2 uppercase tracking-widest text-xs">
                  View
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
