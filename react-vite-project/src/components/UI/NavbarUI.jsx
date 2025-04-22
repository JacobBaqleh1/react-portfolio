import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../UI/dropdown-menu";
import { NavLink } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";
/* eslint-disable react/prop-types */
export default function NavbarUI({ links }) {
  return (
    <nav className="w-full p-4 border-b-2 border-gray-200 mb-4">

      <div className="flex flex-row justify-between items-center  ">
        <h1 className="pl-6 text-center"><NavLink to="/">Jacob Baqleh</NavLink></h1>

        <ul className="hidden md:flex space-x-4">
          {links.map((link) => link)}
        </ul>

        <ModeToggle />
        {/* Dropdown Menu Section */}
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger>
              {/* Dropdown Trigger (e.g., an icon or button) */}
              <button className="p-2 text-2xl float-right ">🍔</button>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "underline underline-offset-4" : ""
                  }
                >
                  About
                </NavLink>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "underline underline-offset-4" : ""
                  }
                >
                  Contact
                </NavLink>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a
                  href="/#projects"
                  className={({ isActive }) =>
                    isActive ? "underline underline-offset-4" : ""
                  }
                >
                  Portfolio
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <NavLink
                  to="/resume"
                  className={({ isActive }) =>
                    isActive ? "underline underline-offset-4" : ""
                  }
                >
                  Resume
                </NavLink>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}
