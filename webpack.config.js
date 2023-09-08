const path = require('path');

module.exports = {
  // ... alte configurații webpack ...

  resolve: {
    fallback: {
      http: require.resolve('stream-http'),
      https: require.resolve('https-browserify'),
      util: require.resolve('util/'),
      zlib: require.resolve('browserify-zlib'),
      assert: require.resolve('assert/'),
      stream: require.resolve('stream-browserify'),
      url: require.resolve('url/'),
    },
  },
};
