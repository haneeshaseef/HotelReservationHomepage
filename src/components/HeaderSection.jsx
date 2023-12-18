import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const HeaderSection = () => {
  return (
    <div className="bg-black text-white p-4">
      <nav className="flex justify-between">
        <div className="flex space-x-4 gap-8">
          <button className="hover:text-gray-400 ml-12">ABOUT <FontAwesomeIcon icon={faChevronDown} /></button>
          <button className="hover:text-gray-400">ROOMS & SUITES <FontAwesomeIcon icon={faChevronDown} /></button>
          <button className="hover:text-gray-400">DINING <FontAwesomeIcon icon={faChevronDown} /></button>
          <button className="hover:text-gray-400">EXPERIENCE <FontAwesomeIcon icon={faChevronDown} /></button>
          <button className="hover:text-gray-400">GALLERY</button>
          <button className="hover:text-gray-400">OFFERS <FontAwesomeIcon icon={faChevronDown} /></button>
          <button className="hover:text-gray-400">MORE <FontAwesomeIcon icon={faChevronDown} /></button>
        </div>
        <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200">
          FIND A HOTEL
        </button>
      </nav>
    </div>
  );
};

export default HeaderSection;
