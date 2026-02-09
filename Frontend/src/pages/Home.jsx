import React from "react";
import { Download, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen reveal px-6 sm:px-10 lg:px-20 flex flex-col justify-center"
    >
      {/* Heading */}
      <h1
  className="
    font-bold leading-none lg:text-center
    text-[4.5rem]
    sm:text-[4rem]
    md:text-[8rem]
    lg:text-[9.8rem]
    -mt-10 mb-16
    tracking-[-0.04em]
  "
>
  {["ROHIT", "SHARMA"].map((word, wordIndex) => (
    <span
      key={wordIndex}
      className="block lg:inline-block lg:whitespace-nowrap"
    >
      {word.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: (wordIndex * 5 + i) * 0.05,
            ease: "easeOut",
          }}
          className="inline-block transform transition-transform duration-300 ease-out hover:-translate-y-6"
        >
          {char}
        </motion.span>
      ))}
    </span>
  ))}
</h1>


      <div className="flex flex-col lg:flex-row justify-between gap-16">
        {/* Left Content */}
        <motion.div
          className="max-w-md"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-neutral-600 text-2xl lg:font-bold sm:text-lg leading-relaxed">
            Computer Science student and aspiring software engineer building
            scalable web applications with clean, thoughtful code.
          </p>

          {/* Buttons */}
          <motion.div
            className="flex gap-6 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <motion.a
              href="/Rohit_Sharma_Resume(Branch).pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 rounded-full bg-black text-white font-semibold flex items-center gap-2 transition-all duration-300 ease-out hover:shadow-lg"
            >
              Resume <Download size={18} />
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 rounded-full bg-black text-white font-semibold flex items-center gap-2 transition-all duration-300 ease-out hover:shadow-lg"
            >
              Hire me <Mail size={18} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Text */}
        <motion.div
          className="text-right self-end"
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2
            className="font-bold text-neutral-600 leading-tight
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
          >
            TURN IDEAS
            <br />
            INTO DIGITAL
            <br />
            PRODUCTS.
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
