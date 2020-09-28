export default {
    
    state: {
        shoppingcart: []
    },


    mutations: {
        ADD_TO_CART(state, {product, id}) {
          let exists = state.shoppingcart.find(item => { return item.id === id })
          if(exists) {
            exists.quantity += 1
            return
          }
          state.shoppingcart.push({product, quantity: 1, id})
          sessionStorage.setItem('shoppingcart', JSON.stringify(state.shoppingcart))
          // console.log(state.shoppingcart)
        },
        DELETE_FROM_CART(state, id) {
          state.shoppingcart = state.shoppingcart.filter(item => { return item.id !== id})
          sessionStorage.setItem('shoppingcart', JSON.stringify(state.shoppingcart))
        },
        INCREMENT(state, product) {
          // Om produkten finns i shoppingcart, öka quantity
          let exists = state.shoppingcart.find(item => { return item.id === product.id })            
          if(exists) {
            product.quantity += 1
            return
          }

          // Annars lägg till produkt
          state.shoppingcart.push(product)
        },
        DECREMENT(state, product) {
          product.quantity -= 1
        }

    },


    actions: {
        addProductToCart({commit}, { product, id}) {
          
            // console.log(product)
            // console.log(quantity)
            commit('ADD_TO_CART', { product, id})
        },
        deleteProductFromCart({commit}, id) {
            commit('DELETE_FROM_CART', id)
            // console.log(id)
        },
        productIncrement({commit}, product) {
            console.log(product.quantity)
            if(product.quantity === 0) {
              product.quantity === 1
              commit('INCREMENT', product)
            }
            commit('INCREMENT', product)
        },
        productDecrement({commit}, product) {
            // console.log(product.id)
            if(product.quantity <= 1) {
                commit('DELETE_FROM_CART', product.id)
                
                return product.quantity === 0
            }
            commit('DECREMENT', product)
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
    }

}