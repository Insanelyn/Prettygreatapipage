<template>

  <div>


  <div class="container-fluid">
<!-- <div class="row">

<div class="col-lg-6"> -->

  <router-link tag="a" :to = "{name: 'home'}"><img src="../assets/old.png" class="img-responsive center-block"></router-link>
<!-- </div> -->
<!-- <div class="col-lg-6">

  <router-link tag="a" :to = "{name: 'home'}"><img src="../assets/txt.png" class="img-txt"></router-link>
</div> -->

<!-- </div> -->
</div>

  <div class="container">

<nav class="navbar navbar-expand-lg navbar-light bg-white">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav  ml-auto">
                <li class="nav-item active" v-for="category in categories" :key="category._id">
                    <router-link tag="a" :to = "{name: 'category', params: {category: category.title}}" class="nav-link">{{ category.title }}</router-link>
                </li>
                <router-link tag="a" :to = "{name: 'checkout'}" class="nav-link"> Cart(<span class="badge badge-light">{{ cart.length }}</span>)</router-link>

            </ul>
        </div>
</nav>
</div>
  </div>
</template>


<script>
import Api from '@/config/Api'
export default {
    data() {
        return {
            categories: []
        }
    },
    created() {
        Api().get('/categories')
            .then(response => {
                this.categories = response.data;
            });

    },
    computed: {
        cart() {
            return this.$store.getters.getCart
        }
    }
}
</script>

<style>
.img-responsive {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;

  /* display: block;
  margin-left: 8vh;
  margin-right: auto;
  width: 36%; */

}
/* .img-txt{
  display: block;
  margin-left: auto;
  margin-right: 4vh;
  width: 30%;
  margin-top: 3vh;
} */
.navbar-expand-lg{

}
nav {
  display: flex;
  align-items: center;
  align-content: center;
}
</style>
