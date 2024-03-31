<template>
    <div >
        <h2> itretors </h2>
        <h3> {{ str1 }}</h3>
        <h3> {{ str2 }}</h3>
    </div>
</template>
<script lang="ts" setup name="itretors">
import { nextTick } from 'process';

    let xiyou =['孙悟空','唐僧','猪八戒','沙悟净']
    let str1 =""
    // for of 内部使用itretor迭代器
    for (let p of xiyou)
    {
        str1+=p
    }

    //自定义迭代器
    let obj ={name:"张三",age :14, 
                damon:[
                    '黄金',
                    '珠宝',
                    '玉器'
                ],
                //以iterator接口以便实现自定义遍历
            [Symbol.iterator](){
                let index =0
                let damon = this.damon
                return {
                    next:function(){
                        if (index <damon.length)
                            return {value:damon[index++],done:false}
                        else
                            return {value:"",done:true}
                    }
                }

            }
        }
    let str2 =""
    // for of 内部使用itretor迭代器
    for (let p of obj)
    {
        str2+=p
    }

    

    
</script>

<style scoped>

</style>