import { motion } from 'framer-motion';
import { Coffee } from 'lucide-react';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-12 border-t border-coffee-800">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8 pb-8 border-b border-coffee-800/50">
          
          <Link to="home" smooth={true} duration={800} className="cursor-pointer flex items-center gap-2">
            <Coffee className="text-gold-500 w-6 h-6" />
            <span className="font-heading text-xl font-bold tracking-wider text-coffee-50">
              Aura <span className="font-sans font-light text-coffee-200">Cafe</span>
            </span>
          </Link>

          <div className="flex items-center gap-6">
            <motion.a 
              whileHover={{ scale: 1.2, color: "#d4af37" }}
              href="#" 
              className="text-coffee-400 transition-colors"
            >
              <FaInstagram size={20} />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.2, color: "#d4af37" }}
              href="#" 
              className="text-coffee-400 transition-colors"
            >
              <FaFacebook size={20} />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.2, color: "#d4af37" }}
              href="#" 
              className="text-coffee-400 transition-colors"
            >
              <FaTwitter size={20} />
            </motion.a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light text-coffee-400">
          <p>&copy; {currentYear} Aura Cafe. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gold-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
