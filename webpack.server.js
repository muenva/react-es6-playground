var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var config = require('./webpack.config')

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  progress: true,
  inline: true
}).listen(1337, 'localhost', function (err, result) {
  if (err) {
    return console.log(err)
  }

  console.log('Listening at http://localhost:1337/')
})
