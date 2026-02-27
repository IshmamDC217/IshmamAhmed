"use client";

import { useState } from "react";
import { blogs } from "@/data/blogs";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";

const BlogPage = () => {
    const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");

    const sortedBlogs = [...blogs].sort((a, b) => {
        const dateA = new Date(a.date || "");
        const dateB = new Date(b.date || "");
        return sortOrder === "newest"
            ? dateB.getTime() - dateA.getTime()
            : dateA.getTime() - dateB.getTime();
    });

    return (
        <main className="relative bg-[#080a08] min-h-screen px-5 sm:px-10 py-20 flex justify-center overflow-hidden">
            {/* Ambient background */}
            <div className="fixed inset-0 -z-10 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(10,24,18,0.9),transparent_60%),radial-gradient(circle_at_78%_18%,rgba(82,121,111,0.18),transparent_50%)]" />
                <div className="hidden lg:block">
                    <div className="absolute top-1/3 left-[10%] h-72 w-72 bg-gradient-to-r from-[#84a98c]/20 to-[#a3b18a]/15 rounded-full blur-[140px] animate-pulse" />
                    <div className="absolute bottom-1/4 right-[10%] h-80 w-80 bg-gradient-to-r from-[#52796f]/15 to-[#6b8f71]/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1.5s' }} />
                </div>
            </div>
            <div className="w-full max-w-3xl">
                {/* Header */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-xl sm:text-2xl font-bold mb-6 text-center gradient-text"
                >
                    Welcome to My Odyssey
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-white/40 text-center max-w-2xl mx-auto mb-10 text-[10px] uppercase tracking-[0.25em] leading-relaxed"
                >
                    A space where I document my path through code, music, and travel — sharing the experiences, lessons, and highlights along the way.
                </motion.p>

                {/* Filter */}
                <div className="mb-10 text-white/40 text-[10px] uppercase tracking-[0.25em] text-right">
                    <label htmlFor="sortOrder" className="mr-2">
                        Sort by:
                    </label>
                    <select
                        id="sortOrder"
                        className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-lg px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-white/60"
                        value={sortOrder}
                        onChange={(e) =>
                            setSortOrder(e.target.value as "newest" | "oldest")
                        }
                    >
                        <option value="newest">Most Recent</option>
                        <option value="oldest">Oldest First</option>
                    </select>
                </div>

                {/* Timeline */}
                <div className="relative border-l border-white/10 pl-6 space-y-20">
                    {sortedBlogs.map((blog, idx) => (
                        <motion.div
                            key={blog.id}
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{
                                delay: idx * 0.1,
                                duration: 0.9,
                                ease: "easeOut",
                            }}
                            className="relative group"
                        >
                            {/* Dot */}
                            <div className="absolute -left-[30px] top-3 w-2 h-2 bg-[#84a98c]/60 rounded-full shadow-md group-hover:scale-150 group-hover:bg-[#84a98c] transition-all duration-300" />

                            <div className="block group">
                                {/* Title */}
                                <h2 className="text-sm md:text-base font-bold text-white uppercase tracking-[0.15em] mb-1">
                                    {blog.title}
                                </h2>

                                {/* Date and Location */}
                                <div className="text-white/30 text-[10px] uppercase tracking-[0.25em] flex items-center flex-wrap gap-4 mb-3">
                                    <span>{blog.date}</span>
                                    {blog.location && (
                                        <span className="flex items-center gap-1">
                                            <FaMapMarkerAlt className="text-[#84a98c]/60" />
                                            {blog.location}
                                        </span>
                                    )}
                                </div>

                                {/* Content Paragraphs */}
                                <div className="text-white/50 text-xs tracking-wide leading-relaxed space-y-3 mb-6">
                                    {blog.content.map((paragraph, i) => (
                                        <p key={i}>{paragraph}</p>
                                    ))}
                                </div>

                                {/* Images */}
                                {blog.images && blog.images.length > 0 && (
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
                                        {blog.images.map((src, i) => (
                                            <div
                                                key={i}
                                                className="aspect-[5/4] bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl overflow-hidden"
                                            >
                                                <img
                                                    src={src}
                                                    alt={`Blog image ${i + 1}`}
                                                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default BlogPage;
