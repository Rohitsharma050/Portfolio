import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code, Trophy, Target, Zap, ExternalLink, ChevronRight, CheckCircle, Award, Calendar } from "lucide-react";

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

// Platform Card Component - Simplified
const PlatformCard = ({ platform, index }) => {
  return (
    <motion.a
      href={platform.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative group"
    >
      <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300">
        <div className="relative p-6 h-full">
          {/* Platform Icon */}
          <div className="relative z-10 flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
              <platform.icon size={24} className="text-neutral-300" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                {platform.name}
              </h3>
              <p className="text-neutral-500 text-sm">{platform.subtitle}</p>
            </div>
          </div>

          {/* Stats */}
          <div className="relative z-10 space-y-2 mb-4">
            {platform.stats.map((stat, i) => (
              <div key={i} className="flex justify-between items-center">
                <span className="text-neutral-400 text-sm">{stat.label}</span>
                <span className="font-bold text-white">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>

          {/* Visit Link */}
          <div className="relative z-10 flex items-center gap-2 text-neutral-500 group-hover:text-white transition-colors duration-300 text-sm">
            <span>View Profile</span>
            <ChevronRight
              size={16}
              className="transform group-hover:translate-x-1 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </motion.a>
  );
};

// Main Stats Orb Component - Simplified
const StatsOrb = ({ value, label, icon: Icon, delay = 0 }) => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay,
      }}
      whileHover={{ y: -5 }}
      className="relative group"
    >
      {/* Main Orb - Simplified */}
      <div className="relative w-40 h-40 lg:w-48 lg:h-48 rounded-full bg-neutral-900 border border-neutral-800 flex flex-col items-center justify-center group-hover:border-neutral-700 transition-all duration-300">
        {/* Inner Ring */}
        <div className="absolute inset-4 rounded-full border border-neutral-800" />

        {/* Icon */}
        <Icon
          size={24}
          className="text-neutral-400 mb-2 group-hover:text-white transition-colors duration-300"
        />

        {/* Value */}
        <span className="text-3xl lg:text-4xl font-bold text-white">
          <AnimatedCounter end={parseInt(value)} suffix={value.includes("+") ? "+" : ""} />
        </span>

        {/* Label */}
        <span className="text-neutral-500 text-xs mt-1 text-center px-2">
          {label}
        </span>
      </div>
    </motion.div>
  );
};

const DSAStats = () => {
  const platforms = [
    {
      name: "LeetCode",
      subtitle: "Knight Badge",
      icon: Trophy,
      link: "https://leetcode.com/u/Rohitsharma50/",
      stats: [
        { label: "Rating", value: "1907" },
        { label: "Global Rank", value: "Top 4%" },
        { label: "Best Contest", value: "Rank 199" },
      ],
    },
    {
      name: "GeeksforGeeks",
      subtitle: "Problem Solver",
      icon: Code,
      link: "https://www.geeksforgeeks.org/profile/rohitsharmrvg7",
      stats: [
        { label: "Problems", value: "200+" },
        { label: "Score", value: "650+" },
        { label: "Institute Rank", value: "Top 10" },
      ],
    },
    {
      name: "CodeChef",
      subtitle: "2★ Coder",
      icon: Award,
      link: "https://www.codechef.com/users/rohitsharma_50",
      stats: [
        { label: "Rating", value: "1550" },
        { label: "Stars", value: "2★" },
        { label: "Best Rank", value: "830" },
      ],
    },
    {
      name: "Codeforces",
      subtitle: "Pupil",
      icon: Target,
      link: "https://codeforces.com/profile/rohitsharma50",
      stats: [
        { label: "Rating", value: "1223" },
        { label: "Rank", value: "Pupil" },
        { label: "Contests", value: "15+" },
      ],
    },
  ];

  const achievements = [
    {
  icon: Trophy,
  title: "Competitive Programming",
  subtitle: "Active Contestant",
  description: "LeetCode & CodeChef contests",
}
,
    {
      icon: Award,
      title: "HackerRank",
      subtitle: "5★ Problem Solving",
      description: "Certified Developer",
    },
    {
      icon: Calendar,
      title: "Contest Participation",
      subtitle: "50+ Contests",
      description: "Weekly & Bi-weekly",
    },
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
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-4">
            DSA & CODING
          </h1>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-500">
            ANALYTICS
          </h2>
          <p className="mt-6 text-neutral-600 max-w-2xl text-lg">
            My journey through competitive programming and data structures,
            tracking progress across multiple platforms and continuous learning.
          </p>
        </motion.div>
      </div>

      {/* Main Stats Dashboard */}
      <div className="px-6 sm:px-10 lg:px-15">
        <div className="bg-black rounded-3xl p-8 lg:p-12 relative overflow-hidden">
          {/* Stats Orbs Row */}
          <div className="relative z-10 flex flex-wrap justify-center gap-8 lg:gap-16 mb-16">
            <StatsOrb
              value="800+"
              label="Problems Solved"
              icon={Code}
              delay={0}
            />
            <StatsOrb
              value="1907"
              label="LeetCode Rating"
              icon={Trophy}
              delay={0.1}
            />
            <StatsOrb
              value="50+"
              label="Contests"
              icon={Target}
              delay={0.2}
            />
            <StatsOrb
              value="199"
              label="Best Global Rank"
              icon={Zap}
              delay={0.3}
            />
          </div>

          {/* Achievement Badges */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white/5 border border-white/10 rounded-xl p-5 flex items-center gap-4 group hover:border-white/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <achievement.icon size={24} className="text-neutral-300" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">{achievement.title}</h4>
                  <p className="text-neutral-400 text-sm">{achievement.subtitle}</p>
                  <p className="text-neutral-600 text-xs mt-1">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Platform Cards Grid */}
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-6">
              Platforms & Profiles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {platforms.map((platform, index) => (
                <PlatformCard key={platform.name} platform={platform} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DSAStats;
