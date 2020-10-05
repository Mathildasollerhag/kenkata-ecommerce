
export default {

    state: {
        productsCatalog: [],
        newArrivals: [],
        featuredProducts: [],
        product: null,


    },
    actions: {
      
        // Get all products
        getProducts({ commit }) {
            db.collection('products').get().then(res => {
                let items = [];   
                let thecatalogs =             
                res.forEach(doc => {                    
                    const data = {
                        id: doc.id,
                        product: doc.data(),
                        catalog:doc.data().category
                    }
                    items.push(data)
                });
                commit('SET_PRODUCTS', items)
            })            
        },
      // Get all getProductsByCategory
      getProductsByCategory({ commit },thecategory) {
        
        db.collection('products').where("category", "==",thecategory).get().then(res => {
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
    getProductsByBrand({ commit },thebrand) {
        
        db.collection('products').where("brand", "==",thebrand).get().then(res => {
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
         getProductsByPrice({ commit}, value ) {
             db.collection('products').orderByChild('price').limitToFirst(1).once('value').then(snapshot => { 
                snapshot.forEach(function(child) {
                   console.log(child.val());
                  console.log(child.val().price);
               })
          })
         
        
          //  db.collection('products').where("price", ">=",price).get().then(res => {
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
    getProductsBySize({ commit },size) {
        
        db.collection('products').where("sizes",  'array-contains',size).get().then(res => {
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
     getProductsByColor({ commit },color) {
        
        db.collection('products').where("colors",  'array-contains',color).get().then(res => {
            let items = [];                
            res.forEach(doc => {                  
                const data = {
                    id: doc.id,
                    product: doc.data(),
                  
                }
                items.push(data)
                console.log(items);
            });
          
            commit('SET_PRODUCTS', items)

          

        })            
    },

        // Get Product by ID
        getProductById({ commit }, id) {
            db.collection('products').doc(id).get().then(res => {
                commit('SET_PRODUCT', res.data())
            })
        },

        // Save Product Review
        saveProductReview({ commit }, { productId, review }) {
            console.log(review);
            const reviews = db.collection("products").doc(productId)

            reviews.update({
                reviews: firebase.firestore.FieldValue.arrayUnion(review)
            }).then(() => {
                console.log("Review successfully added!");
            }).catch(err => {
                console.log(err);
            })
            
        }

    },
    mutations: {
        SET_PRODUCTS(state, items) {
            // Set productsCatalog
            state.productsCatalog = items
            state.productsSize = items
            state.productsColor = items
            state.productsPrice = items
            state.productsBrand = items
            
            

            // Set newArrivals
            state.newArrivals = items.filter(item => item.product.newArrival === true)

            // Set featured products 
            state.featuredProducts = items.filter(item => item.product.discount !== '')
        },
  
        SET_PRODUCT(state, product) {
            state.product = product
        },
    },
    getters: {
      
        productsCatalog(state) {
            return state.productsCatalog
        },
        productsBrand(state) {
            return state.productsBrand
        },
        getProductsByCategory(state){
            return getProductsByCategory
        },
        getProductsByPrice(state){
            return getProductsByPrice
        },
        newArrivals(state) {
            return state.newArrivals
        },
        featuredProducts(state) {
            return state.featuredProducts
        },
        product(state) {
            return state.product
        }
    }

}