import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Coffee } from 'lucide-react';

const Loader = ({ setLoading }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return Math.min(oldProgress + 5, 100);
      });
    }, 40);

    return () => clearInterval(timer);
  }, [setLoading]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-coffee-900"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, y: -50, transition: { duration: 0.8, ease: "easeInOut" } }}
      >
        <div className="relative flex flex-col items-center">
          <motion.div
            animate={{ 
              y: [0, -10, 0],
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="mb-8"
          >
            <Coffee size={64} className="text-coffee-400" />
            
            {/* Steam animation */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex gap-2">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -20],
                    opacity: [0, 0.5, 0],
                    scale: [1, 1.2, 1.5]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeOut"
                  }}
                  className="w-1.5 h-6 bg-coffee-400/50 rounded-full blur-sm"
                />
              ))}
            </div>
          </motion.div>

          {/* Progress fill text */}
          <div className="text-3xl font-heading text-coffee-100 tracking-wider">
            Brewing... {progress}%
          </div>
          
          {/* Progress bar container */}
          <div className="w-64 h-1 mt-6 bg-coffee-800 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gold-500"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear" }}
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;
