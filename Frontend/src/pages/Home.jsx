import React from "react";
import { Download, Mail } from "lucide-react";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen reveal px-6 sm:px-10 lg:px-20 flex flex-col  justify-center"
    >
      {/* BIG NAME */}
      <h1
        className="font-bold leading-none
        text-[3.5rem]
        sm:text-[5rem]
        md:text-[8.5rem]
        lg:text-[8.5rem]
        mb-16"
      >
        ROHIT SHARMA
      </h1>

      {/* BOTTOM CONTENT */}
      <div className="flex flex-col lg:flex-row justify-between gap-16">

        {/* LEFT CONTENT */}
        <div className="max-w-md">
          <p className="text-neutral-600 text-2xl lg:font-bold sm:text-lg leading-relaxed">
            Computer Science student and aspiring software engineer building
            scalable web applications with clean, thoughtful code.
          </p>

          {/* CTA */}
          <div className="flex gap-6 mt-8">
            <a
              href="/Rohit_Sharma_Resume(Branch).pdf"
              download
              className="px-6 py-3 rounded-full bg-black text-white font-semibold flex items-center gap-2 transition-all duration-300 ease-out
hover:scale-[1.05]
hover:shadow-lg
active:scale-[0.97]"
            >
              Resume <Download size={18} />
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-full bg-black text-white font-semibold flex items-center gap-2 transition-all duration-300 ease-out
hover:scale-[1.05]
hover:shadow-lg
active:scale-[0.97]"
            >
              Hire me <Mail size={18} />
            </a>
          </div>
        </div>

        {/* RIGHT STATEMENT */}
        <div className="text-right self-end">
          <h2 className="font-bold text-neutral-600 leading-tight
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
          >
            TURN IDEAS
            <br />
            INTO DIGITAL
            <br />
            PRODUCTS.
          </h2>
        </div>

      </div>
    </section>
  );
};

export default Home;
