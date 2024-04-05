<template>
    <div >
        <h2> promise </h2>
        <h3>{{ text }}</h3>
    </div>
</template>
<script lang="ts" setup name="promise_">
import { ref } from 'vue';

    //promise 是es6提供的异步编程的解决方案

    let p:Promise<string> = new Promise(function(resolve,reject){
        const xhr = new XMLHttpRequest();
        xhr.open("GET","https://api.apiopen.top/getJ")
        xhr.send()
        console.log('promise 方法执行了')
        xhr.onreadystatechange = function(){
            if (xhr.readyState === 4){
                if (xhr.status>=200 && xhr.status<=300)
                    resolve(xhr.response)
                else
                    reject(xhr.status)
            }
        }
    })
    
    let text=ref('')
    //开始调用异步编程
    console.log('async request...')
    p.then(function(value){//成功回调
        text.value = value
    },
    function(reason){//失败回调
        console.log( reason)
    })
    console.log('async end...')
    
    
    
</script>

<style scoped>

</style>