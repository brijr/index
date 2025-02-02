import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/brijr",
        permanent: true,
      },
      {
        source: "/x",
        destination: "https://x.com/bridgertower",
        permanent: true,
      },
      {
        source: "/linkedin",
        destination: "https://linkedin.com/in/brijr",
        permanent: true,
      },
      {
        source: "/youtube",
        destination: "https://youtube.com/@bridgertower",
        permanent: true,
      },
      {
        source: "/resume",
        destination: "https://read.cv/brijr",
        permanent: true,
      },
    ];
  },
};

export default withPayload(nextConfig);
