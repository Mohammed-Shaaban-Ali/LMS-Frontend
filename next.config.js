/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "www.svgrepo.com", "randomuser.me"], // Add any other domains you need here
  },
};

module.exports = nextConfig;
