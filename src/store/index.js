import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: null,
    loading:false,
    courses: []
  },
  mutations: {
    UPDATE_USER(state, user){
      state.currentUser = user;
    },
    LOADING_LOGIN(state, loading){
      state.loading = loading;
    },
    GET_COURSES(state, courses){
      state.courses = courses;
    }
  },
  actions: {
    updateUser({commit}, user){
      commit("UPDATE_USER", user)
    },
    loadingLogin({commit},loading){
      commit("LOADING_LOGIN",loading)
    },
    getCourses({ commit }){
      const url = "https://us-central1-ottoklauss-5927c.cloudfunctions.net/api/courses";
      axios.get(`${url}`).then(response => commit("GET_COURSES", response.data))
    }
  }
})
