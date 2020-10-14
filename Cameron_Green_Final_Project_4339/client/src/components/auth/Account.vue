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
            <router-link class="nav-item nav-link" to="home">Home</router-link>
            <router-link class="nav-item nav-link" to="form">Form</router-link>
            <router-link class="nav-item nav-link" to="checkout">Checkout</router-link>
            <router-link class="nav-item nav-link" to="faq">FAQ</router-link>
            <router-link class="nav-item nav-link active" to="account">Manage Account<span class="sr-only">(current)</span></router-link>
            <h6 class="nav-item nav-link"> {{ user.name }} </h6>
            <a id="logout" class="nav-item nav-link" @click="logUserOut"> Logout </a>
        </div>
        </div>
    </nav>
</header>
<body>
    <div>
        <div class="col-md-6 offset-md-3">
            <span class="anchor" id="formChangePassword"></span>
            <hr class="mb-5">
            <div class="card card-outline-secondary">
                <div class="card-header">
                    <h3 class="mb-0">Delete Account</h3>
                </div>
                <div class="card-body">
                    <!-- Form is set to delete the user -->
                    <form class="form" role="form" autocomplete="off" @submit.prevent="deleteUser">
                        <div class="form-group">
                            <!-- Email -->
                            <label for="email">Email</label>
                            <input 
                            type="email" 
                            class="form-control" 
                            id="email" 
                            placeholder="example@example.com" 
                            v-model="account.email">
                        </div>
                        <div class="form-group">
                            <!-- Password -->
                            <label for="password">Password</label>
                            <input 
                            type="password" 
                            class="form-control" 
                            id="password" 
                            placeholder="Password" 
                            v-model="account.password">
                        </div><br><br><br><br>
                        <div class="form-group">
                            <button type="submit" class="btn btn-danger btn-lg float-right">Delete Account</button>
                        </div>
                    </form>
                </div>
            </div>
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
      account: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
      //Function to delete users
    async deleteUser() {
        try {
            //Gets correct method from UserController through user.js under route
            let response = await this.$http.post("/user/account", this.delete);
            let token = response.data.token;
            //Sets token
            localStorage.setItem("jwt", token);
            //If it is a token, route to /home page
            if (token) {
            this.$swal("Success", "Your account was deleted", "success");
            this.$router.push("/home");
            }
        } catch (err) {
            this.$swal("Error", "Something Went Wrong", "error");
            console.log(err.response);
        }
        },
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
html, body{ 
    height: 100%;
    background-color: #E9ECEF;
}
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

.carousel-caption{
    color: #F2F2F2;
    font-weight: 400;
}
footer{
    position: absolute;
    bottom: 0px;
    width: 100%
}
h6{
    position: absolute;
    right: 88px;
}
</style>