
module.exports = {
  plugins: [
    require('postcss-import'),
    require('autoprefixer'),
    require('css-mqpacker'),
    require('cssnano')({
      preset:[
        'default',{
          discardComments:{
            removeAll:true,
          }
        }
      ]
    })
  ]
}
