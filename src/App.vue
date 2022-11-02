
<template>
  <div>
    <Menu></Menu>
    <div><router-link class="btn btn-primary" to="/home">Go to Home</router-link>
    <router-link class="btn btn-primary" to="/about">Go to About</router-link></div>
  <div>
    <h2>hola </h2>
    <router-view></router-view>
  </div>
  </div>
</template>
<script>
import Menu from "./components/Menu.vue";
export default {
  name: 'App',
  components:{
    Menu
  }

}

</script>