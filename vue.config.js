const path = require('path');

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: 'examples/main.ts',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  chainWebpack: (config) => {
    // 新增一个 ~ 指向 packages 目录, 方便示例代码中使用
    config.resolve.alias
      .set('~', path.resolve('components'));
  }
})
