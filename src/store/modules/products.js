import axios from "axios"

export default {

    state: {
        productsCatalog: [],
        newArrivals: [],
        product: null
    },

    mutations: {
        SET_PRODUCTS(state, items) {
            // Set productsCatalog
            // console.log(products);
            // state.productsCatalog = state.productsCatalog.push(products)
            state.productsCatalog = items

            // console.log(products);
            // Set newArrivals
            state.newArrivals = items.filter(item => item.product.newArrival === true)
            // state.newArrivals = products.filter(product => product.status === 'new')
        },

        SET_PRODUCT(state, product) {
            state.product = product
        },
    },

    actions: {
        
        // Get all products
        // getProducts({ commit }) {
        //     axios.get('http://localhost:9999/api/products').then(res => {
        //         commit('SET_PRODUCTS', res.data);
        //     }).catch(error => {
        //         console.log(error);
        //     })
        // },
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

        // Get product by ID
        getProductById({ commit }, id) {
            // axios.get('http://localhost:9999/api/products/' + id).then(res => {
            //     commit('SET_PRODUCT', res.data.product)
            // }).catch(error => {
            //     console.log(error);
            // })
            db.collection('products').doc(id).get().then(res => {
                commit('SET_PRODUCT', res.data())
            })
        },
    },

    getters: {
        productsCatalog(state) {
            return state.productsCatalog
        },
        newArrivals(state) {
            return state.newArrivals
        },
        product(state) {
            return state.product
        }
    }

}