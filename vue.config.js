const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/resume',
  transpileDependencies: true,
  lintOnSave: false,
    devServer: {
      proxy: {
          '/api': {
              // 此处的写法，目的是为了 将 /api 替换成 https://www.baidu.com/
              target: 'https://repo.huaweicloud.com/java/jdk/11.0.2+7/jdk-11.0.2_windows-x64_bin.zip',
              // 允许跨域
              changeOrigin: true,
              ws: true,
              pathRewrite: {
                  '^/api': ''
              }
          }
      }
  }
})
