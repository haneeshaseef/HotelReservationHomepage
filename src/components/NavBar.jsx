import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignIn, faGlobe } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
      <img src={logo} alt="hotel_logo" width="100" height="50" className="ml-12" />
      </div>
      <div className="flex">
        <button className="text-black px-4 py-2 border-r flex items-center">
          <FontAwesomeIcon icon={faSignIn} className="mr-2" />
          Sign In
        </button>
        <button className="text-black px-4 py-2 border-r flex items-center">
          Join Now
        </button>
        <button className="text-black px-4 py-2 border-r flex items-center">
          Find Riservation
        </button>
        <button className="text-black px-4 py-2 border-r flex items-center">
          <FontAwesomeIcon icon={faGlobe} className="mr-2" />
          English
        </button>
        <button className="text-black px-4 py-2 flex items-center">LKR</button>
      </div>
    </div>
  );
};

export default NavBar;
