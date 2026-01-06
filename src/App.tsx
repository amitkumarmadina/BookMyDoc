import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './sections/HeroSection';
import OnlineConsultationSection from './sections/OnlineConsultationSection';
import InClinicSection from './sections/InClinicSection';
import HealthArticlesSection from './sections/HealthArticlesSection';
import TestimonialsSection from './sections/TestimonialsSection';
import AppDownloadSection from './sections/AppDownloadSection';
import HealthAssistantButton from './components/HealthAssistant';
import SearchSection from './components/SearchSection';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <SearchSection/>
        <HeroSection />
        <OnlineConsultationSection />
        <InClinicSection />
        <HealthArticlesSection />
        <TestimonialsSection />
        
      </main>
      <Footer />
      <HealthAssistantButton/>
    </div>
  );
}

export default App;

