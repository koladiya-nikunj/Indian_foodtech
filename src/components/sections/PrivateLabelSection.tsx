import PrivateLabelProcess from "./PrivareLabelProcess";

const PrivateLabelSection = () => {
  return (
    <section id="private-label" className="py-8 bg-amber-50">
      <div className="mx-auto text-center container">
        <h2 className="md:text-3xl text-2xl font-bold text-center mb-8">Private Label</h2>
      </div>
      <div className="container mx-auto px-4">
        <p className="text-gray-600 max-w-[890px] mx-auto text-left">
          Private Label Process: At Indian Foodtech, we offer a comprehensive
          private labeling service that helps you bring your brand’s nut butter
          and spreads to life. We collaborate with retailers, importers, and
          distributors to create customized products that meet specific market
          preferences and regulatory standards.
          <br />
          <br />
          Here’s how our <a className="font-bold">private labeling process</a> works:
        </p>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <PrivateLabelProcess />
        </div>
      </div>
    </section>
  );
};

export default PrivateLabelSection;
