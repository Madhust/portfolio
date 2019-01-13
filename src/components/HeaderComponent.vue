<script>
export default {
  template: `<section><div class="view-banner">
  <div><div class="text">Hello, I'm<span class="highlight">&nbsp;{{name}}</span>. 
  <br>I'm a Front-end web developer</div></div>
  <div class='banner-button-parent'>
  <div class='banner-button' @click="goToAbout()">
  <span>About Me</span>
  <span class="material-icons banner-icon">arrow_forward</span>
  </div>
  </div>
  </div>
  </section>`,
  data() {
    return {
      name: "Madhu Sudhanan P"
    };
  },
  methods: {
    goToAbout() {
      this.$emit('gotoabout');
    }
  }
};
</script>
<style>
@keyframes change-back {
  from {
    background: none;
  }
  to {
    background-color: #04c2c9;
    color: white;
  }
}
@keyframes change-back-revert {
  from {
    background-color: #04c2c9;
    color: white;
  }
  to {
    background: transparent;
  }
}

@keyframes icon-rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(90deg);
  }
}
@keyframes icon-rotate-revert {
  from {
    transform: rotate(90deg);
  }
  to {
    transform: rotate(0deg);
  }
}

.text {
  justify-content: center;
  align-items: center;
  font-size: 35pt;
}
.view-banner {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #1f2823;
  flex-direction: column;
  border-bottom: 3px solid #66fcf1;
  
}
.highlight {
  color: #66fcf1;
}
.banner-button-parent {
  margin-top: 20px;
}

.banner-button {
  font-size: 24px;
  padding: 1px 20px;
  border: solid #66fcf1;
  cursor: pointer;
  animation: change-back-revert 0.3s linear both;
}
.banner-button .banner-icon {
  vertical-align: middle;
  padding-left: 6px;
  animation: icon-rotate-revert 0.3s linear both;
}

.banner-button:hover {
  animation: change-back 0.3s linear both;
}
.banner-button:hover .banner-icon {
  animation: icon-rotate 0.3s linear both;
}
</style>

