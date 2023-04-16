import React, {useState} from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { images } from "../constants";

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleClick = () => setNav(!nav)
  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
    <div className="px-2 flex justify-between items-center w-full h-full">
      <div className="flex items-center flex-grow">
        <img src={images.logo} alt="logo" className="w-30 mt-auto" />
        <ul className="hidden md:flex ml-auto">
          <li>Home</li>
          <li>About</li>
          <li>Support</li>
          <li>NewsLetter</li>
          <li>The Team</li>
        </ul>
          <div className="hidden md:flex pr-4">
            <button className="py-3 px-4 text-black mr-4 bg-green-800">Contact Us</button>
          </div>
        </div>
        <div className="flex-shrink-0 md:hidden cursor-pointer" onClick={handleClick}>
            {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
         
        </div>
      </div>

      <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
        <li className="border-b-2 border-zinc-300 w-full">Home</li>
        <li className="border-b-2 border-zinc-300 w-full">About</li>
        <li className="border-b-2 border-zinc-300 w-full">Support</li>
        <li className="border-b-2 border-zinc-300 w-full">NewsLetter</li>
        <li className="border-b-2 border-zinc-300 w-full">The Team</li>
        <div className="flex flex-col my-4">
            <button className="bg-transparent py-3 px-4 mb-4 text-indigo-600 mr-4 hover:bg-green-800 hover:text-white">Contact Us</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
