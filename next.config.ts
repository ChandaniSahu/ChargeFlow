// import type { NextConfig } from "next";

const nextConfig= {
  /* config options here */
   allowedDevOrigins: [
    "https://smilingly-revisory-flora.ngrok-free.dev",
  ],
   images: {
    domains: ["res.cloudinary.com"],
  },
    typescript: {
    ignoreBuildErrors: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
