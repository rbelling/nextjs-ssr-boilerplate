const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const withPlugins = require("next-compose-plugins");
const withTypescript = require("@zeit/next-typescript");
const withCSS = require("@zeit/next-css");

module.exports = withPlugins([
  withTypescript({
    webpack(config, options) {
      // Do not run type checking twice:
      if (options.isServer) config.plugins.push(new ForkTsCheckerWebpackPlugin());
      return config;
    }
  }),
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
