<template>
    <div>
      <form v-on:submit.prevent="userRegister" class="pb-3">

        <h2 class="font">REGISTER</h2>
        <p class="text-muted register-text1 mt-2">Register for this site allows you to access your order status and history. Just fill in the fields below, and we'll get a new account set up for you in no time. We will only ask you for information necessary to make the purchase process faster and easier.</p>
        <div class="form-group position-relative">
          <label for="username">Username <span class=" position-absolute star color"><i class="fas fa-star-of-life fa-xs"></i></span></label>
          <input v-model="username" type="text" class="form-control" aria-describedby="emailHelp" required autocomplete="off">
          <small id="emailHelp" class="form-text text-muted">We'll never share your username with anyone else.</small>
        </div>
        <div class="form-group position-relative">
          <label for="Email address"> Email address <span class=" position-absolute star color"><i class="fas fa-star-of-life fa-xs"></i></span></label>
          <input  v-model="email" type="email" class="form-control"  aria-describedby="emailHelp" required autocomplete="off">
          <small id="emailHelp" class="form-text text-muted">We'll never share your emailwith anyone else.</small>
        </div>
        <div class="form-group position-relative">
          <label for="password">Password <span class=" star position-absolute color"><i class="fas fa-star-of-life fa-xs"></i></span></label>
          <input v-model="password"  type="password" class="form-control rounded" required autocomplete="off">
        </div>
        <p class="m-pragraf"> your personal data will be used to support your experience <br>throught this website,to manage access to your account,and for <br> purposes described in our <span class="color">privacy policy</span> </p>
        <button type="submit" class="btn rounded-pill lightgreen text-white btn-lg btn-block d-flex justify-content-center align-items-center">REGISTER <LoadingSpinner v-if="isLoading"/></button>

        <div class="d-flex justify-content-center mt-3">
          <span v-show="errorMessage" class="text-danger">{{errorMessage}}</span>
          <span v-show="accountCreated" class="text-muted">Account created, you're now being redirected...</span>
        </div>
      </form> 
    </div>
              
   
</template>

<script>
import firebase from 'firebase';
import LoadingSpinner from './LoadingSpinner'
export default {
  name: 'register',//där borde vara Myaccount, tror så, kolla igen här
  components: {
    LoadingSpinner
  },
  data: function() {
    return {
      username: '',
      email: '',
      password: '',

      isLoading: false,
      errorMessage: '',
      accountCreated: false
    };
  },
  methods: {
    userRegister() {
      this.isLoading = true
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(newUser => {
          console.log(newUser)
          firebase.firestore().collection('users').doc(newUser.user.uid).set({
            username: this.username,
            email: newUser.user.email,
            wishlist: []
          }).then(() => {
            this.errorMessage = false
            this.accountCreated = true
            setTimeout(() => {
              firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                .then((user) => {
                    if (user) {
                      this.$router.push('/myaccount')
                    }
                })
            }, 2000);
          })         
        }).catch((err) => {
          this.isLoading = false
          this.errorMessage = err.message
        })
    }
  }
}
</script>

<style scoped>

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
.OR{
  width: 100%; 
   text-align: center; 
   border-bottom: 1px solid #7B7D8E; 
   line-height: 0.1em;
  
       margin-top: 40px;
    margin-bottom: 40px;
}
.OR1{
  background:#fff; 
    padding:0 10px; 

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
.sec1{
  height:522px;
}

input, .form-control {
  border: none;
}
.register-text1 {
  font-size: 14px;
  line-height: 1.8;
}
</style>