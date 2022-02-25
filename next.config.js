/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "links.papareact.com",
      "fakestoreapi.com",
      "www.google.com",
      "press.aboutamazon.com/images-videos/",
    ],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
