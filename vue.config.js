module.exports = {
  configureWebpack: {
    resolve: {
      //@ src
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network'
      }
    }
  }
}
