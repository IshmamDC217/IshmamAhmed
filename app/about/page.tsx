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
        <section className="min-h-screen px-6 pt-24 pb-32 bg-black text-white">
            <FloatingNav navItems={navItems} />
            <div className="max-w-4xl mx-auto space-y-12">
                {/* Headline */}
                <div className="text-center">
                    <TextGenerateEffect
                        words="Tech & Creativity: My Expertise"
                        className="text-4xl md:text-5xl font-bold text-blue-400"
                    />
                    {/* Animations */}
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="mt-4 text-lg text-gray-300">
                        I’m Ishmam Ahmed, a Software Engineer based in Leeds, UK. I build scalable web apps—and by night, I riff with progressive rock band Metora Cliffs.
                    </motion.p>
                    <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.8 }} className="mt-6 flex justify-center items-center text-gray-400 text-sm gap-4">
                        <FaMapMarkerAlt className="text-blue-500" /> Leeds, UK
                        <FaGuitar className="text-blue-500" /> Guitarist @ Metora Cliffs
                    </motion.div>
                </div>

                {/* Profile Image */}
                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1 }} className="flex justify-center">
                    <img src={MyPic} alt="Ishmam Ahmed" className="rounded-full border-4 border-blue-500 w-44 h-44 object-cover" />
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
                    <motion.h2 initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1.4 }} className="text-xl text-blue-300 font-semibold mb-4">
                        Experience
                    </motion.h2>
                    {experience.map((exp, idx) => (
                        <motion.div key={idx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.6 + idx * 0.2 }} className="border border-gray-700 rounded-lg p-4 mb-4">
                            <h3 className="text-lg font-medium">{exp.role}</h3>
                            <p className="text-gray-400">{exp.company} • {exp.period}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Education */}
                <div>
                    <motion.h2 initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1.8 }} className="text-xl text-blue-300 font-semibold mb-4">
                        Education
                    </motion.h2>
                    {education.map((edu, idx) => (
                        <motion.div key={idx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.0 + idx * 0.2 }} className="flex items-center gap-4 border border-gray-700 rounded-lg p-4 mb-4">
                            <img src={edu.logo} alt="University of Leeds logo" width={40} height={40} />
                            <div>
                                <h3 className="text-lg font-medium">{edu.degree}</h3>
                                <p className="text-gray-400">{edu.institution} • {edu.period}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Licenses */}
                <div>
                    <motion.h2 initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 2.2 }} className="text-xl text-blue-300 font-semibold mb-4">
                        Licenses
                    </motion.h2>
                    {licenses.map((lic, idx) => (
                        <motion.a key={idx} href={lic.link} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.4 + idx * 0.2 }} className="flex items-center gap-4 border border-gray-700 rounded-lg p-4 mb-4 hover:bg-gray-800">
                            <img src={lic.logo} alt={`${lic.title} logo`} width={40} height={40} />
                            <div>
                                <h3 className="text-lg font-medium">{lic.title}</h3>
                                <p className="text-gray-400">{lic.issuer}</p>
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* CTA */}
                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 2.8 }} className="text-center">
                    <a href="#contact" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                        Let’s connect <IoIosArrowForward className="ml-2" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
