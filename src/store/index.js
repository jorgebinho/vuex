import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      first_name: 'Jorge',
      last_name: 'Almeida',
      email: 'jorge@almeida.com'
    },
    products: []
  },
  mutations: {
    storeUser(state, data) {
      state.user = data;
    },
  },
  getters: {
  },
  actions: {
  },
  modules: {
  }
})
