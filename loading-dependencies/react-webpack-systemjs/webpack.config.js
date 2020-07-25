const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
//const presetEnvOptions = { useBuiltIns: "entry", modules: false, corejs: 2 };

module.exports = {
  entry: path.resolve(__dirname, "src/entry.js"),
  mode: "development",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    //libraryTarget: "system",
    publicPath: "/dist",
  },
  module: {
    rules: [
      {
        test: /\.(tsx?|js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            //babelrc: false,
            presets: [
              "@babel/preset-react",
            ],
            plugins: [
              "babel-plugin-dev-expression",
              ["@babel/plugin-proposal-decorators", { legacy: true }],
              "@babel/plugin-proposal-class-properties",
              "@babel/plugin-proposal-object-rest-spread"
            ]

          },

        },
      },
      { parser: { system: false } }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, "index.html"),
      filename: "index.html",
      inject: false,
    }),
  ],
  externals: {
    "styled-components": "styled-components",
    react: "react",
    "react-dom": "react-dom"
  },
  devtool: "sourcemap"
};
