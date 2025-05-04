import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.google.com" },
      { protocol: "https", hostname: "assets.jabarekspres.com" },
      { protocol: "https", hostname: "shop.ldrescdn.com" },
      { protocol: "https", hostname: "encrypted-tbn0.gstatic.com" },
      { protocol: "https", hostname: "cdn.topupgim.com" },
      { protocol: "https", hostname: "yt3.ggpht.com" },
      { protocol: "https", hostname: "instagram.fcgk43-1.fna.fbcdn.net" },
      { protocol: "https", hostname: "cdn.oneesports.gg" },
      { protocol: "https", hostname: "res.lootbar.gg" },
      { protocol: "https", hostname: "static.wikia.nocookie.net" },
      {
        protocol: "https",
        hostname: "images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com",
      },
    ],
  },
};

export default nextConfig;
