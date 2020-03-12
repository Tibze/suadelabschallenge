import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import * as types from './mutationTypes'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    peoples: null,
    filterPeoples: null
  },
  getters: {
    peoplesGetter: state => state.peoples,
    filterPeoplesGetter: state => state.filterPeoples
  },
  actions: {
    async getPeoples ({ commit }) {
      const response = await axios.get('https://updates.suade.org/files/people.json')
      if (response) {
        const { data } = response
        commit(types.RECEIVE_PEOPLES, { data })
      }
    },
    setFilterPeoples ({ commit }, eyeColor) {
      commit(types.SET_FILTER_PEOPLES, eyeColor)
    },
    resetFilterPeoples ({ commit }) {
      commit(types.RESET_FILTER_PEOPLES)
    },
    updateAgeOfPeople ({ commit }, params) {
      commit(types.UPDATE_AGE_OF_PEOPLE, params)
    }
  },
  mutations: {
    [types.RECEIVE_PEOPLES] (state, { data }) {
      state.peoples = data
    },
    [types.SET_FILTER_PEOPLES] (state, eyeColor) {
      const data = state.peoples.filter((item) => item.eyeColor === eyeColor)
      state.filterPeoples = data
    },
    [types.RESET_FILTER_PEOPLES] (state) {
      state.filterPeoples = null
    },
    [types.UPDATE_AGE_OF_PEOPLE] (state, params) {
      const { item, value } = params
      const index = state.peoples.findIndex((people) => people._id === item._id)
      item.age = value
      Vue.set(state.peoples, index, item)
    }
  }
})
