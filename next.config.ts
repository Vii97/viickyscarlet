/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pbs.twimg.com', 
      },
      {
        protocol: 'https',
        hostname: 's1.pearlcdn.com', 
      },
    ],
  },
};

export default nextConfig;