//引用createApp 用于创建应用
import { createApp } from "vue";
//引入App根组件
import App from "./App.vue";
//建立路由
import router  from "./router";

createApp(App).use(router).mount('#app');