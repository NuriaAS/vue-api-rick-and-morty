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
const baseUrl = "https://rickandmortyapi.com/api/character/";

export default new Vuex.Store({
  state: {
    characterList: [],
    filteredCharactersList: [],
    character: {},
    fetchProgress: 'loading'
  },
  mutations: {
    SET_CHARACTERS_LIST(state, characters) {
      state.characterList = characters;
      state.filteredCharactersList = characters;
    },
    SET_FILTERED_LIST(state, filteredValue) {
      const filteredList = state.characterList.filter(character => character.name.toLowerCase().includes(filteredValue));
      state.filteredCharactersList = filteredList;
    },
    SET_CHARACTER(state, character) {
      state.character = character;
    }
    ,SET_LOADING_STATE(state, payloadLoadingState) {
      state.fetchProgress = payloadLoadingState
    }
  },
  actions: {
    setFilteredList({commit}, payloadFilterValue) {
      commit('SET_FILTERED_LIST', payloadFilterValue);
    },
    getCharacters({commit}) {
      commit('SET_LOADING_STATE', 'loading');
      axios.get(`${baseUrl}`) 
        .then(response => {
          axios.get(`${baseUrl}${getStringNumbers(response.data.info.count)}`)
            .then( response => {
              commit('SET_CHARACTERS_LIST', response.data);
              commit('SET_LOADING_STATE', 'loaded');
            })
            .catch(error => {
              console.error(error);
              commit('SET_LOADING_STATE', 'error');
            })
        })
        .catch(error => {
          console.error(error);
          commit('SET_LOADING_STATE', 'error');
        })
    },
    getCharacter({commit}, payloadId) {
      commit('SET_LOADING_STATE', 'loading');
      axios.get(`${baseUrl}${payloadId}`)
        .then(response => {
          commit('SET_CHARACTER', response.data);
          commit('SET_LOADING_STATE', 'loaded');
        })
        .catch(error => {
          console.error(error);
          commit('SET_LOADING_STATE', 'error');
        })
    }
  },
  getters: {
    filteredCharactersList: state => state.filteredCharactersList,
    characterObject: state => state.character,
    getLoadingState: state => state.fetchProgress
  }
})
