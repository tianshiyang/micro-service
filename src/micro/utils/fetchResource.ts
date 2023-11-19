// 获取资源的方法
export const fetchResource = (url: string) => fetch(url).then(res => res.text())