const withPlugins = require("next-compose-plugins");
const withCSS = require("@zeit/next-css");
const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");
const withSass = require("@zeit/next-sass");

const withMarkdownLoader = (nextConfig = {}) => {
  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      // if (!options.defaultLoaders) {
      //   throw new Error(
      //     "This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade"
      //   );
      // }
      //
      // const { analyzeServer, analyzeBrowser } = nextConfig;
      // const { bundleAnalyzerConfig: { browser = {}, server = {} } = {} } = nextConfig;
      // const { isServer } = options;
      //
      // if ((isServer && analyzeServer) || (!isServer && analyzeBrowser)) {
      //   const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
      //   config.plugins.push(
      //     new BundleAnalyzerPlugin(
      //       Object.assign(
      //         {},
      //         {
      //           analyzerMode: "server",
      //           analyzerPort: isServer ? 8888 : 8889,
      //           openAnalyzer: true
      //         },
      //         isServer ? server : browser
      //       )
      //     )
      //   );
      // }

      config.module.rules.push({
        test: /\.md$/,
        use: [
          {
            loader: "html-loader"
          },
          {
            loader: "markdown-loader",
            options: {
              escapeHtml: true
              /* optional config here */
            }
          }
        ]
      });

      if (typeof nextConfig.webpack === "function") {
        return nextConfig.webpack(config, options);
      }

      return config;
    }
  });
};

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
  ],
  withSass,
  withMarkdownLoader,
  [
    withBundleAnalyzer,
    {
      analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
      analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
      bundleAnalyzerConfig: {
        server: {
          analyzerMode: "static",
          reportFilename: "../performance/reports/bundle_server.html"
        },
        browser: {
          analyzerMode: "static",
          reportFilename: "../performance/reports/bundle_client.html"
        }
      }
    }
  ]
]);
