const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");
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

module.exports = {
  devtool: "source-map",

  entry: path.join(__dirname + "./../src/index.tsx"),

  output: {
    path: path.join(__dirname + "./../dist/client"),
    filename: "js/[name].[chunkhash].js",
  },

  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              //1024 == 1kb
              //小于10kb时打包成base64编码的图片否则单独打包成图片
              limit: 10240,
              name: path.join("img/[name].[hash:7].[ext]"),
            },
          },
        ],
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10240,
              name: path.join("font/[name].[hash:7].[ext]"),
            },
          },
        ],
      },
      {
        test: /(\.js|\.jsx|\.tsx|\.ts)$/,
        use: {
          loader: "babel-loader",
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          {
            loader:
              APP_ENV !== "dev" ? MiniCssExtractPlugin.loader : "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
            },
          },
          {
            loader: "postcss-loader",
          },
        ],
      },
    ],
  },

  plugins: [
    new webpack.BannerPlugin("版权所有，翻版必究"),
    new HtmlWebpackPlugin({
      template: path.join(__dirname + "./../src/public/index.html"),
      inject: true,
      minify: {
        removeComments: true, // 去掉注释
        collapseWhitespace: true, // 去掉多余空白
        removeAttributeQuotes: true, // 去掉一些属性的引号，例如id="moo" => id=moo
      },
    }),
    new ScriptExtHtmlWebpackPlugin({
      //`runtime` must same as runtimeChunk name. default is `runtime`
      inline: /runtime\..*\.js$/,
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
    new webpack.DefinePlugin(defineEnv),
  ],

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
};
