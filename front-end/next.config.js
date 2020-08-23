// next.config.js
const withImages = require('next-images')
module.exports = withImages()
const { PHASE_EXPORT } = require('next/constants')

module.exports = (phase) => {
    if (phase === PHASE_EXPORT) {
      return {
        exportTrailingSlash: true
      }
    }
  
    return {
      /* config options for all phases except export here */
    }
  }