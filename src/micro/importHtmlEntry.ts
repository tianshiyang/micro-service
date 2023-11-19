import { fetchResource } from "./utils/fetchResource"

export interface AppExports {
  bootstrap: () => void
  mount: () => void
  unmount: () => void
}

/**
 * 注意：直接获取完子应用的代码，不会直接在主应用渲染
 * 1. 客户端渲染需要执行js脚本
 * 2. 浏览器出于安全考虑，innerHTML中的script脚本，不会被执行
 */

// 获取HTML资源
export const importHtmlEntry = async (url: string) => {
  // 3. 请求获取子应用资源 如HTML, CSS, JS
  // 3.1 获取HTML资源
  const html = await fetchResource(url)
  const template = document.createElement('div')
  // 3.2 将获取的HTML资源放到新创建的容器中
  template.innerHTML = html

  // 3.3 获取所有的script标签
  const scripts = template.querySelectorAll("script")

  // 获取所有script的内容
  const getExternalScripts = () => {
    return Promise.all(Array.from(scripts).map(script => {
      const src = script.getAttribute("src")
      if (!src) {
        /**
         * 直接写在HTML中的script脚本
         * <script>console.log(1213)</script>
         * */ 
        return Promise.resolve(script.innerHTML)
      } else {
        /**
         * 外链形式
         * <script src="xxxx" />
         */
        return fetchResource(
          src.startsWith('http') ? src : `${url}${src}`
          // src
        )
      }
    }))
  }

  // 获取执行所有的script脚本
  const execScripts: () => Promise<AppExports> = async () => {
    const scripts = await getExternalScripts()
    // 手动构造CommonJs运行环境 -> 目的，拿到子应用暴露出去的生命周期钩子函数
    const module = {
      exports: {} as AppExports
    }
    const exports = module.exports
    // 注：此时渲染后，没有挂载到主应用的container, 并且不会执行子应用的router
    // 主应用之所以消失，是因为主应用的入口也叫app
    scripts.forEach(code => {
      // eval执行的函数可以访问外部的变量
      eval(code)
    })
    // 执行完代码后，module.exports就是子应用导出的生命周期函数
    return module.exports
  }

  return {
    template,
    getExternalScripts,
    execScripts
  }
}