<template>
  <div id="app">
    <div class="header">
      <header-bar />
    </div>
    <div class="main">
      <router-view/>
    </div>
  </div>
</template>

<script>
import HeaderBar from '@/components/Header'
export default {
  name: 'Header',
  components: {
    HeaderBar
  }
}
</script>

<style lang="scss">
@import "sass/index";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
