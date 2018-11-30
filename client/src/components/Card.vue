<template>
  <div class="container">
  <div class="card">
        <div class="card-body">
        <router-link tag="a" :to="{name: 'article', params: {id: article._id}}">
            <figure>
            <img class="card-img-top" :src="article.image" :alt="article.product_name">
            </figure>
        </router-link>

        <h5 class="card-title text-left">The {{ article.product_name }}</h5>

        <div v-if="article.stock < 10">
        <p class="p-stock pull-right">Stock: {{article.stock}}</p>
        </div>
        <div v-else>
        <p class="p-stock pull-right">Stock: 10+</p>
        </div>

        <!-- <p><span class="font-weight-bold">Category</span>: {{ article.category }}</p> -->
        <!-- <p><span class="font-weight-bold">Color</span>: {{ article.color }}</p> -->
        <!-- <p class="card-text">{{ article.long_description.substring(0, 50) }}</p> -->
        <p class="card-text text-left">£{{ article.price }}</p>


        <!-- <div v-if="stock<100">
        <button class="btn-stock btn-light font-weight-bold pull-right">Stock: {{article.stock}}</button>
        </div> -->
        <!-- <div v-else>
        <button class="btn-stock btn-light font-weight-bold pull-right">Stock: 10+</button>
        </div> -->
        <!-- <button class="btn btn-secondary btn-right" @click="addToCart(article)">Quickbuy</button>
        <router-link tag="a" class="btn btn-outline mr-2" :to="{ name: 'article', params: { id: article._id }}">More</router-link> -->
    </div>

    </div>



</div>

</template>

<script>
import mixins from '@/mixins/mixins';
export default {
    props: ['article'],
    mixins: [mixins]
}
</script>

<style scoped>
.card-title {
  cursor: pointer;
}

p{
  font-size: 19px;
  font-family: 'Six Caps', sans-serif;
}
.card{
  border: white;
  margin-top: 10%;

}
.card-body{
width: 100%;
padding: 0!important;
}

figure{
   width:290px; /*container-width*/
   height: 330px;
   overflow: hidden; /*hide bounds of image */
   margin:0; /*reset margin of figure tag*/
}
figure img{
   display:block; /*remove inline-block spaces*/
   margin:0 -38.885%;
   width:177.777%;
}

.p-stock {
  font-size: small;
  margin-right: 5%;
  color:rgba(01,00,00,0.3)
}

</style>
