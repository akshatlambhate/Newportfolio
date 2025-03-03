import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "JavaScript", color: "#F7DF1E" },
  { name: "React", color: "#61DAFB" },
  { name: "Tailwind CSS", color: "#38BDF8" },
  { name: "GSAP", color: "#88CE02" },
];

const SkillCards = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray(".skill-card");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: '#skill-cont',
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div ref={containerRef} className="flex flex-wrap justify-center gap-6 py-20">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="skill-card w-64 h-40 rounded-2xl flex items-center justify-center text-xl font-bold shadow-lg transform transition-transform hover:scale-105"
          style={{ backgroundColor: skill.color }}
        >
          {skill.name}
        </div>
      ))}
    </div>
  );
};

export default SkillCards;