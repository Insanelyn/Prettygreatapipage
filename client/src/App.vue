<template>
  <div id="app">
    <Navbar />
      <router-view />
  </div>
</template>

<script>
import Articles from './components/Articles.vue'
import Navbar from './components/Navbar.vue'


export default {
  name: 'app',
  components: {
    Articles,
    Navbar
  }

}
</script>

<style>

</style>
