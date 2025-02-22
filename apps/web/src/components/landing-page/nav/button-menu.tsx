import { RxDashboard } from "react-icons/rx";

export default function ButtonMenu() {
    return (
        <button className="flex items-center bg-neutral-900 gap-2 hover:bg-neutral-800 text-white py-2 pr-2 pl-3 rounded-full border-2 border-neutral-600 transition-all duration-500">
            <span className="text-lg">Menu</span>
            <div className="w-7 h-7 rounded-full flex items-center justify-center border-2 border-neutral-600">
                <RxDashboard />
            </div>
        </button>
    )
}
