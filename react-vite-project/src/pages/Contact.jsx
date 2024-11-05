export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center p-6">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        className="w-full max-w-md bg-white p-4 rounded shadow-lg"
      >
        {/* Hidden input for Netlify form submission */}
        <input type="hidden" name="form-name" value="contact" />

        <label className="block mb-4">
          <span className="text-gray-700">Name</span>
          <input
            type="text"
            name="name"
            className="mt-1 block w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Email</span>
          <input
            type="email"
            name="email"
            className="mt-1 block w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Message</span>
          <textarea
            name="message"
            rows="4"
            className="mt-1 block w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </label>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition-colors"
        >
          Send
        </button>
      </form>
    </div>
  );
}
