<template>
    <div class="default">
        <h3> 用户信息 </h3>
        <ul>
            <!--li v-for="f in httpResult.data " :key="f.id">
              {{f.id }} , {{ f.name }}
            </li-->
        </ul>
        <table>
            <thead>
                <tr>
                    <th>用户名</th>
                    <th>姓名</th>
                    <th>电话</th>
                    <th>余额</th>
                    <th>角色</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="f in httpResult?.data " :key="f.id">
                    <td>{{ f.username }}</td>
                    <td>{{ f.name }}</td>
                    <td>{{ f.tel }}</td>
                    <td>{{ f.amount }}</td>
                    <td>---</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script lang="ts" setup name="Users">

import { ref } from 'vue'
import axios from 'axios'
import { type HttpReuslt } from '@/types/httpResult'
let httpResult = ref<HttpReuslt>()
async function users() {
    //此处开始异步执行
    try {
        let result = await axios.get('/api/users')  //es8 异步编程新特性
        httpResult.value = result.data //此处等待异步完成
        console.log(httpResult)
    } catch (error) {
    }
}
users()








</script>

<style scoped>
.default {
    flex: 8.8;
    border-color: cornflowerblue;
    border-width: 1px;
    border-style: solid;

}
</style>