module.exports = {
  devServer : {
    proxy : {
      '/ajax' : {
        target : 'http://m.maoyan.com',
        changeOrigin : true
      },
      /* '/ajax' : {
        target : 'http://maoyan.com',
        changeOrigin : true
      }, */
    }
    
  }
}