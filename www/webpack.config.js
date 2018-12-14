const path = require('path');
module.exports = function(env) {
  return {
    entry: {
      'app': './index.js'
    },
    output: {
      path: path.resolve(__dirname, 'dist', 'js'),
      filename: '[name].js',
    },
    resolve: {
      extensions: ['.js', '.wasm']
    },
    module: {
      rules: [
        //{
        //  test: /\.js$/,
        //  exclude: [path.resolve(__dirname, 'wasm/js')],
        //  use: 'babel-cli',
        //  //options: { presets: ["es2015"] }
        //},
        {
          test: /\.wasm$/,
          use: 'wasm-loader'
        }
      ]
    },
    mode: 'none'
  }
}
