import { useState } from "react";
import logo from '../assets/logo.png';

const texts = {
  li1: 'Who we are',
  li2: 'What we do',
  li3: 'Why choose us',
  li4: 'Join us'
}

export const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="bg-black text-white p-4">
        <div className="grid grid-cols-3 items-center">
          <div>
            <img src={logo} alt="Logo" className="h-16" />
          </div>

          <div className="col-span-2 flex justify-end md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 5h18v2H3V5zm0 6h18v2H3v-2zm0 6h18v2H3v-2z"
                />
              </svg>
            </button>
          </div>

          <ul className={`md:flex md:space-x-6 md:justify-around ${showMenu ? 'block' : 'hidden'}`}>
            <li><a href="#" className="hover:underline">{texts.li1}</a></li>
            <li><a href="#" className="hover:underline">{texts.li2}</a></li>
            <li><a href="#" className="hover:underline">{texts.li3}</a></li>
            <li><a href="#" className="hover:underline">{texts.li4}</a></li>
          </ul>
        </div>
      </nav>
  )
}