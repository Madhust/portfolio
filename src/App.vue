<template>
  <div id="app">
    <Portfolio />
  </div>
</template>

<script>
import Portfolio from './components/Portfolio.vue'

export default {
  name: 'app',
  components: {
    Portfolio
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Raleway|Raleway-bold'); 
html, body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Raleway', sans-serif;
  font-size: 40pt;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: whitesmoke;
}
</style>
