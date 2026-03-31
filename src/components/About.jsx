import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Coffee, Award, Clock } from 'lucide-react';

const About = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section id="about" ref={containerRef} className="py-24 bg-coffee-900 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <div className="relative h-[600px] rounded-sm overflow-hidden group">
            <div className="absolute inset-0 bg-coffee-900/40 group-hover:bg-transparent transition-colors duration-700 z-10" />
            <motion.img
              style={{ y: imgY }}
              src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1600&auto=format&fit=crop"
              alt="Experienced barista craft-brewing a fresh cup of coffee in a cozy modern cafe"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-[120%] object-cover scale-110"
            />
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-gold-500 z-20" />
            <div className="absolute top-10 right-10 bg-coffee-900 p-6 z-20 shadow-2xl">
              <span className="font-heading text-4xl text-gold-500">15+</span>
              <p className="text-coffee-200 text-sm tracking-widest uppercase">Years<br/>Brewing</p>
            </div>
          </div>

          {/* Text Side */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-gold-500 tracking-[0.2em] uppercase text-sm font-medium mb-4">Our Story</h2>
              <h3 className="text-4xl md:text-5xl font-heading text-white mb-8 leading-tight">
                Crafting the perfect <br />cup since 2010
              </h3>
              <p className="text-coffee-200 mb-6 font-light leading-relaxed">
                At Aura Cafe, we believe that coffee is more than just a beverage; it's a ritual, a moment of pause, and a catalyst for connection. Our journey began with a simple passion for ethically sourced, perfectly roasted beans.
              </p>
              <p className="text-coffee-200 mb-10 font-light leading-relaxed">
                Every cup we serve is a testament to our dedication to the craft, bringing you flavors from the world's finest coffee-growing regions right to your table.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 bg-coffee-800 rounded-full text-gold-500">
                    <Coffee size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-lg mb-1">Premium Bean Selection</h4>
                    <p className="text-coffee-400 text-sm">We source only the top 1% of Arabica beans globally.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 bg-coffee-800 rounded-full text-gold-500">
                    <Award size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-lg mb-1">Award-Winning Baristas</h4>
                    <p className="text-coffee-400 text-sm">Our team comprises passionate experts in latte art and brewing methods.</p>
                  </div>
                </div>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-10 px-8 py-3 bg-gold-500 text-coffee-900 font-medium uppercase tracking-widest text-sm hover:bg-gold-400 transition-colors"
              >
                Learn More
              </motion.button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
