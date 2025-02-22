import Image from "next/image";

export default function CardMiddle() {
    return (
        <div className="w-[300px] bg-white md:-mt-14 p-2 rounded-xl">
            <div className="flex flex-col justify-between border p-4 rounded-xl items-center text-center gap-4">
                <Image src="/3d-piggy-bank.png" alt="Logo" width={70} height={70} />
                <h3 className="text-black font-bold">Onde você quer chegar financeiramente?</h3>
                <p className="text-black text-xs">Defina um objetivo e vamos te guiar nessa jornada para mais liberdade e prosperidade!</p>
                <div className="text-start border rounded-xl w-full px-3 h-20 flex flex-col justify-center">
                    <p className="text-black font-bold text-sm">Guardar dinheiro</p>
                    <span className="text-black text-xs">Poupe e construa uma base sólida.</span>
                </div>
                <div className="text-start border rounded-xl w-full px-3 h-20 flex flex-col justify-center">
                    <p className="text-black font-bold text-sm">Investir com inteligência</p>
                    <span className="text-black text-xs">Multiplique seu patrimônio.</span>
                </div>
                <div className="text-start border rounded-xl w-full px-3 h-20 flex flex-col justify-center">
                    <p className="text-black font-bold text-sm">Organizar despesas</p>
                    <span className="text-black text-xs">Controle seu orçamento sem complicações.</span>
                </div>
            </div>
        </div>
    )
}