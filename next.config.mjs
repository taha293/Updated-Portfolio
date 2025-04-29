/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
          "api.microlink.io", // Microlink Image Preview
        ],
      },
      "extends": [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended" // Or your other recommended TypeScript rules
  ],
  "rules": {
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unsafe-function-type": "off"
    // Add other rule overrides here if needed
  }
};

export default nextConfig;
