<template>
    <div class="default">
        <h2> 票务信息 </h2>
        <ul>
            <li v-for="f in data " :key="f.id">
              {{f.id }} , {{ f.name }}
            </li>
        </ul>
        
    </div>
</template>
<script lang="ts" setup name="Films">
    import useFilm from '@/hooks/useFilm';
    import {ref} from 'vue'
    import axios, { Axios, type AxiosResponse } from 'axios'
    import { type HttpReuslt } from '@/types/httpResult'
    //const { httpResult ,films } = useTicket()
    //films()
    let data = ref(Object([{id:0,name:'正在获取...'}]))
    axios.get('/api/films').then(response =>{
        let r :HttpReuslt = response.data
        data.value = r.data
    },reason=>{
        data.value = Object( [{id:0,name:'获取失败'}])
    })
</script>

<style scoped>
.default{
    flex: 8.8;
    border-color:cornflowerblue;
    border-width: 1px;
    border-style: solid;

}
</style>@/hooks/useFilm