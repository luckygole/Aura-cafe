import { motion } from 'framer-motion';

const menuItems = [
  {
    name: 'Espresso',
    description: 'Rich, full-bodied espresso with a perfect crema.',
    price: '$3.50',
    image: 'https://images.unsplash.com/photo-1610889556528-9a770e32642f?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Cappuccino',
    description: 'Equal parts espresso, steamed milk, and milk foam.',
    price: '$4.50',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Pour Over',
    description: 'Single-origin coffee manually brewed to highlight distinct flavor notes.',
    price: '$5.00',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Cold Brew',
    description: 'Steeped for 24 hours for a smooth, sweet, and highly caffeinated finish.',
    price: '$4.50',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Latte Art',
    description: 'Silky microfoam poured over rich espresso.',
    price: '$5.50',
    image: 'https://media.istockphoto.com/id/1717179222/photo/cup-of-mint-tea.webp?a=1&b=1&s=612x612&w=0&k=20&c=YwAqhAaUWuMrWBAex1s3sHUKoNjPBLG8OUU4SSsbno0='
  },
  {
    name: 'Mocha',
    description: 'Espresso with rich chocolate mocha sauce and steamed milk.',
    price: '$5.50',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=800&auto=format&fit=crop'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const Menu = () => {
  return (
    <section id="menu" className="py-24 bg-coffee-800 relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold-500 tracking-[0.2em] uppercase text-sm font-medium mb-4"
          >
            Discover
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading text-white"
          >
            Our Menu
          </motion.h3>
        </div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {menuItems.map((item, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="glass p-4 rounded-xl group hover:border-gold-500/50 transition-colors duration-500"
            >
              <div className="overflow-hidden rounded-lg mb-4 aspect-4/3">
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  src={item.image} 
                  alt={`A beautifully prepared cup of ${item.name}`} 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-2">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-xl font-heading text-white">{item.name}</h4>
                  <span className="text-gold-500 font-medium">{item.price}</span>
                </div>
                <p className="text-coffee-200 text-sm font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-16 text-center">
            <button className="px-8 py-3 border border-coffee-400 text-coffee-100 uppercase tracking-widest text-sm hover:bg-coffee-100 hover:text-coffee-900 transition-colors duration-300">
                View Full Menu
            </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
