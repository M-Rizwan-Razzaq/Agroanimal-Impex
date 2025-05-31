import React, { useEffect, useRef, useState } from "react";
// import logo from "../../assest/agri_logo.png";
// import logo from "./images/logo.jpeg";
import "./Navbar.css";
import { RiMenu2Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { IoChevronDownOutline } from "react-icons/io5";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menu, setMenu] = useState(false);
  const [More, setMore] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 30);
    setMore(false);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  const toggleMenuBar = () => {
    setMenu(!menu);
  };

  const hideNavItems = () => {
    setMenu(false);
  };

  return (
    <div
      className={`w-[100%] max-w-[2600px]  h-[60px] responsive-header pl-6 pr-20 ${
        isScrolled ? "scrolled" : "no-scrolled"
      } 
      }   ${menu ? "bg-white max-h-max" : ""} fixed top-0 z-10`}
    >
     <header className="h-full w-full box-border flex justify-between items-center px-4 md:px-8">
  {/* Logo & Heading Container */}
  <div className="flex items-center gap-2 md:gap-4">
    <img
      style={{ cursor: "pointer" }}
      onClick={() => {}}
      src="./agrologo.png"
      alt="Logo"
      className={`scale-95 ${
        isMobile ? "w-[50px] h-[40px]" : "w-[70px] h-[55px]"
      }`}
    />
  <h2
  className={`text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold leading-tight max-w-[250px] sm:max-w-none break-words ${
    isScrolled ? "text-black" : "text-white"
  }`}
>
  AGROANIMAL IMPEX PRIVATE LIMITED
</h2>
  </div>

  {/* Mobile Menu Icons */}
  {isMobile && menu ? (
    <RxCross2
      cursor="pointer"
      color={isScrolled ? "black" : "white"}
      size={25}
      onClick={toggleMenuBar}
    />
  ) : (
    isMobile && (
      <RiMenu2Fill
        cursor="pointer"
        size={25}
        color={isScrolled ? "black" : "white"}
        onClick={toggleMenuBar}
      />
    )
  )}

  {/* Navigation Links */}
  <ul
    onClick={hideNavItems}
    className={`${
      isMobile
        ? `flex flex-col gap-2 nav-bg py-3 w-full absolute h-max top-[50px] ${
            !menu ? "-right-[100%]" : "right-0 transition-all .5s ease-in"
          } items-center text-lg cursor-pointer`
        : `flex justify-between items-center gap-6 md:gap-10 nav-text ${
            isScrolled ? "text-black" : "text-white"
          }`
    }`}
  >
    <Link to="/" className={`${isScrolled ? "nav-item" : "nav-item-hover"}`}>
      Home
    </Link>
    {/* <Link to="/blog" className={`${isScrolled ? "nav-item" : "nav-item-hover"}`}>
      Blog
    </Link> */}
    <Link to="/projects" className={`${isScrolled ? "nav-item" : "nav-item-hover"}`}>
      Products
    </Link>
    <Link to="/aboutus" className={`${isScrolled ? "nav-item" : "nav-item-hover"}`}>
      About
    </Link>
    <Link to="/contactUs" className={`${isScrolled ? "nav-item" : "nav-item-hover"}`}>
      Contact Us
    </Link>

    {/* More Dropdown */}
    <li className="relative group">
      <Link
        to="#"
        className={`${isScrolled ? "nav-item" : "nav-item-hover"} ${
          isMobile ? "hidden" : ""
        }`}
        onClick={() => setMore(!More)}
      >
        More
        <IoChevronDownOutline
          size={17}
          className={`md:inline-block ${More ? "rotate-nav-icon" : ""}`}
        />
      </Link>

      {/* Dropdown Menu */}
      <ul
        className={`${
          isMobile
            ? "flex flex-col text-black items-center gap-2"
            : `absolute ${
                More ? "block" : "hidden"
              } max-w-max whitespace-nowrap space-y-2 py-2 px-4 -right-14 rounded`
        } ${!isScrolled && !isMobile ? "no-scrolled" : "bg-white text-black"}`}
        onClick={() => setMore(false)}
      >
        <li>
          <Link to="/gallery" className={`${isScrolled ? "nav-item" : "nav-item-hover"}`}>
            Gallery
          </Link>
        </li>
        <li>
          <Link to="/partnership" className={`${isScrolled ? "nav-item" : "nav-item-hover"}`}>
            Partners
          </Link>
        </li>
        <li>
          <Link to="/involved" className={`${isScrolled ? "nav-item" : "nav-item-hover"}`}>
            Involved
          </Link>
        </li>
        <li>
          <Link to="/presskit" className={`${isScrolled ? "nav-item" : "nav-item-hover"}`}>
            Certificate
          </Link>
        </li>
        <li>
          <Link to="/successstories" className={`${isScrolled ? "nav-item" : "nav-item-hover"}`}>
            Impact
          </Link>
        </li>
        <li>
          <Link to="/ourapproach" className={`${isScrolled ? "nav-item" : "nav-item-hover"}`}>
            Our Approach
          </Link>
        </li>
        <li>
          <Link to="/faq" className={`${isScrolled ? "nav-item" : "nav-item-hover"}`}>
            FAQ
          </Link>
        </li>
      </ul>
    </li>
  </ul>
</header>

    </div>
  );
};

export default Navbar;
