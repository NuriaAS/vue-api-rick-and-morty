import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const getStringNumbers = (count) => {
  let arrayNumbers = [];
  for(let i = 1; i <= count; i++) {
    arrayNumbers.push(i)
  }
  return arrayNumbers.toString();
}

export default new Vuex.Store({
  state: {
    characterList: [],
    filteredCharactersList: []
  },
  mutations: {
    SET_CHARACTERS_LIST(state, characters) {
      state.characterList = characters;
      state.filteredCharactersList = characters;
    },
    SET_FILTERED_LIST(state, filteredValue) {
      const filteredList = state.characterList.filter(character => character.name.toLowerCase().includes(filteredValue));
      state.filteredCharactersList = filteredList;
    }
  },
  actions: {
    setFilteredList({commit}, payloadFilterValue) {
      commit('SET_FILTERED_LIST', payloadFilterValue);
    },
    getCharacters({commit}) {
      const baseUrl = "https://rickandmortyapi.com/api/";
      axios.get(`${baseUrl}character/`) 
        .then(response => {
          axios.get(`${baseUrl}character/${getStringNumbers(response.data.info.count)}`)
            .then( response => {
              commit('SET_CHARACTERS_LIST', response.data);
            })
            .catch(error => {
              console.error(error);
            })
        })
        .catch(error => {
          console.error(error);
        })
    }
  },
  getters: {
    filteredCharactersList: state => state.filteredCharactersList
  }
})
