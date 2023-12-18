import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const ScrollUpButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-5 right-5 bg-blue-500 text-white p-4 rounded-full flex items-center space-x-2"
    >
      <FontAwesomeIcon icon={faArrowUp} className="h-6 w-6" />
      <span>Scroll Up</span>
    </button>
  );
};

export default ScrollUpButton;
