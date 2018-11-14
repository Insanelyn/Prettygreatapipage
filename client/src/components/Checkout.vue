<template>
  <div class="container">
    <div class="row cart">
      <div class="col-md-12">
        <div v-if="cart.length==0">
          <div class="flex d-flex justify-content-center">
            <div class="polaroidCART ">
              <img src="../assets/emptycart.jpg" alt="emptycart" class="emptycartimg">
              <p class="text-center">Empty carts are for things,<br> not people you Hipster.</p>
            </div>
            <div class="emptyCartText">
              <h1>oooops!</h1>
              <h2>Your cart is empty, put something in it!</h2>
            </div>
          </div>

        </div>

        <div v-else>
          <table class="table stripped ">
            <thead>
              <tr>
                <th scope="col">Article</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">SubTotat</th>
                <th scope="col">Length</th>
                <th scope="col">Actions</th>

              </tr>
            </thead>
            <tbody>
              <tr v-for="item in cart" :key="item.id">
                <td>{{ item.name }}</td>
                <td>${{ item.price }}</td>
                <td>{{ item.qty }}</td>
                <td>${{ item.subtotal }}</td>
                <td>${{ item.length }}</td>

                <td>
                  <button class="btn btn-sm addreduce mr-1" @click="action('min',item)">-</button>
                  <button class="btn btn-sm btn-primary mr-1" @click="action('clear',item)">Remove</button>
                  <button class="btn btn-sm addreduce mr-1" @click="action('add',item)">+</button>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="pull-right">

          <h4>Total: ${{ total }}</h4>
          <button id="checkout" class="btn btn-outline-success" @click="checkout">Checkout</button>
        </div>
      </div>

      </div>
    </div>
  </div>
</template>


<script>
import Api from '@/config/Api'
import key from '@/config/stripeKey'

export default {
  mounted() {
    let total = this.total;
    // eslint-disable-next-line
    this.handler = StripeCheckout.configure({
      key: key.PUBLISHABLE_KEY,
      image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
      locale: 'auto',
      token: (token) => {
        Api().post('/charge', {stripeToken: token, total: total})
        .then(response => {
          let charge = response.data;
          this.$store.commit('setCharge', charge);
          this.$router.push({name: 'thankyou'});
          localStorage.clear();
          this.$store.state.cart = [];
        })
      }
    });
  },
  computed: {
    cart() {
      return this.$store.getters.getCart
    },
    total() {
      let som = 0;
      this.cart.map(item => {
        som += item.subtotal
      });
      return som;
    }
  },
  methods: {
    checkout(){
      this.handler.open({
        name: 'Shopping Cart',
        description: 'Website for Shopping Cart',
        amount: this.total*100
      });
    },
    action(event, item) {
      switch (event) {
        case 'add':
        item.qty++;
        item.subtotal = item.price*item.qty;
        this.$store.commit('setQuantity', item);
        this.$store.commit('setPrice', item);
        localStorage.setItem('cart', JSON.stringify(this.cart));
        break;

        case 'min':
        item.qty--;
        item.subtotal = item.price*item.qty;
        this.$store.commit('setQuantity', item);
        this.$store.commit('setPrice', item);
        localStorage.setItem('cart', JSON.stringify(this.cart));
        if(item.qty === 0) this.clearFromCart(item)
        break;

        case 'clear':
        this.clearFromCart(item)
        break;
        default:
        break;
      }
    },
    clearFromCart(article) {
      let item = this.cart.find(item => {
        return item.id === article.id
      });
      let index = this.cart.indexOf(item);
      this.cart.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(this.cart));
    }
  }
}
</script>

<style >

.polaroidCART {
  position: relative;
  width: 30%;
}
.polaroidCART img {
  border: 10px solid #fff;
  border-bottom: 85px solid #fff;
  -webkit-box-shadow: 3px 3px 3px #777;
  -moz-box-shadow: 3px 3px 3px #777;
  box-shadow: 3px 3px 3px 2px #777;
}

.polaroidCART p {
  position: absolute;
  text-align: center;
  width: 100%;
  bottom: 0px;
}
.flex{
  padding: 2vh;
}
.emptyCartText{
  width: 50%;
  padding: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.cart{

}
p {
  font-size: 23px;
}
.btn-outline-light{
  border-radius: 50px;
  font-size: 25px;
  margin-right:2%;
}
.addreduce {
border-radius: 50px;
background-color: #fff;
font-size: 20px;
font-weight: bold;
}
.remove {
background-color: #F78888;
}

</style>
