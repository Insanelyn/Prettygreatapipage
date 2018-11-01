<template>
  <div class="card" style="width: 100%; height:100%;">
    <div class="card-body">
        <router-link tag="a" :to="{name: 'article', params: {id: article._id}}">
            <img class="card-img-top" :src="article.image" :alt="article.product_name">
        </router-link>
        <h5 class="card-title text-info">{{ article.product_name }}</h5>
        <!-- <p><span class="font-weight-bold">Category</span>: {{ article.category }}</p> -->
        <!-- <p><span class="font-weight-bold">Color</span>: {{ article.color }}</p> -->

  <!-- <p class="card-text">{{ article.long_description.substring(0, 50) }}</p> -->
        <p class="card-text text-danger">${{ article.price }}</p>
        <router-link tag="a" class="btn btn-outline-primary mr-2" :to="{ name: 'article', params: { id: article._id }}">More</router-link>
        <button class="btn btn-primary" @click="addToCart(article)">Buy</button>
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
</style>
