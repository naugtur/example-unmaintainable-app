module.exports = {
  entry: './src/frontend/index.jsx',
  devtool: 'source-map',
  output: {
    path: './src/front/js/',
    filename: 'build.js'
  },
  resolve: {
      modulesDirectories: ["node_modules"],
      extensions: ["", ".js", ".jsx"]
  },
  module: {
      loaders: [{
          test: /\.jsx|\.js$/,
          exclude: /node_modules/,
          loader: "babel"
      }, {
          test: /\.json$/,
          loader: "json"
      }]
  },
};
