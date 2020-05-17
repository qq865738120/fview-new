const config = require("./webpack.base.config");
const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const AddAssetHtmlPlugin = require("add-asset-html-webpack-plugin");

const prodConfig = {
  mode: "production",
  devtool: "source-map",

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "css/[name].[contenthash].css",
      chunkFilename: "css/[name].[id].[contenthash].css",
    }),
    new CleanWebpackPlugin(),
    new webpack.DllReferencePlugin({
      manifest: path.join(__dirname, `../dll/vendor.manifest.json`),
    }),
    new AddAssetHtmlPlugin({
      filepath: path.join(__dirname, `../dll/*.js`),
      includeSourcemap: false,
    }),
  ],

  optimization: {
    // 性能配置
    minimizer: [
      new OptimizeCssAssetsPlugin({
        cssProcessor: require("cssnano"), // 使用 cssnano 压缩器
        cssProcessorOptions: {
          reduceIdents: false,
          autoprefixer: false,
          safe: true,
          discardComments: {
            removeAll: true,
          },
        },
      }),
      new TerserPlugin({
        cache: true,
        // parallel: true,
        terserOptions: {
          compress: {
            warnings: true,
            drop_console: true,
            drop_debugger: true,
            pure_funcs: ["console.log"], // 移除console
          },
        },
        sourceMap: true,
      }),
    ],
    splitChunks: {
      chunks: "async", // 提取的 chunk 类型，all: 所有，async: 异步，initial: 初始
      // minSize: 30000, // 默认值，新 chunk 产生的最小限制 整数类型（以字节为单位）
      // maxSize: 0, // 默认值，新 chunk 产生的最大限制，0为无限 整数类型（以字节为单位）
      // minChunks: 1, // 默认值，新 chunk 被引用的最少次数
      // maxAsyncRequests: 5, // 默认值，按需加载的 chunk，最大数量
      // maxInitialRequests: 3, // 默认值，初始加载的 chunk，最大数量
      // name: true, // 默认值，控制 chunk 的命名
      cacheGroups: {
        // 配置缓存组
        vendor: {
          name: "vendor",
          chunks: "initial",
          priority: 10, // 优先级
          reuseExistingChunk: false, // 允许复用已经存在的代码块
          test: /node_modules\/(.*)\.js/, // 只打包初始时依赖的第三方
        },
        common: {
          name: "common",
          chunks: "initial",
          // test: resolve("src/components"), // 可自定义拓展你的规则
          minChunks: 2,
          priority: 5,
          reuseExistingChunk: true,
        },
      },
    },
    runtimeChunk: true,
  },
};

// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
//   .BundleAnalyzerPlugin;
// prodConfig.plugins.push(new BundleAnalyzerPlugin());

module.exports = merge(config, prodConfig);
