import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // output: "export",
  output: "standalone",
  distDir: 'dist',	
  // basePath: "/poc-dependency-pipeline"

  async redirects() {
    return [
      {
        source: '/((?!.swa).*)<YOUR MATCHING RULE>',
        destination: '<YOUR REDIRECT RULE>', 
        permanent: false,
      },
    ]
},
async rewrites() {
  return {
      beforeFiles: [
          {
              source: '/((?!.swa).*)<YOUR MATCHING RULE>',
              destination: '<YOUR REWRITE RULE>', 
          }
      ]
  }
}
};


export default nextConfig;
