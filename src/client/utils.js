
// 判断服务端or客户端 服务端没有window全局对象
export const isSSR = typeof window === 'undefined';