const withPlugins = require('next-compose-plugins');
const optimizedImages = require('@mrroll/next-optimized-images');

module.exports = withPlugins([
  [optimizedImages, {
    inlineImageLimit: -1,
    mozjpeg: {
      quality: 15,
    },
    pngquant: {
      speed: 4,
      quality: [0.10, 0.25],
      verbose: true,
    }
  }],
]);
