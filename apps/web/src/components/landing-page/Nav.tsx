import Image from "next/image";
import ButtonGetStarted from "./nav/button-get-started";
import ButtonLogin from "./nav/button-login";

export default function Nav() {
  return (
    <nav className="flex justify-between items-center p-4 md:py-6 md:px-16">
      <div className="flex items-center gap-2">
        <Image src="/logo.png" alt="Logo" width={35} height={35} className="md:w-12 " />
        <p className="text-xl font-bold md:text-3xl">Stonxis</p>
      </div>
      <div className="flex gap-4">
        <ButtonLogin />
        <ButtonGetStarted />
      </div>
    </nav>
  )
}