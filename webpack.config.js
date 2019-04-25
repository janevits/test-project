const webpack = require('webpack');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        './src/index.js'
    ],
    output: {
      path: __dirname + '/dist',
      publicPath: '/*',
      filename: 'bundle.js'
    },
    devServer: {
      contentBase: './dist',
      hot: true
    },
    module: {
        rules: [
          { test: /\.css$/,
            use: [
              { loader: "style-loader" },
              { loader: "css-loader" }
            ]
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: "babel-loader"
          }, {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: "babel-loader"
          },
          {
            test: /\.scss$/,
            use: [
                { loader: "style-loader" },
                { loader: "css-loader" },
                { loader: "sass-loader" }
              ]
          },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
  };