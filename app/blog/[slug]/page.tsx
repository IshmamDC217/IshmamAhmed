"use client";

import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import { blogs } from "@/data/blogs";
import Image from "next/image";
import { FaEye, FaRegCommentDots } from "react-icons/fa";
import { motion } from "framer-motion";

const BlogPostPage = () => {
    const { slug } = useParams() as { slug: string };
    const blog = blogs.find((post) => post.id === slug);

    if (!blog) return notFound();

    return (
        <main className="relative bg-black min-h-screen px-5 sm:px-10 py-20 flex justify-center">
            <div className="w-full max-w-3xl">
                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl sm:text-4xl font-bold text-white mb-4"
                >
                    {blog.title}
                </motion.h1>

                {/* Meta Info */}
                <div className="flex items-center flex-wrap text-sm text-white/70 gap-4 mb-6">
                    <span>By {blog.author}</span>
                    <span>{blog.date}</span>
                    <span className="flex items-center gap-1">
                        <FaRegCommentDots /> {blog.comments}
                    </span>
                    <span className="flex items-center gap-1">
                        <FaEye /> {blog.views}
                    </span>
                </div>

                {/* Article Content */}
                <div className="space-y-6 text-white/90 text-base leading-relaxed mb-12">
                    {blog.content.map((paragraph, idx) => (
                        <motion.p
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + idx * 0.1 }}
                        >
                            {paragraph}
                        </motion.p>
                    ))}
                </div>

                {/* Masonry Image Gallery */}
                {blog.images && blog.images.length > 0 && (
                    <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
                        {blog.images.map((img, index) => (
                            <div
                                key={index}
                                className="break-inside-avoid overflow-hidden rounded-lg"
                            >
                                <Image
                                    src={img}
                                    alt={`${blog.title} photo ${index + 1}`}
                                    width={600}
                                    height={400}
                                    className="w-full h-auto object-cover rounded-md transition-transform duration-300 hover:scale-105"
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
};

export default BlogPostPage;
