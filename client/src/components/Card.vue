<template>
  <div class="container-fluid">

  <div class="car">
        <div class="card-body">
        <router-link tag="a" :to="{name: 'article', params: {id: article._id}}">
            <img class="card-img-top" :src="article.image" :alt="article.product_name">
        </router-link>
        <p class="card-title text-left">The {{ article.product_name }}</p>
        <!-- <p><span class="font-weight-bold">Category</span>: {{ article.category }}</p> -->
        <!-- <p><span class="font-weight-bold">Color</span>: {{ article.color }}</p> -->

  <!-- <p class="card-text">{{ article.long_description.substring(0, 50) }}</p> -->
        <p class="card-text text-left">£{{ article.price }}</p>
        <router-link tag="a" class="btn btn-outline-primary mr-2" :to="{ name: 'article', params: { id: article._id }}">More</router-link>
        <button class="btn btn-primary btn-right" @click="addToCart(article)">Quickbuy</button>
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
.card{
  border: 0px;

}
p{
  font-size: 19px;
  font-family: 'Six Caps', sans-serif;


}
</style>
