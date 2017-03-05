var path = require('path');
module.exports = {
  entry: ['./app/index.js'],//entry point for application
  output: {
    path: path.join(__dirname, './build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.js$/, //regular exp that takes all the js files
        exclude: /node_modules/ //to exclude all the js files of node_modules for babel to transpile
      }
    ]
  },
  devServer: {
    port: 3000,
    contentBase: './build',
    inline: true //that allows automatic live update
  }
}
