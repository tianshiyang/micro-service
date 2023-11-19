import { handleRouter } from "./handleRouter"
import { rewriteRouter } from "./rewriteRouter"
interface Props {
  container: Element
}
export interface Apps {
  name: string
  entry: string
  container: string
  activeRule: string
  bootstrap?: (props?: Props) => void
  mount?: (props: Props) => void
  unmount?: (props?: Props) => void
}

let _apps: Apps[] = []

// 导出获取用户注册应用的数据
export const getApps = () => _apps

// 注册APP
export const registerMicroApps = (apps: Apps[]) => {
  _apps = apps
}

// 开启微前端
export const start = () => {
  /* 
    微前端运行原理
    1. 监听路由变化
      - hash路由：window.onhashchange
      - history路由：
        - history.go(), history.forward(), history.back() -- 使用popstate事件
    2. 匹配子应用
    3. 加载子应用
    4. 渲染子应用
   */

    // 1. 监听路由变化
    rewriteRouter()
    // 初始化的时候，执行一次, 防止直接访问子应用
    handleRouter();
}