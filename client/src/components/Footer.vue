<template>
  <body>
            <footer id="siteFooter">
            <div class="container">

                <div class="row">
                    <!-- <div class="col-sm-3">
                        <img src="../assets/bluelogo.png" class="navbar-brand">
                    </div> -->
                    <div class="col-sm-3">
                        <h5>Navigation</h5>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Sign up</a></li>
                          </ul>
                    </div>
                    <div class="col-sm-3">
                        <h5>Store</h5>
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-3">
                        <h5>Support</h5>
                        <ul>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Help desk</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-3">
                        <div class="social-networks">
                            <a href="https://www.twitter.com/" class="twitter"><i class="fa fa-twitter"></i></a>
                            <a href="https://www.facebook.com/" class="facebook"><i class="fa fa-facebook-square"></i></a>
                            <a href="https://www.google-plus.com/" class="google"><i class="fa fa-google-plus"></i></a>
                        </div>
                        <button type="button" class="btn btn-secondary">Contact us</button>
                    </div>
                </div>
            </div>
  </footer>
</body>

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

<style lang="css">
#siteFooter {
    color: white;
    padding-top: 7%;
}


#siteFooter .row {
    margin-bottom: 30px;
}

#siteFooter .navbar-brand {
    margin: 11%;
    width: 75%;

}


#siteFooter ul {
    list-style-type: none;
    padding-left: 0;
    line-height: 1.7;
}

#siteFooter h5 {
    font-size: 18px;
    color: #8E8D8A;
    font-weight: bold;
    margin-top: 30px;
}

#siteFooter h2 a{
    font-size: 50px;
    text-align: center;
    color: #fff;
}

#siteFooter a {
    color: #d4d4d4;
    text-decoration: none;
}

#siteFooter a:hover,
#siteFooter a:focus {
    text-decoration: none;
    color: white;
}

#siteFooter .social-networks {
    text-align: center;
    padding-top: 30px;
    padding-bottom: 16px;
}

#siteFooter .social-networks a {
    font-size: 32px;
    color: gray;
    padding: 10px;
    transition: 0.2s;
}

#siteFooter .social-networks a:hover {
    text-decoration: none;
}

#siteFooter .facebook:hover {
    color: #0077e2;
}

#siteFooter .google:hover {
    color: #ef1a1a;
}

#siteFooter .twitter:hover {
    color: #00aced;
}

#siteFooter .btn {
    color: white;
    border-radius: 50px;
    border: none;
    width: 150px;
    display: block;
    margin: 0 auto;
    line-height: 25px;

}

@media screen and (max-width: 767px) {
    #siteFooter {
        text-align: center;
    }
}




</style>
