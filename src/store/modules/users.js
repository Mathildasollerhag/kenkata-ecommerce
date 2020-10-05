import firebase from 'firebase'

export default {

   state: {
      isLoggedIn: false,
      currentUser: null,
   },


   mutations: {
      SET_USER(state, user) {
         state.isLoggedIn = true
         state.currentUser = user
      }
   },

   actions: {
      getCurrentUser({commit}, userId) {
         // console.log(userId);
         firebase.firestore().collection('users').doc(userId).get().then(res => {
            commit('SET_USER', res.data())
         })
      }
   },

   getters: {
      userInlogged(state) {
         return state.userInlogged
      },
      currentUser(state) {
         return state.currentUser
      }
   }

}