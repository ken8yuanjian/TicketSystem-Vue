<template>
    <div >
        <h2> demo </h2>
        <h3>{{ v_abc1_1 }} + {{ v_abc1_2 }} </h3>
        <h3>{{ v_arrow1(10,15) }} + {{ v_arrow2(5) }}</h3>
        
    </div>
</template>
<script lang="ts" setup name="functions">
    
    //函数默认值
    function abc1(a=10,b=10,c=2){
        return a+b+c
    }
    let v_abc1_1 = abc1() 
    let v_abc1_2 = abc1(5)

    //箭头函数
    let v_arrow1 = (a:number,b:number) => {
        return a+b
    }
    let v_arrow2 = (c:number) => c*3

    
</script>

<style scoped>

</style>