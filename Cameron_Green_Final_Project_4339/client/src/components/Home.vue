<template>
<html lang="en" style = "height: 100;">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
    <title>Pandora Home</title>
</head>
<header>
    <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
        <router-link class="navbar-brand" to="home">Pandora's Build-a-Pet</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav" style="width: 100%">
            <router-link class="nav-item nav-link active" to="home">Home<span class="sr-only">(current)</span></router-link>
            <router-link class="nav-item nav-link" to="form">Form</router-link>
            <router-link class="nav-item nav-link" to="checkout">Checkout</router-link>
            <router-link class="nav-item nav-link" to="faq">FAQ</router-link>
            <router-link class="nav-item nav-link" to="account">Manage Account</router-link>
            <h6 class="nav-item nav-link"> {{ user.name }} </h6>
            <a id="logout" class="nav-item nav-link" @click="logUserOut"> Logout </a>
        </div>
        </div>
    </nav>
</header>
<body>
    <div>
        <div class="jumbotron jumbotron-fluid" style="padding-bottom: 0px;">
            <div class="container">
            <h1 class="display-3">Welcome to Pandora's Build-a-Pet</h1>
            <p class="lead">We are the one and only company that allows you and your family to bring your imagination to life! It is our goal to make sure every child grows up with 
                the perfect friend. That is why we allow families to create custome-designed family friends for your children. Every child should have the best friend they could possibly
                have, so come and explore the possibilities with Pandora!
            </p>
            </div>
        </div>
        <!-- Carousel -->
        <div class = "my-container">
            <div style="max-width: 50%; height: 100%;">
                <div id = "carousel-title">
                    <div class="card">
                        <div class="card-header" style="background-color: #192841; color: white;">
                            Some of our most popular staff designs
                        </div>
                    </div>
                </div>
                <div id="demo" class="carousel slide" data-ride="carousel">
                    <ul class="carousel-indicators">
                    <li data-target="#demo" data-slide-to="0" class="active"></li>
                    <li data-target="#demo" data-slide-to="1"></li>
                    <li data-target="#demo" data-slide-to="2"></li>
                    <li data-target="#demo" data-slide-to="3"></li>
                    </ul>
                    <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://static.boredpanda.com/blog/wp-content/uuuploads/photoshopped-animals-gyyp/photoshopped-animals-gyyp-10.jpg" alt="Shorse" height="1000px">
                        <div class="carousel-caption">
                        <h3 id="carousel-text">Shorse</h3>
                        <p id="carousel-text">We still are not sure how granting the most feared aquatic predator legs was given the green-light by our ethics department, 
                            but then again we never really had an ethics department...</p>
                        </div>   
                    </div>
                    <div class="carousel-item">
                        <img src="https://static.boredpanda.com/blog/wp-content/uuuploads/photoshopped-animals-gyyp/photoshopped-animals-gyyp-8.jpg" alt="Purilla">
                        <div class="carousel-caption">
                        <h3 id="carousel-text">Heagle</h3>
                        <p id="carousel-text">As if horses weren't a big enough danger, now they can come with amazing eyesight and a loveable (and quite dangerous) beak!</p>
                        </div>   
                    </div>
                    <div class="carousel-item">
                        <img src="https://static.boredpanda.com/blog/wp-content/uuuploads/photoshopped-animals-gyyp/photoshopped-animals-gyyp-15.jpg" alt="Elephuck">
                        <div class="carousel-caption">
                        <h3 id="carousel-text">Elephuck</h3>
                        <p id="carousel-text">This was a staff project, purely for professional purposes. This is the unoffical (but unanimously voted for by our staff) name 
                            for this new hybrid elephant-duck hybrid.
                        </p>
                        </div>   
                    </div>
                    <div class="carousel-item">
                        <img src="https://static.boredpanda.com/blog/wp-content/uuuploads/photoshopped-animals-gyyp/photoshopped-animals-gyyp-1.jpg" alt="Elephuck">
                        <div class="carousel-caption">
                        <h3 id="carousel-text">Slawk</h3>
                        <p id="carousel-text">What happens when you mix the world's laziest animal with one of the world's most ferocious hunters? Despite the numerous legal, 
                            ethical, and enviromental dilemas this project faced, rest assured that we went ahead and sought the answer for you!
                        </p>
                        </div>   
                    </div>
                    </div>
                    <a class="carousel-control-prev" href="#demo" data-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                    </a>
                    <a class="carousel-control-next" href="#demo" data-slide="next">
                    <span class="carousel-control-next-icon"></span>
                    </a>
                </div>
            </div>
        </div><br>
        <div id="popular-services">
            <ul class="list-unstyled">
                <li style="color: #192841; font-size: 30px;"><strong>Popular services include:</strong></li>
                <li id="item">Creating existing crossbreeds of domesticated animals</li>
                <li id="item">Modifying an animal with just one trait of another</li>
                <ul>
                    <li id="item">Applying a tiger's fur pattern to a pet</li>
                    <li id="item">Altering the meow of a cat to the hoot of an owl</li>
                    <li id="item">Giving hamsters webbed feet</li>
                </ul>
                <li id="item">Creating hybrids of animals that would otherwise not exist in nature</li>
                <li id="item">Creating all new species based off the genetic material of others existing animals*</li>
                <ul>
                    <li id="item">The most popular service</li>
                    <li id="item">Allows Creators to let their imagination free</li>
                    <li id="item">While it is the most costly, it is the most customizable and has the highest customer<br>
                        satisfaction of any of our other services!
                    </li>
                </ul>
                <li style="font-size: 12px;"><em>*Pets created this way will be infertile and unable to reproduce</em></li>
            </ul>
        </div>
    </div>
</body>
<footer id="sticky-footer" class="py-4 bg-dark text-white-50">
    <div class="container text-center" style>
        <small>Copyright &copy; 2020 Designed by <u>Cameron Green</u>. All rights reserved.</small>
    </div>
</footer>
</html>
</template>

<script>
import VueJwtDecode from "vue-jwt-decode";
export default {
    data() {
        return {
            user: {}
        };
    },
    methods : {
        //Function that logs user out and routes to log in page
        logUserOut() {
            localStorage.removeItem("jwt");
            this.$router.push("/");
        },
        getUserDetails() {
            let token = localStorage.getItem("jwt");
            let decoded = VueJwtDecode.decode(token);
            this.user = decoded;
        }
    },
    created() {
        this.getUserDetails();
    },
    mounted() {
        //appends links and scripts to the head of the document
        let externalLink1 = document.createElement('link')
        externalLink1.setAttribute('rel', 'stylesheet')
        externalLink1.setAttribute('type', 'text/css')
        externalLink1.setAttribute('href', 'https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css')
        document.head.appendChild(externalLink1)

        let externalScript1 = document.createElement('script')
        externalScript1.setAttribute('src', 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js')
        document.head.appendChild(externalScript1)

        let externalScript2 = document.createElement('script')
        externalScript2.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js')
        document.head.appendChild(externalScript2)

        let externalScript3 = document.createElement('script')
        externalScript3.setAttribute('src', 'https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js')
        document.head.appendChild(externalScript3)

        let externalScript4 = document.createElement('script')
        externalScript4.setAttribute('src', 'https://cdn.jsdelivr.net/npm/vue/dist/vue.js')
        document.head.appendChild(externalScript4)
    }
}
</script>

<style scoped>
#logout{
    position: absolute;
    right: 15px;
    }
/* Make the image responsive */
.carousel-inner img {
    max-width: 100%;
    max-height: 480px;
    text-align: center;
}

#demo{background-color: #303030;}

#item{font-size: 20px;}

.my-container, #popular-services {
    display: flex;
    justify-content: center;
}

body{background-color: #E9ECEF;}

.carousel-caption{
    color: #F2F2F2;
    font-weight: 400;
}
h6{
    position: absolute;
    right: 88px;
}
</style>