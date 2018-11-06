<template>
  <div>
    <div class="container-fluid">
    </div>
    <div class="container">
      <nav class="navbar navbar-dark">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon">
              <i class="fa fa-navicon"></i>
          </span>        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav  ml-auto">
            <li class="nav-item active" v-for="category in categories" :key="category._id">
              <router-link tag="a" :to = "{name: 'category', params: {category: category.title}}" class="nav-link">{{ category.title }}</router-link>
            </li>
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

  }
}
</script>

<style>
ul{
  font-family: 'Abril Fatface';font-size: 22px;

}

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
  position: relative;

}
.fa.fa-navicon{
  color:#FCE181!important;
}
</style>
