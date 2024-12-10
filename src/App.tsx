import Header from './components/Header';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import HomeSection from './components/sections/HomeSection';
import AboutSection from './components/sections/AboutSection';
import PrivateLabelSection from './components/sections/PrivateLabelSection';
import NutButterSection from './components/sections/NutButterSection';
import MediaSection from './components/sections/MediaSection';
import ContactSection from './components/sections/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="mt-16">
        <Carousel />
      </div>
      <HomeSection />
      <AboutSection />
      <PrivateLabelSection />
      <NutButterSection />
      <MediaSection />
      <ContactSection />
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default App;