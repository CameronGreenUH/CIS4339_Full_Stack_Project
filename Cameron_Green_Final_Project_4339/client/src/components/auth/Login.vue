<template>
<html>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
        <form
          class="text-center border border-primary p-5"
          style="margin-top:70px;height:auto;padding-top:100px !important;"
          @submit.prevent="loginUser"> 
          <div class="card-header">
            <h3 class="mb-0">Log In</h3>
          </div>
          <div class="card-body">
            <!-- Email -->
            <input
              type="text"
              id="email"
              class="form-control mb-5"
              placeholder="Email"
              v-model="login.email"
            />
            <!-- Password -->
            <input
              type="password"
              id="password"
              class="form-control mb-5"
              placeholder="Password"
              v-model="login.password"
            />
            <p>
              Dont have an account?<router-link to="/register"
                >click here</router-link
              >
            </p>
            <!-- Sign in button -->
            <center>
              <button class="btn btn-primary btn-block w-75 my-4" type="submit">
                Sign in
              </button>
            </center>
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
      login: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    //Method that logs in user
    async loginUser() {
      try {
        //Gets correct method from UserController through user.js under route
        let response = await this.$http.post("/user/login", this.login);
        //Sets up a token
        let token = response.data.token;
        localStorage.setItem("jwt", token);
        //Validates token
        if (token) {
          this.$swal("Success", "Login Successful", "success");
          this.$router.push("/home");
        }
      } catch (err) {
        this.$swal("Error", "Something Went Wrong", "error");
        console.log(err.response);
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