<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 article">
        <figure>
          <img :src="article.image" :alt="article.product_name" class="img" id="articleImg">
        </figure>
      </div>
      <div class="col-md-6 article">
        <h1 align="center" class="font-weight-bold">The {{ article.product_name }}</h1>
        <p align="center">
          {{ article.long_description }}
        </p>
        <hr>

        <!-- <p><span class="font-weight-bold">Category</span>: {{ article.category }}</p> -->
        <!-- <p><span class="font-weight-bold">Color</span>: {{ article.color }}</p> -->
        <div class="articlebody">
        <div class="row price">
          <h3 align="center" class="font-weight-bold ">${{article.price}}</h3>
        </div>

          <div class="row btn-add">
          <button class="btn btn-addtocart btn-outline-secondary mb-5" @click="addToCart(article)">Buy</button>
            </div>
        </div>
        <div class="row stock">
          <p>Stock: {{article.stock}}</p>
        </div>

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

<style scoped>
body{
  display: flex;
}
.article{
  top:9vh;
}
figure{
  width:530px; /*container-width*/
  height: 580px;
  overflow: hidden; /*hide bounds of image */
  margin:0; /*reset margin of figure tag*/
}
figure img{
  display:block; /*remove inline-block spaces*/
  margin:0 -38.885%;
  width:177.777%;
}
.articlebody{
  margin-top: 13%;
}
.btn-addtocart{
  border-radius: 5px;
  display: block;
  width: 100px;
  color:black;
  flex-direction: row;
  justify-content: center;
}
.btn-add{
  flex-direction: row;
  justify-content: center;
  align-self: center;
}
.reviews{
  padding-top: 10%;
  display: block;
}

.stock{
font-size: small;
}

.price {
  flex-direction: row;
  justify-content: center;
}

.stock{
  flex-direction: row;
  justify-content: flex-end;
  font-weight: lighter;
  font-size: small;
}


</style>
