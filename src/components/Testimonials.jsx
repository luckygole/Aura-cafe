import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "The best pour-over I've had in the city. The atmosphere is perfect for deep work or catching up with friends.",
    author: "Sarah Jenkins",
    role: "Local Artist"
  },
  {
    text: "Their Ethiopian Yirgacheffe is life-changing. I find myself here every morning before heading to the office.",
    author: "Marcus West",
    role: "Software Engineer"
  },
  {
    text: "Impeccable service, stunning interior design, and coffee that speaks for itself. Aura is a hidden gem.",
    author: "Elena Rossi",
    role: "Food Critic"
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-coffee-800">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <Quote className="mx-auto text-gold-500/30 w-16 h-16 mb-8" />
        
        <div className="relative h-64 md:h-48 overflow-hidden">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ 
                opacity: index === current ? 1 : 0,
                x: index === current ? 0 : -50,
                pointerEvents: index === current ? "auto" : "none"
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <p className="text-xl md:text-3xl text-coffee-100 font-heading leading-relaxed mb-8 italic text-center px-4">
                "{testimonial.text}"
              </p>
              <div>
                <span className="block text-gold-500 font-medium uppercase tracking-[0.2em] text-sm">
                  {testimonial.author}
                </span>
                <span className="block text-coffee-400 text-xs tracking-wider mt-1">
                  {testimonial.role}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? 'w-8 bg-gold-500' : 'bg-coffee-600 hover:bg-coffee-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
