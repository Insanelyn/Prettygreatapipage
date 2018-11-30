<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4 mb-3" v-for="article in articles" :key="article._id">
        <div class="cards">
        <Card :article="article" />
      </div>

    </div>
  </div>
</div>
</template>

<script>
import Card from './Card';
import Api from '@/config/Api'
import mixins from '@/mixins/mixins';



export default {
  data() {
    return {
      categories: [],

    }
  },

  created() {
    Api().get('/categories')
    .then(response => {
      this.categories = response.data;
    });
  },

  mixins: [mixins],

  props: ['articles'],
  components: {
    Card,
  }
}

</script>

<style scoped>
.cards {


}
</style>
