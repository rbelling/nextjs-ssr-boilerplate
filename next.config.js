const withPlugins = require("next-compose-plugins");
const withCSS = require("@zeit/next-css");

module.exports = withPlugins([
  [
    withCSS,
    {
      cssModules: true,
      cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: "[local]---[hash:base64:4]"
      }
    }
  ]
]);
