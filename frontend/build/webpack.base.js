const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  output: { filename: 'js/[name].js' },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules',
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']), // ?
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html'
    })
  ]
}
