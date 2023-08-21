import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets/";
import mylogo from "../assets/mylogo.png";

const NavAll = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div
        className="w-full flex justify-between
        items center max-w-7xl
        mx-auto"
      >
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
            //  window will bring you to top of page, test this
          }}
        >
          <div className="img-container">
            <img className="w-16 h-16 rounded-full" src={mylogo} alt="mylogo" />
          </div>

          <p
            className="text-white text-[18px]
           font-bold cursor-pointer flex"
          >
            Robert Anderson &nbsp;
            <span className="sm:block hidden ">| JS/C# Mastery</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            // Render navigation links with <a> tags for smooth scrolling
            // Clicking on a link with the corresponding anchor ID will scroll to the desired location on the page

            <li
              className={`${
                active === nav.title ? "text-white" : "text-secondary "
              }  hover:text-white text-[18px] font-medium cursor-pointer`}
              key={nav.id}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex-3 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px]
            object-contain cursor pointer"
            onClick={() => setToggle(!toggle)}
          />
          {/*  setToggle is used to update the state (state is defaulted to false - set in our const) so you can open it,
            dont set it to !toggle then it will always be on toggle and you cant play or close it */}

          {/* this is the hidden div for small screens */}
          <div
            className={`${!toggle ? "hidden" : "flex"} 
            p-6 bg-gradient-to-b from-black-100 to-black-200 absolute top-20
             right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl `}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((nav) => (
                // Render navigation links with <a> tags for smooth scrolling
                // Clicking on a link with the corresponding anchor ID will scroll to the desired location on the page

                <li
                  key={nav.id}
                  className={`${
                    active === nav.title ? "text-white" : "text-secondary "
                  }  font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    //settoggle because you want the div to close when you click it
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavAll;
