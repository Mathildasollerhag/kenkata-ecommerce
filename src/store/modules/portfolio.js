import firebase from 'firebase';

export default {

    state: {
        portfolioCatalog: [],
        portfolio: null
    },

    mutations: {
        SET_PORTFOLIOS(state, items) {
            // Set portfolioCatalog
            state.portfolioCatalog = items
        },

        SET_PORTFOLIO(state, item) {
            state.portfolio = item
        },
    },

    actions: {
        
        // Get all portfolio items
        getPortfolio({ commit }) {
            firebase.firestore().collection('portfolio').get().then(res => {
                let items = [];                
                res.forEach(doc => {
                    const data = {
                        id: doc.id,
                        portfolio: doc.data()
                    }
                    items.push(data)
                });
                commit('SET_PORTFOLIOS', items)
            })            
        },

        // Get portfolio by ID
        getPortfolioById({ commit }, id) {
            firebase.firestore().collection('portfolio').doc(id).get().then(res => {
                commit('SET_PORTFOLIO', res.data())
            })
        },
    },

    getters: {
        portfolioCatalog(state) {
            return state.portfolioCatalog
        },
        portfolio(state) {
            return state.portfolio
        }
    }

}