import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sm:w-[20%] xl:w-[20%] bg-[#E5E9F2] text-[#223A5E] flex-shrink-0">
      <div className="p-8 sm:sticky sm:top-0 sm:h-screen sm:overflow-y-auto">
      <h1 className="font-bold mb-6 sm:mb-16 text-3xl sm:text-4xl text-center sm:text-left"><NavLink to='/'>JACOB BAQLEH</NavLink></h1>
      <p className="hidden sm:block">YOUR HOST</p>
      <div className="flex flex-col sm:flex-col gap-4 items-center sm:items-stretch">
        <div className="overflow-hidden rounded-full sm:rounded-none shrink-0">
          <img
            src="/me.jpg"
            alt="profile pic"
            className="h-32 w-32 object-cover object-top scale-[1.6] sm:w-auto sm:h-30 sm:scale-125 lg:h-[20rem]"
          />
        </div>
        <p className="text-center sm:text-left">
          I&#39;m Jacob Baqleh, a software developer living in Seattle, Washington.{" "}
          Currently learning system design and AI automation.{" "}
          {/* <NavLink to="/about" className="text-red-800">
            More about me.
          </NavLink> */}
        </p>
      </div>
      <div className="flex flex-row justify-center mt-6 sm:mt-0 rounded-full m-auto">
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
    </div>
  );
}
