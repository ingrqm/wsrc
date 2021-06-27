/* eslint-disable @typescript-eslint/no-var-requires */
const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const { i18n } = require('./next-i18next.config');

module.exports = withPlugins([[withImages, {}], i18n], {
  target: 'experimental-serverless-trace',
});
