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
<template>
  <div class="container-fluid">


    <div class="row">
      <div class="col-sm-4 polaroid">
        <router-link tag="a" :to = "{name: 'home'}"><img src="../assets/watches.jpg" class="categoryImg"></router-link>
        <h2><span>The Quintessential<span class='spacer'></span><br /><span class='spacer'></span>Home</span></h2>
      </div>

      <div class="col-sm-4 polaroid">
        <router-link tag="a" :to = "{name: 'home'}"><img src="../assets/glasses.jpg" class="categoryImg"></router-link>
        <h2><span>The Quintessential<span class='spacer'></span><br /><span class='spacer'></span>Sprits</span></h2>
      </div>

      <div class="col-sm-4 polaroid">
        <router-link tag="a" :to = "{name: 'home'}"><img src="../assets/hat.jpg" class="categoryImg"></router-link>
        <h2><span>The Quintessential<span class='spacer'></span><br /><span class='spacer'></span>Accesories</span></h2>
      </div>
    </div>
  </div>


</template>
<script>
export default {
}
</script>
<style scoped>
.categoryImg{
  object-fit: cover;
  width:90%;
  height:125%;
  margin-top: 4vh;
  opacity: 0.7;
  margin-top: 8vh;
  display: block;
  /* border-radius: 25px; */
  content: attr(title);
}

.categoryImg:hover{
  opacity: 1.0;
}
h2 {
  position: absolute;
  top: 99%;
  width: 90%;
  left:7.5%;

}
h2 span {
  color: white;
  font: bold 24px/45px Helvetica, Sans-Serif;
  letter-spacing: -1px;
  background: rgba(0, 0, 0, 0.7);
  padding: 5px;
}
h2 span.spacer {
  padding:0 8px;
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
  border-bottom: 65px solid #fff;
  -webkit-box-shadow: 3px 3px 3px #777;
     -moz-box-shadow: 3px 3px 3px #777;
          box-shadow: 3px 3px 3px #777;
}

.polaroid p {
  position: absolute;
  text-align: center;
  width: 100%;
  bottom: 0px;
  font: 400 18px/1 'Kaushan Script', cursive;
  color: #888;
}
</style>
