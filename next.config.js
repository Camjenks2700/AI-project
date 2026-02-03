const repo = process.env.GITHUB_REPOSITORY?.split("/")[1];
const basePath = process.env.BASE_PATH || (process.env.GITHUB_ACTIONS && repo ? `/${repo}` : "");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true
  },
  basePath,
  assetPrefix: basePath || undefined
};

module.exports = nextConfig;
