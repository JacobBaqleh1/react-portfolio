export default function Footer() {
  return (
    <div className="bg-gray-500 w-full">
      <div className="mx-auto max-w-[900px]">
        <div className="flex flex-col justify-center text-center pt-6 pb-8 md:pl-8 md:justify-start md:text-left">
          <p>Jacob Baqleh</p>
          <div className="flex flex-row justify-center">
            <a
              href="https://github.com/JacobBaqleh1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="../src/assets/github.svg"
                alt="GitHub Icon"
                className="w-8 h-8 m-4"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/jacob-baqleh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="../src/assets/linkedIn.svg"
                alt="Linked in"
                className="w-8 h-8 m-4"
              />
            </a>
            <a
              href="https://x.com/JacobBaqleh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="../src/assets/x.svg" alt="X" className="w-8 h-8 m-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
