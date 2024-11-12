/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    // Customize the webpack configuration here
    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    });
    return config;
  },
};

module.exports = nextConfig;
