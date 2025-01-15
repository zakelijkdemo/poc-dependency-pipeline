import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // output: "export",
  output: "standalone",
  distDir: 'dist',	
  basePath: "/poc-dependency-pipeline"
};

export default nextConfig;
