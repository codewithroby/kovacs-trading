/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/pdf-files",
        destination: "/pdf-guides",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
