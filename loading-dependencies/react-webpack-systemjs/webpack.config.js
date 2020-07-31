const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const presetEnvOptions = { useBuiltIns: "entry", modules: false, corejs: 2 };

module.exports = {
  entry: path.resolve(__dirname, "src/index.tsx"),
  mode: "production",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "system",
    //publicPath: "/dist",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(tsx?|js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-react",
              ["@babel/preset-env", presetEnvOptions],
              "@babel/preset-typescript",
            ],
            plugins: [
              "babel-plugin-dev-expression",
              ["@babel/plugin-proposal-decorators", { legacy: true }],
              "@babel/plugin-proposal-class-properties",
              "@babel/plugin-proposal-object-rest-spread",
            ],
          },
        },
      },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
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
  devServer: {
    historyApiFallback: true,
    port: 9090
  },
  externals: ["styled-components", "react", "react-dom"]
};
