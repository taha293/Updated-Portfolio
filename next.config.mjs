/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
          "api.microlink.io", // Microlink Image Preview
        ],
      },
      "scripts": {
  "dev": "next dev",
  "build": "npm run build:vercel",
  "build:local": "next build",
  "build:vercel": "next build",
  "start": "next start",
  "lint": "next lint"
}
};

export default nextConfig;
