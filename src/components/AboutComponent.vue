<script>
export default {
  template: `<section id="about" ref="about">
               <div class="view">
               <div class='header'>
                <div class='header-text'>About</div>
                </div> 
               <div class='about-content'>
                <div class="about-img">
                    <div class='img-m'>
                        <img src="me.png" alt="MADHU"/>
                    </div>
                    <div class='about-me'>
                    <div class="desc bold">Who am I?</div>
                    <div class="desc">I'm a Front-end web developer currently working 
                    at <span class='highlight-desc'>Syncfusion</span> in India. Fond of innovative technologies, frameworks and love problem solving 
                    and debugging.</div>
                    </div>
                </div>
                <div class="about-skills">
                    <div class='flex bar' v-for="item in skills">
                    <div class='flex flex-static'>
                    <div class='tech-desc flex-static'>
                    {{item.name}}
                    </div>
                    </div>
                    <div class='flex' :style='{ flex: 2 }'>
                    <div class='tech-desc-progress' :style='{ width: item.percent+ "%" }'>
                    </div>
                        <div class='tech-desc percent' :style='{ width: (100 - item.percent) + "%" }'>
                        <span>{{item.percent}}%</span>
                        </div>
                    </div>
                </div>
                </div>
               </div>
               </div> 
            </section>`,
  data() {
    return {
      skills: [
        {
          name: "JavaScript",
          percent: 80
        },
        {
          name: "HTML",
          percent: 85
        },
        {
          name: "CSS",
          percent: 75
        },
        {
          name: "Angular",
          percent: 75
        },
        {
          name: "React",
          percent: 75
        },
        {
          name: "Vue",
          percent: 65
        },
        {
          name: "Blazor",
          percent: 45
        },
        {
          name: "ASP.NET",
          percent: 75
        },
        {
          name: "SQL",
          percent: 50
        }
      ]
    };
  }
};
</script>
<style>
.flex {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.view {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: white;
  color: black;
}
.header {
  font-size: 30pt;
  font-weight: 800;
  text-transform: uppercase;
}
.header-text {
  text-decoration: underline;
  text-underline-position: under;
}
.about-content {
  display: flex;
  padding-top: 25px;
}
.about-content .about-img,
.about-content .about-skills {
  flex: 1;
}
.about-content .about-img {
  display: flex;
  flex-direction: column;
}

.about-content .about-img img {
  width: auto;
  height: 250px;
  border-radius: 5%;
}

.desc {
  font-size: 15pt;
  color: #85878a;
  text-align: center;
  padding-top: 5px;
  padding-left: 15%;
  padding-right: 15%;
}
.bold {
  font-size: 20pt;
  font-weight: 700;
  color: #0e0f14;
}
.highlight-desc {
  color: #0590ec;
}
.bar {
  height: 25px;
  max-width: 90%;
  margin-top: 20px;
}
.tech-desc {
  font-size: 10pt;
  background-color: #04c2c9;
  padding: 2px 25px;
  font-weight: 700;
  color: white;
}

.flex-static {
  flex-grow: 0; /* do not grow   - initial value: 0 */
  flex-shrink: 0; /* do not shrink - initial value: 1 */
  min-width: 140px;
  max-width: 140px;
}

.tech-desc-progress {
  background-color: #00a1a7;
  padding: 5px 25px;
}
.percent {
  background-color: #eee;
  padding: 2px 25px;
  color: #0e0f14;
  font-weight: normal;
  text-align: right;
}

@media (min-width: 320px) and (max-width: 480px) {
  .view {
    height: auto;
  }
  .about-content {
    flex-direction: column;
  }
  .flex-static {
    min-width: 50px;
    max-width: 50px;
  }
  .header {
    font-size: 24pt;
  }

  .about-skills {
    margin-left: 30px;
  }
  .tech-desc {
    font-size: 7pt;
    padding: initial;
    padding-top: 5px;
  }
  .desc.bold {
    font-size: 16pt;
  }
  .desc {
    font-size: 12pt;
  }
}
</style>