import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

export default function ButtonDashboard() {
    return (
        <>
            {/* Desktop */}
            <Link href="/learn" className="hidden md:flex items-center bg-neutral-900 gap-2 hover:bg-neutral-800 text-white py-2 pr-2 pl-3 rounded-full border-2 border-neutral-600 transition-all duration-500">
                <span className="text-lg font-semibold">Dashboard</span>
                <div className="w-7 h-7 rounded-full flex items-center justify-center border-2 border-neutral-600">
                    <GoArrowRight />
                </div>
            </Link>

            {/* Mobile */}
            <Link href="/learn" className="md:hidden flex items-center bg-neutral-900 gap-2 hover:bg-neutral-800 text-white py-2 pr-2 pl-3 rounded-full border-2 border-neutral-600 transition-all duration-500">
                <span className="text-lg font-semibold">Dashboard</span>
                <div className="w-7 h-7 rounded-full flex items-center justify-center border-2 border-neutral-600">
                    <GoArrowRight />
                </div>
            </Link>
        </>
    )
}
