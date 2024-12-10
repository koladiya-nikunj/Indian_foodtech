import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    // Reset form data after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto space-y-6 border-2 border-amber-400 rounded-lg p-8 bg-white shadow-lg"
    >
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Inquiry Form</h2>
      </div>

      <div>
        <label htmlFor="name" className="block text-gray-700 mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-gray-700 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
          required
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-gray-700 mb-2">
          Message
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 h-32"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-amber-600 text-white py-2 px-4 rounded-lg hover:bg-amber-700 transition-colors"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
