<template>
    <div class="car">
        <h2> 一辆{{ car.brand }},价值{{ car.price }}万</h2>
        <button @click="changePrice"> 修改价格 </button>
        <br>
        <h2>游戏列表</h2>
        <ul>
            <li v-for="g in games" :key="g.id">{{ g.name }}</li>
        </ul>
        <button @click="changeGamesName">修改游戏名称</button>
    </div>

</template>
<script lang="ts" setup name="Car">
    import { ref } from "vue"; //对象类型的响应数据
    let car = ref( {brand:'奔驰',price:100})
    let games =ref([
    {id:'1',name:'王者荣耀'},
    {id:'2',name:'吃鸡'},
    {id:'3',name:'三国志'},
    ])
    console.log(car)
    console.log(games)
    function changePrice(){
        car.value.price+=1;
    }
    function changeGamesName(){
        games.value[0].name = '流星蝴蝶剑'
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