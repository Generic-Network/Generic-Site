import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    remotePatterns: [new URL('https://minecraft.wiki/images/thumb/Allay_JE2.gif/150px-Allay_JE2.gif?aca63')],
  },
};

export default nextConfig;
