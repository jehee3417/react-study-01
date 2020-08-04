const path = require('path')

module.exports = {
  name: 'word-relay-setting'
  , mode: 'development'
  , devtool: 'eval'
  , resolve : {
    extensions: ['.js', '.jsx']
  }
  , entry: {
    app: [
      './client'
    ]
  }

  , module: {
    rules: [{
      test: /\.jsx?/
      , loader: 'babel-loader'
      , options: {
        presets: ['@babel/preset-env', '@babel/preset-react']
        , plugins: ['@babel/plugin-proposal-class-properties', 'react-hot-loader/babel']
      }
    }]
  }
  
  , output: {
    path: path.join(__dirname, 'dist')
    , filename: 'app.js'
    , publicPath: "/dist"
  }
  , devServer: {
    // // contentBase: path.join(__dirname), 
    // publicPath: "/dist", 
    // host: "localhost",
    // overlay: true,
    port: 3000,
    // stats: "errors-only",
    // historyApiFallback: true,
  }
}