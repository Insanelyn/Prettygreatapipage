<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 review">
<h2> {{ review.author }}</h2>
</div>
        <div class="col-md-6 review">
        <p> {{ review.text }}</p>

        <!-- <p><span class="font-weight-bold">Category</span>: {{ review.category }}</p> -->
        <!-- <p><span class="font-weight-bold">Color</span>: {{ review.color }}</p> -->
<div class="reviewbody">
        <p class="text-danger font-weight-bold pull-left">${{review.rating}}</p>
      </div>
    </div>

  </div>
        </div>
</template>

<script>
import Api from '@/config/Api'

export default {
  props: ['id'],
  data(){
    return {
      review: {}
    }
  },
  created() {
       Api().get(`/reviews`)
              .then(response => {
                this.review = response.data
              });
  },

}
</script>

<style>
img{
  width:100%;
  margin: auto;
  display: block;
}
.review{
  top:9vh;

}
.reviewbody{
  margin-top: 13%;
}
.btn-addtocart{
  border-radius: 5px;
  display: block;
  margin: 0 auto;
  width: 100px;
  line-height: 25px;
}
</style>
