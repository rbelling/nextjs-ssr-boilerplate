const withPlugins = require("next-compose-plugins");
const withCSS = require("@zeit/next-css");
const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");
const withSass = require("@zeit/next-sass");

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
