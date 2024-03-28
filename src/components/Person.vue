<template>
    <div class="person">
        <h2>{{ first.id + first.name + first.age }}</h2><br>
        <h2>{{ second.id + second.name + second.age }}</h2><br>
    </div>

</template>
<script lang="ts" setup name="Person">
    import { type PersonInter } from "@/types";
    import { defineProps } from "vue"; //可以不引入  一般define开头的函数是宏函数，vue中默认可以直接用

    //接收参数，并返回参数对象，不限定类型
    // let props = defineProps(['first','second'])
    // console.log("props",props)
    //接收参数，并返回参数对象，限定类型
    let props = defineProps<{first:PersonInter,second:PersonInter}>()
    console.log("props",props)
    //接收可选、默认值
    //? withDefaults(defineProps)
    
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