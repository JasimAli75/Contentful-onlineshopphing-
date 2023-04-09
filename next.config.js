/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    CONTENTFUL_SPACE_ID: "jm99noprwdzp",
    CONTENTFUL_ACCESS_KEY: "Whzr8ybuhE6xQBeV2CG-tK0o3zoqgJGy4p2Ck9zC9GI"
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
      },
    ],
  },
}

module.exports = nextConfig
