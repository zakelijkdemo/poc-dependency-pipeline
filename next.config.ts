import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  distDir: 'dist',
  basePath: "/poc-dependency-pipeline"
};

export default nextConfig;
