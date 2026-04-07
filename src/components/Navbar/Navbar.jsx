import React from "react";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div>
      {/* upper navbar */}
      <div>
        <div>
          <div>
            <a href="#">
              <img src={Logo} alt="Logo" />
            </a>
          </div>
          {/* Serch bar and order button */}
        </div>
        <div className="group">
          <input
            type="text"
            placeholder="search"
            className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>
      <div>lower Navbar</div>
    </div>
  );
};

export default Navbar;
