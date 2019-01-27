<script>
import RssToJson from 'rss-to-json';
export default {
  template: `<section id='blogs'>
    <div class="view blogview">
        <div class='header'>
            <div class='header-text'>Blogs</div>
        </div>
        <div class='quote'>
            <div class="desc"><i>Share your knowledge. It’s a way to achieve immortality - Dalai Lama</i></div>
        </div>
        <div class='flex project-items blog-items'>
        <div class='mdc-card my-card blog-card' v-for="item in blogs.items">
            <div class="desc bold blog-head md-primarytext mdc-typography--headline6">
             {{item.title}}
            </div>
            <div class="desc light md-primarytext">
                by Madhu on {{new Date(item.created).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}}.
            </div>
            <div class='desc banner-button about-button'  @click="open(item.link)">
                <span>Read</span>
            </div>
            </div>
        </div> 
        </div> 
    </div>
  </section>`,
  data() {
    return {
        blogs: []
    };
  },
  mounted() {
      RssToJson.load('https://cors-anywhere.herokuapp.com/https://medium.com/feed/@maddydeep28', (data, rss) => {
          this.blogs = rss;
      });
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
.blog-items {
    flex-wrap: wrap;
    justify-content: flex-start;
}

.quote {
    font-size: 12pt;
    margin-top: 20px;
    font-weight: 400;
}

.blogview {
    height: auto;
    background-color: #eceff1;
}

.blog-card {
    height: 290px;
    margin: 10px;
    background: #fafafa;
}
.blog-head {
    min-height: 160px;
    max-height: 160px;
    overflow: hidden;
    text-overflow: ellipsis;
}
@media (min-width: 320px) and (max-width: 480px) { 
    .blog-card {
        margin: 5px auto;
    }
}
</style>