import type { NextConfig } from "next";

const repoName = "dr-anmol-ahuja-site";
const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGithubPages ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: isGithubPages ? `${basePath}/` : "",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  env: {
    // next/image doesn't prepend basePath to unoptimized local sources, so
    // lib/images.ts prefixes local (public/) image paths with this itself.
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
