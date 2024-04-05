<template>
    <div >
        <h2> object </h2>
        
    </div>
</template>
<script lang="ts" setup name="objects">
    //创建对象的三种方式
    //使用对象字面量方式, 一次只能创建一个
    let obj1 ={
        name:'张三',
        age:19,
        m:function (){
            alert(this.name + this.age)
        }
    }
    
    //使用构造函数,通过new 可以反复创建多个对象实例
    function Obj2(name,age){
        this.name = name
        this.age = age
        function m (){
            alert(this.name + this.age)
        }
    }
    let obj2_1 = new Obj2('hente',18)
    let obj2_2 = new Obj2('pite',21)

    
</script>

<style scoped>

</style>