import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      first_name: 'Jorge',
      last_name: 'Almeida',
      email: 'jorge@almeida.com'
    },
    products: [
      {
        id: 1,
        name: 'Bola',
        price: 100
      },
      {
        id: 2,
        name: 'Chuteira',
        price: 200
      }, 
      {
        id: 3,
        name: 'Meiao',
        price: 50
      }
    ],
    cart: []
  },
  mutations: { //mutation é sincrona
    storeUser(state, data) {
      state.user = data;
    },
    addProduct(state, data) {
      state.cart.push(data);
    },
    removeProduct(state, id) {
      const idx = state.cart.findIndex(obj => obj.id === id);
      state.cart.splice(idx, 1);
    }
  },
  getters: {
    total(state) {
      return state.cart.reduce((total, item) => total += item.price, 0)
    }
  },
  actions: { // actions são assíncronas
    storeUser({ commit }, data) {
      commit('storeUser', data);
    }
  },
  modules: {
  }
})
