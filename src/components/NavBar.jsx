import { useState } from 'react';
import CartWidget from './CartWidget';
import Logo from './Logo';
import { FaFire } from "react-icons/fa";


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#dedede] border-gray-200 shadow-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Logo/>
          <span className="self-center text-xl font-bold whitespace-nowrap text-[#242424]">
            [Tecno] e-Comerce
          </span>
        </a>
        <button
          onClick={toggleMenu}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className={`w-full md:block md:w-auto ${isOpen ? 'block' : 'hidden'}`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-[#f0f0f0] md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-[#f0f0f0]  dark:border-gray-700">
            <li>
              <a
                href="#"
                className=" flex flex-row  py-4 px-3 text-gray-900  hover:bg-slate-600 rounded hover:text-white  md:dark:text-black"
                aria-current="page"
              >
                Ofertas
                <FaFire/>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-4 px-3 text-gray-900  hover:bg-slate-600 rounded hover:text-white  md:dark:text-black"
              >
                Tecnologia
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-4 px-3 text-gray-900  hover:bg-slate-600 rounded hover:text-white  md:dark:text-black"
              >
                Celulares
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-4 px-3 text-gray-900  hover:bg-slate-600 rounded hover:text-white  md:dark:text-black"
              >
                ElectroHogar
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 "
              >
                <CartWidget/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
