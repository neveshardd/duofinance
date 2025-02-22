import { GoArrowRight } from "react-icons/go";

export default function FormNewsletter() {
    return (
        <form className="px-3">
            <div className="relative w-full h-14 py-2 flex items-center justify-between bg-white/30 rounded-full md:w-[600px] border-2 border-neutral-200">
                <input
                    type="text"
                    className="w-full bg-transparent pr-[122px] pl-6 rounded-full text-white h-full outline-none placeholder:text-white"
                    placeholder="Seu melhor email"
                />
                <button className="text-white rounded-full bg-neutral-900 hover:bg-neutral-800 flex items-center justify-center gap-2 absolute right-2 h-10 px-4 bg-radial from-neutral-200 from-40% to-neutral-900 border-2 to-90% border-neutral-600 transition-all duration-500">
                    Assinar <GoArrowRight />
                </button>
            </div>
        </form>
    )
}