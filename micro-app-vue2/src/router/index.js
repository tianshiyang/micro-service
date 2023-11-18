const routes = [{
  path: "/",
  name: "home",
  component: resolve => require(['@/views/index'], resolve),
}]

export default routes