<template>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Check Out</title>
    </head>
<header>
        <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
            <router-link class="navbar-brand" to="home">Pandora's Build-a-Pet</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <router-link class="nav-item nav-link" to="home">Home</router-link>
                <router-link class="nav-item nav-link" to="form">Form</router-link>
                <router-link class="nav-item nav-link active" to="checkout">Checkout</router-link>
                <router-link class="nav-item nav-link" to="faq">FAQ<span class="sr-only">(current)</span></router-link>
                <router-link class="nav-item nav-link" to="account">Manage Account</router-link>
                <h6 class="nav-item nav-link"> {{ user.name }} </h6>
                <a id="logout" class="nav-item nav-link" @click="logUserOut"> Logout </a>
            </div>
            </div>
        </nav>
    </header>
    <body>
        <div class="container">
            <div class="text-center">
                <img  src="../static/logo.png" alt="Pandora logo">
                <h2 class="display-3">Checkout Form</h2><br><br><br>
            </div>
            <div class="row">
                <!-- Begin Cart -->
                <div class="col-md-4 order-md-2 mb-4">
                    <div class = "sticky-top">
                        <h4 class="d-flex justify-content-between align-items-center mb-3">
                            <span class="text-muted">Your cart</span>
                            <span class="badge badge-secondary badge-pill">1</span>
                        </h4>
                        <ul class="list-group mb-3">
                            <li class="list-group-item d-flex justify-content-between lh-condensed">
                                <div>
                                    <h6 class="my-0">{{petName}}</h6>
                                </div>
                            </li>
                            <li class="list-group-item d-flex justify-content-between lh-condensed">
                                <div>
                                    <h6 class="my-0">Sex</h6>
                                    <small class="text-muted">{{sexPicked}}</small>
                                </div>
                                <span class="text-muted">$1</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between lh-condensed">
                                <div>
                                    <h6 class="my-0">Reproduction</h6>
                                    <small class="text-muted">{{reproductionPicked}}</small>
                                </div>
                                <span class="text-muted">$7</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between lh-condensed">
                                <div>
                                    <h6 class="my-0">Terrain</h6>
                                    <small class="text-muted">{{terrainSelected}}</small>
                                </div>
                                <span class="text-muted">$2</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between lh-condensed">
                                <div>
                                    <h6 class="my-0">Respiratory System</h6>
                                    <small class="text-muted">{{respiratorySelected}}</small>
                                </div>
                                <span class="text-muted">$3</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between lh-condensed">
                                <div>
                                    <h6 class="my-0">Locomotion</h6>
                                    <small class="text-muted">{{locomotionSelected}}</small>
                                </div>
                                <span class="text-muted">$4</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between lh-condensed">
                                <div>
                                    <h6 class="my-0">Vision</h6>
                                    <small class="text-muted">{{visionSelected}}</small>
                                </div>
                                <span class="text-muted">$5</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between lh-condensed">
                                <div>
                                    <h6 class="my-0">Enhancements</h6>
                                    <small class="text-muted">{{sexPicked}}</small>
                                </div>
                                <span class="text-muted">$6</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between bg-light">
                                <div class="">
                                    <h6 class="my-0">Promo code</h6>
                                    <small>None Applied</small>
                                </div>
                                <span class="">-</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between">
                                <span>Total (USD)</span>
                                <strong>$20</strong>
                            </li>
                        </ul>
                        <form class="card p-2">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Promo code">
                                <div class="input-group-append">
                                    <button type="submit" class="btn btn-secondary">Redeem</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <!-- End Cart -->

                <!-- Begin Billing Info -->
                <div class="col-md-8 order-md-1">
                    <h4 class="mb-3">Billing address</h4>
                    <form class="needs-validation" novalidate="">
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label for="firstName">First name</label>
                                <input type="text" class="form-control" id="firstName" placeholder="" value="" required="">
                                <div class="invalid-feedback"> Valid first name is required. </div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="lastName">Last name</label>
                                <input type="text" class="form-control" id="lastName" placeholder="" value="" required="">
                                <div class="invalid-feedback"> Valid last name is required. </div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="username">Username</label>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">@</span>
                                </div>
                                <input type="text" class="form-control" id="username" placeholder="Username" required="">
                                <div class="invalid-feedback" style="width: 100%;"> Your username is required. </div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="email">Email <span class="text-muted">(Optional)</span></label>
                            <input type="email" class="form-control" id="email" placeholder="you@example.com">
                            <div class="invalid-feedback"> Please enter a valid email address for shipping updates. </div>
                        </div>
                        <div class="mb-3">
                            <label for="address">Address</label>
                            <input type="text" class="form-control" id="address" placeholder="1234 Main St" required="">
                            <div class="invalid-feedback"> Please enter your shipping address. </div>
                        </div>
                        <div class="mb-3">
                            <label for="address2">Address 2 <span class="text-muted">(Optional)</span></label>
                            <input type="text" class="form-control" id="address2" placeholder="Apartment or suite">
                        </div>
                        <div class="row">
                            <div class="col-md-5 mb-3">
                                <label for="country">Country</label>
                                <select class="custom-select d-block w-100" id="country" required="">
                                    <option value="">Choose...</option>
                                    <option>United States</option>
                                </select>
                                <div class="invalid-feedback"> Please select a valid country. </div>
                            </div>
                            <div class="col-md-4 mb-3">
                                <label for="state">State</label>
                                <select class="custom-select d-block w-100" id="state" required="">
                                    <option value="">Choose...</option>
                                    <option>Alabama</option>,<option> Alaska</option>,<option> Arizona</option>,<option> Arkansas</option>,<option> California</option>,
                                    <option>Colorado</option>,<option> Connecticut</option>,<option> Delaware</option>,<option> Florida</option>,<option> Georgia</option>,
                                    <option>Hawaii</option>,<option> Idaho</option>,<option> Illinois</option>,<option> Indiana</option>,<option> Iowa</option>,
                                    <option>Kansas</option>,<option> Kentucky</option>,<option> Louisiana</option>,<option> Maine</option>,<option> Maryland</option>,
                                    <option>Massachusetts</option>,<option> Michigan</option>,<option> Minnesota</option>,<option> Mississippi</option>,<option> Missouri</option>,
                                    <option>Montana</option>,<option> Nebraska</option>,<option> Nevada</option>,<option> New Hampshire</option>,<option> New Jersey</option>,
                                    <option>New Mexico</option>,<option> New York</option>,<option> North Carolina</option>,<option> North Dakota</option>,<option> Ohio</option>,
                                    <option>Oklahoma</option>,<option> Oregon</option>,<option> Pennsylvania</option>,<option> Rhode Island</option>,<option> South Carolina</option>,
                                    <option>South Dakota</option>,<option> Tennessee</option>,<option> Texas</option>,<option> Utah</option>,<option> Vermont</option>,
                                    <option>Virginia</option>, <option>Washington</option>, <option>West Virginia</option>, <option>Wisconsin</option>, <option>Wyoming</option>
                                </select>
                                <div class="invalid-feedback"> Please provide a valid state. </div>
                            </div>
                            <div class="col-md-3 mb-3">
                                <label for="zip">Zip</label>
                                <input type="text" class="form-control" id="zip" placeholder="" required="">
                                <div class="invalid-feedback"> Zip code required. </div>
                            </div>
                        </div>
                        <hr class="mb-4">
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="same-address">
                            <label class="custom-control-label" for="same-address">Shipping address is the same as my billing address</label>
                        </div>
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="save-info">
                            <label class="custom-control-label" for="save-info">Save this information for next time</label>
                        </div>
                        <hr class="mb-4">
                        <h4 class="mb-3">Payment</h4>
                        <div class="d-block my-3">
                            <div class="custom-control custom-radio">
                                <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" required="">
                                <label class="custom-control-label" for="credit">Credit card</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required="">
                                <label class="custom-control-label" for="debit">Debit card</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" required="">
                                <label class="custom-control-label" for="paypal">PayPal</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label for="cc-name">Name on card</label>
                                <input type="text" class="form-control" id="cc-name" placeholder="" required="">
                                <small class="text-muted">Full name as displayed on card</small>
                                <div class="invalid-feedback"> Name on card is required </div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="cc-number">Credit card number</label>
                                <input type="text" class="form-control" id="cc-number" placeholder="" required="">
                                <div class="invalid-feedback"> Credit card number is required </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-3 mb-3">
                                <label for="cc-expiration">Expiration</label>
                                <input type="text" class="form-control" id="cc-expiration" placeholder="" required="">
                                <div class="invalid-feedback"> Expiration date required </div>
                            </div>
                            <div class="col-md-3 mb-3">
                                <label for="cc-cvv">CVV</label>
                                <input type="text" class="form-control" id="cc-cvv" placeholder="" required="">
                                <div class="invalid-feedback"> Security code required </div>
                            </div>
                        </div>
                        <hr class="mb-4">
                        <button class="btn btn-primary btn-lg btn-block trigger-btn" data-toggle="modal" href="#myModal" type="submit">Complete your Order</button>
                    </form>
                </div>
                <!-- End Billing Info -->
            </div>
        </div>
        <div id="myModal" class="modal fade">
            <div class="modal-dialog modal-confirm">
                <div class="modal-content">
                    <div class="modal-header">
                        <div class="icon-box">
                            <i class="material-icons">&#xE876;</i>
                        </div>				
                        <h4 class="modal-title">Success!</h4>	
                    </div>
                    <div class="modal-body">
                        <p class="text-center">Your order has successfully been purchased. You should recieve an email confirmation shortly.</p>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-success btn-block" data-dismiss="modal">OK</button>
                    </div>
                </div>
            </div>
        </div>
    </body>
    <!-- <script src = "/html/js/checkout.js"></script> -->
    <footer id="sticky-footer" class="py-4 bg-dark text-white-50">
        <div class="container text-center" style>
            <small>Copyright &copy; 2020 Designed by <u>Cameron Green</u>. All rights reserved.</small>
        </div>
    </footer>
</html>
</template>

<script>
import VueJwtDecode from "vue-jwt-decode";
import Form from "./Form.vue"

export default {
    data() {
        return {
            user: {},
            formItems: [$Form]
        };
    },
    components: {
        Form
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
        externalLink1.setAttribute('href', 'https://fonts.googleapis.com/css?family=Roboto|Varela+Round')
        document.head.appendChild(externalLink1)

        let externalLink2 = document.createElement('link')
        externalLink2.setAttribute('rel', 'stylesheet')
        externalLink2.setAttribute('type', 'text/css')
        externalLink2.setAttribute('href', 'https://fonts.googleapis.com/icon?family=Material+Icons')
        document.head.appendChild(externalLink2)

        let externalLink3 = document.createElement('link')
        externalLink3.setAttribute('rel', 'stylesheet')
        externalLink3.setAttribute('type', 'text/css')
        externalLink3.setAttribute('href', 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css')
        document.head.appendChild(externalLink3)

        let externalLink4 = document.createElement('link')
        externalLink4.setAttribute('rel', 'stylesheet')
        externalLink4.setAttribute('type', 'text/css')
        externalLink4.setAttribute('href', 'https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css')
        document.head.appendChild(externalLink4)

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

        let externalScript5 = document.createElement('script')
        externalScript5.setAttribute('src', 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js')
        document.head.appendChild(externalScript5)

        let externalScript6 = document.createElement('script')
        externalScript6.setAttribute('src', 'https://code.jquery.com/jquery-3.4.1.min.js')
        document.head.appendChild(externalScript6)
    }
}
</script>

<style scoped>
#logout{
    position: absolute;
    right: 15px;
}

html{height: 100%;}

body{
    background-color: #E9ECEF;
    height: 100%;
}    
.container {max-width: 960px;}

.lh-condensed { line-height: 1.25; }

.modal-confirm {		
color: #636363;
width: 325px;
}
.modal-confirm .modal-content {
    padding: 20px;
    border-radius: 5px;
    border: none;
}
.modal-confirm .modal-header {
    border-bottom: none;   
    position: relative;
}
.modal-confirm h4 {
    text-align: center;
    font-size: 26px;
    margin: 30px 0 -15px;
}
.modal-confirm .form-control, .modal-confirm .btn {
    min-height: 40px;
    border-radius: 3px; 
}
.modal-confirm .close {
    position: absolute;
    top: -5px;
    right: -5px;
}	
.modal-confirm .modal-footer {
    border: none;
    text-align: center;
    border-radius: 5px;
    font-size: 13px;
}	
.modal-confirm .icon-box {
    color: #fff;		
    position: absolute;
    margin: 0 auto;
    left: 0;
    right: 0;
    top: -70px;
    width: 95px;
    height: 95px;
    border-radius: 50%;
    z-index: 9;
    background: #82ce34;
    padding: 15px;
    text-align: center;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
}
.modal-confirm .icon-box i {
    font-size: 58px;
    position: relative;
    top: 3px;
}
.modal-confirm.modal-dialog {
    margin-top: 80px;
}
.modal-confirm .btn {
    color: #fff;
    border-radius: 4px;
    background: #82ce34;
    text-decoration: none;
    transition: all 0.4s;
    line-height: normal;
    border: none;
}
.modal-confirm .btn:hover, .modal-confirm .btn:focus {
    background: #6fb32b;
    outline: none;
}
.trigger-btn {
    display: inline-block;
    margin: 100px auto;
}
h6{
    position: absolute;
    right: 88px;
}
</style>