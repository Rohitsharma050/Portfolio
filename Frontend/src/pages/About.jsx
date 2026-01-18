import React from "react";

const About = () => {
  const skills = [
    "C","C++","Python","Java","HTML","CSS","JavaScript","React",
    "Node.js","Express.js","Tailwind CSS","MongoDB","MySQL",
    "DSA","OOPs","DBMS"
  ];

  return (
    <div id="about" className="my-24 sm:my-32 lg:my-30 reveal">

      {/* TITLE */}
      <h1 className="text-black text-4xl sm:text-5xl lg:text-6xl px-6 sm:px-10 lg:px-15 py-10 lg:py-15 font-bold">
        WHAT I DO
      </h1>

      {/* MAIN GRID */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-4 px-4 sm:px-8 lg:px-15">

        {/* SOFTWARE DEVELOPER */}
        <div className="bg-black w-full rounded-2xl text-white px-6 sm:px-8 lg:px-10 py-8 lg:py-10">
          <h1 className="text-2xl sm:text-3xl font-bold">SOFTWARE</h1>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">DEVELOPER</h1>
          <h1 className="text-3xl sm:text-4xl font-bold pt-2">{'</>'}</h1>

          <p className="text-neutral-300 py-6 text-sm sm:text-base lg:text-lg">
            I am a software developer who enjoys building{" "}
            <span className="text-white text-xl lg:text-2xl">
              clean, scalable, and user-focused
            </span>{" "}
            applications. I like turning ideas into real products by combining thoughtful design with solid engineering.
            <br /><br />
            My focus is on writing maintainable code, solving real-world problems, and continuously improving my skills by building projects and learning modern development practices.
          </p>

          <h1 className="text-white text-xl sm:text-2xl pb-5">SKILLS</h1>

          <div className="flex flex-wrap gap-2 sm:gap-3">
            {skills.map((skill, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full text-sm text-gray-200
                  bg-white/10 backdrop-blur
                  border border-white/10
                  hover:bg-white/20 transition
                  whitespace-nowrap"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* COMPETITIVE PROGRAMMER */}
        <div className="bg-black w-full rounded-2xl text-white px-6 sm:px-8 lg:px-10 py-8 lg:py-10">
          <h1 className="text-2xl sm:text-3xl font-bold">COMPETITIVE</h1>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">PROGRAMMER</h1>
          <h1 className="text-3xl sm:text-4xl font-bold pt-2">{'{ }'}</h1>

          <p className="text-neutral-300 py-6 text-sm sm:text-base lg:text-lg">
            I am a competitive programmer who enjoys solving challenging algorithmic problems and improving problem-solving skills through consistent practice. I focus on writing{" "}
            <span className="text-white text-xl lg:text-2xl">
              efficient solutions, understanding time and space complexity
            </span>{" "}
            and breaking down complex problems into simple, logical steps.
          </p>

          <h1 className="text-white text-xl sm:text-2xl pt-6">ACHIEVEMENTS</h1>

          <ul className="list-disc px-5 py-4 space-y-2">
            <li className="text-neutral-300">
              Solved 800+ DSA problems across multiple competitive programming platforms.
            </li>
            <li className="text-neutral-300">
              Achieved Knight (1907) rating, ranking in the top 4% globally on LeetCode.
            </li>
            <li className="text-neutral-300">
              Earned 2★ (1488) on CodeChef and Pupil (1223) on Codeforces.
            </li>
            <li className="text-neutral-300">
              Secured Global Rank 199 in LeetCode Weekly Contest 460 and Global Rank 830 in CodeChef Starters 213.
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default About;
