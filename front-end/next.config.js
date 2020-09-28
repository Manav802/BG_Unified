const withPlugins = require('next-compose-plugins');
const optimizedImages = require('@mrroll/next-optimized-images');

module.exports = withPlugins([
  [optimizedImages, {
    inlineImageLimit: -1,
    mozjpeg: {
      quality: 20,
    },
    optipng: {
      optimizationLevel: 5,
    },
  }],
]);
