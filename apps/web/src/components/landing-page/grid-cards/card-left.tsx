import Image from "next/image";

export default function CardLeft() {
    return (
        <div className="w-[300px] space-y-2 md:-mt-4">
            <div className="bg-white rounded-xl p-2">
                <div className="flex justify-between border p-4 rounded-xl items-center">
                    <div className="flex items-center text-black text-xs gap-1">
                        <Image src="/logo.png" alt="Logo" width={30} height={30} />
                        +R$ 1.500,00
                    </div>
                    <div className="text-green-500 text-xs">
                        +4.7%
                    </div>
                </div>
            </div>
            <div className="bg-white rounded-xl p-2">
                <div className="flex flex-col justify-between border p-4 rounded-xl items-center text-center gap-4">
                    <Image src="/logo.png" alt="Logo" width={70} height={70} />
                    <h3 className="text-black font-bold">Qual é seu principal objetivo financeiro?</h3>
                    <p className="text-black text-xs">Vamos personalizar seu aprendizado com base no que mais importa pra você!</p>
                    <div className="text-start border rounded-xl w-full px-3 h-20 flex flex-col justify-center">
                        <p className="text-black font-bold text-sm">Economizar dinheiro</p>
                        <span className="text-black text-xs">Aprender a guardar e criar uma reserva financeira</span>
                    </div>
                </div>
            </div>
        </div>
    )
}