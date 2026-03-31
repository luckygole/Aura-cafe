import { motion } from 'framer-motion';

const Special = () => {
  return (
    <section className="relative py-32 bg-fixed bg-center bg-cover flex items-center justify-center text-center" 
      style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2000&auto=format&fit=crop")' }}
      aria-label="Today's Special Background highlighting Ethiopian Yirgacheffe coffee">
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />
      
      <div className="relative z-10 container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border border-gold-500/30 p-12 md:p-16 glass-dark rounded-xl"
        >
          <span className="text-gold-500 tracking-[0.3em] uppercase text-sm font-medium mb-6 block">Today's Special</span>
          <h3 className="text-4xl md:text-6xl font-heading text-white mb-6">Ethiopian Yirgacheffe</h3>
          <p className="text-coffee-100 text-lg mb-8 max-w-2xl mx-auto font-light leading-relaxed">
            Experience bright acidity, floral notes, and a tea-like body. Carefully hand-poured to order using our premium V60 drippers to ensure a clean, complex cup of morning perfection.
          </p>
          <p className="text-gold-500 text-2xl font-heading mb-8">Only $6.50</p>
          
          <button className="px-8 py-3 bg-white text-coffee-900 font-medium uppercase tracking-widest text-sm hover:bg-gold-500 hover:text-white transition-colors duration-300">
            Order Now
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Special;
