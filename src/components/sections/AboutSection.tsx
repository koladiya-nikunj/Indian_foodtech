import AboutContent from './about/AboutContent';
import MissionVision from './about/MissionVision';
import CompanyValues from './about/CompanyValues';

const AboutSection = () => {
  return (
    <section id="about-us" className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="md:text-3xl text-2xl font-bold text-center mb-8">About Us</h2>
        <div className="max-w-4xl mx-auto">
          <AboutContent />
          <MissionVision />
          <CompanyValues />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;