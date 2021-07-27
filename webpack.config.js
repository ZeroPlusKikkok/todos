const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    'javascripts/bundle.js': './src/index.jsx',
  },
  output: {
    filename: '[name]',
    path: path.join(__dirname, 'public'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components|public\/)/,
        loader: 'babel-loader',
      },
    ],
  },
};
