<template>
<html lang="en" style = "height: 100;">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Frequently Asked Questions</title>
</head>
<header>
    <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
        <router-link class="navbar-brand" to="home">Pandora's Build-a-Pet</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" 
        aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link class="nav-item nav-link" to="home">Home</router-link>
            <router-link class="nav-item nav-link" to="form">Form</router-link>
            <router-link class="nav-item nav-link" to="checkout">Checkout</router-link>
            <router-link class="nav-item nav-link active" to="faq">FAQ<span class="sr-only">(current)</span></router-link>
            <router-link class="nav-item nav-link" to="account">Manage Account</router-link>
            <h6 class="nav-item nav-link"> {{ user.name }} </h6>
            <a id="logout" class="nav-item nav-link" @click="logUserOut"> Logout </a>
          </div>
        </div>
      </nav>
</header>
<body>
  <!-- Begin FAQ accordions -->
  <section class="accordion-section clearfix mt-3" aria-label="Question Accordions" style="margin-top: 0px;">
    <br><div class="container">
      <h2 class="display-3">Frequently Asked Questions</h2><br><br>
      <!-- Begin General Questions -->
      <h3 aria-expanded="true"  style="font-weight: 600; font-size: xxx-large; text-decoration: underline;">General Questions</h3><br>
      <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
        <div class="panel panel-default">
          <div class="panel-heading p-3 mb-3" role="tab" id="heading0">
            <h4 class="panel-title">
              <a class="collapsed" role="button" title="" data-toggle="collapse" data-parent="#accordion" href="#collapse0" aria-expanded="true" aria-controls="collapse0">
              Are your pets raised in an safe, legal, and ethical manner?
              </a>
            </h4>
          </div>
          <div id="collapse0" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading0">
            <div class="panel-body px-3 mb-4">
              <p>All our products are created in state-of-the-art laboratories with that comply with regulatory requirements. We have designed our product's developmental 
                process to meet the minimum legal and regulatory conditions allowed.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="panel panel-default">
        <div class="panel-heading p-3 mb-3" role="tab" id="heading1">
          <h4 class="panel-title">
            <a class="collapsed" role="button" title="" data-toggle="collapse" data-parent="#accordion" href="#collapse1" aria-expanded="true" aria-controls="collapse1">
            What happens to defective pets?
            </a>
          </h4>
        </div>
        <div id="collapse1" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading1">
          <div class="panel-body px-3 mb-4">
            <p>All defective products are recycled by breaking down the remains back into the their most basic bio-mass equivilants.</p>
          </div>
        </div>
      </div>
      <div class="panel panel-default">
        <div class="panel-heading p-3 mb-3" role="tab" id="heading2">
          <h4 class="panel-title">
            <a class="collapsed" role="button" title="" data-toggle="collapse" data-parent="#accordion" href="#collapse2" aria-expanded="true" aria-controls="collapse2">
              Has Pandora provided products to customers for legally dubious purposes?
            </a>
          </h4>
        </div>
        <div id="collapse2" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading2">
          <div class="panel-body px-3 mb-4">
            <p>Pandora has presently, and will always maintain that our business dealings have consistently operated within international law. Any proof presented to the 
              contrary is patently false and libelous.</p>
          </div>
        </div>
      </div>
        <div class="panel panel-default">
          <div class="panel-heading p-3 mb-3" role="tab" id="heading3">
            <h4 class="panel-title">
              <a class="collapsed" role="button" title="" data-toggle="collapse" data-parent="#accordion" href="#collapse3" aria-expanded="true" aria-controls="collapse3">
              Will we ever edit virus or bacteria genomes?
              </a>
            </h4>
          </div>
          <div id="collapse3" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading3">
            <div class="panel-body px-3 mb-4">
              <p>While Pandora LLC is an online pet designer and will not expand into bio-medicine, our parent company, Pandora Corp. does own a subsidiary whose primary 
                focus is in applied biological egineering of microrganisms.</p>
            </div>
          </div>
        </div><br><br>
        <!-- End General Questions -->

        <!-- Begin Pet Specific Questions -->
        <h4 aria-expanded="true" style="font-weight: 600; font-size: xxx-large; text-decoration: underline;">Pet Specific Questions</h4><br>
        <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
          <div class="panel panel-default">
            <div class="panel-heading p-3 mb-3" role="tab" id="heading4">
              <h4 class="panel-title">
                <a class="collapsed" role="button" title="" data-toggle="collapse" data-parent="#accordion" href="#collapse4" aria-expanded="true" aria-controls="collapse4">
                  Are allergy-friendly alternatives available?
                </a>
              </h4>
            </div>
            <div id="collapse4" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading4">
              <div class="panel-body px-3 mb-4">
                <p>While it is possible for us to create a hypo-allergenic pet, we would recommend seeking services from our sister company, Pandora GeneClinic. They offer gene 
                  therapies that will eliminate most known allergies as well as other physiologically altering therapies.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="panel panel-default">
          <div class="panel-heading p-3 mb-3" role="tab" id="heading5">
            <h4 class="panel-title">
              <a class="collapsed" role="button" title="" data-toggle="collapse" data-parent="#accordion" href="#collapse5" aria-expanded="true" aria-controls="collapse5">
                How much does it cost to design, create, and grow an average pet?
              </a>
            </h4>
          </div>
          <div id="collapse5" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading5">
            <div class="panel-body px-3 mb-4">
              <p>While the current price is a limiting factor for many, our numerous existing (and currently being developed) techniques are helping us lower the cost of 
                providing the world's highest quality designer pet.</p>
            </div>
          </div>
        </div>
        <div class="panel panel-default">
          <div class="panel-heading p-3 mb-3" role="tab" id="heading6">
            <h4 class="panel-title">
              <a class="collapsed" role="button" title="" data-toggle="collapse" data-parent="#accordion" href="#collapse6" aria-expanded="true" aria-controls="collapse6">
                Do I have to train my new pet?
              </a>
            </h4>
          </div>
          <div id="collapse6" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading6">
            <div class="panel-body px-3 mb-4">
              <p>Yes. As behaviors such as potty training and understanding commands are skills learned through teaching rather than inheriting them, it makes genetically 
                embedding knowledge impracticable (for now).</p>
            </div>
        </div>
        <div class="panel panel-default">
          <div class="panel-heading p-3 mb-3" role="tab" id="heading10">
            <h4 class="panel-title">
              <a class="collapsed" role="button" title="" data-toggle="collapse" data-parent="#accordion" href="#collapse10" aria-expanded="true" aria-controls="collapse10">
                My pet ate something weird and is having sudden changes in their behavior as well as strange mutations!
              </a>
            </h4>
          </div>
          <div id="collapse10" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading10">
            <div class="panel-body px-3 mb-4">
              <p>Due to the inherently unstable nature that genetically engineered pets possess, we strongly recommend keeping any substances you would not want near small children away
                from your pets as well. This will help prevent many unecessary cases of spontaneous reactions to the introduction of common chemicals.</p>
            </div>
          </div>
        </div>
      </div><br><br>
      <!-- End Pet Specific Questions -->

      <!-- Begin Replacements, Returns, and Cancellations -->
      <h4 aria-expanded="true" style="font-weight: 600; font-size: xxx-large; text-decoration: underline;">Replacements, Returns, and Cancellations</h4><br>
      <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
        <div class="panel panel-default">
          <div class="panel-heading p-3 mb-3" role="tab" id="heading8">
            <h4 class="panel-title">
              <a class="collapsed" role="button" title="" data-toggle="collapse" data-parent="#accordion" href="#collapse8" aria-expanded="true" aria-controls="collapse8">
                Can I get a refund or replacement for my pet?
              </a>
            </h4>
          </div>
          <div id="collapse8" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading8">
            <div class="panel-body px-3 mb-4">
              <p>Unfortunately, we cannot always give a dissatisfied customer their desired solution in all cases. If your situation falls within one of these general categories, 
                then you may be entitled for a replacement of your pet or a full refund:</p>
              <ul>
              <li>Your pet sustained damage caused directly by Pandora LLC or any sub-unit thereof such as during delivery or development.</li>
              <br>
              <li>Your pet falls under a valid warranty and the damage satisfies the requirements to recieve a replacement.</li>
              <br>
              <li>For a full description of our Return or Replacement Policy, please click <a href="https://don16obqbay2c.cloudfront.net/wp-content/uploads/09929877-bb38-4abc-94c7-c2c334071c2f_No20Return20Policy20at20Lingerie20Shop-1477480517.jpg">here</a>.</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="panel panel-default">
          <div class="panel-heading p-3 mb-3" role="tab" id="heading9">
            <h4 class="panel-title">
              <a class="collapsed" role="button" title="" data-toggle="collapse" data-parent="#accordion" href="#collapse9" aria-expanded="true" aria-controls="collapse9">
                I don't have my receipt because my pet ate it!
              </a>
            </h4>
          </div>
          <div id="collapse9" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading9">
            <div class="panel-body px-3 mb-4">
              <p>Unfortunately your pet consuming your receipt is not a currently accepted reason for seeking a refund without your receipt.</p>
            </div>
          </div>
        </div>
        <div class="panel panel-default">
          <div class="panel-heading p-3 mb-3" role="tab" id="heading11">
            <h4 class="panel-title">
              <a class="collapsed" role="button" title="" data-toggle="collapse" data-parent="#accordion" href="#collapse11" aria-expanded="true" aria-controls="collapse11">
              Can I cancel my order before it is shipped and still get my money back?
              </a>
            </h4>
          </div>
          <div id="collapse11" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading11">
            <div class="panel-body px-3 mb-4">
              <p>Yes, you may cancel you order prior to you pet being shipped, but you will only recieve part of your billed amount. To recieve full credit for your purchase, 
                you must cancel within 48 hours of placing your order, or our development costs will be deducted on a prorated basis.
              </p>
            </div>
          </div>
        </div>
      </div><br><br>
      <!-- End Replacements, Returns, and Cancellations -->
    </div>
  </section>
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
      externalLink1.setAttribute('href', 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css')
      document.head.appendChild(externalLink1)

      let externalLink2 = document.createElement('link')
      externalLink2.setAttribute('rel', 'stylesheet')
      externalLink2.setAttribute('type', 'text/css')
      externalLink2.setAttribute('href', 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css')
      document.head.appendChild(externalLink2)

      let externalLink3 = document.createElement('link')
      externalLink3.setAttribute('rel', 'stylesheet')
      externalLink3.setAttribute('type', 'text/css')
      externalLink3.setAttribute('href', 'https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css')
      document.head.appendChild(externalLink3)

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
html {background-color: #E9ECEF;}

body {background-color: #E9ECEF;}

.divider {
    font-size: 28pt;
    text-decoration: underline;
    color: #298FCA;
}
h2 {
  font-family: Arial, Verdana;
  font-weight: 800;
  font-size: 2.5rem;
  color: #091f2f;
  text-transform: uppercase;
}
.accordion-section .panel-default > .panel-heading {
    border: 0;
    background: #f4f4f4;
    padding: 0;
}
.accordion-section .panel-default .panel-title a {
    display: block;
    font-family: Arial, Verdana;
    color: #091f2f;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 1.5rem;
}
.accordion-section .panel-default .panel-title a:after {
    font-family: 'FontAwesome';
    font-style: normal;
    font-size: 3rem;
    content: "\f106";
    color: #091f2f;
    float: right;
    margin-top: -12px;
}
.accordion-section .panel-default .panel-title a.collapsed:after {
    content: "\f107";
}
.accordion-section .panel-default .panel-body {
    font-size: 1.2rem;
}
h6{
    position: absolute;
    right: 88px;
}
</style>