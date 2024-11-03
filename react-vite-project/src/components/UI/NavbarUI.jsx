import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
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
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to="/">Home</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/about">About</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/contact">Contact</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/portfolio">Portfolio</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/resume">Resume</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}
