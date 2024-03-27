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


<script lang="ts" setup name="Person">
    import { ref } from "vue";
    let name = ref('张小三') //注意，此时name 是响应式
    let age = ref(16)
    let tel = '13777777777'

    console.log(1,name)
    console.log(2,age)
    console.log(3,tel)  //查看控制台就能发现响应式变量和非响应式变量的区别

    //方法
    function changeName() {
        name.value = '李四' //响应式变量必须操作.value
        console.log(name.value)
    }
    function changeAge() {
        age.value += 1
        console.log(age.value)
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