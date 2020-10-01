import firebase from 'firebase';

export default {

    state: {
        productsCatalog: [],
        newArrivals: [],
        featuredProducts: [],
        topSellers: [],
        product: null,
    },

    mutations: {
        SET_PRODUCTS(state, items) {
            // Set productsCatalog
            state.productsCatalog = items

            // Set newArrivals
            state.newArrivals = items.filter(item => item.product.newArrival === true)

            // Set topSellers
            state.topSellers = items.filter(item => item.product.topSellers === true)

            // Set featured products 
            state.featuredProducts = items.filter(item => item.product.discount !== '')
        },

        SET_PRODUCT(state, product) {
            // Set product
            state.product = product.data()

        },
    },

    actions: {
        
        // Get all products
        getProducts({ commit }) {
            firebase.firestore().collection('products').get().then(res => {
                let items = [];                
                res.forEach(doc => {                    
                    const data = {
                        id: doc.id,
                        product: doc.data()
                    }
                    items.push(data)
                });
                commit('SET_PRODUCTS', items)
            })            
        },

        // Get Product by ID
        getProductById({ commit }, id) {
            firebase.firestore().collection('products').doc(id).get().then(res => {
                commit('SET_PRODUCT', res)
            })
        },

        // Save Product Review
        saveProductReview({ commit }, { productId, review }) {
            console.log(review);
            const reviews = firebase.firestore().collection("products").doc(productId)

            reviews.update({
                reviews: firebase.firestore.FieldValue.arrayUnion(review)
            }).then(() => {
                console.log("Review successfully added!");
            }).catch(err => {
                console.log(err);
            })
            
        }

    },

    getters: {
        productsCatalog(state) {
            return state.productsCatalog
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
        product(state) {
            return state.product
        },
    }

}