<template lang="html">
<div class="row">
  <div class="cartempty" v-if="cart.length===0">
    <router-link tag="a" :to = "{name: 'checkout'}" class="nav-link"><img src="../assets/cartempty.png" class="cartimg"><span class="badge badge-light"></span></router-link>
  </div>
  <div class="cartfull" v-else>
    <router-link tag="a" :to = "{name: 'checkout'}" class="nav-link"><img src="../assets/cartfull.png" class="cartimg"><span class="badge badge-light"></span></router-link>
  </div>
</div>

</template>

<script>
export default {
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

<style scoped>
.body{
  display:flex;
}
.cartimg{
    width:100%;
    margin: auto;
    display: block;
    width:7vh;
}
.row{
  flex-direction: row;
  justify-content: center;
}

</style>
