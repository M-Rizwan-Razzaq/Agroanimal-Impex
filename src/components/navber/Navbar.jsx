import React, { useEffect, useState } from "react";
import logo from "../../assest/agri_logo.png";
import "./Navbar.css";
import { RiMenu2Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { IoChevronDownOutline } from "react-icons/io5";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 30) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
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
      className={`w-[100%] max-w-[2600px]  h-[60px] responsive-header pl-6 pr-20   ${
        isScrolled ? "scrolled" : "no-scrolled"
      } 
      }   ${menu ? "bg-white" : ""} fixed top-0 z-10`}
    >
      <header className="h-full w-full box-border flex justify-between items-center">
        <img
          style={{ cursor: "pointer" }}
          onClick={() => {}}
          src={logo}
          alt=""
          className={`${
            isMobile ? "w-[75px] h-[40px]" : "w-[150px] h-[100px] logo-img"
          }  `}
        />
        {isMobile && menu && (
          <RxCross2
            cursor="pointer"
            color={isScrolled ? "black" : "white"}
            size={25}
            onClick={toggleMenuBar}
          />
        )}
        {isMobile && !menu && (
          <RiMenu2Fill
            cursor="pointer"
            size={25}
            color={isScrolled ? "black" : "white"}
            onClick={toggleMenuBar}
          />
        )}
       

<ul
  onClick={hideNavItems}
  className={
    isMobile
      ? `flex flex-col gap-5 nav-bg  absolute h-[43vh] top-[50px] ${
          !menu ? "-right-[100%] " : "right-0 left-0"
        } items-center  text-lg cursor-pointer scrolled`
      : `flex justify-between items-center gap-10 nav-text ${
          isScrolled ? "text-[var(--logo-color)]" : "text-white"
        }`
  }
>
  <Link
    to="/"
    className={`${isScrolled ? "nav-item" : "nav-item-hover"} ${
      isMobile ? "mt-4" : ""
    } `}
  >
    Home
  </Link>
  <Link
    to="/aboutus"
    className={`${isScrolled ? "nav-item" : "nav-item-hover"} ${
      isMobile ? "mt-4" : ""
    } `}
  >
  About
  </Link>
  <Link
    to="/blog"
    className={`${isScrolled ? "nav-item" : "nav-item-hover"} ${
      isMobile ? "mt-4" : ""
    } `}
  >
  Blog
  </Link>
  
  <Link
    to="/projects"
    className={`${isScrolled ? "nav-item" : "nav-item-hover"} ${
      isMobile ? "mt-4" : ""
    } `}
  >
    Projects
  </Link>
  <Link
    to="/contactUs"
    className={`${isScrolled ? "nav-item" : "nav-item-hover"} ${
      isMobile ? "mt-4" : ""
    } `}
  >
    Contact us
  </Link>
  <li className="relative group">
    <Link
      to="/"
      className={`${isScrolled ? "nav-item" : "nav-item-hover"} ${
        isMobile ? "mt-4" : ""
      } `}
    >
      More <IoChevronDownOutline size={17} className="inline-block rotate-nav-icon" />
    </Link>
    {/* Dropdown menu for "About Us" */}
    <ul className={`absolute hidden max-w-max ${!isScrolled?"no-scrolled":" bg-white text-black"} whitespace-nowrap  p-2  group-hover:block  space-y-2 py-2 px-4 rounded`}>
      <li>
        <Link to="/faq" className={`${isScrolled ? "nav-item" : "nav-item-hover"}`}>FAQ</Link>
      </li>
      <li>
        <Link to="/involved" className={`${isScrolled ? "nav-item" : "nav-item-hover"}`}>Invloved</Link>
      </li>
      <li>
        <Link to="/partnership" className={`${isScrolled ? "nav-item" : "nav-item-hover"}`}>Patners</Link>
      </li>
      <li>
        <Link to="/ouraproach" className={`${isScrolled ? "nav-item" : "nav-item-hover"}`}>our Aproach</Link>
      </li>
      <li>
        <Link to="/presskit" className={`${isScrolled ? "nav-item" : "nav-item-hover"}`}>press kit</Link>
      </li>
      <li>
        <Link to="/successstories" className={`${isScrolled ? "nav-item" : "nav-item-hover"}`}>Success Stories</Link>
      </li>
      <li>
        <Link to="/service" className={`${isScrolled ? "nav-item" : "nav-item-hover"}`}>Service</Link>
      </li>
      
    
    </ul>
  </li>
   
</ul>
 

      </header>
    </div>
  );
};

export default Navbar;
