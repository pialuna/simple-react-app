import React from "react";

const Navbar = () => {
  return (
    <nav className="px-4 py-4 flex flex-row items-center text-purple-200 shadow-md bg-gradient-to-r from-purple-800 to-purple-400">
      <a href="#" className="flex-shrink-0 mr-4 text-purple-400 font-extrabold">
        STAR WARS
      </a>
      <div className="w-full flex flex-row justify-around">
        <a href="#" className="">
          Films
        </a>
        <a href="#" className="">
          Characters
        </a>
        <a href="#" className="text-red-100">
          Favorites
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
