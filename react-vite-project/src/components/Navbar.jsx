import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-[#324154]/70 pt-4">
      <div className="text-base sm:text-2xl flex flex-row flex-wrap justify-center sm:justify-start gap-1 sm:gap-4 px-3 sm:pl-5 pt-3 sm:pt-5">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "bg-[#324154] text-white px-3 py-2 rounded-t-md whitespace-nowrap"
              : "px-3 py-2 text-white/70 hover:text-white transition-colors whitespace-nowrap"
          }
        >
          My Projects
        </NavLink>
        <NavLink
          to="/opensource"
          className={({ isActive }) =>
            isActive
              ? "bg-[#324154] text-white px-3 py-2 rounded-t-md whitespace-nowrap"
              : "px-3 py-2 text-white/70 hover:text-white transition-colors whitespace-nowrap"
          }
        >
          Team Projects
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "bg-[#324154] text-white px-3 py-2 rounded-t-md whitespace-nowrap"
              : "px-3 py-2 text-white/70 hover:text-white transition-colors whitespace-nowrap"
          }
        >
          Contact Me
        </NavLink>
        {/*  */}
      </div>
    </div>
  );
}
