import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NavLink } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";
/* eslint-disable react/prop-types */
export default function NavbarUI({ links }) {
  return (
    <nav className="w-full p-4">
      <div className="flex flex-row justify-between items-center ">
        <h1 className="pl-6">Jacob Baqleh</h1>

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
                  to="/"
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
                <NavLink
                  to="/portfolio"
                  className={({ isActive }) =>
                    isActive ? "underline underline-offset-4" : ""
                  }
                >
                  Portfolio
                </NavLink>
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
