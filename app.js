var config = require('config');
var express = require('express');
var logger = require('morgan');

var app = new express();

// ## Middleware

app.use(logger('dev'));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname));

// ## Routes
if (config.env === 'dev') {
  // In dev, will use in-memory bundle.js that automatically watches for changes:
  var webpackMiddleware = require('webpack-dev-middleware');
  var webpack = require('webpack');
  var webpackConfig = require('./webpack.config.js');
  app.use(webpackMiddleware(webpack(webpackConfig), {}));
}

app.listen(config.port, function () {
  console.log('Server running on port ' + config.port);
});