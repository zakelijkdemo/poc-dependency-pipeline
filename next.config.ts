import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // output: "export",
  output: "standalone",
  distDir: 'dist',	
  // basePath: "/poc-dependency-pipeline"
};

module.exports = {
  ...nextConfig,
  async redirects() {
    return [
      {
        source: '/((?!.swa).*)',
        destination: '/', 
        permanent: false,
      },
    ]
  },

  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/((?!.swa).*)',
          destinaton: '/',
        }
      ]
    }
  }

 };


export default nextConfig;
