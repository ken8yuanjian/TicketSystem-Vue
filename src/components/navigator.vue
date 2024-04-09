<!-- 经典布局的左侧navigator区-->
<template>
    <div class="default">
        导航拦
        <div>
            <ul>
                <li> <router-link to="/users">Users</router-link> </li>
                <li> Rooms </li>
                <li> <router-link to="/films">Films</router-link> </li>
                <li>  Orders </li>
            </ul>
        </div>
    </div>
</template>
<script lang="ts" setup name="navigator">
    
</script>

<style scoped>
.default{
    flex: 1.2;
    height: 1000px;
    border-color:cornflowerblue;
    border-width: 1px;
    border-style: solid;
}
</style>