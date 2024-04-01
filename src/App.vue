<template>
<!-- html 内容 -->
<div class="style1">
    <Ticket />
    <br>
    <!--User / -->
    <!--class_ /-->
</div>


</template>

<script lang="ts" setup name="App">
//js 或 ts 内容 
    import Ticket  from "@/components/ticket.vue"
    //import User from "@/components/user.vue"
    //import vars from "@/demo/vars.vue"
    //import functions from "@/demo/functions.vue";
    //import itretors from "@/demo/itretors.vue"
    //import promise_ from "@/demo/promise_.vue"
    //import class_ from "@/demo/class_.vue"

    import $ from 'jquery'; //es6 导入npm包的语法 等同 const $=require('jquery')
    $('body').css('background','blue')

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