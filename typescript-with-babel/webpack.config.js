'use strict';

var webpack = require('webpack');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var path = require('path');
var nodeEnv = 'development';

module.exports = {
  entry: {
    polyfills: './src/polyfills',
    vendor: './src/vendor',
    main: './src/main',
  },
  output: {
    path: path.join(__dirname, 'dist/js'),
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js'
  },

  devtool: 'source-map',

  resolve: {
    extensions: ['.ts', '.js'],
    mainFields: ["jsnext:main", 'main', 'browser']
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'babel-loader!ts-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015-native-modules']
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({'process.env': { NODE_ENV: JSON.stringify(nodeEnv) }}),
    new CommonsChunkPlugin({ name: ['polyfills', 'vendor', 'main'].reverse(), minChunks: Infinity })
  ]
}
