<template>
<html>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
        <form
          class="text-center border border-primary p-5"
          style="margin-top:70px;height:auto;padding-top:100px !important;"
          @submit.prevent="registerUser">
          <div class="card-header">
            <h3 class="mb-0">Register</h3>
          </div>
          <div class="card-body">
            <!-- Email -->
            <input
              type="text"
              id="name"
              class="form-control mb-5"
              placeholder="Name"
              v-model="register.name"
              required
            />
            <input
              type="email"
              id="email"
              class="form-control mb-5"
              placeholder="Email"
              v-model="register.email"
              required
            />
            <!-- Password -->
            <input
              type="password"
              id="password"
              class="form-control mb-5"
              placeholder="Password"
              v-model="register.password"
            />
            <p>
              Already have an account?<router-link to="/"
                >click here</router-link
              >
              <!-- Sign in button -->
              <center>
                <button class="btn btn-primary btn-block w-75 my-4" type="submit">
                  Sign in
                </button>
              </center>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
  <footer id="sticky-footer" class="py-4 bg-dark text-white-50">
    <div class="container text-center" style>
        <small>Copyright &copy; 2020 Designed by <u>Cameron Green</u>. All rights reserved.</small>
    </div>
  </footer>
</html>
</template>
<script>
export default {
  data() {
    return {
      register: {
        name: "",
        email: "",
        password: ""
      }
    };
  },
  methods: {
    //Method that registers a user
    async registerUser() {try {
        //Gets correct method from UserController through user.js under route
        let response = await this.$http.post("/user/register", this.register);
        console.log(response);
        //Sets up token
        let token = response.data.token;
        //If a token was made, set get token and route to login page
        if (token) {
          localStorage.setItem("jwt", token);
          this.$router.push("/");
          this.$swal("Success", "Registration Was successful", "success");
        } else {
          this.$swal("Error", "Something Went Wrong", "error");
        }
      } catch (err) {
        let error = err.response;
        if (error.status == 409) {
          swal("Error", error.data.message, "error");
        } else {
          swal("Error", error.data.err.message, "error");
        }
      }
    }
  }
};
</script>
<style scoped>
html {
  height: 100%;
  }

body {height: 100%}

form {background-color: #E9ECEF;}

footer {
  position: absolute;
  width: 100%;
  bottom: 0px;
}
</style>