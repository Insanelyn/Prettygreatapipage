<template>
  <div class="container">
    <div class="dropdown">
      <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Category
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="#" v-for="category in categories" :key="category._id">
          <router-link tag="a" :to = "{name: 'category', params: {category: category.title}}">{{category.title}}</router-link>
        </a>

      </div>
    </div>
    <div class="dropdown">
      <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Sort by
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="#" @click="apisort(price='asc')" value="asc">Price Acending</a>
        <a class="dropdown-item" href="#" @click="apisort(price='desc')" value="desc">Price Decending</a>
        <a class="dropdown-item" href="#" @click="apistock(price='desc')">Stock</a>
      </div>
    </div>
    <Cards :articles="articles" />

  </div>
</template>

<script>
import Cards from './Cards';
import Api from '@/config/Api'

export default {
    props: ['category'],
    data() {
        return {
            articles: []
        }
    },
    components: {
        Cards
    },
    created() {
      Api().get('/categories')
      .then(response => {
        this.categories = response.data;
      });
        this.fetch();
    },
    watch: {
        '$route' (to, from) {
            if(from.params.category !== to.params.category){
                this.fetch()
            }
        }
    },
    methods: {
        fetch() {
             Api().get(`/categories/${this.category}`)
            .then(response => {
                 this.articles = response.data
            });
        },
        apisort(price) {
          console.log('sorting',this.category)
          Api().get(`/categories/${this.category}?price=${price}`)
          .then(response => {
            this.articles = response.data;
          });
        },
        apistock(stock) {
          console.log('sorg',this.category)
          Api().get(`/categories/${this.category}?stock=${stock}`)
          .then(response => {
            this.articles = response.data;
          });
        }
    }
}
</script>

<style scoped>

</style>
