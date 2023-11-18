import './public-path'
import { createApp } from 'vue'
import App from './App.vue'
import routes from './router'
import store from './store'
import { createRouter, createWebHistory } from 'vue-router'

let instance: any = null
let router = null

function render (props: any = {}) {
  const { container } = props

  router = createRouter({
    history: createWebHistory(window.__POWERED_BY_QIANKUN__ ? '/micro-vue3' : '/'),
    routes
  })

  instance = createApp(App)
  instance.use(store)
  instance.use(router)
  instance.mount(container ? container.querySelector('#app') : '#app')
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

export async function bootstrap () {
  console.log('[vue] vue app bootstraped')
}
export async function mount (props: any) {
  console.log('[vue] props from main framework', props)
  render(props)
}
export async function unmount () {
  instance.unmount()
  instance._container.innerHTML = ''
  instance = null
  router = null
}
