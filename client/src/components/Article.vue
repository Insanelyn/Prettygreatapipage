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
          <p class="text-primary font-weight-bold pull-right">In stock: {{Math.floor(Math.random() * 50 +1)}}</p>


          <button class="btn btn-addtocart btn-outline-primary mb-5 pull-right" @click="addToCart(article)">Buy</button>
        </div>
      </div>

      <div class="reviews">
        <div class="row">
          <form @submit.prevent="submit">
            <h2>Submit a review:</h2>
            <div class="form-group">
              <label for="author">Name:</label>
              <input type="text" class="form-control" v-model="author">

            </div>
            <div class="form-group">
              <label for="text">Text:</label>
              <textarea name="name" rows="4" cols="50" class="form-control"   v-model="text"></textarea>
            </div>
            <div class="dropdown">
              <select v-model="rating" value="rating">
                <option selected value disabled>
                  Rating
                </option>

                <option value="1" class="dropdown-item">
                  1
                </option>
                <option value="2" class="dropdown-item">
                  2
                </option>
                <option value="3" class="dropdown-item">
                  3
                </option>
                <option value="4" class="dropdown-item">
                  4
                </option>
                <option value="5" class="dropdown-item">
                  5
                </option>
              </select>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
        <div class="row">
          <div class="container">
            <div class="reviews" v-for="review in reviews" :key="review._id">
              <div class="hej" v-if="review.id === article._id">
                <p>{{review.id}}</p>
              <h2>{{review.author}}</h2>
              <p>{{review.text}}</p>
              <p>Rating: {{review.rating}}</p>
            </div>
          </div>

          </div>
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
      article: {},
      reviews:[],
      author:'',
      text: '',
      rating: ''

    }
  },
  created() {
    Api().get(`/articles/${this.id}`)
    .then(response => {
      this.article = response.data
    });
    Api().get('/reviews')
    .then(response => {
      this.reviews= response.data.reverse();
    });
  },

  methods: {
    checkout(e) {
      e.preventDefault();
      this.$router.push({ name: 'checkout' });
    },
    getReviews(){
      Api().get('/reviews')
      .then(response => {
        this.reviews= response.data.reverse();
      });
    },
    submit(){
      Api().post('/reviews', {id: this.article._id, author: this.author, text: this.text, rating: this.rating })
      .then(() => this.getReviews())
       .catch(e => {
         this.errors.push(e)
       })
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
.reviews{
  padding-top: 10%;
  display: block;
}
</style>
