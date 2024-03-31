<template>
    <div >
        <h2> promise </h2>
    </div>
</template>
<script lang="ts" setup name="promise_">
import { syncBuiltinESMExports } from 'module';

    //promise 是es6提供的异步编程的解决方案

    let p = new Promise(function(resolve,reject){
        setTimeout(function(){
            let data='数据库中的用户数据'
            resolve(data)   //设置promise对象为成功标记
            //reject(err);  //设置promise对象为失败标记
        },1000)
    })
    
    //开始调用异步编程
    console.log('async start...')
    p.then(function(value){//成功回调
        console.log(value)
    },
    function(reason){//失败回调
        console.log(reason)
    })
    console.log('async end...')
    
    
    
</script>

<style scoped>

</style>