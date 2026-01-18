import React from "react";

const Footer = () => {
  return (
    <div className="px-6 sm:px-10 lg:px-30 py-8 sm:py-12 lg:py-15">
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-4 justify-between items-center sm:items-start">

        {/* LEFT */}
        <div className="flex flex-col gap-2 text-center sm:text-left">
          <h1 className="text-sm text-neutral-600">
            &copy; 2026 All right reserved
          </h1>
          <h1 className="text-sm text-neutral-600">
            Email : rohitsharmasa120111@gmail.com
          </h1>
        </div>

        {/* CENTER */}
        <h1 className="text-sm text-neutral-600">45</h1>

        {/* RIGHT */}
        <div className="flex gap-4">
          <a
            href="https://github.com/Rohitsharma050"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-neutral-600"
          >
            Github /
          </a>
          <a
            href="https://www.linkedin.com/in/rohitsharma50/"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-neutral-600"
          >
            Linkedin /
          </a>
          <a
            href="https://leetcode.com/u/Rohitsharma50/"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-neutral-600"
          >
            Leetcode /
          </a>
        </div>

      </div>
    </div>
  );
};

export default Footer;
