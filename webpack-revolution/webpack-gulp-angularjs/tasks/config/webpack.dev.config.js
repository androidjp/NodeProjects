/** Created by CUIJA on 05-19-2017.*/

var os = require('os');
var webpack = require('webpack');
var merge = require('webpack-merge');

var HtmlWebpackPlugin = require('html-webpack-plugin');


var baseConfig = require('./base.config');
var webpackBaseConfig = require('./webpack.base.config');

var pathUtil = require('../util/path-util');


const PROTOCOL = 'http://';
const HOST = '127.0.0.1';///一般会换成 机器名：这样，同事和自己的浏览器访问都可见。
const PORT = 5001;

var webpackDevConfig = merge(webpackBaseConfig, {
  devtool: 'source-map',
  output: {
    path: pathUtil.root(baseConfig.dir.build),
    publicPath: PROTOCOL + HOST + ':' + PORT, /// 运行时，提供路径的前缀。
    filename: '[name].bundle.js',///因为本地操作，每次都生成最新的代码，不用考虑文件缓存的问题，所以：bundle.js 即可
    sourceMapFilename: '[name].bundle.js.map',
    chunkFilename: '[id].chunk.js'
  },
  devServer: {
    host: HOST,
    port: PORT
  },
  plugins: [
    new webpack.DefinePlugin({///将运行环境设置为 development（判断是否是 开发环境）
      'process.env': {
        NODE_ENV: '"development"'
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module) {
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            pathUtil.root('node_modules')
          ) === 0
        );
      }
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      favicon: 'src/favicon.ico'
    }),

      ///以下两句是开发时用：
    new webpack.HotModuleReplacementPlugin(),///局部热刷新
    new webpack.NoEmitOnErrorsPlugin()/// error log
  ]
});

module.exports = webpackDevConfig;