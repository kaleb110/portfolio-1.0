// import { hamburger } from "../assets/icons";
import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { navLinks } from "../constants";

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="padding-x py-8 z-10 w-full">
      <nav className="padding-x flex justify-between items-center max-container">
        <h1 className="text-2xl font-bold font-montserrat">Kaleo</h1>
        <ul className="flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="text-lg text-slate-gray">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="relative hidden max-lg:flex">
          {toggleMenu ? (
            <RiCloseLine
              color="#000"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#000"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="flex justify-end items-end flex-col text-end bg-slate-200 p-8 absolute right-0 max-md:top-[20px] top-[40px] mt-4 min-w-[210px] rounded-[5px] shadow-md scale-up-center">
              <ul>
                {navLinks.map((item) => (
                  <li key={item.label} className="my-4 mx-0">
                    <a href={item.href} className="text-lg text-black">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        {/* <div className="max-lg:block hidden">
          <img src={hamburger} alt="hambergur" width={24} height={24} />
        </div> */}
      </nav>
    </header>
  );
};

export default Nav;
