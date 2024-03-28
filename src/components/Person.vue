<template>
    <div class="person">
        <h2> 哈哈 </h2>
        <h2> 哈哈 </h2>
        <h2> 哈哈 </h2>
    </div>
</template>
<script lang="ts" setup name="Person">
    import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated } from 'vue';

    
    onBeforeMount(()=>{
       console.log('Person挂载前') 
    })
    onMounted(()=>{
        console.log('Person挂载后')
    })
    onBeforeUpdate(()=>{
        console.log('Person更新前')
    })
    onUpdated(()=>{
        console.log('Person更新后')
    })
    onBeforeUnmount(()=>{
        console.log('Person卸载前')
    })
    onUnmounted(()=>{
        console.log('Person卸载后')
    })
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