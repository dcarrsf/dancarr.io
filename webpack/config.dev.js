const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Start at the context path
  context: path.resolve(__dirname, '../client/jsx'),
  // Entry point...
  entry: {
    app: './main.jsx',
  },
  // Output endpoint (development)
  output: {
    path: path.resolve(__dirname, '../build/dev/js'),
    filename: '[name].bundle.js',
  },
  // Add '.jsx' to the resolve.extensions array.
  resolve: {
    extensions: ['.js', '.jsx']
  },
  // Run tasks with loaders...
  module: {
    rules: [
      {
        // Transpile ES6
        test: /\.jsx$/,
        use: [
          'babel-loader',
        ],
      },{
        // Transpile SASS
        test: /\.(sass|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'resolve-url-loader', 
          'sass-loader?sourceMap'
        ]
      }, {
          test: /\.(jpg|png)$/,
          use: 'file-loader?name=../img/[name].[ext]'
      }, {
          test: /\.(eot|ttf|woff|woff2|svg)$/i,
          loader: `file-loader?name=/../fonts/[name].[ext]`,
      }, {
        // Lint JavaScript (Airbnb Style Guide)
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
      title: 'Dan Carr | Software Development & Training',
      template: '../static/index.ejs',
      filename: '../index.html'
    }),
  ],
  // Create Sourcemaps for the bundle
  devtool: 'source-map',
};
