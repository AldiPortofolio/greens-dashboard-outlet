// /** @type {import('next').NextConfig} */
// const withImages = require('next-images');

// const nextConfig = withImages({
//   reactStrictMode: true,
//   // swcMinify: true,
//   images: {
//     disableStaticImages: true,
//   },
// });

// module.exports = nextConfig;
const withReactSvg = require('next-react-svg');
const path = require('path');

module.exports = withReactSvg({
  include: path.resolve(__dirname, 'app/assets'),
  webpack(config, options) {
    return config;
  },
});
