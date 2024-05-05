const path = require('path');
const HtmlWebPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [new HtmlWebPlugin({
    title: 'Restaurant Page',
    template: './src/index.html'
  })],
};