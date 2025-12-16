import React, { useState } from "react";
import logo from "../assets/Frontend_Assets/logo.png";
import cart_icon from "../assets/Frontend_Assets/cart_icon.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState("shop");

  return (
    <div className="flex items-center justify-between px-8 py-4 shadow-md bg-white">
      <div className="flex items-center gap-3">
        <img src={logo} alt="" className="w-12 h-12" />
        <p className="text-2xl font-bold text-gray-800 tracking-wide">
          SHOPPER
        </p>
      </div>
      <ul className="flex items-center gap-12 text-gray-700 font-medium text-lg">
        <li
          onClick={() => setMenuOpen("shop")}
          className={`cursor-pointer transition-colors duration-300 ${
            menuOpen === "shop" ? "text-orange-500" : "hover:text-orange-500"
          }`}
        >
          Shop
        </li>
        <li
          onClick={() => setMenuOpen("men")}
          className={`cursor-pointer transition-colors duration-300 ${
            menuOpen === "men" ? "text-orange-500" : "hover:text-orange-500"
          }`}
        >
          Men
        </li>
        <li
          onClick={() => setMenuOpen("women")}
          className={`cursor-pointer transition-colors duration-300 ${
            menuOpen === "women" ? "text-orange-500" : "hover:text-orange-500"
          }`}
        >
          Women
        </li>
        <li
          onClick={() => setMenuOpen("kids")}
          className={`cursor-pointer transition-colors duration-300 ${
            menuOpen === "kids" ? "text-orange-500" : "hover:text-orange-500"
          }`}
        >
          Kids
        </li>
      </ul>
      <div className="flex items-center gap-6">
        <button className="px-8 py-2 border-2 border-gray-700 rounded-full text-gray-700 font-medium hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300">
          Login
        </button>
        <img
          src={cart_icon}
          alt="Cart Icon"
          className="w-8 h-8 cursor-pointer hover:scale-110 transition-transform duration-300"
        />
      </div>
    </div>
  );
};

export default Navbar;
