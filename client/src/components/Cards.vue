<template>
  <div class="container">
      <div class="row">
          <div class="col-md-4 mb-3" v-for="article in articles" :key="article._id">
              <Card :article="article" />
          </div>
      </div>
  </div>
</template>

<script>
import Card from './Card';

export default {
    props: ['articles'],
    components: {
        Card
    }

}
</script>

<style scoped>

</style>
