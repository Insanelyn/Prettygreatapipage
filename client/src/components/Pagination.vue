<template>
  <div>
      <Cards :articles="articles" />
           <p class="text-center mb-0">{{currentPage+1 }} / {{ pages }}</p>
        <ul class="pagination justify-content-center">
            <li class="page-item" :class="{disabled: prevUrl === ''}">
                <button class="page-link" @click="checkPage(prevUrl)">Previous</button>
            </li>
            <li class="page-item" :class="{disabled: nextUrl === ''}">
                <button class="page-link" @click="checkPage(nextUrl)">Next</button>
            </li>
        </ul>
  </div>
</template>

<script>
import Cards from './Cards';
import Api from '@/config/Api'

export default {
    components: {
        Cards
    },
    data() {
        return {
            articles: [],
            currentPage: '',
            pages: '',
            prevUrl: '',
            nextUrl: ''
        }
    },
    created() {
        Api().get('/articles')
            .then(response => {
                this.articles = response.data.articles;
                this.currentPage = response.data.currentPage;
                this.pages = response.data.pages;
                this.nextUrl = response.data.nextUrl;
                this.prevUrl = response.data.prevUrl;
            });
    },
    methods: {
        checkPage(url) {
            Api().get(url)
                .then(response => {
                    this.articles = response.data.articles;
                    this.currentPage = response.data.currentPage;
                    this.pages = response.data.pages;
                    this.nextUrl = response.data.nextUrl;
                    this.prevUrl = response.data.prevUrl;
                })
        }
    }
}
</script>

<style scoped>

</style>
