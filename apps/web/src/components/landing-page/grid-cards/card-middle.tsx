import Image from "next/image";

export default function CardMiddle() {
    return (
        <div className="w-[300px] bg-white md:-mt-14 p-2 rounded-xl">
            <div className="flex flex-col justify-between border p-4 rounded-xl items-center text-center gap-4">
                <Image src="/logo.png" alt="Logo" width={70} height={70} />
                <h3 className="text-black font-bold">Qual é seu principal objetivo financeiro?</h3>
                <p className="text-black text-xs">Vamos personalizar seu aprendizado com base no que mais importa pra você!</p>
                <div className="text-start border rounded-xl w-full px-3 h-20 flex flex-col justify-center">
                    <p className="text-black font-bold text-sm">Economizar dinheiro</p>
                    <span className="text-black text-xs">Aprender a guardar e criar uma reserva financeira</span>
                </div>
                <div className="text-start border rounded-xl w-full px-3 h-20 flex flex-col justify-center">
                    <p className="text-black font-bold text-sm">Começar a investir</p>
                    <span className="text-black text-xs">Fazer o dinheiro trabalhar pra você</span>
                </div>
                <div className="text-start border rounded-xl w-full px-3 h-20 flex flex-col justify-center">
                    <p className="text-black font-bold text-sm">Controlar gastos</p>
                    <span className="text-black text-xs">Organizar o orçamento e reduzir despesas</span>
                </div>
            </div>
        </div>
    )
}