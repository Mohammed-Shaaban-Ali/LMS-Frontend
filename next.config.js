/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "www.svgrepo.com",
      "thumbs.dreamstime.com",
      "lh3.googleusercontent.com",
      "avatars.githubusercontent.com",
      "res.cloudinary.com",
      "pbs.twimg.com",
    ], // Add any other domains you need here
  },
};

module.exports = nextConfig;
