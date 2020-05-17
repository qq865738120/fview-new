const webpack = require("webpack");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

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
  ],
  optimization: {
    minimizer: [],
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
