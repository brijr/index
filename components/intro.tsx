import Balancer from "react-wrap-balancer";

export const Intro = () => {
  return (
    <div className="space-y-2 fade-in-up delay-intro">
      <h2 className="sr-only">Intro</h2>
      <h3>
        Design Engineer exploring <b>user interface design</b>,{" "}
        <b>applied artificial intelligence</b>, and{" "}
        <b>human computer interaction</b>.
      </h3>
      <h4>
        <Balancer>
          Currently, I work at{" "}
          <a className="link" href="https://ampry.com" target="_blank">
            Ampry
          </a>{" "}
          and{" "}
          <a className="link" href="https://9d8.dev" target="_blank">
            9d8
          </a>{" "}
          building marketing and sales software. I build tools for designers at{" "}
          <a className="link" href="https://wipdes.com" target="_blank">
            WIP
          </a>
          . Previously I worked at{" "}
          <a className="link" href="https://www.tackle.io" target="_blank">
            Tackle
          </a>{" "}
          and{" "}
          <a className="link" href="https://zion.surf" target="_blank">
            Zion
          </a>
          .
        </Balancer>
      </h4>
    </div>
  );
};
