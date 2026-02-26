"use client";

import React from "react";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { FaMapMarkerAlt, FaGuitar } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

// Skill icons via SimpleIcons CDN
const skillIcons = [
    { name: "TypeScript", src: "https://cdn.simpleicons.org/typescript/white?viewbox=auto" },
    { name: "React", src: "https://cdn.simpleicons.org/react/white?viewbox=auto" },
    { name: "Next.js", src: "https://cdn.simpleicons.org/nextdotjs/white?viewbox=auto" },
    { name: "Node.js", src: "https://cdn.simpleicons.org/node.js/white?viewbox=auto" },
    { name: "Tailwind CSS", src: "https://cdn.simpleicons.org/tailwindcss/white?viewbox=auto" },
];

// Local Images in /public
const MyPic = "/webme.jpg";
const LeedsLogo = "/university-of-leeds-white.png";
const RedisLogo = "/redis-white.png";

const experience = [
    { role: "Software Engineer", company: "3G Telecoms", period: "2023 – Present" },
];

const education = [
    {
        degree: "BSc Computer Science with AI",
        institution: "University of Leeds",
        logo: LeedsLogo,
        period: "2019 – 2023",
    },
];

const licenses = [
    {
        title: "Redis for JavaScript Developers",
        issuer: "Redis University",
        logo: RedisLogo,
        link: "https://university.redis.com",
    },
];

const navItems = [
    { name: "Home", link: "/" },
    { name: "Work", link: "/#work" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/#contact" },
];

export default function About() {
    return (
        <section className="relative min-h-screen px-6 pt-24 pb-32 bg-[#050711] text-white overflow-hidden">
            {/* Ambient background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(10,18,34,0.9),transparent_60%),radial-gradient(circle_at_78%_18%,rgba(30,58,138,0.22),transparent_50%)]" />
                <div className="hidden lg:block">
                    <div className="absolute top-1/4 left-[15%] h-72 w-72 bg-gradient-to-r from-blue-500/25 to-cyan-400/15 rounded-full blur-[140px] animate-pulse" />
                    <div className="absolute bottom-1/3 right-[15%] h-80 w-80 bg-gradient-to-r from-indigo-400/20 to-purple-500/15 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1.5s' }} />
                </div>
            </div>
            <FloatingNav navItems={navItems} />
            <div className="max-w-4xl mx-auto space-y-12">
                {/* Headline */}
                <div className="text-center">
                    <TextGenerateEffect
                        words="Tech & Creativity: My Expertise"
                        className="text-4xl md:text-5xl font-bold gradient-text"
                    />
                    {/* Animations */}
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="mt-4 text-lg text-slate-200/80">
                        I’m Ishmam Ahmed, a Software Engineer based in Leeds, UK. I build scalable web apps—and by night, I riff with progressive rock band Metora Cliffs.
                    </motion.p>
                    <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.8 }} className="mt-6 flex justify-center items-center text-slate-300/80 text-sm gap-4">
                        <FaMapMarkerAlt className="text-blue-500" /> Leeds, UK
                        <FaGuitar className="text-blue-500" /> Guitarist @ Metora Cliffs
                    </motion.div>
                </div>

                {/* Profile Image */}
                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1 }} className="flex justify-center">
                    <div className="relative inline-flex rounded-full p-[2px] overflow-hidden">
                        <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ffffff_0%,#3b82f6_20%,#06b6d4_40%,#3b82f6_60%,#ffffff_80%,#3b82f6_100%)]" />
                        <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite_reverse] bg-[conic-gradient(from_90deg_at_50%_50%,#ffffff_0%,#06b6d4_25%,#3b82f6_50%,#06b6d4_75%,#ffffff_100%)] opacity-60" />
                        <img src={MyPic} alt="Ishmam Ahmed" className="relative rounded-full w-44 h-44 object-cover drop-shadow-[0_0_40px_rgba(59,130,246,0.55)]" />
                    </div>
                </motion.div>

                {/* Skills */}
                <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }} className="grid grid-cols-3 md:grid-cols-5 gap-6 justify-center">
                    {skillIcons.map((s, idx) => (
                        <motion.div key={idx} variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} whileHover={{ scale: 1.1 }} className="flex flex-col items-center">
                            <img src={s.src} alt={s.name} width={48} height={48} />
                            <span className="mt-2 text-sm text-gray-300">{s.name}</span>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Experience */}
                <div>
                    <motion.h2 initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1.4 }} className="text-xl font-semibold mb-4 gradient-text-accent">
                        Experience
                    </motion.h2>
                    {experience.map((exp, idx) => (
                        <motion.div key={idx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.6 + idx * 0.2 }} className="border border-white/10 bg-white/5 backdrop-blur-2xl rounded-2xl p-5 mb-4 hover:border-blue-400/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-300">
                            <h3 className="text-lg font-medium">{exp.role}</h3>
                            <p className="text-slate-300/80">{exp.company} • {exp.period}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Education */}
                <div>
                    <motion.h2 initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1.8 }} className="text-xl font-semibold mb-4 gradient-text-accent">
                        Education
                    </motion.h2>
                    {education.map((edu, idx) => (
                        <motion.div key={idx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.0 + idx * 0.2 }} className="flex items-center gap-4 border border-white/10 bg-white/5 backdrop-blur-2xl rounded-2xl p-5 mb-4 hover:border-blue-400/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-300">
                            <img src={edu.logo} alt="University of Leeds logo" width={40} height={40} />
                            <div>
                                <h3 className="text-lg font-medium">{edu.degree}</h3>
                                <p className="text-slate-300/80">{edu.institution} • {edu.period}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Licenses */}
                <div>
                    <motion.h2 initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 2.2 }} className="text-xl font-semibold mb-4 gradient-text-accent">
                        Licenses
                    </motion.h2>
                    {licenses.map((lic, idx) => (
                        <motion.a key={idx} href={lic.link} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.4 + idx * 0.2 }} className="flex items-center gap-4 border border-white/10 bg-white/5 backdrop-blur-2xl rounded-2xl p-5 mb-4 hover:border-blue-400/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-300 hover:bg-gray-800">
                            <img src={lic.logo} alt={`${lic.title} logo`} width={40} height={40} />
                            <div>
                                <h3 className="text-lg font-medium">{lic.title}</h3>
                                <p className="text-slate-300/80">{lic.issuer}</p>
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* CTA */}
                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 2.8 }} className="text-center">
                    <a href="/#contact" className="group relative inline-flex h-14 overflow-hidden rounded-2xl p-[2px]">
                        <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ffffff_0%,#3b82f6_20%,#06b6d4_40%,#3b82f6_60%,#ffffff_80%,#3b82f6_100%)]" />
                        <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite_reverse] bg-[conic-gradient(from_90deg_at_50%_50%,#ffffff_0%,#06b6d4_25%,#3b82f6_50%,#06b6d4_75%,#ffffff_100%)] opacity-60" />
                        <span className="relative inline-flex h-full w-full items-center justify-center rounded-2xl bg-gradient-to-br from-[#0a0a0f] via-[#0f0f1a] to-[#0a0a0f] px-8 text-sm font-bold text-white border border-white/20 group-hover:border-blue-400/50 group-hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] transition-all duration-300 gap-2">
                            Let&apos;s connect <IoIosArrowForward className="ml-2" />
                        </span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
