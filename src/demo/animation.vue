<template>
    <div >
        <h2   > animation </h2>
        <input type ="button" value ="切换" @click="flag = !flag " />
        <Transition>
        <h2 v-if ="flag" > 代码示例 </h2>
        </Transition>

        <Transition enter-active-class="animate__animated animate__bounceIn" leave-active-class="animate__animated animate__bounceOut">
        <h2 v-if ="flag"   > animate.css 示例 </h2>
        </Transition>
        
    </div>
</template>
<script lang="ts" setup name="functions">
    import{ref} from 'vue'
    import  'animate.css'
    let flag = ref(true)
    
    
</script>

<style>
.v-enter,
.v-leave-to{
    opacity: 0;
    transform: translateX(150px);
}
.v-enter-active,
.v-leave-active{
    transition: all 1s ease;
}
</style>