export default {

    state: {
        compare: []
    },

    mutations: {
        ADD_TO_COMPARE(state, {product, quantity, id}) {
            let exists = state.compare.find(item => { return item.id === id })
            if(exists) {
              return
            }
            state.compare.push({product, quantity, id})
            sessionStorage.setItem('compare', JSON.stringify(state.compare))
          },
          DELETE_FROM_COMPARE(state, id) {
            state.compare = state.compare.filter(item => { return item.id !== id})
            sessionStorage.setItem('compare', JSON.stringify(state.compare))
          },
    },

    actions: {
        addProductToCompare({commit}, { product, quantity, id }) {
            commit('ADD_TO_COMPARE', { product, quantity, id })
          },
          deleteProductFromCompare({commit}, id) {
              commit('DELETE_FROM_COMPARE', id)
          },
        
    },

    getters: {
        compare(state) {
            let cart = JSON.parse(sessionStorage.getItem('compare'))
            if(cart !== null) {
                state.compare = cart
            }
            return state.compare
          },
        compareCount(state) {
            let items = 0
            state.compare.forEach(item => {
              items += item.quantity
              sessionStorage.setItem('compare', JSON.stringify(state.compare))
            }) 
            return items
          },
    }

}