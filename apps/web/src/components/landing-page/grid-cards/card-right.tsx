import Image from "next/image";

export default function CardRight() {
    return (
        <div className="w-[300px] space-y-2">
            <div className="bg-white rounded-xl p-2">
                <div className="flex justify-between border p-4 rounded-xl items-center">
                    <div className="flex items-center text-black text-xs gap-3">
                        <Image src="/profile.jpg" alt="Logo" width={30} height={30} className="rounded-full"/>
                        <div>
                            <span className="">Que bom te ver de volta</span>
                            <p className="font-bold">Isabella Ferraz</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white rounded-xl p-2">
                <div className="flex flex-col justify-between border p-4 rounded-xl items-center text-center gap-4">
                    <Image src="/3d-report.png" alt="Logo" width={70} height={70} />
                    <h3 className="text-black font-bold">Quer mais controle sobre suas finanças?</h3>
                    <p className="text-black text-xs">Aprenda a equilibrar gastos e ganhos para uma vida financeira mais estável e sem surpresas.</p>
                    <div className="text-start border rounded-xl w-full px-3 h-20 flex flex-col justify-center">
                        <p className="text-black font-bold text-sm">Poupar com estratégia</p>
                        <span className="text-black text-xs">Descubra formas simples e eficazes de economizar.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}