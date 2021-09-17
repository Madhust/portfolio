<script>
export default {
  template: `<section id='projects'>
    <div class="view proview">
        <div class='header'>
            <div class='header-text'>Projects</div>
        </div>
        <div class='flex project-items'>
        <div class='mdc-card my-card' v-for="item in projects">
            <div class="my-card-media big mdc-card__media" :class="item.bgImage">
            </div>
            <div class="desc bold md-primarytext mdc-typography--headline6">
             <div class="my-card-media small mdc-card__media" :class="item.bgImage">
            </div> {{item.name}}
            </div>
            <div class="desc md-primarytext">
                {{item.description}}
            </div>
            <div class='desc banner-button about-button' @mouseover="mousein(item.link)" @click="open(item.link)">
                <span>View</span>
            </div>
            </div>
        </div> 
        </div> 
        
    </div>
  </section>`,
  data() {
    return {
        projects: [{
            name: 'Visual Studio Code Extension',
            description: 'TypeScript Snippet for Essential Angular Grid component.',
            link: 'https://marketplace.visualstudio.com/items?itemName=madhusudhananp.vscode-ej2-angular-grid-snippet',
            bgImage: 'md-angular'
        },{
            name: 'GraphQL Data Adaptor',
            description: 'Data Adaptor which allows EJ2 DataManager to interact with GraphQL',
            link: 'https://www.npmjs.com/package/ej2-graphql-adaptor',
            bgImage: 'md-graphql'
        },{
            name: 'Deleter - Directory remover',
            description: 'NodeJS based CLI directory remover using bash script',
            link: 'https://www.npmjs.com/package/deleter',
            bgImage: 'md-deleter'
        },
        {
            name: 'NgHackerNews - News Feed',
            description: 'A hacker news site with new design developed using Angular.',
            link: 'https://madhust.github.io/NgHackerNews/',
            bgImage: 'md-yfeed'
        }]
    };
  },
  methods: {
      open(link) {
          var win = window.open(link, "_blank");
          win.focus();
      }
  }
};
</script>
<style>
@import url("../../node_modules/@material/card/dist/mdc.card.css");

@keyframes view-change-back {
  from {
    background: none;
  }
  to {
    background-color: #bacecc;
    color: white;
  }
}
@keyframes view-change-back-revert {
  from {
    background-color: #bacecc;
    color: white;
  }
  to {
    background: transparent;
  }
}

.proview {
  background-color: #f5f5f5;
}

.project-items {
    flex-direction: row;
    justify-content: space-around;
    padding-top: 55px;
}

.my-card {
    width: 280px;
    height: 450px;
    align-items: center;
}

.my-card-bg {
    background-color: #1976d2;
}

.my-card-media {
    width: 225px;
    height: 225px;
    transform: scale(0.75);
}

.md-angular {
    background: url("../assets/vscode.png");
    background-size: contain;
    background-repeat: no-repeat;
}
.md-graphql {
    background: url("../assets/graphql.png");
    background-size: contain;
    background-repeat: no-repeat;
}
.md-deleter {
    background: url("../assets/nodejs.jpg");
    background-size: contain;
    background-repeat: no-repeat;
}

.md-yfeed {
    background: url("../assets/yfeed.png");
    background-size: contain;
    background-repeat: no-repeat;
}

.desc.bold.md-primarytext {
   font-size: 16pt;
   text-align: left;
}

.desc.md-primarytext {
   font-size: 12pt;
   text-align: left;
}

.about-button {
    border: solid #bacecc;
    margin-top: 18px;
    padding-top: initial;
    animation: view-change-back-revert 0.3s linear both;
}

.about-button:hover {
  animation: view-change-back 0.3s linear both;
}

.small{
    display: none;
}

@media (min-width: 320px) and (max-width: 480px) { 
    .project-items { 
        flex-direction: column;
        justify-content: space-evenly;
        padding-top: 55px;
    }
    .my-card {
        margin: 5px auto;
        height: 250px;
    }

    .big {
        display: none;
    }
    .small {
        width: 55px;
        height: 55px;
        display: inline-block;
        vertical-align: middle;
    }
}
</style>
