import firebase from 'firebase'

export default {

   state: {
      isLoggedIn: false,
      currentUser: null,
      currentUserId: null,
      currentUserWishlist: []
   },


   mutations: {
      SET_USER(state, user) {
         state.isLoggedIn = true
         state.currentUser = user.data()
         state.currentUserId = user.id
         state.currentUserWishlist = user.data().wishlist
      },
      UPDATE_WISHLIST(state, wishlist) {
         state.currentUserWishlist = wishlist
      }
   },

   actions: {
      getCurrentUser({commit}, userId) {
         firebase.firestore().collection('users').doc(userId).get().then(res => {
            commit('SET_USER', res)
         })
      },
      addProductToWishlist({ commit }, { currentUserId, product, id }) {
         const wishlist = firebase.firestore().collection("users").doc(currentUserId)

         wishlist.update({
            wishlist: firebase.firestore.FieldValue.arrayUnion({product, id})
         }).then(() => {
            console.log("Product successfully added to wishlist!");
         }).catch(err => {
            console.log(err);
         })
      },
      removeFromWishlist({ commit }, { currentUserId, item }) {
         const wishlist = firebase.firestore().collection("users").doc(currentUserId)

         wishlist.update({
            // Remove product from wishlist
            wishlist: firebase.firestore.FieldValue.arrayRemove(item)
         }).then(() => {
            // Update wishlist state
            firebase.firestore().collection("users").doc(currentUserId).get().then(res => {
               commit('UPDATE_WISHLIST', res.data().wishlist)
            })
         }).catch(err => {
            console.log(err);
         })
      }
   },

   getters: {
      userInlogged(state) {
         return state.userInlogged
      },
      currentUser(state) {
         return state.currentUser
      },
      currentUserWishlist(state) {
         return state.currentUserWishlist
      },
      currentUserId(state) {
         return state.currentUserId
      }
   }

}