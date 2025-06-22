"use client";

import { useState } from "react";
import { blogs } from "@/data/blogs";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";

const BlogPage = () => {
    const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");

    const sortedBlogs = [...blogs].sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return sortOrder === "newest"
            ? dateB.getTime() - dateA.getTime()
            : dateA.getTime() - dateB.getTime();
    });

    return (
        <main className="relative bg-black min-h-screen px-5 sm:px-10 py-20 flex justify-center">
            <div className="w-full max-w-3xl">
                {/* Header */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl sm:text-5xl font-bold text-white mb-6 text-center"
                >
                    Welcome to My Odyssey
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-white/70 text-center max-w-2xl mx-auto mb-10"
                >
                    A space where I document my path through code, music, and travel — sharing the experiences, lessons, and highlights along the way.
                </motion.p>

                {/* Filter */}
                <div className="mb-10 text-white/80 text-sm text-right">
                    <label htmlFor="sortOrder" className="mr-2">
                        Sort by:
                    </label>
                    <select
                        id="sortOrder"
                        className="bg-zinc-900 border border-zinc-700 rounded px-2 py-1"
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
                <div className="relative border-l border-white/20 pl-6 space-y-20">
                    {sortedBlogs.map((blog, idx) => (
                        <motion.div
                            key={blog.id}
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ delay: idx * 0.1, duration: 0.6 }}
                            className="relative group"
                        >
                            {/* Dot */}
                            <div className="absolute -left-[9px] top-3 w-3 h-3 bg-white rounded-full shadow-md group-hover:scale-125 transition-transform" />

                            <div className="block group">
                                {/* Cover Image */}
                                <div className="overflow-hidden rounded-xl mb-4">
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-full h-auto rounded-xl group-hover:scale-[1.02] transition-transform duration-300"
                                    />
                                </div>

                                {/* Title */}
                                <h2 className="text-2xl font-semibold text-white mb-1">
                                    {blog.title}
                                </h2>

                                {/* Date with Location Icon */}
                                <div className="text-white/50 text-sm flex items-center gap-2 mb-3">
                                    <FaMapMarkerAlt className="text-white/40" />
                                    {blog.date}
                                </div>

                                {/* Paragraphs */}
                                <div className="text-white/70 text-sm leading-relaxed space-y-3 mb-6">
                                    {blog.content.map((paragraph, i) => (
                                        <p key={i}>{paragraph}</p>
                                    ))}
                                </div>

                                {/* Uniform Image Grid - 5:4 Balanced Layout */}
                                {blog.images && blog.images.length > 0 && (
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
                                        {blog.images.map((src, i) => (
                                            <div
                                                key={i}
                                                className="aspect-[5/4] bg-zinc-800 rounded-lg overflow-hidden"
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
