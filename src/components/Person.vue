<template>
    <div class="person">
        姓:<input type="text" v-model ="firstName"> <br>  <!-- v-mode 双向绑定 value 数据到页面单向绑定-->
        名:<input type="text" v-model ="lastName"> <br>
        全名:<span> {{fullName}} </span><br>
        <button @click="changeFullName">修改全名</button>
    </div>

</template>
<script lang="ts" setup name="Person">
    import { ref,computed } from "vue"; //对象类型的响应数据
    let firstName =ref( "zhang")
    let lastName =ref ("san")

    //这么定义的computed属性是只可读，不可修改
    // let fullName =computed( () =>{
    //     return firstName.value.slice(0,1).toUpperCase() + firstName.value.slice(1) + 
    //     lastName.value.slice(0,1).toUpperCase()+lastName.value.slice(1)
    // })
    //这么定义computed属性可修改
    let fullName =computed({
        get(){
            return firstName.value.slice(0,1).toUpperCase() + firstName.value.slice(1) + 
            lastName.value.slice(0,1).toUpperCase()+lastName.value.slice(1)
        },
        set(val){
            const [s1,s2] = val.split('-')
            firstName.value=s1
            lastName.value=s2
        }
    })
    function changeFullName(){
        fullName.value ='Li-Si'
    }
    
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