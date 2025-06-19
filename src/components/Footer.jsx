// src/components/Footer.jsx
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";        // American Global logo
import Container from "./Container.jsx";

export default function Footer() {
  return (
    <footer className="bg-[#F3F6FB] text-gray-700">
      <Container className="py-8">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between sm:items-center">
          {/* Logo + brand text */}
          <div className="flex flex-col items-center sm:flex-row sm:items-center gap-4">
            <img src={logo} alt="American Global" className="h-12 w-auto" />
            <p className="text-sm font-semibold text-center sm:text-left">
              © {new Date().getFullYear()} American Global
            </p>
          </div>

          {/* Primary site links */}
          <div className="flex flex-col items-center sm:flex-row gap-4 sm:gap-10 text-sm font-medium">
            <Link to="/" className="hover:text-primary-700">
              Home
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
