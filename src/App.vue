<template>
<!-- html 内容 -->
<div class="style1">
    <Person :first="persons[0]" :second ="persons[1]" />
</div>
</template>

<script lang="ts" setup name="App">
//js 或 ts 内容 
    import Person from './components/Person.vue';

    import { type PersonInter,type PersonList  } from "@/types";
    let persons:PersonList =[
        {id:'1',name:'张三',age:20},
        {id:'1',name:'李四'},
        {id:'1',name:'王五',age:22},
    ]

</script>

<style>
/*样式*/
.style1{
    background-color: #ff0303 ;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}

</style>