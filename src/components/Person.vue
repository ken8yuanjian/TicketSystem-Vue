<template>
    <div class="person">
        {{ person.id + person.name + person.age }}
    </div>

</template>
<script lang="ts" setup name="Person">
    import { type PersonInter ,type PersonList } from "@/types";
    let person:PersonInter ={id:'abc',name:'张三',age:9}
    
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