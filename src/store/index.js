import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: null,
    loading:false,
    courses: [],
    course: {},
    IdCourse: "",
    add_edit: '',
    btn_add_edit:''
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
    },
    GET_COURSE(state,course){
      state.course = course;
    },
    GET_IDCOURSE(state,IdCourse){
      state.IdCourse = IdCourse
    },
    GET_ADD_EDIT(state, addEdit){
      state.add_edit = addEdit;
    },
    BTN_ADD_AEDIT(state, btnAddEdit){
      state.btn_add_edit = btnAddEdit;
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
    },
    getCourse({commit}, IdCourse){
      const url = "https://us-central1-ottoklauss-5927c.cloudfunctions.net/api/courses";
        axios.get(`${url}/${IdCourse}`).then(response => {
        commit("GET_COURSE",response.data)
        setTimeout(() => {
          commit("LOADING_LOGIN",false)
        },2000)
      })

    },
    getIdCourse({commit},IdCourse){
      commit("GET_IDCOURSE",IdCourse);
    },
    getAddEdit({commit}, addEdit){
      commit("GET_ADD_EDIT", addEdit)
    },
    btnAddEdit({commit}, btnAddEdit){
      commit("BTN_ADD_AEDIT",btnAddEdit);
    },
    agregarCourse({commit, dispatch}, addCourse){
      commit
      dispatch
      const url = "https://us-central1-ottoklauss-5927c.cloudfunctions.net/api/courses"
      axios.post(url, addCourse).then(() =>{
        dispatch("getCourses")
        commit('LOADING_LOGIN',false);
      });
    },
    editCourseNuevo({commit, dispatch}, course){
      console.log("COURSE: ", course)
      const url = "https://us-central1-ottoklauss-5927c.cloudfunctions.net/api/courses"
      axios.put(`${url}/${course.id}`, course.data).then(()=> {
        dispatch("getCourses");
        setTimeout(() => {
          commit('LOADING_LOGIN',false);
        },2000)
      })
    }
  }
})
