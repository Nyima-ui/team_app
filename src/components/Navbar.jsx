import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({
  logo,
  hambugColor,
  bgColor,
  textColor,
  buttonBg,
  buttonTextColor,
}) => {
  const [isMenuOpen, setisMenuOpen] = useState(false); 
  const toggleMenu = () => {
    setisMenuOpen(!isMenuOpen); 
  }
  return (
    <header>
      <nav className="flex items-center justify-between z-30 pt-7 relative border-white md:max-w-6xl md:mx-auto md:pt-9"
           aria-label="Main navigation">
        <Link to="/" aria-label="Go to home page">
          <img src={logo} alt="This is company logo. You can navigate to home page." />
        </Link>
        <input type="checkbox" id="menu-toggle" className="hidden peer" />
        <label
          htmlFor="menu-toggle"
          className={`p-3 bg-transparent transition-all duration-200 ${
            bgColor === "bg-bg-nav"
              ? "peer-checked:bg-bg-nav"
              : "peer-checked:bg-bg-nav-light"
          } rounded-t-md md:hidden`}
          aria-controls="main-menu"
          aria-expanded={isMenuOpen}
          onClick={() => toggleMenu()}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <span className="sr-only">Toggle navigation menu</span>
          <i
            className={`${hambugColor} fa-solid fa-bars-staggered text-2xl`}
            aria-hidden="true"
          ></i>
        </label>
        <ul id="main-menu"
          className={`${bgColor} ${textColor} absolute left-0 top-full w-full h-0 overflow-hidden z-30 peer-checked:h-68 transition-height duration-200 rounded-b-md rounded-tl-md space-y-5 px-10 text-sm font-semibold 
        md:relative md:h-auto md:flex md:items-center md:w-auto md:bg-transparent md:space-y-0 md:px-1`}
        >
          <li className="mt-8 md:mt-0">
            <Link to="#" className="md:px-4 md:py-3">
              Product
            </Link>
          </li>
          <li>
            <Link
              to="/blogposts"
              className="md:px-4 md:py-3 transition-colors duration-100 ease-in "
            >
              Blog
            </Link>
          </li>
          <li>
            <Link to="/" className="md:px-4 md:py-3">
              Home
            </Link>
          </li>
          <li>
            <Link to="#" className="md:px-4 md:py-3">
              Log in
            </Link>
          </li>
          <li
            className={`${buttonBg} inline-block px-3.5 py-3 md:px-5 rounded-md md:rounded-sm border-1 border-transparent cursor-pointer hover:bg-white/40 transition-all hover:border-sky-300 hover:border-1 duration-200 ease-in`}
          >
            <Link to="#" className={`${buttonTextColor}`}>
              Get Access
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

