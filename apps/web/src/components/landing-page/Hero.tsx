import Image from "next/image";
import FormNewsletter from "./hero/form-newsletter";

export default function Hero() {
    return (
        <div className="flex flex-col justify-center items-center px-4 h-full gap-8 mt-24 md:px-12">
            <span className="border justify-center px-4 flex items-center gap-2 bg-white/20 rounded-full font-bold text-xs md:text-sm py-2 md:px-5">
                <Image src="/3d-target.png" alt="Logo" width={20} height={20} />
                Finanças de forma simples!
            </span>

            <div className="text-2xl md:hidden font-bold flex gap-2 text-center">
            Transforme seu conhecimento financeiro em resultados
            </div>

            <div className="text-center items-center flex-col hidden md:flex">
                <div className="text-2xl md:text-7xl font-bold md:max-w-7xl flex gap-2">Transforme seu conhecimento</div>
                <div className="text-2xl md:text-7xl font-bold md:max-w-6xl flex gap-2">financeiro em <Image src="/3d-wallet.png" alt="Logo" width={75} height={75} className="hidden md:flex" />resultados</div>
            </div>

            <FormNewsletter />
        </div>
    )
}