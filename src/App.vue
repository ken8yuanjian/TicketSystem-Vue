<template>
    <div>
       <router-view name="top"></router-view> 
       <div class="leftright">
        <router-view name="left"></router-view> 
       <router-view name="right"></router-view> 
       </div>
       
    </div>
</template>

<script lang="ts" setup name="App">





</script>

<style scoped>
.leftright{
    display: flex;
}
</style>