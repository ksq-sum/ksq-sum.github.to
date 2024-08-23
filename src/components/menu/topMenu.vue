<template>
  <div>
    <ul v-for="item in menudata" :key="item">  
      <li class="cursorLi" @click="ifshowClick(item)">{{item.label}}</li>
      
      <topmenu :options="item['children']" v-show="item.ifshow"></topmenu>
    </ul>
  </div>
</template>
<style scoped src="./index.css"></style>
<script src="./index.js">
</script>
