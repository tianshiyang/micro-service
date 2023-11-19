import { handleRouter } from "./handleRouter"

// 前一个路由
let prevRouter = ""
// 后一个路由
let nextRouter = location.pathname

export const getPrevRouter = () => prevRouter
export const getNextRouter = () => nextRouter

// 重写路由
export const rewriteRouter = () => {
  // 处理history.go(), history.forward(), history.back()事件
  window.addEventListener("popstate", () => {
    handleRouter()
  })

  // 处理pushState -- 通过重写的方式
  const rawPushState = history.pushState
  history.pushState = (...args) => {
    prevRouter = location.pathname
    rawPushState.apply(history, args)
    nextRouter = location.pathname
    handleRouter()
  }

  // 处理replaceState -- 通过重写的方式
  const rawReplaceState = history.replaceState
  history.pushState = (...args) => {
    prevRouter = location.pathname
    rawReplaceState.apply(history, args)
    nextRouter = location.pathname
    handleRouter()
  }
}