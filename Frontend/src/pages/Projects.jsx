import React, { useEffect, useRef, useState } from "react";
import easymed from "../assets/EasyMed.png";
import ossean from "../assets/Ossean.png";
import backgroundImage from "../assets/Background.jpg";
import osseanVideo from "../assets/osseanVideo.mp4";
import EasyMedVideo from "../assets/EasyMedVideo.mp4";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "EasyMed",
      video: EasyMedVideo,
      tech: ["React.js", "Express.js", "JWT", "MongoDB", "Multer", "Cloudinary"],
      description:
        "EasyMed is an online platform that allows patients to book doctor appointments and helps doctors manage their schedules securely. It supports safe logins, role-based access, and smooth handling of multiple users."
    },
    {
      id: 2,
      title: "Ossean",
      video: osseanVideo,
      tech: ["React.js", "Express.js", "JWT", "MongoDB", "GitHub API", "Google Auth"],
      description:
        "Ossean is a platform that helps developers discover high-quality and trending open-source projects in one place. Users can explore repositories based on popularity and relevance, making it easier to find projects worth contributing to."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const projectRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = projectRefs.current.indexOf(entry.target);
            if (index !== -1) setActiveIndex(index);
          }
        });
      },
      { threshold: 0.6 }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const activeProject = projects[activeIndex];

  return (
    <div
      id="projects"
      className="bg-black mt-10 sm:mt-10 lg:mt-20 rounded-4xl reveal"
    >
      {/* TITLE */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl px-6 sm:px-10 lg:px-15 py-10 lg:py-15 font-bold text-white">
        MY PROJECTS
      </h1>

      {/* DESKTOP LAYOUT */}
      <div className="hidden lg:grid grid-cols-[1fr_2fr] min-h-screen">
        {/* LEFT */}
        <div className="sticky top-24 h-fit p-12">
          <h2 className="text-5xl font-bold text-[#a29e9a]">
            {activeProject.title}
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl">
            {activeProject.description}
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col space-y-32 p-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="h-[100vh] flex flex-col justify-center gap-4"
            >
              <div
                ref={(el) => (projectRefs.current[index] = el)}
                className={`flex-1 transition-opacity duration-300 ${
                  activeIndex === index ? "opacity-100" : "opacity-40"
                }`}
              >
                <div className="w-full h-full relative overflow-hidden rounded-2xl">
                  <img
                    src={backgroundImage}
                    alt="background"
                    className="absolute inset-0 w-full h-full object-cover blur-sm scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30" />

                  <div className="relative z-10  flex items-center justify-center p-12">
                    <div className="relative z-10 h-full flex items-center justify-center p-3">
  <div className="w-full max-w-full aspect-video flex items-center justify-center">
    <video
      src={project.video}
      muted
      autoPlay
      loop
      playsInline
      className="w-full object-contain bg-black rounded-lg"
    />
  </div>
</div>

                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full text-sm text-gray-200
                    bg-white/10 border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MOBILE LAYOUT */}
      <div className="lg:hidden px-4 pb-8 space-y-20">
        {projects.map((project, index) => (
          <div key={project.id} className="space-y-6">
            {/* TITLE */}
            <h2 className="text-3xl font-bold text-[#a29e9a]">
              {project.title}
            </h2>

            {/* DESCRIPTION */}
            <p className="text-sm text-gray-400">
              {project.description}
            </p>

            {/* MEDIA (reduced height) */}
            <div className="relative h-[220px] rounded-xl overflow-hidden">
              <img
                src={backgroundImage}
                alt="background"
                className="absolute inset-0 w-full h-full object-cover blur-sm scale-110"
              />
              <div className="absolute inset-0 bg-black/30" />

              <div className="relative z-10  flex-col items-center justify-center p-3">
               <div className="relative z-10 h-full flex items-center justify-center p-3">
  <div className="w-full max-w-full aspect-video flex items-center justify-center">
    <video
      src={project.video}
      muted
      autoPlay
      loop
      playsInline
      className="w-full object-contain bg-black rounded-lg"
    />
  </div>
</div>

              </div>
            </div>

            {/* TECH STACK */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full text-xs text-gray-200
                  bg-white/10 border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
