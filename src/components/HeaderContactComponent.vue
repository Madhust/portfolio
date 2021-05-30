<script>
export default {
  template: `
  <div class="contact">
    <span class="banner-icon contact-item">
      <a href="https://twitter.com/maddydeep28" target="__blank" class="highlight" title="Twitter">
        <i class="fab fa-twitter"></i>
      </a>
    </span>
    <span class="banner-icon contact-item">
      <a href="https://github.com/Madhust/" target="__blank" class="highlight"  title="GitHub">
        <i class="fab fa-github"></i>
      </a>
    </span>
    <span class="banner-icon contact-item">
      <a href="https://stackoverflow.com/users/2833649/madhu" target="__blank" class="highlight" title="StackOverflow">
        <i class="fab fa-stack-overflow"></i>
      </a>
    </span>
    <span class="banner-icon contact-item">
      <a href="https://medium.com/@maddydeep28" target="__blank" class="highlight" title="Medium">
        <i class="fab fa-medium"></i>
      </a>
    </span>
    <span class="banner-icon contact-item">
      <a href="https://essentialjavascript.wordpress.com/about/" target="__blank" class="highlight" title="WordPress">
        <i class="fab fa-wordpress"></i>
      </a>
    </span>
    <span class="banner-icon contact-item">
      <a href="mailto:madhusudhananit@gmail.com?Subject=Regarding%20PortFolio%20MadhuSudhanan" class="highlight" title="Mail">
        <i class="fas fa-envelope"></i>
      </a>
    </span>
  </div>`,
  data() {
    return {};
  }
};
</script>
<style>
.highlight {
  color: #66fcf1;
}

.contact {
  position:absolute;
  right:20px;
  top:20px;
  font-size:30px
}

.contact .contact-item {
  padding-right: 10px;
}

.highlight i:hover{
  color: white;
} 

</style>

