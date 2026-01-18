import Image from "next/image";
import { IconBrandGithub, IconBrandX, IconBrandLinkedin } from "@tabler/icons-react";
import Link from "next/link";

export default function Hero () {
    const socialLinks = [{
        icon: <IconBrandGithub size={24} />,
        url: "https://github.com/harshgolyan"
    }, {
        icon: <IconBrandX size={24} />,
        url: "https://x.com/harshg0lyan"
    }, {
        icon: <IconBrandLinkedin size={24} />,
        url: "https://www.linkedin.com/in/harshgolyan/"
    }]
    return (
        <>
            <div className="flex gap-6 py-12">
                <Image
                    src="/harsh_3.png"
                    alt="Hero Image"
                    width={800}
                    height={400} 
                    className="size-40 rounded-lg border border-neutral-400"               
                />
                <div className="flex flex-col gap-2">
                    <div className="sm:text-3xl text-2xl font-bold text-neutral-800">Sup, I&apos;m Harsh Golyan</div>
                    <div className="text-lg font-semibold text-neutral-600">I am Full Stack Developer</div>
                    <div>
                        <div>
                            {socialLinks.map((link, index) => (
                                <Link key={index} href={link.url} target="_blank" className="inline-block mr-4 border border-neutral-400 rounded-lg p-2 text-neutral-600 hover:text-neutral-800 hover:bg-neutral-300 transition duration-300">
                                    {link.icon}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-lg font-semibold text-neutral-400">
                I&apos;m a full stack developer who builds <span className="text-neutral-800">user-focused digital experiences</span>. On frontend, I build <span className="text-neutral-800">sleak and seamless user interface</span>. On backend, I design <span className="text-neutral-800">scalable and reliable systems</span>. I also work with AI integrations to <span className="text-neutral-800">automate workflows</span> and create smart user experiences.
            </div>
        </>
    )
}