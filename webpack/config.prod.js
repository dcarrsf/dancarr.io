const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Start at the context path
  context: path.resolve(__dirname, '../client/jsx'),
  // Entry point...
  entry: {
    app: './main.jsx',
  },
  // Output endpoint (production)
  output: {
    path: path.resolve(__dirname, '../build/prod/js'),
    filename: 'app.bundle.min.js',
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
        use: 'file-loader?name=../img/[name].[ext]'
      }, {
          test: /\.(eot|ttf|woff|woff2|svg)$/i,
          loader: `file-loader?name=/../fonts/[name].[ext]`,
      }
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
    // Minimize the bundle
    new webpack.optimize.UglifyJsPlugin()
  ],
};
