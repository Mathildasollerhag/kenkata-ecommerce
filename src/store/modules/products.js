
export default {

    state: {
        productsCatalog: [],
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
        product: null,
        productId: null
    },

    mutations: {
        SET_PRODUCTS(state, items) {
            // Set productsCatalog
            state.productsCatalog = items

            // Set newArrivals
            state.newArrivals = items.filter(item => item.product.newArrival === true)

            // Set topSellers
            state.topSellers = items.filter(item => item.product.topSellers === true)

            // Set watches
            state.shoes = items.filter(item => item.product.category === 'shoes')
            state.men = items.filter(item => item.product.gender === 'men')
            state.women = items.filter(item => item.product.gender === 'women')
            state.kids = items.filter(item => item.product.category === 'kids')
            state.hats = items.filter(item => item.product.category === 'hats')
            state.sunglasses = items.filter(item => item.product.category === 'sunglasses')
            state.watches = items.filter(item => item.product.category === 'watches')

            // Set featured products 
            state.featuredProducts = items.filter(item => item.product.discount !== '')
        },

        SET_PRODUCT(state, product) {
            // Set product
            state.product = product.data()

            // Set productId
            state.productId = product.id
        },
    },

    actions: {
        
        // Get all products
        getProducts({ commit }) {
            db.collection('products').get().then(res => {
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
            db.collection('products').doc(id).get().then(res => {
                commit('SET_PRODUCT', res)
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
        product(state) {
            return state.product
        },
        productId(state) {
            return state.productId
        }
    }

}