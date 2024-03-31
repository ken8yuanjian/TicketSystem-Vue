<template>
    <div class="ticket">
        <h2> 票务信息 </h2>
        <ul>
            <!--li v-for="f in httpResult.data " :key="f.id">
              {{f.id }} , {{ f.name }}
            </li-->
        </ul>
        {{ httpResult }}
    </div>
</template>
<script lang="ts" setup name="Ticket">
    import useTicket from '@/hooks/useTicket';
    import {ref} from 'vue'
    const { httpResult ,films } = useTicket()
    films()
    //if (httpResult != undefined && httpResult.data
    
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