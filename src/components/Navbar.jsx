import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo } from "../assets";


const Navbar = () => {
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
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-[#FCF6ED]" : "bg-transparent"}`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-12 h-12 object-contain' />
          <h1 className='text-[#7F6A97] text-[18px] font-bold cursor-pointer flex '>
            Груминг в Челябинске &nbsp;
            <span className='xl:block hidden'> | Стрижка собак и кошек</span>
          </h1>
        </Link>

        <ul className='flex items-center list-none hidden lg:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-[#ef6c7c]" : "text-[#7F6A97]"
              } ${nav.id === 'contact' ? "nav-contact" : ''} hover:text-[#ef6c7c] text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          <li>
              <div class="wrap">
                <a href="https://t.me/julia_fartygina" target="_blank"><button class="button">Связаться</button></a>
              </div>
          </li>
        </ul>

        <div className='lg:hidden flex flex-1 justify-end items-center w-[30px]'>

          
          <div id="nav-icon2" onClick={(e) => {
            let button = document.getElementById('nav-icon2');
            if (button.classList.contains('open'))
            {
              button.classList.remove('open');
              setToggle(!toggle);
            }
            else
            {
              button.classList.add('open');
              setToggle(!toggle);
            }
            
          }}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
          </div>

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-[#FFDBE0] absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-[#7F6A97]" : "text-[#7F6A97]"
                  }`}
                  
                  onClick={() => {
                    let button = document.getElementById('nav-icon2');
                    button.classList.remove('open');
                    setToggle(!toggle);
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

export default Navbar;
