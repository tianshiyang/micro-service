import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// import { registerMicroApps, start } from 'qiankun'

import { registerMicroApps, start } from '../../src/micro'

createApp(App).use(store).use(router).use(ElementPlus, { locale: zhCn }).mount('#app')

// 注册微应用

registerMicroApps([
  {
    name: 'micro-app-vue2',
    entry: '//localhost:5000',
    container: '#micro-app',
    activeRule: '/micro-vue2'
  }, {
    name: 'micro-app-vue3',
    entry: '//localhost:7000',
    container: '#micro-app',
    activeRule: '/micro-vue3'
  }
])

// 启动
start()
