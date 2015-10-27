var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');

module.exports = {
  context: __dirname + '/app',
  entry: ['./entry.js'],
  output: {
    path: __dirname + '/app/build',
    filename: "bundle.js"
  },
  resolve: {
    modulesDirectories: ['node_modules', 'bower_components']
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/},
      { test: /\.jade$/, loader: "jade-loader" },
      { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css")
  ]

};
