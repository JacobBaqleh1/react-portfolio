export default function Resume() {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-black shadow-md rounded-lg">
      <a
        href="https://docs.google.com/document/d/195AvrlirLO5I4azVCqhBSHNJfZjufHL4AgjB0XPJ9WY/edit?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
        className="block text-center text-blue-300 hover:text-blue-700 font-semibold mb-6"
      >
        Download Resume (PDF)
      </a>

      <h2 className="text-2xl font-bold text-gray-100 mb-4">Frontend Skills</h2>
      <ul className="list-disc list-inside mb-8">
        <li className="text-gray-100">HTML</li>
        <li className="text-gray-100">CSS</li>
        <li className="text-gray-100">JavaScript</li>
        <li className="text-gray-100">React</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-100 mb-4">Backend Skills</h2>
      <ul className="list-disc list-inside">
        <li className="text-gray-100">Node.js</li>
        <li className="text-gray-100">Express</li>
      </ul>
    </div>
  );
}
