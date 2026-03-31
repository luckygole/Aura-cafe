import { useState } from 'react';
import CustomCursor from './components/CustomCursor';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Special from './components/Special';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="bg-coffee-900 min-h-screen text-coffee-50 selection:bg-gold-500/30 selection:text-gold-500">
      <CustomCursor />
      {loading ? (
        <Loader setLoading={setLoading} />
      ) : (
        <>
          <Navbar />
          <Hero />
          <About />
          <Menu />
          <Special />
          <Gallery />
          <Testimonials />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
