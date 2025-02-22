import GridCards from "@/components/landing-page/GridCards";
import Hero from "@/components/landing-page/Hero";
import Nav from "@/components/landing-page/Nav";

export default function Home() {
  return (
      <div className="bg-[url('/square-bg.svg')] bg-cover bg-center">
        <div className="bg-gradient-to-t from-neutral-900 to-transparent">
          <Nav />
          <Hero />
          <GridCards />
        </div>
    </div>
  );
}
