<template>
    <div >
        <h2> vars </h2>
        <h3> {{ name  }} + {{ age }}</h3>
        <button @click="m()"> 方法</button>
        <h3> {{ arr1  }} + {{ arr2 }}</h3>
        <div v-html="html">
        </div>
    </div>
</template>
<script lang="ts" setup name="vars">
    
    //变量解构,对象
    let obj ={
        name:'张三',
        age:19,
        m:function (){
            alert(this.name + this.age)
        }
    }
    let {name ,age,m} =obj

    //变量结构，数组
    let arr =['monster','apple','hello']
    let [arr1,arr2] = arr

    //模板字符串，可以换行，可以变量替换
    let html =`<ul>
                    <li> 沈腾</li>
                    <li> 马丽</li>
                    <li> ${arr1}</li>
        <ul/>`

    
</script>

<style scoped>

</style>