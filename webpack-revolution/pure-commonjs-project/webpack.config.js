/** Created by CUIJA on 05-19-2017.*/

var path = require('path');
var webpack = require('webpack');

///这个插件的作用： 会在构建的时候，生成index.html ，根据我们自己做的一个index.html模板，动态插入script，并最终输入到public目录中
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: {//官方命名： 入口文件定义
    main: './src/main.js' /// 命名无所谓，给下面[main]
  },
  output: {
    path: path.resolve('public'),
    publicPath: '',
    filename: '[name].bundle.js',
    chunkFilename: '[id].[hash].chunk.js'
  },
  resolve: {
    extensions: ['.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};