const path = require('path');
module.exports = {
  mode: 'development',
  entry: './index',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: "bundle.js"
  },
  module: {
    rules: [{
      test: /.jsx?$/,
      loader: 'babel-loader',
      query: {
        presets: ["@babel/preset-env", '@babel/preset-react'],
        plugins: ['@babel/plugin-proposal-class-properties', 'react-hot-loader/babel']
      }
    },
    {
      test: /\.(js|jsx|tsx|ts)?$/,
      include: /node_modules/,
      use: ['react-hot-loader/webpack'],
    }]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx']
  },
  devtool: 'source-map',
  devServer: {
    // contentBase: path.join(__dirname, '/dist/'),
    inline: true,
    host: 'localhost',
    port: 3000,
  }
};