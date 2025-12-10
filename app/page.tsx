import Connect from "@/components/connect";
import WorkExperience from "@/components/experience";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import TechStack from "@/components/tech-stack";

export default function Home() {
    return (
        <div className="w-2xl border-x border-neutral-400 mx-auto px-4 h-fit">
            <Hero />
            <Projects />
            <WorkExperience />
            <TechStack />
            <Connect />
        </div>
    );
}
