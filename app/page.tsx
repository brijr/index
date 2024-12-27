export default function Home() {
  return (
    <>
      <h1>Bridger Tower</h1>
      <Intro />
    </>
  );
}

const Intro = () => {
  return (
    <div className="space-y-2 fade-in-up delay-300">
      <h2 className="sr-only">Intro</h2>
      <h3>
        Product designer and software engineer exploring{" "}
        <b>user interface design</b>, <b>applied artificial intelligence</b>,
        and <b>human computer interaction</b>.
      </h3>
      <h4>
        Currently I work at <a href="https://9d8.dev">9d8</a> and{" "}
        <a className="link" href="https://ampry.com">
          Ampry
        </a>{" "}
        building marketing and sales software. I build tools for designers at{" "}
        <a href="https://wipdes.com">WIP</a>. Previously I worked at{" "}
        <a href="https://www.tackle.io">Tackle</a> and{" "}
        <a href="https://zion.surf">Zion</a>.
      </h4>
    </div>
  );
};
