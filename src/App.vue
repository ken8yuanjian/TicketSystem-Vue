<template>
    <div>
       <router-view name="top"></router-view> 
       <div class="leftright">
        <router-view name="left"></router-view> 
       <router-view name="right"></router-view> 
       </div>
       
    </div>
</template>

<script lang="js" setup name="App">

import {MyAnimal ,MyCat} from "@/demo/function_prototype.js"

let a = new MyAnimal(0,"aaa","descaaaaa")
console.log('a.prototype',a.prototype)
console.log('a.__proto__',a.__proto__)
console.log(MyAnimal.prototype===a.__proto__)

let cat1 = new MyCat(1,"cat1","cat1",4)
console.log('cat1',cat1)
console.log('cat1.name',cat1.name)
cat1.showMe()
let cat2 = new MyCat(2,"cat2","cat2",4)
console.log('cat2',cat2)
console.log('cat2.name',cat2.name)
cat2.showMe()



</script>

<style scoped>
.leftright{
    display: flex;
}
</style>