const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Start at the context path
  context: path.resolve(__dirname, '../client/jsx'),
  // Entry point...
  entry: [
    'webpack-hot-middleware/client?http://localhost:8080',
    './main.jsx',
  ],
  // Output endpoint (development)
  output: {
    path: '/',
    filename: 'js/app.bundle.js',
    publicPath: 'http://localhost:8080/',
  },
  // Add '.jsx' to the resolve.extensions array.
  resolve: {
    extensions: ['.js', '.jsx']
  },
  // Run tasks with loaders...
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: [
          'react-hot-loader',
          'babel-loader'
        ],
      }, {
        test: /\.(sass|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'resolve-url-loader', 
          'sass-loader?sourceMap'
        ]
      }, {
          test: /\.(jpg|png)$/,
          use: 'file-loader?name=img[name].[ext]'
      }, {
          test: /\.(eot|ttf|woff|woff2|svg)$/i,
          loader: `file-loader?name=/../fonts/[name].[ext]`,
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: [{loader: 'eslint-loader', options: {rules: {semi: 0}}}],
      },
    ],
  },
  plugins: [
    // Avoid publishing files when compilation fails
    new webpack.NoEmitOnErrorsPlugin(),
    // Generate the index.html file
    new HtmlWebpackPlugin({
      title: 'Dan Carr | Sr. Frontend Engineer',
      template: '../static/index.ejs',
      filename: '../index.html'
    }),
    // Hot module reloading with node
    new webpack.HotModuleReplacementPlugin()
  ],
};
