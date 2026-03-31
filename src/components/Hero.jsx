import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-coffee-900 z-10" />
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=2000&auto=format&fit=crop" 
          alt="Barista artistically pouring steamed milk into coffee, showcasing premium roasters"
          fetchpriority="high"
          decoding="async"
          className="w-full h-full object-cover origin-center"
        />
      </div>

      <div className="container relative z-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="mb-4"
        >
          <span className="text-gold-500 tracking-[0.3em] uppercase text-sm font-medium">Premium Roasters</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight drop-shadow-2xl"
        >
          Brewed to <br className="hidden md:block" />
          <span className="italic font-light text-coffee-200">Perfection</span> ☕
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="text-lg md:text-xl text-coffee-100 max-w-2xl mx-auto mb-10 font-light"
        >
          Experience the finest artisanal coffee in an atmosphere designed for comfort, creativity, and connection.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <Link
            to="menu"
            smooth={true}
            offset={-80}
            duration={800}
            className="group relative inline-flex items-center justify-center px-8 py-4 bg-transparent border border-gold-500 text-gold-500 overflow-hidden cursor-pointer rounded-none hover:text-coffee-900 transition-colors duration-300"
          >
            <span className="absolute inset-0 w-full h-full bg-gold-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
            <span className="relative z-10 font-sans tracking-widest uppercase text-sm font-medium">Explore Menu</span>
          </Link>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-widest uppercase text-coffee-200 rotation-90">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="text-gold-500" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
