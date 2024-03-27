<template>
    <!-- html 内容 -->
    <div class="person">
        <h2> 姓名:{{ name }}</h2>
        <h2> 年龄:{{ age }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="showTel">查看联系方式</button>
    </div>
</template>

<script lang="ts">
//js 或 ts 内容 
export default {
    name: 'Person',
}
</script>

<script lang="ts" setup>
    let name = '张小三' //注意，此时name 不是响应式
    let age = 16
    let tel = '13777777777'

    //方法
    function changeName() {
        name = '李四'
        console.log(name)
    }
    function changeAge() {
        age += 1
        console.log(age)
    }
    function showTel() {
        alert(tel)
    }
</script>

<style scoped>
/*样式*/
.person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}

button {
    margin: 0 5px;
}
</style>