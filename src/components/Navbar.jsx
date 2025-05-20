import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import React from "react";
import logo from "../assets/portfolioLogo.png";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-4 sm:py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img
            src={logo}
            className="mx-2 w-[50px] h-[40px] sm:w-[50px] sm:h-[50px]"
          />
        </a>
      </div>
      <div className="m-2 sm:m-8 flex items-center justify-center gap-3  text-xl sm:gap-4 sm:text-2xl ">
        <a
          href="https://linkedin.com/in/mustapha-hamza"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Linkedin"
          className="transition transform hover:scale-110 cursor-pointer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Mustapha-Hamza"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
          className="transition transform hover:scale-110 cursor-pointer"
        >
          <FaGithub />
        </a>
        <a
          href="https://instagram.com/in/mustapha-hamza"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="transition transform hover:scale-110 cursor-pointer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://x.com/Mah__Dev"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="transition transform hover:scale-110 cursor-pointer"
        >
          <FaXTwitter />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
