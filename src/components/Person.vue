<template>
    <div class="person">
        <h2>
            求和：{{ sum }}
        </h2>
        <button @click="changeSum"> 点我累加 </button>
        <h3>
            姓名:{{ person.name }}  年龄:{{ person.age }}
        </h3>
        <button @click="changeAge"> 点我增加年龄 </button>

        <h3>
            品牌:{{ car.brand }}  价格:{{ car.price }}
        </h3>
        <button @click="changeBrand"> 点我修改品牌 </button>
        <button @click="changePrice"> 点我修改价格 </button>
    </div>

</template>
<script lang="ts" setup name="Person">
import { ref ,watch} from "vue"; 
    let sum =ref( 0 )
    
    
    function changeSum(){
        sum.value+=1
    }

    //监视ref/reactive 声明的响应式基本类型变量
    watch (sum, (newValue,oldValue) =>{
        console.log(newValue,oldValue)
    })

    let person = ref({name:'张三',age:18})
    function changeAge(){
        person.value.age +=1
    }

    //监视ref/reactive 声明的响应式对象类型变量，启用deep配置项监视对象的字段, 
    //监视reactive默认的是深度监视,且不可关闭（deep:false 失效)
    watch(person,(newValue,oldValue)=>{
        console.log(newValue,oldValue);
        if (newValue.age>=30)
            person.value.age = 30

    },{deep:true})

    let car =ref({brand:'奔驰',price:100,yh:'8L/100km' ,mirror:{left:'left',right:'right'} })
    function changeBrand(){
        car.value.brand+='~'
    }
    function changePrice(){
        car.value.price+=1
    }
    //监视一个函数的返回值，可以实现监听某个对象的字段，且字段是基本类型
    watch( ()=>{return car.value.price}, (newValue,oldValue) =>{
        console.log(newValue,oldValue)
    })
    //字段是对象，可以直接监视，也可以写成函数，建议写成函数（这样直接对car赋值，mirror也能被监视）
    watch(car.value.mirror, (newValue,oldValue) =>{
        console.log(newValue,oldValue)
    })

    //监视数组
    watch([()=> car.value.brand,()=>car.value.yh],(newValue,oldValue) =>{
        console.log(newValue,oldValue)
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