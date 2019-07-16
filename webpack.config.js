const path = require("path");

module.exports = {
  mode: 'development',
  entry: "./js/main-es6.js",
  output: {
    path: path.resolve(__dirname, "js"),
    filename: "main.js"
  },
  module: {
    rules: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: "babel-loader" }
    ]
  }
};