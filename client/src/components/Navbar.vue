<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Categories
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li class="nav-item active" v-for="category in categories" :key="category._id">
                <router-link tag="a" :to = "{name: 'category', params: {category: category.title}}" class="nav-link">{{ category.title }}</router-link>
              </li>
            </div>
          </li>
        </ul>

        <form action="" class="search-form">
              <div class="form-group has-feedback">
              <label for="search" class="sr-only">Search</label>
              <input type="text" class="form-control" name="search">
                <span class="icon form-control-feedback"><i class="fa fa-search"></i></span>
            </div>
          </form>

      </div>
    </nav>
    <!-- <div class="container-fluid">
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
    </div> -->
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
  },
  methods: {
    countQty(){
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      let qty = cart.map(item => item.qty);
      let total = 0;
      for(qty in cart){
        qty + total;
      }
      return total;
  }
}
}
</script>

<style>

.search-form .form-group {
  margin-top: 3vh;
  float: right !important;
  transition: all 0.35s, border-radius 0s;
  width: 32px;
  height: 32px;
  background-color: #;
  border-radius: 25px;
}
.search-form .form-group input.form-control {
  padding-right: 20px;
  border: 0 none;
  background: transparent;
  box-shadow: none;
  display:block;
}
.search-form .form-group input.form-control::-webkit-input-placeholder {
  display: none;
}
.search-form .form-group input.form-control:-moz-placeholder {
  /* Firefox 18- */
  display: none;
}
.search-form .form-group input.form-control::-moz-placeholder {
  /* Firefox 19+ */
  display: none;
}
.search-form .form-group input.form-control:-ms-input-placeholder {
  display: none;
}
.search-form .form-group:hover,
.search-form .form-group.hover {
  width: 170%;
  border-radius: 4px 25px 25px 4px;
  border: 2px solid #ccc;

}
.search-form .form-group span.form-control-feedback {
  position: absolute;
  top: 4vh;
  display: block;
  width: 34px;
  height: 34px;
  line-height: 34px;
  text-align: center;
  font-size: 3vh;

}



/* .img-txt{
display: block;
margin-left: auto;
margin-right: 4vh;
width: 30%;
margin-top: 3vh;
} */
/* .navbar-expand-lg{
  position: relative;

}
.fa.fa-navicon{
  color:#FCE181!important;
} */
</style>
