const {
  resolve
} = require('path')


module.exports = function nuxtService() {
  // Register plugin
  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
  })
}
