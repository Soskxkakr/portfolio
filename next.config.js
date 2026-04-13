/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      { protocol: "https", hostname: "img.icons8.com", pathname: "/**" },
      { protocol: "https", hostname: "pagepro.co", pathname: "/**" },
      { protocol: "https", hostname: "images.wallpaperscraft.com", pathname: "/**" },
      { protocol: "https", hostname: "cdn.jsdelivr.net", pathname: "/**" },
      { protocol: "https", hostname: "raw.githubusercontent.com", pathname: "/**" },
      { protocol: "https", hostname: "www.vectorlogo.zone", pathname: "/**" },
      { protocol: "https", hostname: "www.cloud-config.jp", pathname: "/**" },
      { protocol: "https", hostname: "cdn.simpleicons.org", pathname: "/**" },
    ],
  },
};

module.exports = nextConfig;
