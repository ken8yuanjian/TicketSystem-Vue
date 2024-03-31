<template>
    <div class="user">
        <h2> 用户信息 </h2>
        <ul>
            <!--li v-for="f in httpResult.data " :key="f.id">
              {{f.id }} , {{ f.name }}
            </li-->
        </ul>
        {{ httpResult }}
    </div>
</template>
<script lang="ts" setup name="User">
    import useUser from '@/hooks/useUser';
    import {ref} from 'vue'
    const { httpResult ,users } = useUser()
    users()
    //if (httpResult != undefined && httpResult.data
    
</script>

<style scoped>
/*样式*/
.user {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}

button {
    margin: 0 5px;
}
</style>