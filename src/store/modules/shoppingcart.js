export default {
    
    state: {
        shoppingcart: [],
        shipping: ""
    },


    mutations: {
      ADD_TO_CART(state, {product, quantity, id}) {
        let exists = state.shoppingcart.find(item => { return item.id === id })
        if(exists) {
          exists.quantity += 1
          return
        }
        state.shoppingcart.push({product, quantity, id})
        sessionStorage.setItem('shoppingcart', JSON.stringify(state.shoppingcart))
      },
      DELETE_FROM_CART(state, id) {
        state.shoppingcart = state.shoppingcart.filter(item => { return item.id !== id})
        sessionStorage.setItem('shoppingcart', JSON.stringify(state.shoppingcart))
      },
      INCREMENT(state, product) {

        // Om produkten redan finns i shoppingcart, öka quantity
        let exists = state.shoppingcart.find(item => { return item.id == product.id })            
        if(exists) {
          product.quantity += 1
          return
        }

        // Annars lägg till produkt i shoppingcart
        state.shoppingcart.push(product)
      },
      DECREMENT(state, product) {
        product.quantity -= 1
      },
      SET_SHIPPING(state, shipping) {
        state.shipping = shipping
      },
      CLEAR_CART(state) {
        state.shoppingcart = []
        sessionStorage.setItem('shoppingcart', JSON.stringify(state.shoppingcart))
      }
    },


    actions: {
      addProductToCart({commit}, { product, quantity, id }) {
        commit('ADD_TO_CART', { product, quantity, id })
      },
      deleteProductFromCart({commit}, id) {
          commit('DELETE_FROM_CART', id)
      },
      productIncrement({commit}, item) {    
          if(item.quantity === 0) {
            item.quantity = 1
            commit('ADD_TO_CART', {
              product: item.product,
              quantity: item.quantity,
              id: item.id
            })
            return
          }
          commit('INCREMENT', item)
      },
      productDecrement({commit}, item) {
          if(item.quantity <= 1) {
            commit('DELETE_FROM_CART', item.id)                
            return item.quantity = 0
          }
          commit('DECREMENT', item)
      },
      clearCart({commit}) {
        commit('CLEAR_CART')
      }
    },


    getters: {
      shoppingCart(state) {
          let cart = JSON.parse(sessionStorage.getItem('shoppingcart'))
          if(cart !== null) {
              state.shoppingcart = cart
          }
          return state.shoppingcart
        },
      shoppingCartTotal(state) {
        let total = 0
        if(state.shoppingcart.length !== 0) {
          state.shoppingcart.forEach(item => {
            total += item.product.price * item.quantity
          })
        }    
        return total
      },
      shoppingCartItemCount(state) {
        let items = 0
        state.shoppingcart.forEach(item => {
          items += item.quantity
          sessionStorage.setItem('shoppingcart', JSON.stringify(state.shoppingcart)) //För att uppdatera quantity i localstorage
        }) 
        return items
      }, 
      getShipping(state) {
        return state.shipping
      }
    }

}