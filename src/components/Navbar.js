import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="px-4 py-4 sticky top-0 flex flex-row items-center uppercase font-extrabold text-purple-200 shadow-md bg-gradient-to-r from-purple-800 to-purple-400">
      <Link to="/" className="flex-shrink-0 mr-4 text-purple-400">
        Star Wars
      </Link>
      {/* to do: active color */}
      <div className="w-full flex flex-row justify-around">
        <Link to="/films">Films</Link>
        <Link to="/characters">Characters</Link>
        <Link to="/favorites" className="text-red-100">
          Favorites
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
