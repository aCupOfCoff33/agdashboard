import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";        // ← NEW
import logo from "../assets/logo.png";
import profile from "../assets/profile.png";
import Container from "./Container.jsx";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="w-full border-b border-gray-200 bg-white">
      <Container className="flex items-center py-3">
        {/* left group: logo + links */}
        <div className="flex items-center space-x-8">
          <Link to="/">
            <img src={logo} alt="American Global" className="h-8 w-auto" />
          </Link>

          {/* desktop links */}
          <div className="hidden md:flex items-center space-x-6">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className="text-sm font-medium text-gray-600 hover:text-gray-900"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* spacer pushes profile to far right */}
        <div className="flex-1" />

        {/* right group: profile + hamburger */}
        <div className="flex items-center space-x-4">
          <img
            src={profile}
            alt="Profile"
            className="h-9 w-9 rounded-full object-cover"
          />
          <button
            className="md:hidden"
            aria-label="Toggle navigation"
            onClick={() => setOpen(!open)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </Container>

      {/* mobile dropdown */}
      {open && (
        <Container className="border-t border-gray-200 pb-4 md:hidden">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              onClick={() => setOpen(false)}          // ← close menu
              className="block py-2 text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              {l.label}
            </Link>
          ))}
        </Container>
      )}
    </nav>
  );
}
