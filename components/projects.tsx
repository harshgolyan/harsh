"use client";

import { useState } from "react";
import Image from "next/image";
import { IconBrandGithub, IconLink } from "@tabler/icons-react";

const filters = ["All", "Frontend", "Backend", "AI Integrations"];
const projects = [
    {
        title: "Legion health",
        desc: "Landing page for a healthcare startup",
        category: "Frontend",
        imageUrl: "/legion-health.png",
    },
    {
        title: "Eco Earn",
        desc: "System for a sustainability rewards platform",
        category: "All",
        imageUrl: "/eco-earn.png",
    },
];
export default function Projects() {
    const [activeFilter, setActiveFilter] = useState("All");
    return (
        <>
            <div className="py-10">
                <div className="text-3xl font-bold text-neutral-800">
                    Projects
                </div>
                <div className="flex gap-4 py-4">
                    {filters.map((filter, index) => (
                        <div
                            key={index}
                            className="px-4 py-1 border border-neutral-400 rounded-lg text-neutral-600 hover:text-neutral-800 hover:bg-neutral-300 transition duration-300 cursor-pointer"
                        >
                            {filter}
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-3 gap-4">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="border p-4 rounded-lg border-neutral-400 group transition-transform duration-300 cursor-pointer"
                        >
                            <Image
                                src={project.imageUrl}
                                alt={project.title}
                                width={800}
                                height={400}
                                className="w-full rounded-lg object-contain -rotate-z-12 rotate-x-45 transform-3d [box-shadow:-5px_10px_20px_5px_#60a5fa]"
                            />
                            <div className="pt-4">
                                <div className="text-lg font-semibold text-neutral-800">
                                    {project.title}
                                </div>
                                <div className="text-sm font-medium text-neutral-600">
                                    {project.desc}
                                </div>
                                <div className="flex items-center gap-2 pt-4 justify-end">
                                    <button className="flex items-center justify-center gap-2 px-2 py-px rounded-lg border border-neutral-400">
                                        <IconBrandGithub
                                            size={18}
                                            className="mt-2 text-neutral-600 hover:text-neutral-800 transition duration-300"
                                        />
                                        <span>Github</span>
                                    </button>
                                    <button className="flex items-center justify-center gap-2 px-2 py-px rounded-lg border border-neutral-400">
                                        <IconLink
                                            size={18}
                                            className="mt-2 text-neutral-600 hover:text-neutral-800 transition duration-300"
                                        />
                                        <span>Live</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
