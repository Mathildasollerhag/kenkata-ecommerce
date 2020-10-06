import firebase from 'firebase';
import router from '@/router';

export default {
    
    state: {
        orders: []
    },

    
    mutations: {
        SET_ORDERS(state, orders) {
            state.orders = orders
        }
    },


    actions: {
        placeOrder({commit}, order) {
            const orders = firebase.firestore().collection("orders")

            orders.add(order).then(() => {
                console.log("Order successfully placed!");
                router.push('/complete')
            }).catch(err => {
                console.log(err);
            })
        },

        getOrders({commit}) {
            firebase.firestore().collection("orders").get().then(res =>  {
                const orders = [];
                res.forEach(doc => {
                    const data = {
                        id: doc.id,
                        order: doc.data()
                    }
                    orders.push(data)
                });
                commit('SET_ORDERS', orders)
            })
        },

        getOrdersById({commit}, userId) {
            console.log(userId);
        }
    },


    getters: {
        ordersCatalog(state) {
            return state.orders
        }
    }

}