export default function About() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#324154] px-4">
      <div className="bg-white/90 rounded-3xl shadow-2xl max-w-3xl w-full p-10 flex flex-col items-center border-4 border-blue-400">
        <h1 className="text-4xl font-extrabold text-blue-900 mb-6 tracking-tight text-center">
          About Me
        </h1>
        <img
          className="w-36 h-36 rounded-full mb-6 border-4 border-blue-300 shadow-lg"
          src="/profilePic.jpg"
          alt="profile"
        />
        <p className="text-lg text-gray-800 leading-relaxed text-center mb-2">
          Started off teaching myself how to code webpages with HTML, CSS, and Javascript. Later I attended a 6 month bootcamp where I learned about connecting a website to a database and a personal server.
        </p>
        <p className="text-lg text-gray-800 leading-relaxed text-center mb-2">

        </p>
      </div>
    </div>
  );
}
