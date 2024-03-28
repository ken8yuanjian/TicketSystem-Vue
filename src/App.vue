<template>
<!-- html 内容 -->
<div class="style1">
    <Person v-if="isShow" />
</div>
</template>

<script lang="ts" setup name="App">
//js 或 ts 内容 
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated } from 'vue';
    import Person  from "@/components/Person.vue"
    import { ref } from "vue";
    let isShow = ref(true)

    onBeforeMount(()=>{
       console.log('App挂载前') 
    })
    onMounted(()=>{
        console.log('App挂载后')
    })
    onBeforeUpdate(()=>{
        console.log('App更新前')
    })
    onUpdated(()=>{
        console.log('App更新后')
    })
    onBeforeUnmount(()=>{
        console.log('App卸载前')
    })
    onUnmounted(()=>{
        console.log('App卸载后')
    })

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