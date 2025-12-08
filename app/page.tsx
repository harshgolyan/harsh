import WorkExperience from "@/components/experience";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Image from "next/image";

export default function Home() {
    return (
        <div className="w-2xl border-x border-neutral-400 mx-auto px-4 h-fit">
            <Hero />
            <Projects />
            <WorkExperience />
        </div>
    );
}
