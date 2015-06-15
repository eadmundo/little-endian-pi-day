var path = require('path');
var bower_dir = __dirname + '/bower_components';
var HtmlWebpackPlugin = require('html-webpack-plugin');
var Clean = require('clean-webpack-plugin');

var config = {
  addVendor: function (name, path) {
    this.resolve.alias[name] = path;
    this.module.noParse.push(new RegExp(path));
  },
  entry: path.resolve(__dirname, 'app/main.js'),
  resolve: {
    alias: {}
  },
  module: {
    noParse: [],
    loaders: [
      { test: /\.js$/, loader: 'jsx-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'templates/index.html',
      inject: 'body'
    }),
  ]
};

config.addVendor('react', bower_dir + '/react/react.min.js');
config.addVendor('moment', bower_dir + '/moment/min/moment.min.js');

module.exports = function(options) {

  config.output = {
    path: path.resolve(__dirname, options.outputFolder),
    filename: options.outputFilename
  };

  config.plugins.push(
    new Clean([options.outputFolder])
  );

  return config;
};