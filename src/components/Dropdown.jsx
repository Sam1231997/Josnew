import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        
      >
       <img src="/images/arrow.png" className="h-2 w-3 mt-2" />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg">
          <Link to="/nowij" className="block px-4 py-2 text-green-800 hover:bg-gray-100">Current</Link>
          <Link to="/upcoming" className="block px-4 py-2 text-green-800 hover:bg-gray-100">Upcoming</Link>
         
        </div>
      )}
    </div>
  );
};

export default Dropdown;
