module.exports = {
  // Entry point that webpack will start from to determine requires:
  entry: __dirname + '/public/scripts/main.js',
  
  // Output for built application script:
  output: {
    path: __dirname + '/public/scripts/',
    filename: '/scripts/bundle.js'
  },
  module: {
    // Optional loader for various file types (CJS and AMD are built-in):
    loaders: [
      { test: /\.coffee/, loader: 'coffee-loader' },
      { test: /\.css/, loader: 'style-loader!css-loader' }, // ! is piping into multiple loaders
      { test: /\.es6/, loader: 'babel-loader' },
      { test: /\.html/, loader: 'html' },
      { test: /\.jade/, loader: 'html!jade-html' },
      { test: /\.json/, loader: 'json-loader' },
      { test: /\.less/, loader: 'style-loader!css-loader!less-loader' },
      { test: /\.md/, loader: 'html!markdown' }
    ]
  },
  resolve: {
    // Short names to simplify require calls, e.g. `require('jquery');` etc.
    alias: {
      jquery: __dirname + '/public/scripts/bower_components/jquery/dist/jquery.js',
      knockout: __dirname + '/public/scripts/bower_components/knockout/dist/knockout.debug.js',
      'knockout-punches': __dirname + '/public/scripts/bower_components/knockout.punches/knockout.punches.js'
    },
    
    // Extensions here can be left off in require calls, e.g. `require('Example');` etc.
    extensions: ['', '.coffee', '.es6', '.js', '.json']
  }
};
