import Link from "next/link";
import { SiSololearn } from "react-icons/si";

const pages = [
    {
        name: "Page 1",
        href: "/learn",
        icon: SiSololearn
    },
    {
        name: "Page 2",
        href: "/learn",
        icon: SiSololearn
    },
    {
        name: "Page 3",
        href: "/learn",
        icon: SiSololearn
    }
]

export default function Sidebar() {
    return (
        <div className="bg-neutral-200 h-full w-full py-3 space-y-6 px-6 flex flex-col">
            <h2 className="text-2xl font-extrabold">duofinance</h2>
            <ul className="space-y-2 flex-1">
                {pages.map((page) => (
                    <li key={page.name} className="hover:bg-neutral-600">
                        <Link href={page.href} className="flex items-center space-x-2 w-full">
                            <page.icon size={20} />
                            <span className="flex-1">{page.name}</span>
                        </Link>
                    </li>
                ))}
            </ul>

        </div>
    )
}

