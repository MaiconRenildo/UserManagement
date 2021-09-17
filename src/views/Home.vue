<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png"><br>
    <router-link to="/about">About</router-link> | 
    <router-link to="/login">Login</router-link> | 
    <router-link to="/register">Register</router-link> | 
    <router-link to="/admin/users">Users</router-link> | 
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
