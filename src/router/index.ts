import { createRouter,createWebHashHistory } from "vue-router";
import header from "@/components/header.vue"
import navigator from "@/components/navigator.vue"
import container from "@/components/container.vue"
import users from "@/components/users.vue"
import films from "@/components/films.vue"
// 1. 定义一些路由
// 每个路由都需要映射到一个组件。
const routes = [
  { path: '/', components: {top:header,left:navigator,right:container }},
  { path: '/users', components: {top:header,left:navigator,right:users }},
  { path: '/films', components: {top:header,left:navigator,right:films }},
]

// 2. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里暂时保持简单
const router = createRouter({
  // 3. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})
export default router;