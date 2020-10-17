module.exports = {
    webpack: config => {
      const alias = { ...config.resolve.alias }
      delete alias.url // alias to native-url
      config.resolve = {
        ...config.resolve,
        alias
      }
      return config
    }
  }