<template>
  <div id="app">
  <Logo />
  <Cart />
  <!-- <Navbar /> -->
  <!-- <Sidebar /> -->
  <router-view />
  <Footer />
  </div>

</template>

<script>
import Cart from './components/Cart.vue'
import Articles from './components/Articles.vue'
// import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Logo from './components/Logo.vue'
// import Sidebar from './components/Sidebar.vue'



export default {
  name: 'app',
  components: {
    Articles,
    // Sidebar,
    Cart,
    // Navbar,
    Footer,
    Logo,
  }

}
</script>

<style>

</style>
