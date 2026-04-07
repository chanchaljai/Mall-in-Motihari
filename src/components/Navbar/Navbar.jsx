import React from "react";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div>
      {/* upper navbar */}
      <div className="container flex justify-between items-center">
        <div>
          <div>
            <a className="font-bold text-2xl sm:text-3xl flex gap-2" href="#">
              <img src={Logo} alt="Logo" className="w-10" />
              Mall-in-Motihari
            </a>
          </div>
        </div>
        {/* Serch bar and order button */}
        <div className="group">
          <input
            type="text"
            placeholder="search"
            className="w-[200px] sm:w-[200px] 
            group-hover:w-[300px] transition-all
            duration-300 rounded-full 
            border border-gray-300 px-4 py-2
            focus:outline-none focus:border-orange-500"
          />
        </div>
      </div>
      <div>lower Navbar working</div>
    </div>
  );
};

export default Navbar;
