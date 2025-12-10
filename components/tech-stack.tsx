export default function TechStack() {
    const tech = [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React.js",
        "Framer Motion",
        "Node.js",
        "Express",
        "MongoDB",
        "PostgreSQL",
        "Prisma",
        "Next.js",
        "LangChain",
        "AWS",
        "Docker",
    ];

    return (
        <div className="py-12">
            <h2 className="text-3xl font-bold text-neutral-900">
                Tech Stack
            </h2>

            <div className="flex flex-wrap gap-3 py-4">
                {tech.map((item) => (
                    <div
                        key={item}
                        className="border border-neutral-400 rounded-lg w-fit uppercase px-3 py-1 font-semibold text-sm text-neutral-800"
                    >
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
}
