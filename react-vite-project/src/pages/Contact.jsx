import { useState } from "react";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "contact",
          ...formData,
        }).toString(),
      });

      if (response.ok) {
        // Simulate form submission
        setIsSubmitted(true);
        // Clear form inputs
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      alert(`${error}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-b from-black via-purple-900 to-black w-full">
      <h2 className="text-4xl font-bold py-8 text-white">Get in touch!</h2>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-white p-14 mb-8 rounded-3xl shadow-lg "
      >
        {/* Hidden input for Netlify form submission */}
        <input type="hidden" name="form-name" value="contact" />
        <h2 className="dark:text-black mb-8">Contact Form</h2>
        <div className="flex justify-between p-6 flex-col">
          <div>
            <label className="block mb-4">
              <span className="text-gray-700">Your Name</span>

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-black"
                required
              />
            </label>

            <label className="block mb-4">
              <span className="text-gray-700">Email</span>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-black"
                required
              />
            </label>
          </div>

          <label className="block mb-4">
            <span className="text-gray-700">Message</span>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Message"
              className="mt-1 h-[10rem] block w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-black"
              required
            ></textarea>
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition-colors"
        >
          Send Message
        </button>
      </form>

      {isSubmitted && <p className="mt-4 text-green-500">Message sent!</p>}
    </div>
  );
}
