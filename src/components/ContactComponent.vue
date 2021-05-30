<script>
export default {
  template: `
  <section id='contact'>
    <div class="contactview emailview">
      <span>Email Me: </span>
      <span>
        <a href="mailto:madhusudhananit@gmail.com?Subject=Regarding%20PortFolio%20MadhuSudhanan" target="_top">
          madhusudhananit@gmail.com
        </a>
      </span>
    </div>
    <div class="contactview">
      <div @click='goToTop()'>
        <i class="fa fa-angle-double-up"></i>
      </div>
      <div>Go to Top<div>
    </div>
  </section>`,
  data() {
    return {
        
    };
  },
  methods: {
      goToTop(){
          this.$emit('gototop');
      }
  }
};
</script>
<style>
@keyframes font-back {
  from {
    font-size: 20pt;
  }
  to {
    font-size: 25pt;
  }
}
.contactview {
    height: auto;
    flex-direction: row;
    background-color: #495057;
    color: white;
    padding: 5px;
    font-size: 20pt;
}
.emailview,.emailview a {
    color: #66fcf1;
    padding: 5px;
    font-size: 15pt;
    font-style: italic;
}
.fa-angle-double-up {
    cursor: pointer;
    animation: font-back .75s linear infinite alternate;
}

.contactview .desc{
    color: white;
}

.c-text {
    display: inline-block;
    font-size: 20pt;
}

.flex-icon {
    display: inline-block;
    font-size: 20pt;
}

</style>