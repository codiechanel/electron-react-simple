var webpack = require("webpack");
var path = require("path");

var BUILD_DIR = path.resolve(__dirname, ".");
var APP_DIR = path.resolve(__dirname, "src");

var config = {
  entry: APP_DIR + "/index.js",
  // target: 'electron-renderer',
  output: {
    path: BUILD_DIR,
    filename: "bundle.js",
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        exclude: /node_modules/,
        loader: "babel-loader",
        
      },
      { test: /\.css$/, loader: "style-loader!css-loader" }
    ]
  },

};

module.exports = config;
