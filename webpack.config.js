const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './build',
    port: 3000
    // open: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.htm',
      filename: 'index.htm'
    }),
    new MiniCssExtractPlugin(),
    new ESLintPlugin()
  ]
}
