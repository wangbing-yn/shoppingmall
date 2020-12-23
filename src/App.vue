<template>
  <div id="app">
    <!-- <router-link to="/home" tag="button">首页</router-link> -->
    <!-- <router-link to="/about">关于</router-link> -->
    <!-- <button @click="homeclick">点击</button> -->
    <!-- <Home></Home> -->
    <router-view></router-view>
 
  </div>
</template>

<script>


export default {
  data() {
    return {
      person_con: false,
    };
  },
  methods: {
    
  },
  components:{
    
  }
};
</script>

<style>
</style>
