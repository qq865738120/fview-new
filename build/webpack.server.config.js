const webpack = require("webpack");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

const isWebpackOptimize = false;

const argv = require("yargs-parser")(process.argv.slice(4));
const APP_ENV = argv.env || "dev";

const env = require("./env.json");
const oriEnv = env[APP_ENV];
Object.assign(oriEnv, {
  APP_ENV: APP_ENV,
});

const defineEnv = {};
for (let key in oriEnv) {
  defineEnv[`process.env.${key}`] = JSON.stringify(oriEnv[key]);
}

const baseConfig = {
  entry: {
    server: path.join(__dirname, "./../src/server/server"),
  },
  mode: "production",
  devtool: false,
  output: {
    path: path.join(__dirname, "./../dist/server"),
    filename: "[name].js",
    publicPath: `/`,
  },
  resolveLoader: {
    alias: { "file-loader": path.resolve(__dirname, "./loader/file-loader") },
  },
  resolve: {
    extensions: [".js", ".json", ".ts", ".tsx"],
    // alias: {
    //   swiper: path.resolve(__dirname, "node_modules/swiper/dist/js/swiper"),
    // },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: [path.resolve(__dirname, "node_modules")],
        loaders: [
          {
            loader: "babel-loader",
          },
          {
            loader: "ts-loader",
            options: {
              configFile: path.join(__dirname, "./../tsconfig-server.json"),
              transpileOnly: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({ cleanOnceBeforeBuildPatterns: `./dist/server` }),
    new webpack.DefinePlugin(defineEnv),
    new webpack.optimize.OccurrenceOrderPlugin(),
    ...(isWebpackOptimize
      ? [new BundleAnalyzerPlugin({ analyzerMode: "static" })]
      : []),
  ],
  optimization: {
    minimizer: [
      new TerserJSPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
            drop_debugger: true,
          },
          output: {
            comments: false,
          },
        },
      }),
    ],
  },
  target: "node",
  node: {
    __filename: false,
    __dirname: true,
    fs: "empty",
    net: "empty",
    tls: "empty",
  },
};

module.exports = baseConfig;
