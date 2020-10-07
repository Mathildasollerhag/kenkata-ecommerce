import firebase from 'firebase';

export default {

   state: {
      productsCatalog: [],
      productsBrand:[],
      newArrivals: [],
      featuredProducts: [],
      topSellers: [],
      shoes: [],
      men: [],
      women: [],
      kids: [],
      hats: [],
      sunglasses: [],
      watches: [],
      clothes: [],
      product: null,
      productReviews: [],
      black:[],
      minvalue:''
   },

   mutations: {
      SET_PRODUCTS(state, items) {
         // Set productsCatalog
         state.productsCatalog = items
      },

      SET_CAROUSELS(state, items) {
         state.newArrivals = items.filter(item => item.product.newArrival === true)
         state.featuredProducts = items.filter(item => item.product.discount !== '')
         state.topSellers = items.filter(item => item.product.topSellers === true)
      },

      SET_CATEGORIES(state, items) {
         state.shoes = items.filter(item => item.product.category === 'shoes')
         state.men = items.filter(item => item.product.gender === 'men')
         state.women = items.filter(item => item.product.gender === 'women')
         state.kids = items.filter(item => item.product.category === 'kids')
         state.hats = items.filter(item => item.product.category === 'hats')
         state.sunglasses = items.filter(item => item.product.category === 'sunglasses')
         state.watches = items.filter(item => item.product.category === 'watches')
         state.clothes = items.filter(item => item.product.mainCategory === 'clothes')
      },
     
      SET_PRODUCT(state, product) {
         // Set product
         state.product = product.data()
      },

      SET_REVIEWS(state, reviews) {
         state.productReviews = reviews
      }
   },
   
   actions: {

      // Get all products
      getProducts({ commit }) {
         firebase.firestore().collection('products').get().then(res => {
            let items = [];
            res.forEach(doc => {
               const data = {
                  id: doc.id,
                  product: doc.data(),
                  // catalog: doc.data().category
               }
               items.push(data)
            });
            commit('SET_PRODUCTS', items)
            commit('SET_CAROUSELS', items)
            commit('SET_CATEGORIES', items)
         })
      },

      // Get Product by ID
      getProductById({ commit }, id) {
         firebase.firestore().collection('products').doc(id).get().then(res => {
            commit('SET_PRODUCT', res)
            commit('SET_REVIEWS', res.data().reviews)
         })
      },

      // Save Product Review
      saveProductReview({ commit }, { productId, review }) {
         const reviews = firebase.firestore().collection("products").doc(productId)

         reviews.update({
            reviews: firebase.firestore.FieldValue.arrayUnion(review)
         }).then(() => {
            // Update reviews
            firebase.firestore().collection('products').doc(productId).get().then(res => {
               commit('SET_REVIEWS', res.data().reviews)
            })
            console.log("Review successfully added!");
         }).catch(err => {
            console.log(err);
         })

      },

      // Get all getProductsByCategory
      getProductsByCategory({ commit }, thecategory) {

         firebase.firestore().collection('products').where("category", "==", thecategory).get().then(res => {
            let items = [];
            res.forEach(doc => {
               const data = {
                  id: doc.id,
                  product: doc.data(),

               }
               items.push(data)

            });

            commit('SET_PRODUCTS', items)

         })
      },

      // Get all getProductsByGender
      getProductsByGender({ commit }, thegender) {

         firebase.firestore().collection('products').where("gender", "==", thegender).get().then(res => {
            let items = [];
            res.forEach(doc => {
               const data = {
                  id: doc.id,
                  product: doc.data(),

               }
               items.push(data)

            });

            commit('SET_PRODUCTS', items)

         })
      },

      // Get all getProductsByMainCategory
      getProductsByMainCategory({ commit }, mainCategory) {

         firebase.firestore().collection('products').where("mainCategory", "==", mainCategory).get().then(res => {
            let items = [];
            res.forEach(doc => {
               const data = {
                  id: doc.id,
                  product: doc.data(),

               }
               items.push(data)

            });

            commit('SET_PRODUCTS', items)


         })
      },

      // Get all getProductsByBrand
      getProductsByBrand({ commit }, thebrand) {

         firebase.firestore().collection('products').where("brand", "==", thebrand).get().then(res => {
            let items = [];
            res.forEach(doc => {
               const data = {
                  id: doc.id,
                  product: doc.data(),

               }
               items.push(data)
            });

            commit('SET_PRODUCTS', items)
            console.log('alaa');

         })
      },
      // Get all getProductsByPrice
      getProductsByPrice({ commit }, value) {
         console.log(value)
         firebase.firestore().collection('products').where("price", "<=", parseInt(value)).get().then(res => {
            let items = [];
            res.forEach(doc => {
               const data = {
                  id: doc.id,
                  product: doc.data(),

               }
               items.push(data)
            });
            console.log(items)
            commit('SET_PRODUCTS', items)
            console.log('alaa');

         })
    /*      firebase.firestore().collection('products').orderByChild('price').limitToFirst(1).once('value').then(snapshot => {
            snapshot.forEach(function (child) {
               const data = {
                  id: doc.id,
                  product: doc.data(),

               }
               items.push(data)
         
            })
            commit('SET_PRODUCTS', items)
         }) */


         //  firebase.firestore().collection('products').where("price", ">=",price).get().then(res => {
         //     let items = [];                
         //   res.forEach(doc => {                  
         //      const data = {
         //       id: doc.id,
         //   product: doc.data(),

         // }
         //items.push(data)

         // });

         // commit('SET_PRODUCTS', items)



         //})            
      },
      // Get all getProductsBysize
      getProductsBySize({ commit }, size) {

         firebase.firestore().collection('products').where("sizes", 'array-contains', size).get().then(res => {
            let items = [];
            res.forEach(doc => {
               const data = {
                  id: doc.id,
                  product: doc.data(),

               }
               items.push(data)

            });

            commit('SET_PRODUCTS', items)

         })
      },

      // Get all getProductsBycolor
      getProductsByColor({ commit }, color) {

         firebase.firestore().collection('products').where("colors", 'array-contains', color).get().then(res => {
            let items = [];
            res.forEach(doc => {
               const data = {
                  id: doc.id,
                  product: doc.data(),

               }
               items.push(data)
            });

            commit('SET_PRODUCTS', items)
           



         })
      },

   },

   getters: {

      productsCatalog(state) {
         return state.productsCatalog
      },
      productsBrand(state) {
         return state.productsBrand
      },
      getProductsByCategory(state) {
         return getProductsByCategory
      },
      getProductsByPrice(state) {
         return getProductsByPrice
      },
      newArrivals(state) {
         return state.newArrivals
      },
      featuredProducts(state) {
         return state.featuredProducts
      },
      topSellers(state) {
         return state.topSellers
      },
      getShoes(state) {
         return state.shoes
      },
      getMen(state) {
         return state.men
      },
      getWomen(state) {
         return state.women
      },
      getKids(state) {
         return state.kids
      },
      getHats(state) {
         return state.hats
      },
      getSunglasses(state) {
         return state.sunglasses
      },
      getWatches(state) {
         return state.watches
      },
      getClothes(state) {
         return state.clothes
      },
      product(state) {
         return state.product
      },
      productReviews(state) {
         const reviews = state.productReviews.reverse()
         return reviews
      }
     
   }

}