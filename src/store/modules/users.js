import firebase from 'firebase'

export default {

   state: {
      isLoggedIn: false,
      currentUser: null,
      currentUserId: null
   },


   mutations: {
      SET_USER(state, user) {
         state.isLoggedIn = true
         state.currentUser = user.data()
         state.currentUserId = user.id
         sessionStorage.setItem('wishlist', JSON.stringify(user.data().wishlist))
      }
   },

   actions: {
      getCurrentUser({commit}, userId) {
         firebase.firestore().collection('users').doc(userId).get().then(res => {
            commit('SET_USER', res)
         })
      },
      addProductToWishlist({ commit }, { currentUserId, product }) {
         console.log(product);
         console.log(currentUserId);
         const wishlist = firebase.firestore().collection("users").doc(currentUserId)

         wishlist.update({
            wishlist: firebase.firestore.FieldValue.arrayUnion(product)
         }).then(() => {
            console.log("Product successfully added to wishlist!");
         }).catch(err => {
            console.log(err);
         })
         console.log(wishlist);
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
         return state.currentUser.wishlist
      },
      currentUserId(state) {
         return state.currentUserId
      }
   }

}