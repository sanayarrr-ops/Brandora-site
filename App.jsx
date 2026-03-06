import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Work from './components/Work';
import Testimonials from './components/Testimonials';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Work />
        <Testimonials />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
