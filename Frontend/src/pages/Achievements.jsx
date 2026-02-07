import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Medal, Trophy, Star, Sparkles, X, ExternalLink, GraduationCap, Code2, ChevronDown, CheckCircle, ArrowUpRight } from "lucide-react";

// Certification Data - Easy to add more later
const certificationsData = [
  {
    name: "SQL (Intermediate)",
    issuer: "HackerRank",
    date: "2024",
    link: "https://www.hackerrank.com/certificates/",
    icon: Code2,
  },
  {
    name: "Introduction to MongoDB",
    issuer: "MongoDB University",
    date: "2024",
    link: "https://university.mongodb.com/",
    icon: Award,
  },
  {
    name: "Programming Foundations: Data Structures",
    issuer: "LinkedIn Learning",
    date: "2024",
    link: "https://www.linkedin.com/learning/",
    icon: Star,
  },
  {
    name: "Problem Solving (Intermediate)",
    issuer: "HackerRank",
    date: "2024",
    link: "https://www.hackerrank.com/certificates/",
    icon: CheckCircle,
  },
];

// Certification Mini Card Component
const CertificationCard = ({ cert, index }) => {
  return (
    <motion.a
      href={cert.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ scale: 1.03, y: -5 }}
      className="bg-neutral-800 rounded-2xl p-5 border border-neutral-700 hover:border-neutral-500 transition-all duration-300 group cursor-pointer"
    >
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/15 transition-colors">
          <cert.icon size={22} className="text-white" />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h4 className="text-white font-semibold text-sm lg:text-base mb-1 line-clamp-2 group-hover:text-neutral-200">
            {cert.name}
          </h4>
          <p className="text-neutral-400 text-xs lg:text-sm">
            {cert.issuer}
          </p>
          <div className="flex items-center justify-between mt-3">
            <span className="text-neutral-500 text-xs">{cert.date}</span>
            <div className="flex items-center gap-1 text-neutral-500 group-hover:text-white transition-colors text-xs">
              <span>Verify</span>
              <ExternalLink size={12} />
            </div>
          </div>
        </div>
      </div>
    </motion.a>
  );
};

// Expandable Certifications Section
const CertificationsExpandable = ({ isExpanded, onToggle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="md:col-span-2 lg:col-span-3"
    >
      {/* Main Certifications Card */}
      <motion.div
        onClick={onToggle}
        className="bg-black rounded-3xl p-6 lg:p-8 cursor-pointer group relative overflow-hidden"
        whileHover={{ scale: isExpanded ? 1 : 1.01 }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
              <Award size={28} className="text-white" />
            </div>
            <div>
              <span className="text-neutral-500 text-xs">Professional</span>
              <h3 className="text-2xl lg:text-3xl font-bold text-white">
                Certifications
              </h3>
              <p className="text-neutral-400 text-sm mt-1">
                {certificationsData.length}+ Industry-recognized certifications
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:block px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium">
              {certificationsData.length} Certificates
            </span>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/15 transition-colors"
            >
              <ChevronDown size={20} className="text-white" />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Expanded Certifications Grid */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {certificationsData.map((cert, index) => (
                <CertificationCard key={index} cert={cert} index={index} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Modal Preview Component
const PreviewModal = ({ achievement, onClose }) => {
  if (!achievement) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="relative bg-neutral-900 rounded-2xl p-8 max-w-lg w-full border border-neutral-800"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-neutral-700 transition-colors"
          >
            <X size={20} className="text-white" />
          </button>

          <div className="w-16 h-16 rounded-2xl bg-neutral-800 flex items-center justify-center mb-6">
            <achievement.icon size={28} className="text-neutral-300" />
          </div>

          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 bg-white/10 text-neutral-300">
            {achievement.category}
          </span>
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            {achievement.title}
          </h2>
          <p className="text-neutral-400 mb-4">{achievement.fullDescription}</p>
          
          {/* Bullet Points for Ranks */}
          {achievement.ranks && (
            <ul className="space-y-2 mb-6">
              {achievement.ranks.map((rank, index) => (
                <li key={index} className="flex items-start gap-3 text-neutral-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0"></span>
                  <span className="text-sm">{rank}</span>
                </li>
              ))}
            </ul>
          )}
          
          <p className="text-neutral-600 text-sm">{achievement.year}</p>

          {achievement.link && (
            <a
              href={achievement.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 mt-6 px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition-colors"
            >
              View Certificate <ExternalLink size={16} />
            </a>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const Achievements = () => {
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const [isCertExpanded, setIsCertExpanded] = useState(false);

  const achievements = [
    {
      title: "Core Subjects",
      description: "Strong foundation in Computer Science fundamentals.",
      fullDescription:
        "Built solid understanding of Data Structures, Algorithms, OOPs, DBMS, Operating Systems, and Web Development through academic coursework.",
      category: "Academic",
      icon: GraduationCap,
      year: "2024",
    },
    {
      title: "Competitive Programming Ranks",
      description: "Global rankings across coding platforms.",
      fullDescription: "Top competitive programming achievements across multiple platforms:",
      ranks: [
        "Global Rank 199 — LeetCode Weekly Contest 460",
        "Global Rank 830 — CodeChef Starters",
        "Knight Rating (1900+) — LeetCode",
        "2★ Rating — CodeChef",
        "Pupil Rating — Codeforces",
      ],
      category: "Milestone",
      icon: Trophy,
      year: "2024–2025",
    },
    {
      title: "800+ DSA Problems",
      description: "Solved across LeetCode, GFG, CodeChef, Codeforces.",
      fullDescription:
        "Completed over 800 carefully selected DSA problems across multiple platforms, building a strong foundation in algorithmic thinking and optimization.",
      category: "Milestone",
      icon: Code2,
      year: "2024",
    },
  ];

  const statsOverview = [
    { icon: Award, value: `${certificationsData.length}+`, label: "Certifications" },
    { icon: Medal, value: "3+", label: "Major Projects" },
    { icon: Star, value: "800+", label: "DSA Problems" },
    { icon: Sparkles, value: "Top 4%", label: "LeetCode Rank" },
  ];

  return (
    <section id="achievements" className="py-20 lg:py-32 reveal">
      {/* Section Header */}
      <div className="px-6 sm:px-10 lg:px-15 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8"
        >
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-4">
              ACHIEVEMENTS
            </h1>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-500">
              & MILESTONES
            </h2>
            <p className="mt-6 text-neutral-600 max-w-xl text-lg">
              A showcase of my academic achievements, technical certifications,
              and professional milestones throughout my journey.
            </p>
          </div>

          {/* Stats Overview Pills */}
          <div className="flex flex-wrap gap-3">
            {statsOverview.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 px-5 py-3 rounded-full bg-black text-white"
              >
                <stat.icon size={18} className="text-neutral-400" />
                <span className="font-bold">{stat.value}</span>
                <span className="text-neutral-400 text-sm hidden sm:inline">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bento Grid */}
      <div className="px-6 sm:px-10 lg:px-15">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

          {/* Featured Card - Core Subjects (Large) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onClick={() => setSelectedAchievement(achievements[0])}
            className="md:col-span-2 lg:col-span-1 lg:row-span-2 bg-black rounded-3xl p-8 relative overflow-hidden cursor-pointer group min-h-[360px]"
          >
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-48 h-48 opacity-5">
              <GraduationCap size={192} className="text-white" />
            </div>

            <div className="relative z-10 h-full flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs bg-white/10 text-neutral-300">
                  {achievements[0].category}
                </span>
                <ArrowUpRight size={20} className="text-neutral-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>

              <div className="flex-1 flex flex-col justify-end">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-4">
                  <GraduationCap size={28} className="text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">
                  {achievements[0].title}
                </h3>
                <p className="text-neutral-400 text-base">
                  {achievements[0].description}
                </p>
                <span className="text-neutral-600 text-sm mt-4">{achievements[0].year}</span>
              </div>
            </div>
          </motion.div>

          {/* Competitive Programming Ranks Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onClick={() => setSelectedAchievement(achievements[1])}
            className="bg-black rounded-3xl p-8 cursor-pointer group min-h-[360px]"
          >
            <div className="h-full flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <Trophy size={22} className="text-white" />
                </div>
                <ArrowUpRight size={18} className="text-neutral-500 group-hover:text-white transition-colors" />
              </div>
              <div className="mt-auto">
                <span className="text-neutral-500 text-xs">{achievements[1].category}</span>
                <h3 className="text-xl font-bold text-white mb-1">
                  {achievements[1].title}
                </h3>
                <p className="text-neutral-400 text-sm">
                  {achievements[1].description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* 800+ DSA Problems Card - Tall with Big Number */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            onClick={() => setSelectedAchievement(achievements[2])}
            className="lg:row-span-2 bg-black rounded-3xl p-6 cursor-pointer group relative overflow-hidden min-h-[360px]"
          >
            <div className="h-full flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs bg-white/10 text-neutral-300">
                  {achievements[2].category}
                </span>
                <ArrowUpRight size={16} className="text-neutral-600 group-hover:text-white transition-colors" />
              </div>

              {/* Big Number */}
              <div className="flex-1 flex items-center justify-center">
                <span className="text-7xl lg:text-8xl font-bold text-white/10 group-hover:text-white/20 transition-colors">
                  800+
                </span>
              </div>

              <div>
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-3">
                  <Code2 size={20} className="text-neutral-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {achievements[2].title}
                </h3>
                <p className="text-neutral-500 text-sm">
                  {achievements[2].description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Expandable Certifications Card */}
          <CertificationsExpandable
            isExpanded={isCertExpanded}
            onToggle={() => setIsCertExpanded(!isCertExpanded)}
          />

        </div>

        {/* Journey Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 bg-black rounded-3xl p-6 sm:p-8"
        >
          <h4 className="text-lg font-semibold text-white mb-6">
            Journey Timeline
          </h4>
          <div className="flex items-center gap-6 sm:gap-8 overflow-x-auto pb-2">
            {["2023", "2024", "2025", "2026"].map((year, index) => (
              <div key={year} className="flex items-center shrink-0">
                <div className={`w-3 h-3 rounded-full ${year === "2026" ? "bg-white" : "bg-neutral-700"}`} />
                <span className={`ml-2 text-sm ${year === "2026" ? "text-white font-medium" : "text-neutral-500"}`}>
                  {year}
                </span>
                {index < 3 && <div className="w-12 sm:w-20 h-px bg-neutral-800 ml-4" />}
              </div>
            ))}
            <span className="text-neutral-600 text-sm shrink-0">Ongoing...</span>
          </div>
        </motion.div>
      </div>

      {/* Preview Modal */}
      {selectedAchievement && (
        <PreviewModal
          achievement={selectedAchievement}
          onClose={() => setSelectedAchievement(null)}
        />
      )}
    </section>
  );
};

export default Achievements;
