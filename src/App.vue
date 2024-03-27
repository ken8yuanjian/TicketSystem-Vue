<template>
<!-- html 内容 -->
<div class="style1">
    <h1> 你好啊</h1>
    <Person/>
</div>
</template>

<script lang="ts">
//js 或 ts 内容 
    import Person from './components/Person.vue';
    export default{
        name:'App',
        components:{Person} //注册组件
    }
</script>

<style>
/*样式*/
.style1{
    background-color: #ff0303 ;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}

</style>