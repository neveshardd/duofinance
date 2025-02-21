import Image from "next/image";
import { RxDashboard } from "react-icons/rx";

export default function Nav(){
    return (
        <nav className="flex justify-between items-center p-4 md:py-6 md:px-16">
        <div className="flex items-center gap-1">
          <Image src="/logo.png" alt="Logo" width={50} height={50} />
          <p className="text-xl font-bold">Stonxis</p>
        </div>
        <button className="flex items-center gap-2 bg-black text-white py-2 pr-2 pl-4 rounded-full relative shadow-md">
          <span className="text-lg">Menu</span>
          <div className="w-7 h-7 rounded-full flex items-center justify-center border">
            <RxDashboard />
          </div>
        </button>
      </nav>
    )
}