import { Intro } from "@/components/intro";
import { Work } from "@/components/work";

export default function Home() {
  return (
    <>
      <section className="fade-in-up delay-header">
        <h1 className="font-medium">Bridger Tower</h1>
        <h2 className="text-accent">Designer and Engineer</h2>
      </section>
      <Intro />
      <Work />
    </>
  );
}
