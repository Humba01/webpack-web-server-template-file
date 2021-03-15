/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */
const path = require('path');

module.exports = {
  entry: './public/js/index.js',
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: './dist',
    port: 4034,
    compress: true,
    lazy: true,
    http2: false,
    https: false,
    inline: false,
    liveReload: true,
    clientLogLevel: 'silent',
  }
};