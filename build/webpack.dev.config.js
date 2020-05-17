const config = require("./webpack.base.config");
const merge = require("webpack-merge");

module.exports = merge(config, {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    host: "0.0.0.0",
    port: 3000,
    contentBase: "./disk",
    inline: true,
    historyApiFallback: true,
    overlay: {
      errors: true,
    },
  },

  // plugins: [new webpack.HotModuleReplacementPlugin()],
});
