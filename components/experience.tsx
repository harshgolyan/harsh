export default function WorkExperience() {
    const experiences = [
        {
            company: "Neolen",
            role: "Frontend Developer (Internship)",
            description:
                "Optimized website performance, improving speed scores from 35 to 90+, leading to a 20% increase in user traffic and enhanced user experience.",
            duration: "Jan 2025 — Mar 2025",
        },
        {
            company: "Upnyx Innovative Solutions",
            role: "Frontend Developer (Internship)",
            description:
                "Developed an intuitive onboarding process with user-friendly features that resulted in a 10% increase in user engagement and traffic.",
            duration: "Oct 2024 — Dec 2024",
        },
        {
            company: "IT Studio",
            role: "Full Stack Developer (Contract)",
            description:
                "Created a Help and Support Page with modern UX, reducing support response time by 20%.",
            duration: "Apr 2024 — Jun 2024",
        }
    ];

    return (
        <section className="py-12">
            <h2 className="text-3xl font-bold text-neutral-900">Work Experience</h2>

            <div className="relative ml-6 py-4">
                <div className="absolute left-0 top-8 bottom-0 w-0.5 bg-neutral-300"></div>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative pl-10">
                            <div className="absolute left-[-3px] top-2 size-2 rounded-full bg-neutral-400"></div>

                            <h3 className="text-xl font-semibold text-neutral-900">
                                {exp.company}
                            </h3>

                            <p className="text-neutral-700 font-medium">
                                {exp.role}
                            </p>

                            <span className="text-sm text-neutral-500">
                                {exp.duration}
                            </span>

                            <p className="text-neutral-600 mt-2 leading-relaxed">
                                {exp.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
