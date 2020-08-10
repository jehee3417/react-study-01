const path = require('path');
module.exports = {
  mode: 'development',
  entry: './index',
  // watch: true,
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: "bundle.js",
    // chunkFilename: '[name].js'
  },
  module: {
    rules: [{
      test: /.jsx?$/,
      loader: 'babel-loader',
      query: {
        presets: [
          "@babel/preset-env"
          , "@babel/preset-react"
        ]
        , plugins: [
          '@babel/plugin-proposal-class-properties'
          , 'react-hot-loader/babel'
        ]
      }
    }]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx']
  },
  devtool: 'source-map',
  devServer: {
    inline: true,
    host: 'localhost',
    port: 3000,
  }
};