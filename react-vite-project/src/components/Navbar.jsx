import { Link } from "react-router-dom";
import NavbarUI from "./UI/NavbarUI";
export default function Navbar() {
  return (
    <>
      <NavbarUI
        links={[
          <Link key={1} to="/">
            Home
          </Link>,
          <Link key={2} to="/about">
            About
          </Link>,
          <Link key={3} to="/contact">
            Contact
          </Link>,
          <Link key={4} to="/portfolio">
            Portfolio
          </Link>,
          <Link key={5} to="/resume">
            Resume
          </Link>,
        ]}
      />
    </>
  );
}
