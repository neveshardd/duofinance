import Link from "next/link";

export default function ButtonLogin() {
    return (
        <>
            {/* Desktop */}
            <Link href="/" className="md:flex items-center border-2 border-neutral-200 text-neutral-200 px-6 py-2 rounded-full justify-center font-semibold hover:bg-neutral-50/20 transition-all duration-500 hidden">
                Entrar
            </Link>
        </>
    )
}