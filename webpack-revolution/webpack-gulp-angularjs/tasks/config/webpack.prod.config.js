/** Created by CUIJA on 05-19-2017.*/

var webpack = require('webpack');
var merge = require('webpack-merge');///继承的方式

var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var baseConfig = require('./base.config');
var webpackBaseConfig = require('./webpack.base.config');

var pathUtil = require('../util/path-util');


var webpackProdConfig = merge(webpackBaseConfig, {/// merge(父config) ，表示 继承

  devtool: 'source-map',/// 构建的时候，在浏览器中，是怎么加载的
  output: {
    path: pathUtil.root(baseConfig.dir.dist),
    filename: '[name].[chunkhash].js',///会根据 版本不同，都会生成一个hashcode，相当于加时间戳
    chunkFilename: '[id].[chunkhash].js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({///会把所有位于node_muodules/目录下的包，整合生成一个vendor.js文件，输出
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
    new webpack.optimize.UglifyJsPlugin({///压缩js 和 css 文件的体积（变丑代码）
      compress: {
        warnings: false
      },
      sourceMap: true
    }),
    new webpack.LoaderOptionsPlugin({//优化配置（变量名混淆）
      minimize: true
    }),
    new OptimizeCssAssetsPlugin({//优化配置
      cssProcessorOptions: {
        safe: true,
        discardComments: {
          removeAll: true
        }
      },
      canPrint: false
    }),
    new ExtractTextPlugin({//自己写的css，都会整合并导出为xx.xxx.css文件
      filename: '[name].[chunkhash].css'
    }),
    new HtmlWebpackPlugin({
      template: './' + baseConfig.dir.src + '/index.html',
      favicon: './' + baseConfig.dir.src + '/favicon.ico',
      inject: true,
      minify: {/// 将html进行压缩（代码变成了一行）
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: false
      },
      chunksSortMode: 'dependency'
    })
  ]
});

module.exports = webpackProdConfig;