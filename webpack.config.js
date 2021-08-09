const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')

//checking which environment we are in
const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  mode: isProduction ? 'production' : 'development',
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
  //source-map is optimized for production
  devtool: isProduction ? 'source-map' : 'inline-source-map',
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
