const path = require('path');
const HWP = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: path.join(__dirname, '/src/index.js'),
  output: {
    filename: 'build.js',
    path: path.join(__dirname, '/dist'),
  },
  watch: true,
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: ['babel-loader']
    }, {
      test: /\.css$/,
      loader: 'style-loader'
    }, {
        test: /\.css$/,
        loader: 'style-loader',
        options: {
          modules: true,
        }
      }]
  },
  plugins: [
    new HWP(
      {
        template: path.join(__dirname, '/index.html'),
        hash: true
      },
    ),
  ],
};
