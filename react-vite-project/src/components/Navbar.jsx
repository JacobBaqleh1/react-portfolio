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
            className={({ isActive }) =>
              isActive ? "underline underline-offset-4" : ""
            }
          >
            Home
          </NavLink>,
          <NavLink
            key={2}
            to="/about"
            className={({ isActive }) =>
              isActive ? "underline underline-offset-4" : ""
            }
          >
            About
          </NavLink>,
          <NavLink
            key={3}
            to="/contact"
            className={({ isActive }) =>
              isActive ? "underline underline-offset-4" : ""
            }
          >
            Contact
          </NavLink>,
          <NavLink
            key={3}
            to="/portfolio"
            className={({ isActive }) =>
              isActive ? "underline underline-offset-4" : ""
            }
          >
            Portfolio
          </NavLink>,
          <NavLink
            key={4}
            to="/resume"
            className={({ isActive }) =>
              isActive ? "underline underline-offset-4" : ""
            }
          >
            Resume
          </NavLink>,
        ]}
      />
    </div>
  );
}
