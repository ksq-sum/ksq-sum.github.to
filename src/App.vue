<template>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  
    <router-view></router-view>
     
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */
html,body,#app{
    top:0;    
    margin: 0;
    padding: 0;
    overflow:hidden;  
}
body{
  
  height: 100vh;
  border-radius: 15px;
  width: 100%;
}
/*阿里巴巴矢量图标库配置，样式写在全局中*/
.icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    /* overflow: hidden; */
}
</style>
