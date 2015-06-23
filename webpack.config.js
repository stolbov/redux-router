var webpack = require('webpack');

module.exports = {

  entry: {
    app: ["webpack/hot/dev-server", "./lib/client.js"]
  },

  output: {
    path: './dist',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'react-hot!babel'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      }
    ]
  },

  devtool: '#inline-source-map',

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  devServer: {
    contentBase: "./dist",
    hot: true,
    historyApiFallback: true
  }

};
