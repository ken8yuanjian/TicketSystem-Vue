<template>
    <div class="ticket">
        <h2> 票务信息 </h2>
        <ul>
            <li v-for="f in data " :key="f.id">
              {{f.id }} , {{ f.name }}
            </li>
        </ul>
        
    </div>
</template>
<script lang="ts" setup name="Ticket">
    import useTicket from '@/hooks/useTicket';
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
/*样式*/
.ticket {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}

button {
    margin: 0 5px;
}
</style>