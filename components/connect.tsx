import Link from "next/link";

export default function Connect() {
    return (
        <>
            <h2 className="text-3xl font-bold text-neutral-900">
                Let&apos;s connect
            </h2>
            <div className="py-4">
                <div className="text-neutral-600">
                    Want to discuss a project or opportunity? Book a quick call
                    with me.
                </div>
                <Link
                    href="https://cal.com/harshgolyan/30min"
                    target="_blank"
                    className=" mr-4 border border-neutral-400 rounded-lg p-2 mt-2 flex justify-center text-neutral-300 hover:text-neutral-200 font-semibold hover:bg-neutral-900 bg-neutral-800 transition duration-300"
                >
                    Schedule a Call
                </Link>
            </div>
        </>
    );
}
