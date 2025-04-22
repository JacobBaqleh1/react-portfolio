import { NavLink } from "react-router-dom";
import NavbarUI from "./UI/NavbarUI";

export default function Navbar() {
  return (
    <div className="max-w-[1000px]">
      <NavbarUI
        links={[
          <NavLink
            key={1}
            to="/"
            className="relative text-gray-800 dark:text-white before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-gradient-to-r before:from-blue-400 before:to-blue-600 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100"
          >
            Home
          </NavLink>,
          <NavLink
            key={2}
            to="/about"
            className="relative text-gray-800 dark:text-white before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-gradient-to-r before:from-blue-400 before:to-blue-600 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100"
          >
            About
          </NavLink>,
          <NavLink
            key={3}
            to="/contact"
            className="relative text-gray-800 dark:text-white before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-gradient-to-r before:from-blue-400 before:to-blue-600 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100"
          >
            Contact
          </NavLink>,
          <a
            key={4}
            href="/#projects"
            className="relative text-gray-800 dark:text-white before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-gradient-to-r before:from-blue-400 before:to-blue-600 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100"
          >
            Projects
          </a>,
        ]}
      />
    </div>
  );
}
