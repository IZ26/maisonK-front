import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

Vue.use(Vuex)

const vuexLocalStorage = new VuexPersist({
  key: 'vuex',
  storage: window.localStorage,
  reducer: (state) => ({
    cart: state.cart,
    user: state.user
  }),
})

const state = {
  isActive: false,
  cart: [],
  user: []
}

const mutations = {
  OPEN_MENU(){
    this.state.isActive = !this.state.isActive
  },
  ADD_PRODUCT(state, payload){
    state.cart = payload
  },
  USER_CONNECT(state, payload){
    state.user = payload
  }
}

const actions  = {
  openMenu({commit}){
    commit('OPEN_MENU')
  },
  addProduct({commit}, payload){
    commit('ADD_PRODUCT', payload)
  },
  userConnect({commit}, payload){
    commit('USER_CONNECT', payload)
  }
}

const getters = {
  getStatus(state){
    return state.isActive
  },
  getCart(state){
    return state.cart
  },
  getUser(state){
    return state.user
  }
}

export const store = new Vuex.Store({
  // Le state est modifié par une action qui est appelé par une mutation à l'aide d'un commit et les getters lis le states
  state: state,
  mutations: mutations,
  getters: getters,
  actions: actions,
  plugins: [vuexLocalStorage.plugin]
})
