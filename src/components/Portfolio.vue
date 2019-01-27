<template>
  <div class="hello">
    <Header ref="header" @gotoabout='gotoAbout()'></Header>
    <About ref="about"></About>
    <Projects/>
    <Blog/>
    <Contact @gototop='gototop()'/>
  </div>
</template>

<script>
import Header from "./HeaderComponent.vue";
import About from "./AboutComponent.vue";
import Projects from "./ProjectsComponent.vue";
import Blog from "./BlogComponent.vue";
import Contact from "./ContactComponent.vue";

export default {
  name: 'PortFolio',
  props: {
    msg: String
  },
  methods: {
    gotoAbout() {
      this.$refs.about.$refs.about.scrollIntoView({ behavior: "smooth" });
    },
    gototop() {
      this.$refs.header.$refs.header.scrollIntoView({ behavior: "smooth" });
    },
  },
  components: {
    Header,
    About,
    Projects,
    Blog,
    Contact
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
