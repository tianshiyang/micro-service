import { getApps, Apps } from "./apis"
import { importHtmlEntry } from "./importHtmlEntry"
import { getNextRouter, getPrevRouter } from "./rewriteRouter"

// 处理路由
export const handleRouter = async () => {
  // 2. 匹配子应用
  const prevApp = getApps().find(item => getPrevRouter().startsWith(item.activeRule))
  console.log(getPrevRouter(), 'getPrevRouter')

  // 2.1 获取当前路由的路径
  const nextRouter = getNextRouter()
  // 2.2 去apps里面找
  const app = getApps().find(item => nextRouter.startsWith(item.activeRule))

  if (prevApp) {
    // 如果有上一个应用则销毁
    await unmount(prevApp)
  }

  if (!app) {
    // 没找到 -> 可能的情况是主应用或者本就不存在的路由，则什么都不做
    return
  }

  // 3 处理HTML资源
  const { template, execScripts } = await importHtmlEntry(app.entry)

  // 3.1 获取主应用传过来的选择器
  const container = document.querySelector(app.container)
  container?.appendChild(template);

  
  (window as any)['__POWERED_BY_QIANKUN__'] = true

  // 4.1 获取子应用的生命周期函数
  const appExports = await execScripts()
  
  app.bootstrap = appExports.bootstrap
  app.mount = appExports.mount
  app.unmount = appExports.unmount

  await bootstrap(app)
  await mount(app)
}

const bootstrap = async (app: Apps) => {
  await app.bootstrap?.()
}

const mount = async (app: Apps) => {
  await app.mount?.({
    container: document.querySelector(app.container)!
  })
}

const unmount = async (app: Apps) => {
  await app.unmount?.()
}