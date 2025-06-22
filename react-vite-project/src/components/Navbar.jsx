import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-[#324154]/70 pt-4">
      <div className="text-2xl flex flex-row justify-start pl-5 pt-5 gap-4  ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "bg-[#324154] text-white px-3 py-2 " : "px-3 py-2 "
          }
        >
          My Projects
        </NavLink>
        <NavLink
          to="/opensource"
          className={({ isActive }) =>
            isActive ? "bg-[#324154] text-white px-3 py-2 " : "px-3 py-2 "
          }
        >
          Open Source Contributions
        </NavLink>
        {/*  */}
      </div>
    </div>
  );
}
