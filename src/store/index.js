import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: null,
    loading:false,
  },
  mutations: {
    UPDATE_USER(state, user){
      state.currentUser = user
    },
    LOADING_LOGIN(state, loading){
      state.loading = loading
    },
  },
  actions: {
    updateUser({commit}, user){
      commit("UPDATE_USER", user)
    },
    loadingLogin({commit},loading){
      commit("LOADING_LOGIN",loading)
    },
  }
})
