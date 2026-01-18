import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between gap-10 px-10 pt-6">
      <h2 className="text-3xl font-semibold">R</h2>

      <ul className="flex justify-start gap-4 text-">
        <li>
          <a
            className="text-sm font-medium text-gray-600 
"
            href="#home"
          >
            Home
          </a>
        </li>
        <li>
          <a
            className="text-sm font-medium text-gray-600 
"
            href="#projects"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            className="text-sm font-medium text-gray-600 
"
            href="#about"
          >
            About
          </a>
        </li>
        <li>
          <a
            className="text-sm font-medium text-gray-600 
"
            href="#contact"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
