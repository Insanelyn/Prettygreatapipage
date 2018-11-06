.<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-4 polaroid"  v-for="category in categories" :key="category._id">
        <router-link tag="a" :to = "{name: 'category', params: {category: category.title}}"><img :src="category.image" class="categoryImg"></router-link>
        <h3><span>The Quintessential<span class='spacer'></span><br /><span class='spacer'></span>{{category.title}}</span></h3>
      </div>
    </div>
  </div>
</template>

<script>
import Api from '@/config/Api'
export default {
    data() {
        return {
            categories: [],
        }
    },
    created() {
        Api().get('/categories')
            .then(response => {
                this.categories = response.data;
            });
    },
}
</script>

<style scoped>
.categoryImg{
  object-fit: cover;
  width:80%;
  margin-top: 4vh;
  opacity: 0.7;
  margin-top: 8vh;
  display: block;
  border-radius: 0px;
  height: 80%;
  content: attr(title);
}

.categoryImg:hover{
  opacity: 1.0;
}
h3 {
  position: relative;
  width: 90%;
  left:12%;
  top:-30%;
  line-height: 1.67;
  font-family: 'Six Caps', sans-serif;

}
h3 span {
  color: white;
  letter-spacing: -1px;
  background: rgba(0, 0, 0, 0.7);
  padding: 5px;
}
h3 span.spacer {
  background: rgba(0, 0, 0,0);
}
.container-fluid{
  width: 90%;
}

.polaroid {
  position: relative;
}

.polaroid img {
  border: 15px solid #fff;
  border-bottom: 75px solid #fff;
  -webkit-box-shadow: 3px 3px 3px #777;
  -moz-box-shadow: 3px 3px 3px #777;
  box-shadow: 3px 3px 3px 1px #777;
}

</style>

<!-- <template>
<div>
<Cards :articles="articles" />
<p class="text-center mb-0">{{currentPage+1 }} / {{ pages }}</p>
<ul class="pagination justify-content-center">
<li class="page-item" :class="{disabled: prevUrl === ''}">
<button class="page-link" @click="checkPage(prevUrl)">Previous</button>
</li>
<li class="page-item" :class="{disabled: nextUrl === ''}">
<button class="page-link" @click="checkPage(nextUrl)">Next</button>
</li>
</ul>
</div>
</template>

<script>
import Cards from './Cards';
import Api from '@/config/Api'
export default {
components: {
Cards
},
data() {
return {
articles: [],
currentPage: '',
pages: '',
prevUrl: '',
nextUrl: ''
}
},
created() {
Api().get('/articles')
.then(response => {
this.articles = response.data.articles;
this.currentPage = response.data.currentPage;
this.pages = response.data.pages;
this.nextUrl = response.data.nextUrl;
this.prevUrl = response.data.prevUrl;
});
},
methods: {
checkPage(url) {
Api().get(url)
.then(response => {
this.articles = response.data.articles;
this.currentPage = response.data.currentPage;
this.pages = response.data.pages;
this.nextUrl = response.data.nextUrl;
this.prevUrl = response.data.prevUrl;
})
}
}
}
</script>

<style scoped>

</style> -->
