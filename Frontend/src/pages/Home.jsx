import React from "react";
import { Download, Mail } from "lucide-react";

const Home = () => {
  return (
    <div
      id="home"
      className="reveal px-4 min-h-screen flex flex-col justify-center"
    >
      {/* TEXT SECTION */}
      <div className="flex flex-col items-center text-center">
        <h1
          className="font-bold
          text-5xl
          mb-10
          lg:mb-4
          sm:text-7xl
          md:text-8xl
          lg:text-9xl
          "
        >
          ROHIT SHARMA
        </h1>

        <h1 className="font-bold text-neutral-600 text-xl sm:text-3xl md:text-4xl">
          Turning ideas into
        </h1>
        <h1 className="font-bold text-neutral-600 text-xl sm:text-3xl md:text-4xl">
          Digital
        </h1>
        <h1 className="font-bold text-neutral-600 text-xl sm:text-3xl md:text-4xl">
          Products and Experiences.
        </h1>
      </div>

      {/* BUTTONS */}
      <div className="flex justify-center gap-6 sm:gap-10 mt-10">
        <a
          href="/Rohit_Sharma_Resume(Branch).pdf"
          download
          className="px-5 py-3 flex items-center gap-2 rounded-full
          bg-black text-white text-base sm:text-xl font-semibold"
        >
          Resume
          <Download size={20} />
        </a>

        <a
          href="#contact"
          className="px-5 py-3 flex items-center gap-2 rounded-full
          bg-black text-white text-base sm:text-xl font-semibold"
        >
          Hire me
          <Mail size={20} />
        </a>
      </div>
    </div>
  );
};

export default Home;
