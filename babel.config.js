module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-typescript",
    "@babel/preset-react",
  ],
  plugins: [
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-transform-runtime",
    [
      "styled-jsx/babel",
      { plugins: ["styled-jsx-plugin-stylelint", "styled-jsx-plugin-postcss"] },
    ],
  ],
};
