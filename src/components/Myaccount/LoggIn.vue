<template>
    <div class="login px-2">

      <form v-on:submit.prevent="userLogin">
        <h2 class="font">LOGIN</h2>
        <div class="form-group position-relative">
          <label for="username">Email address<span class=" position-absolute star color"><i class="fas fa-star-of-life fa-xs"></i></span></label>
          <input v-model="email" type="text" class="form-control" id="username" required autocomplete="off">
          <small id="emailHelp" class="form-text text-muted">We'll never share your email or username with anyone else.</small>
        </div>
        <div class="form-group position-relative">
          <label for="password">Password <span class=" star position-absolute color"><i class="fas fa-star-of-life fa-xs"></i></span></label>
          <input v-model="password" type="password" class="form-control rounded" id="password" required autocomplete="off">
        </div>
        <button type="submit" class="btn  rounded-pill lightgreen text-white btn-lg btn-block mb-1">LOG IN</button>
        <span v-if="errorMessage" class="position-absolute error-message text-danger">Wrong email or password, try again!</span>
        <div class="form-group form-check mt-4 pt-3">
          <input type="checkbox" class="form-check-input rounded" id="exampleCheck1">
          <div class="d-flex justify-content-between">
            <label class="form-check-label" for="exampleCheck1">Remember me </label>
            <a href="" class="color"> Lost your password?</a>
          </div>                
        </div>                    
      </form>

        <p class="">OR LOGIN WITH</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="bg-face d-flex rounded">
            <div class="text-white font1 ml-2"><i class="fab fa-facebook-square"></i></div>
            <div class="size1 py-1 mt-2 px-5"> <router-link class=" text-white px-4" to="/www.facebook.com">Facebook</router-link></div>    
          </div>
          <div class="bg-primary py-1 d-flex rounded">
            <div class="text-white rounded  mb mt-1 px-2 bg-white ml-2"><i class="fab fa-google fa-x " ></i></div>
            <div class="size1 mt-1 m-google px-5"> <router-link class=" text-white px-4" to="/www.google.com">Google</router-link></div>          
          </div>              
        </div>

    </div>               
</template>


<script>
import firebase from 'firebase';

export default {
  data: function() {
    return {
      email: '',
      password: '',

      isLoading: false,
      errorMessage: false
    };
  },
  methods: {
    userLogin() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          this.$router.push('/myaccount')
        })
        .catch(() => {
          this.errorMessage = true
          setTimeout(() => {
            this.errorMessage = false
          }, 4000);
        })
    }
  }
}
</script>
<style scoped>
.login {
  border-radius: 7px;
}
p {
  overflow: hidden;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 40px;
}


p:before,
p:after {
  background-color: #000;
  content: "";
  display: inline-block;
  height: 1px;
  position: relative;
  vertical-align: middle;
  width: 50%;
}

p:before {
  right: 0.5em;
  margin-left: -50%;
}

p:after {
  left: 0.5em;
  margin-right: -50%;
}
.bg{
  height: 140px;
  background-color: #7B7D8E;
}
.color{
  color: #20D3C2 ;
}
.lightgreen{
  background-color: #20D3C2;

}
.font{
  font-size: 24px;
}
.font1{
  font-size: 32px;
}
.star{
 font-size: 8px;
 margin-top: 3px;
 margin-left: 4px;
 
}
.size1{
  font-size: 16px!important;
}


.bg-face{
  background-color: #3B5998;
}
.fa-google {
  background: conic-gradient(from -45deg, #ea4335 110deg, #4285f4 90deg 180deg, #34a853 180deg 270deg, #fbbc05 270deg) 73% 55%/150% 150% no-repeat;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
}
.m-google{
margin-bottom: 10px;
}
.mb{
  margin-bottom: 7px;
}
.sec2{
  margin-top: 121px;
}
.m-pragraf{
  margin-top: 30px;
  margin-bottom: 30px;
}
a{
    text-decoration: none;
}

input, .form-control {
  border: none;
}
.error-message {
  margin-top: 0.5em;
  right: 1.5em;
}
</style>