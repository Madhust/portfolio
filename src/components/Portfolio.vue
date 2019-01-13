<template>
  <div class="hello">
    <Header @gotoabout='gotoAbout()'></Header>
    <About ref="about"></About>
  </div>
</template>

<script>
import Header from "./HeaderComponent.vue";
import About from "./AboutComponent.vue";
export default {
  name: 'PortFolio',
  props: {
    msg: String
  },
  methods: {
    gotoAbout() {
      this.$refs.about.$refs.about.scrollIntoView({ behavior: "smooth" });
    }
  },
  components: {
    Header: Header,
    About
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
