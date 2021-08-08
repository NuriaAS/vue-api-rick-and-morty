import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    filterString: "",
  },
  mutations: {
    SET_FILTER_STRING(state, filterValue) {
      state.filterString = filterValue;
    }, 
  },
  actions: {
    setFilterValue({commit}, payloadFilterValue) {
      commit('SET_FILTER_STRING', payloadFilterValue);
    },
  },
  modules: {
  }
})
