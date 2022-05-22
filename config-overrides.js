/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');

module.exports = function override(config) {
  return {
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        process: 'process/browser',
        stream: 'stream-browserify',
        zlib: 'browserify-zlib',
      },
    },
    plugins: [
      ...config.plugins,
      new webpack.ProvidePlugin({
        process: 'process/browser',
        Buffer: ['buffer', 'Buffer'],
      }),
    ],
  };
};
