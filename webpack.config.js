/* eslint-disable */
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/frontend/index.jsx',
  devtool: 'source-map',
  output: {
    path: './dist/',
    filename: 'bundle.js'
  },
  resolve: {
    modulesDirectories: ["node_modules"],
    extensions: ["", ".js", ".jsx"]
  },
  module: {
    loaders: [
      {
        test: /\.jsx|\.js$/,
        exclude: /node_modules/,
        loader: "babel"
      },
      {
        test: /\.json$/,
        loader: "json"
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style", "css?sourceMap!sass?sourceMap"),
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin("bundle.css"),
  ],
};
