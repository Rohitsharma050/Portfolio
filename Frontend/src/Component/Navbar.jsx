import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="px-6 sm:px-10 pt-6 relative z-50">
      <div className="flex items-center justify-between">
        {/* LOGO */}
        <h2 className="text-3xl font-semibold">R</h2>

        {/* DESKTOP MENU */}
        <ul className="hidden sm:flex gap-6 pt-3">
          {["Home", "Projects", "About", "Achievements", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-sm font-medium text-gray-600 hover:text-black transition"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* MOBILE BUTTON */}
        <button
          className="sm:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU (OVERLAY) */}
      {open && (
        <div className="sm:hidden absolute top-full left-0 w-full bg-white shadow-lg rounded-b-xl py-6">
          <ul className="flex flex-col items-center gap-6">
            {["Home", "Projects", "About", "DSA Stats", "Achievements", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-base font-medium text-gray-700"
                  onClick={() => setOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
