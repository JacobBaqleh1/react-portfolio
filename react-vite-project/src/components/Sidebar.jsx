import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="p-8 sm:w-[20%] xl:w-[20%] bg-[#E5E9F2] text-[#223A5E] sm:sticky sm:top-0 sm:h-screen">
      <h1 className="font-bold mb-16 text-4xl"><NavLink to='/'>JACOB BAQLEH</NavLink></h1>
      <p className="hidden sm:block">YOUR HOST</p>
      <div className="flex flex-row sm:flex-col gap-4 items-center">
        <div className="overflow-hidden">        <img src="/me.JPEG" alt="profile pic" className="h-40 scale-[2.2] sm:scale-125 sm:h-full " />
        </div>
        <p>
          I&#39;m Jacob Baqleh, a software developer in Portland, Oregon.{" "}
          {/* <NavLink to="/about" className="text-red-800">
            More about me.
          </NavLink> */}
        </p>
      </div>
      <div className="flex flex-row justify-center  rounded-full m-auto">
        <a
          href="https://github.com/JacobBaqleh1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/github.svg"
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
            src="/linkedIn.svg"
            alt="Linked in"
            className="w-8 h-8 m-4"
          />
        </a>
        <a
          href="https://x.com/JacobBaqleh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/x.svg" alt="X" className="w-8 h-8 m-4" />
        </a>
      </div>
    </div>
  );
}
