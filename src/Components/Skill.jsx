import React from 'react';
import {
  FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaReact,
  FaGitAlt, FaGithub
} from 'react-icons/fa';
import {
  SiC, SiCplusplus, SiTailwindcss, SiFirebase, SiMongodb,
  SiExpress, SiVite, SiNetlify, SiVercel, SiFigma, SiCanva, SiDaisyui
} from 'react-icons/si';

const skillRows = [
  [
    { name: "C", icon: <SiC size={40} color="#A8B9CC" /> },
    { name: "C++", icon: <SiCplusplus size={40} color="#00599C" /> },
    { name: "HTML", icon: <FaHtml5 size={40} color="#E34F26" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={40} color="#38BDF8" /> },
    { name: "Bootstrap", icon: <FaBootstrap size={40} color="#7952B3" /> },
    { name: "DaisyUI", icon: <SiDaisyui size={40} color="#FF69B4" /> },
  ],
  [
    { name: "JavaScript", icon: <FaJs size={40} color="#F7DF1E" /> },
    { name: "Vite", icon: <SiVite size={40} color="#646CFF" /> },
    { name: "React", icon: <FaReact size={40} color="#61DBFB" /> },
    { name: "MongoDB", icon: <SiMongodb size={40} color="#47A248" /> },
    { name: "Express.js", icon: <SiExpress size={40} color="#000000" /> },
  ],
  [
    { name: "Firebase", icon: <SiFirebase size={40} color="#FFCA28" /> },
    { name: "Netlify", icon: <SiNetlify size={40} color="#00C7B7" /> },
    { name: "Vercel", icon: <SiVercel size={40} color="#000000" /> },
    { name: "Figma", icon: <SiFigma size={40} color="#F24E1E" /> },
  ],
  [
    { name: "Canva", icon: <SiCanva size={40} color="#00C4CC" /> },
    { name: "Git", icon: <FaGitAlt size={40} color="#F05032" /> },
    { name: "GitHub", icon: <FaGithub size={40} color="#ffffff" /> },
  ]
];

const Skill = () => {
  return (
    <section className='bg-[#1b1f2a] py-16 text-white'>
      <div className='max-w-6xl mx-auto px-4 text-center'>
        <h2 className='text-4xl font-bold mb-12'>My Skills</h2>

        {skillRows.map((row, i) => (
          <div
            key={i}
            className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8"
          >
            {row.map((skill, index) => (
              <div
                key={index}
                className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-lg bg-[#2d3340] hover:scale-105 duration-300"
              >
                <div className='mb-2'>{skill.icon}</div>
                <span className='text-xs sm:text-sm font-medium'>{skill.name}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
