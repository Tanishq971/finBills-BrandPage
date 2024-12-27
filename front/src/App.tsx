import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import BusinessImpact from './components/BusinessImpact';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <About />
      <BusinessImpact />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;
