var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');
config.entry.unshift("webpack-dev-server/client?http://localhost:8080");
var devServer = new WebpackDevServer(webpack(config), {
    // hot: true,
    contentBase: __dirname + '/app',
    publicPath: '/build/'
  }
)//.listen(8080, 'localhost');
devServer.listen(8080, 'localhost');
