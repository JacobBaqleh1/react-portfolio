import { NavLink } from "react-router-dom";

const navLinkClass = ({ isActive }) =>
  isActive
    ? "bg-[#324154] text-white px-4 py-2 rounded-md whitespace-nowrap font-semibold"
    : "px-4 py-2 text-[#223A5E]/75 hover:text-[#223A5E] hover:bg-white/60 rounded-md transition-colors whitespace-nowrap";

const socialLinks = [
  {
    href: "https://github.com/JacobBaqleh1",
    icon: "/github.svg",
    label: "GitHub",
    handle: "jacobbaqleh1",
  },
  {
    href: "https://www.linkedin.com/in/jacob-baqleh",
    icon: "/linkedIn.svg",
    label: "LinkedIn",
    handle: "jacob-baqleh",
  },
  {
    href: "https://x.com/JacobBaqleh",
    icon: "/x.svg",
    label: "X",
    handle: "@jacobbaqleh",
  },
];

export default function Header() {
  return (
    <header className="w-full bg-[#E5E9F2] text-[#223A5E] border-b border-[#324154]/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-5">
        <div className="flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-8">
          <div className="flex items-center gap-4 shrink-0">
            <div className="overflow-hidden rounded-full h-20 w-20 shrink-0">
              <img
                src="/me.jpg"
                alt="Jacob Baqleh"
                className="h-full w-full object-cover object-top scale-[1.6]"
              />
            </div>
            <div>
              <h1 className="font-bold text-2xl sm:text-3xl leading-tight">
                <NavLink to="/" className="hover:text-blue-800 transition-colors">
                  JACOB BAQLEH
                </NavLink>
              </h1>
              <p className="text-sm text-[#223A5E]/70 mt-0.5">YOUR HOST</p>
            </div>
          </div>

          <p className="flex-1 text-sm sm:text-base leading-relaxed text-center lg:text-left">
            I&#39;m Jacob Baqleh, a software developer living in Seattle, Washington.{" "}
            I&#39;m working as a freelancer helping people with fullstack web development.
          </p>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 shrink-0">
            {socialLinks.map(({ href, icon, label, handle }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-blue-800 transition-colors"
              >
                <img src={icon} alt={label} className="w-6 h-6 shrink-0" />
                <span className="text-sm font-medium">{handle}</span>
              </a>
            ))}
          </div>
        </div>

        <nav className="flex flex-wrap justify-center sm:justify-start gap-2 mt-5 pt-4 border-t border-[#324154]/10">
          <NavLink to="/" end className={navLinkClass}>
            Projects
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact Me
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
