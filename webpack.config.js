const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const javascript = {
  test: /\.(js)$/, // see how we match anything that ends in `.js`? Cool
  use: [{
    loader: 'babel-loader',
    options: { presets: ['es2015'] } // this is one way of passing options
  }],
};

const postcss = {
  loader: 'postcss-loader',
  options: {
    plugins() { return [autoprefixer({ browsers: 'last 3 versions' })]; }
  }
};

const styles = {
  test: /\.(scss)$/,
  use: ExtractTextPlugin.extract(['css-loader?sourceMap', postcss, 'sass-loader?sourceMap'])
};

const uglify = new webpack.optimize.UglifyJsPlugin({ // eslint-disable-line
  compress: { warnings: false }
});

const config = {
  entry: {
    App: './js/index.js'
  },
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [javascript, styles]
  },
  // plugins: [uglify]
  plugins: [
    new ExtractTextPlugin('style.css'),
  ]
};

process.noDeprecation = true;

module.exports = config;
