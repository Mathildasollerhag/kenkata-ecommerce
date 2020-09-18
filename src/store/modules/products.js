import axios from "axios"

export default {

    state: {
        productsCatalog: [],
        newArrivals: [],
        product: null
    },

    mutations: {
        SET_PRODUCTS(state, products) {
            // Set productsCatalog
            state.productsCatalog = products

            // Set newArrivals
            state.newArrivals = products.filter(product => product.status === 'new')
        },

        SET_PRODUCT(state, product) {
            state.product = product
        },
    },

    actions: {
        // Get all products
        getProducts({ commit }) {
            axios.get('http://localhost:9999/api/products').then(res => {
                commit('SET_PRODUCTS', res.data);
            }).catch(error => {
                console.log(error);
            })
        },

        // Get product by ID
        getProductById({ commit }, id) {
            axios.get('http://localhost:9999/api/products/' + id).then(res => {
                commit('SET_PRODUCT', res.data.product)
            }).catch(error => {
                console.log(error);
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