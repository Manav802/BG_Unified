const withPlugins = require('next-compose-plugins');
const optimizedImages = require('@mrroll/next-optimized-images');

module.exports = withPlugins([
  [optimizedImages, {
    inlineImageLimit: -1,
    mozjpeg: {
      quality: .2,
    },
   webp:{
     preset: 'default',
     quality: .2,
  },
  pngquant:{
    speed: 3,
      strip: true,
      verbose: true,
  },
  }],
]);
