import Image from "next/image";
import { GoArrowRight } from "react-icons/go";

export default function Hero() {
    return (
        <>
            <div className="flex flex-col justify-center items-center px-5 h-full gap-10 mt-14 md:px-12">
                <span className="border px-4 py-1 flex items-center gap-1 bg-white/10 rounded-full font-bold">
                    <Image src="/logo.png" alt="Logo" width={30} height={30} />  Your savings to the moon
                </span>

                <div className="text-center items-center flex flex-col">
                    <div className="text-3xl md:text-7xl font-bold text-center md:max-w-7xl flex items-center gap-2">Master your finance and Break Free</div>
                    <div className="text-3xl md:text-7xl font-bold text-center md:max-w-6xl flex items-center gap-2">From Debt with <Image src="/logo.png" alt="Logo" width={100} height={100} className="hidden md:flex" />Stonxis</div>
                </div>

                <form>
                    <div className="relative w-full h-14 p-2 flex items-center justify-between bg-white/30 rounded-full md:w-[600px]">
                        <input
                            type="text"
                            className="w-full bg-transparent pr-36 pl-4 rounded-full text-white h-full outline-none placeholder:text-white"
                            placeholder="Your best email"
                        />
                        <button className="bg-black text-white rounded-full flex items-center justify-center gap-2 absolute right-2 h-10 px-4 ">
                            Get started <GoArrowRight />
                        </button>
                    </div>
                </form>


            </div>
        </>
    )
}