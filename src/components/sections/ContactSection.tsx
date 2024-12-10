import ContactForm from '../ContactForm';

const ContactSection = () => {
  return (
    <section id="contact-us" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;