import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
        pathname: "/storage/**",
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com",
        port: "", 
        pathname: "/**",
      },
       {
        protocol: "https",
        hostname: "www.tendzone.net",
      },
    ],
  },
};

export default nextConfig;