const { defineConfig } = require('@vue/cli-service')
const { name } = require('./package')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 7000,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
      chunkLoadingGlobal: `webpackJsonp_${name}` // webpack 5 需要把 jsonpFunction 替换成 chunkLoadingGlobal
    }
  }
})
