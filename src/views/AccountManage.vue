<template>
  <div v-if="currentUser">
    <div class="bg py-1" >
      <div class="container py-4">
        <div class="d-flex  justify-content-between align-items-center py-4">
          <h3 class="color theme-text mb-0">Inlogged as <span class="text-capitalize">{{currentUser.username}}</span></h3>
          <div>
            <router-link to="/" class="color text-white">Home</router-link>
            <span class="text-white"> / </span>
            <router-link active-class="active" to="/myaccount" class="text-white">My account</router-link>
            <button class="btn btn-kenkata-blue ml-3 mb-1 px-4 py-2" @click.prevent="userLogout">Logout</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import { mapActions, mapGetters } from "vuex";
export default {
  created() {
    this.getCurrentUser(firebase.auth().currentUser.uid)
  },
  methods: {
    ...mapActions(["getCurrentUser"]),

    userLogout() {
      firebase.auth().signOut().then((res) => {
          this.$router.push('/account')
      })
    }
  },
  computed: {
    ...mapGetters(["currentUser"]),
  },
};
</script>

<style scoped>

button:hover {
  background-color: var(--blue-theme) !important;
}

.btn-kenkata-blue {
  border: none;
}
.bg{
  background-color: #7B7D8E;
}
.active {
  color: var(--theme) !important;
}
</style>