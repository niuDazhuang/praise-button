const merge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const base = require('./webpack.base.js')

module.exports = merge(base, {
  mode: 'production',
  devtool: '#source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader']
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/[name].css')
  ]
})
