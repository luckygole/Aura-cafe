import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-coffee-900 border-t border-coffee-800">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold-500 tracking-[0.2em] uppercase text-sm font-medium mb-4"
            >
              Visit Us
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-heading text-white mb-10"
            >
              Get in Touch
            </motion.h3>

            <div className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-4"
              >
                <div className="p-3 border border-gold-500/30 rounded-lg text-gold-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2 uppercase tracking-wide text-sm">Location</h4>
                  <p className="text-coffee-200 font-light leading-relaxed">
                    124 Brew Avenue<br />
                    Coffee District<br />
                    New York, NY 10012
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-4"
              >
                <div className="p-3 border border-gold-500/30 rounded-lg text-gold-500">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2 uppercase tracking-wide text-sm">Reservation</h4>
                  <p className="text-coffee-200 font-light">+1 (555) 123-4567</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-start gap-4"
              >
                <div className="p-3 border border-gold-500/30 rounded-lg text-gold-500">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2 uppercase tracking-wide text-sm">General Inquiries</h4>
                  <p className="text-coffee-200 font-light">hello@auracafe.com</p>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-12 p-6 bg-coffee-800 rounded-lg border border-coffee-700"
            >
              <h4 className="text-white font-medium mb-4 uppercase tracking-wide text-sm">Opening Hours</h4>
              <div className="flex justify-between text-coffee-200 font-light mb-2">
                <span>Mon - Fri</span>
                <span>7:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between text-coffee-200 font-light mb-2">
                <span>Saturday</span>
                <span>8:00 AM - 9:00 PM</span>
              </div>
              <div className="flex justify-between text-coffee-200 font-light">
                <span>Sunday</span>
                <span>8:00 AM - 6:00 PM</span>
              </div>
            </motion.div>
          </div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-dark p-8 rounded-2xl border-white/5"
          >
            <h4 className="text-2xl font-heading text-white mb-6">Send us a message</h4>
            <form className="space-y-6">
              <div className="group">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-transparent border-b border-coffee-600 py-3 px-2 text-coffee-50 placeholder-coffee-400 focus:outline-none focus:border-gold-500 transition-colors"
                />
              </div>
              <div className="group">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full bg-transparent border-b border-coffee-600 py-3 px-2 text-coffee-50 placeholder-coffee-400 focus:outline-none focus:border-gold-500 transition-colors"
                />
              </div>
              <div className="group">
                <textarea 
                  rows="4"
                  placeholder="Your Message" 
                  className="w-full bg-transparent border-b border-coffee-600 py-3 px-2 text-coffee-50 placeholder-coffee-400 focus:outline-none focus:border-gold-500 transition-colors resize-none"
                />
              </div>
              <button 
                type="button" 
                className="w-full py-4 bg-gold-500 text-coffee-900 font-bold uppercase tracking-widest text-sm hover:bg-gold-400 transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
