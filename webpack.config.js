module.exports = {
  entry: './src/frontend/index.js',
  devtool: 'source-map',
  output: {
    path: './src/front/js/',
    filename: 'build.js'
  },
  resolve: {
      modulesDirectories: ["node_modules"],
      extensions: ["", ".js", ".vue"]
  },
  module: {
      loaders: [{
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel"
      }, {
          test: /\.json$/,
          loader: "json"
      }, {
          test: /\.vue$/,
          loader: 'vue'
      }]
  },
};
