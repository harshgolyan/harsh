"use client";

import { useState } from "react";
import Image from "next/image";
import { IconBrandGithub, IconLink } from "@tabler/icons-react";

const filters = ["Frontend", "Full Stack", "Others"];

const projects = [
    {
        title: "Train AI",
        desc: "Landing page for AI company dealing with model training.",
        category: "Frontend",
        imageUrl: "/trainai.png",
        github: "https://github.com/harshgolyan/train-ai",
        live: "https://train-ai-omega.vercel.app/",
    },
    {
        title: "Papatango",
        desc: "Landing page for Clothing Design Brands.",
        category: "Frontend",
        imageUrl: "/papatango.png",
        github: "https://github.com/harshgolyan/papatango",
        live: "https://papatango.vercel.app/",
    },
    {
        title: "Mill3",
        desc: "Landing page for marketing agency Mill3.",
        category: "Frontend",
        imageUrl: "/mill.png",
        github: "https://github.com/harshgolyan/mill3",
        live: "https://mill3.vercel.app/",
    },
    {
        title: "Bento Grid",
        desc: "A modern bento-style grid with animations and responsive layouts.",
        category: "Others",
        imageUrl: "/bento-grid.png",
        github: "https://github.com/harshgolyan/bento-grid",
        live: "https://bento-grid-ashy.vercel.app/",
    },
    {
        title: "3D Marquee",
        desc: "A 3D animated marquee built using Motion for smooth animations",
        category: "Others",
        imageUrl: "/marquee.png",
        github: "https://github.com/harshgolyan/3d-marquee",
        live: "https://3d-marquee.vercel.app/",
    },
    {
        title: "Legion Health",
        desc: "Landing page for Legion Health framed with Next.js, Tailwind CSS and Motion.",
        category: "Others",
        imageUrl: "/legion-health.png",
        github: "https://github.com/harshgolyan/3d-marquee",
        live: "https://3d-marquee.vercel.app/",
    },
    {
        title: "Drawy",
        desc: "Collaborative fun drawing platform with real-time canvas sync and sharing.",
        category: "Full Stack",
        imageUrl: "/drawy.png",
        github: "https://github.com/harshgolyan/drawy-fr",
        live: "https://drawy-red.vercel.app/",
    },
    {
        title: "UI Labs",
        desc: "A collection of modern UI component experiments and design interactions.",
        category: "Others",
        // imageUrl: "/ui-labs.png",
        github: "https://github.com/harshgolyan/ui-labs",
        live: "https://devlabs-gamma.vercel.app/",
    },
    {
        title: "RAG Backend",
        desc: "A backend system implementing Retrieval-Augmented Generation with vector search.",
        category: "Others",
        // imageUrl: "/rag-backend.png",
        github: "https://github.com/harshgolyan/rag-backend",
        // live: "https://rag-backend-proxy.vercel.app/",
    },
    {
        title: "Inspire Ink",
        desc: "A full-stack platform for writing and inspiration platform.",
        category: "Full Stack",
        imageUrl: "/inspire-ink.png",
        github: "https://github.com/harshgolyan/Inspire-Ink",
        live: "https://inspire-ink-ten.vercel.app/",
    },
    {
        title: "Loom AI",
        desc: "Full stack AI powered platform for generating custom emails, paraphrasing, and text analysis.",
        category: "Full Stack",
        github: "https://github.com/harshgolyan/loom-ai",
        live: "https://loom-ai-proxy.vercel.app/",
    },
    {
        title: "Logs Monitor",
        desc: "A backend log streaming system that monitors real-time server output.",
        category: "Others",
        // imageUrl: "/logs-monitor.png",
        github: "https://github.com/harshgolyan/logs-monitor",
        // live: "https://logs-monitor-proxy.vercel.app/",
    },
    {
        title: "Realtime Chat App",
        desc: "A real-time messaging system powered by WebSockets.",
        category: "Full Stack",
        github: "https://github.com/harshgolyan/realtime-chat-app",
        live: "https://realtime-chat-proxy.vercel.app/",
    },
];

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState("Frontend");

    const filteredProjects =
        activeFilter === "All"
            ? projects
            : projects.filter((p) => p.category === activeFilter);

    return (
        <div className="py-12">
            <div className="text-3xl font-bold text-neutral-800">Projects</div>

            <div className="flex gap-4 py-4">
                {filters.map((filter, index) => (
                    <div
                        key={index}
                        onClick={() => setActiveFilter(filter)}
                        className={`px-4 py-1 border border-neutral-400 rounded-lg cursor-pointer transition duration-300
              ${
                  activeFilter === filter
                      ? "bg-neutral-800 text-white"
                      : "text-neutral-600 hover:text-neutral-800 hover:bg-neutral-300"
              }`}
                    >
                        {filter}
                    </div>
                ))}
            </div>

            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                {filteredProjects.map((project, index) => (
                    <div
                        key={index}
                        className="border p-4 rounded-lg border-neutral-400 group transition-transform duration-300 cursor-pointer flex flex-col items-start justify-between"
                    >
                        {project.imageUrl && (
                            <Image
                                src={project.imageUrl}
                                alt={project.title}
                                width={800}
                                height={400}
                                className="sm:w-72 w-96 rounded-lg object-contain -rotate-z-12 rotate-x-45 transform-3d mx-auto"
                                style={{
                                    boxShadow: "0px 0px 20px rgba(0,0,0,0.2)",
                                }}
                            />
                        )}

                        <div className="pt-4">
                            <div className="text-lg font-semibold text-neutral-800">
                                {project.title}
                            </div>
                            <div className="text-sm font-medium text-neutral-600">
                                {project.desc}
                            </div>

                        </div>
                        <div>
                            <div className="flex gap-2 pt-4 justify-start">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    className="flex items-center justify-center gap-2 px-2 py-px rounded-lg border border-neutral-400"
                                >
                                    <IconBrandGithub
                                        size={18}
                                        className=" text-neutral-600 hover:text-neutral-800 transition duration-300"
                                    />
                                    <span>Github</span>
                                </a>

                                {project.live && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        className="flex items-center justify-center gap-2 px-2 py-px rounded-lg border border-neutral-400"
                                    >
                                        <IconLink
                                            size={18}
                                            className=" text-neutral-600 hover:text-neutral-800 transition duration-300"
                                        />
                                        <span>Live</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
