<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 article">
        <img :src="article.image" :alt="article.product_name" class="img" id="articleImg">
</div>

        <div class="col-md-6 article">
        <h2>The {{ article.product_name }}</h2>

        <!-- <p><span class="font-weight-bold">Category</span>: {{ article.category }}</p> -->
        <!-- <p><span class="font-weight-bold">Color</span>: {{ article.color }}</p> -->
<div class="articlebody">
        <p>
          {{ article.long_description }}
        </p>
        <p class="text-danger font-weight-bold pull-left">${{article.price}}</p>

        <button class="btn btn-addtocart btn-outline-primary mb-5 pull-right" @click="addToCart(article)">Buy</button>
      </div>
    </div>

  </div>
        </div>
</template>

<script>
import Api from '@/config/Api'
import mixins from '@/mixins/mixins'

export default {
  props: ['id'],
  mixins: [mixins],
  data(){
    return {
      article: {}
    }
  },
  created() {
       Api().get(`/articles/${this.id}`)
              .then(response => {
                this.article = response.data
              });
  },
  methods: {
        checkout(e) {
            e.preventDefault();
            this.$router.push({ name: 'checkout' });
        }
    }
}
</script>

<style>
img{
  width:100%;
  margin: auto;
  display: block;
}
.article{
  top:9vh;

}
.articlebody{
  margin-top: 13%;
}
.btn-addtocart{
  border-radius: 5px;
  display: block;
  margin: 0 auto;
  width: 100px;
  line-height: 25px;
}
</style>
