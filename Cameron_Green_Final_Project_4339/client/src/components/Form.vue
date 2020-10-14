<template>
<html lang="en" style = "height: 100;">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pet Designer</title>
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
            <router-link class="nav-item nav-link active" to="form">Form<span class="sr-only">(current)</span></router-link>
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
    <div class="container">
        <div class="text-center">
            <img  src="../static/logo.png" alt="Pandora logo">
            <h2 class="display-3">Pet Designer</h2><br><br><br>
        </div>
        <div class="row">
            <!-- Begin Pet Info Block -->
            <div class="col-md-8 order-md-1 offset-md-2">
                <h4 class="mb-3">Pet Information</h4>
                <form id="myForm" class="needs-validation" novalidate="" @submit.prevent="submitForm">
                    <div class="row">
                        <div class="col-md-12 mb-3">
                            <label for="petName">Pet Name</label>
                            <input type="text" class="form-control" id="petName" placeholder="" value="" required="" v-model="inputData.petName">
                            <small class="text-muted">The name for your pet</small>
                            <div class="invalid-feedback"> Valid first name is required. </div>
                        </div>
                    </div>
                    <!-- End Pet Info Block -->

                    <!-- Begin Pet Sex and Reproduction -->
                    <div style="display: inline-block;">
                        <label style="display: block;">Sex</label>
                        <small class="text-muted">The sex of your pet</small>
                        <div class="d-block my-3" style="display: inline-block;">
                            <div class="custom-control custom-radio">
                                <input id="male" name="sex" type="radio" class="custom-control-input" value="Male" required="" v-model="inputData.sexPicked">
                                <label class="custom-control-label" for="male">Male</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input id="female" name="sex" type="radio" class="custom-control-input" value="Female" required="" v-model="inputData.sexPicked">
                                <label class="custom-control-label" for="female">Female</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input id="hermaphrodite" name="sex" type="radio" class="custom-control-input" value="Hermaphrodite" required="" v-model="inputData.sexPicked">
                                <label class="custom-control-label" for="hermaphrodite">Hermaphrodite</label>
                            </div>
                        </div>
                    </div>
                    <div style="display: inline-block;" class="col-md-4 offset-md-2">
                        <label stlye="display: block">Reproduction</label>
                        <small class="text-muted" style="display: block;">How your pet reproduces</small>
                        <div class="d-block my-3">
                            <div class="custom-control custom-radio">
                                <input id="sexual" name="reproduction" type="radio" class="custom-control-input" value="Sexual" required="" v-model="inputData.reproductionPicked">
                                <label class="custom-control-label" for="sexual">Sexual</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input id="asexual" name="reproduction" type="radio" class="custom-control-input" value="Asexual" required="" v-model="inputData.reproductionPicked">
                                <label class="custom-control-label" for="asexual">Asexual</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input id="sterile" name="reproduction" type="radio" class="custom-control-input" value="Sterile" required="" v-model="inputData.reproductionPicked">
                                <label class="custom-control-label" for="sterile">Sterile</label>
                            </div>
                        </div>
                    </div>
                    <!-- End Pet Sex and Reproduction -->
                    <hr class="mb-4">
                    <!-- Begin Evolutionary Traits -->
                    <h4 class="mb-3">Evolutionary Traits</h4>
                    <div class="row">
                        <div class="col-md-4 mb-3">
                            <label for="terrain">Terrain</label>
                            <select class="custom-select d-block w-100" id="terrain" required="" v-model="inputData.terrainSelected">
                                <option value="">Choose...</option>
                                <option>Aerial</option>
                                <option>Terrestrial</option>
                                <option>Aquatic</option>
                                <option>Amphibian</option>
                            </select>
                            <small class="text-muted">Terrain your pet is adapted for</small>
                            <div class="invalid-feedback"> Please provide a valid terrain type. </div>
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="respiratory">Respiratory System</label>
                            <select class="custom-select d-block w-100" id="respiratory" required="" v-model="inputData.respiratorySelected">
                                <option value="">Choose...</option>
                                <option>Lungs</option>
                                <option>Gills</option>
                                <option>Pores</option>
                            </select>
                            <small class="text-muted">How your pet circulates oxygen</small>
                            <div class="invalid-feedback"> Please select a valid respiratory system. </div>
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="locomotion">Locomotion</label>
                            <select class="custom-select d-block w-100" id="locomotion" required="" v-model="inputData.locomotionSelected">
                                <option value="">Choose...</option>
                                <option>Legs</option>
                                <option>Wings</option>
                                <option>Fins</option>
                                <option>Undulation</option>
                            </select>
                            <small class="text-muted">How your pet will move</small>
                            <div class="invalid-feedback"> Please select a valid form of locomotion. </div>
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="vision">Vision</label>
                            <select class="custom-select d-block w-100" id="vision" required="" v-model="inputData.visionSelected">
                                <option value="">Choose...</option>
                                <option>Compound</option>
                                <option>Lense</option>
                                <option>Chambered</option>
                                <option>Blind</option>
                            </select>
                            <small class="text-muted">How light is processed by the eye(s)</small>
                            <div class="invalid-feedback"> Please select a valid vision type. </div>
                        </div>
                    </div>
                    <!-- End Evolutionary Traits -->
                    <hr class="mb-4">
                    <!-- Begin Enhancements -->
                    <h4 class="mb-3">Enhancements</h4>
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="faster" v-model="inputData.checkedEnhancements1">
                        <label class="custom-control-label" for="faster">Efficient circulation for faster movement</label>
                    </div><br>
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="stronger" v-model="inputData.checkedEnhancements2">
                        <label class="custom-control-label" for="stronger">Denser muscle mass for increased strength</label>
                    </div><br>
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="smarter" v-model="inputData.checkedEnhancements3">
                        <label class="custom-control-label" for="smarter">Neural network restructuring for improved information processing</label>
                    </div><br>
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="invisibility" v-model="inputData.checkedEnhancements4">
                        <label class="custom-control-label" for="invisibility">Advanced pigment manipulation for adaptable camouflage</label>
                    </div><br>
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="tougher" v-model="inputData.checkedEnhancements5">
                        <label class="custom-control-label" for="tougher">Increased calcium and phosphorus levels for thicker bones</label>
                    </div><br>
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="sunglasses" v-model="inputData.checkedEnhancements6">
                        <label class="custom-control-label" for="sunglasses">Nictitating membrane; a third translucent eyelid that protects eyes from sunlight and minor scratches</label>
                    </div><br>
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="regeneration" v-model="inputData.checkedEnhancements7">
                        <label class="custom-control-label" for="regeneration">Quicker cell division time to provide increased regenerative capabilities</label>
                    </div><br>
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="hunting" v-model="inputData.checkedEnhancements8">
                        <label class="custom-control-label" for="hunting">Increased nerve and receptor clusters in nose to heighten nasal sensitivity</label>
                    </div><br>
                    <!-- End Enhancements -->
                    <hr class="mb-4">
                    <button class="btn btn-primary btn-lg btn-block trigger-btn" data-toggle="modal" href="#myModal" type="submit">Submit Pet Design</button>
                </form>
            </div>
        </div>
    </div>
    <!-- Sets up modal information for -->
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
                    <p class="text-center">Your pet's design has successfully been saved. Please continue to checkout.</p>
                </div>
                <div class="modal-footer">
                    <router-link class="btn btn-success btn-block" data-dismiss="modal" to="/checkout">OK</router-link>
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
import { mapState, mapMutations } from 'vuex'

export default {
    name: 'Form',
    el: '#myForm',
    //Setup to pass info to another component
    data() {
        return {
            // petName: "",
            // sexPicked: "",
            // reproductionPicked: "",
            // terrainSelected: "",
            // respiratorySelected: "",
            // locomotionSelected: "",
            // visionSelected: "",
            // checkedEnhancements1: "",
            // checkedEnhancements2: "",
            // checkedEnhancements3: "",
            // checkedEnhancements4: "",
            // checkedEnhancements5: "",
            // checkedEnhancements6: "",
            // checkedEnhancements7: "",
            // checkedEnhancements8: ""
            inputData: {}
        };
    },
    computed: {
        ...mapState([
            'userData'
        ])
        // //Test to see if info is saved
        // processForm(){
        //     console.log({petName: this.petName,
        //     sexPicked: this.sexPicked,
        //     reproductionPicked: this.reproductionPicked,
        //     terrainSelected: this.terrainSelected,
        //     respiratorySelected: this.respiratorySelected,
        //     locomotionSelected: this.locomotionSelected,
        //     visionSelected: this.visionSelected,
        //     checkedEnhancements1: this.checkedEnhancements1,
        //     checkedEnhancements2: this.checkedEnhancements2,
        //     checkedEnhancements3: this.checkedEnhancements3,
        //     checkedEnhancements4: this.checkedEnhancements4,
        //     checkedEnhancements5: this.checkedEnhancements5,
        //     checkedEnhancements6: this.checkedEnhancements6,
        //     checkedEnhancements7: this.checkedEnhancements7,
        //     checkedEnhancements8: this.checkedEnhancements8})
        //     this.$store.commit('setCart')
        //     console.log(
        //         this.$store.state.petName,
        //         this.$store.state.sexPicked,
        //         this.$store.state.reproductionPicked,
        //         this.$store.state.terrainSelected,
        //         this.$store.state.respiratorySelected,
        //         this.$store.state.locomotionSelected,
        //         this.$store.state.visionSelected,
        //         this.$store.state.checkedEnhancements1,
        //         this.$store.state.checkedEnhancements2,
        //         this.$store.state.checkedEnhancements3,
        //         this.$store.state.checkedEnhancements4,
        //         this.$store.state.checkedEnhancements5,
        //         this.$store.state.checkedEnhancements6,
        //         this.$store.state.checkedEnhancements7,
        //         this.$store.state.checkedEnhancements8)
        // }
    },
    methods : {
        //Function that logs user out and routes to log in page
        logUserOut() {
            localStorage.removeItem("jwt");
            this.$router.push("/");
        },
        ...mapMutations([
            'ADD_USER_DATA'
        ]),
        submitForm () {
            this.ADD_USER_DATA(this.inputData)
            return this.$store.getters.inputList
            console.log(this.$store.getters.inputList)
        },
        //Test to see if info is saved
        // processForm(){
        //     console.log({petName: this.petName,
        //     sexPicked: this.sexPicked,
        //     reproductionPicked: this.reproductionPicked,
        //     terrainSelected: this.terrainSelected,
        //     respiratorySelected: this.respiratorySelected,
        //     locomotionSelected: this.locomotionSelected,
        //     visionSelected: this.visionSelected,
        //     checkedEnhancements1: this.checkedEnhancements1,
        //     checkedEnhancements2: this.checkedEnhancements2,
        //     checkedEnhancements3: this.checkedEnhancements3,
        //     checkedEnhancements4: this.checkedEnhancements4,
        //     checkedEnhancements5: this.checkedEnhancements5,
        //     checkedEnhancements6: this.checkedEnhancements6,
        //     checkedEnhancements7: this.checkedEnhancements7,
        //     checkedEnhancements8: this.checkedEnhancements8})
        //     this.$store.commit('setCart')
        //     console.log(
        //         this.$store.state.petName,
        //         this.$store.state.sexPicked,
        //         this.$store.state.reproductionPicked,
        //         this.$store.state.terrainSelected,
        //         this.$store.state.respiratorySelected,
        //         this.$store.state.locomotionSelected,
        //         this.$store.state.visionSelected,
        //         this.$store.state.checkedEnhancements1,
        //         this.$store.state.checkedEnhancements2,
        //         this.$store.state.checkedEnhancements3,
        //         this.$store.state.checkedEnhancements4,
        //         this.$store.state.checkedEnhancements5,
        //         this.$store.state.checkedEnhancements6,
        //         this.$store.state.checkedEnhancements7,
        //         this.$store.state.checkedEnhancements8)
        // },
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

        // let externalScript0 = document.createElement('script')
        // externalScript0.setAttribute('src', '../static/html/js/form.js')
        // document.body.appendChild(externalScript0)

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