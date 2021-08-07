<template>
  <div class="list">
    <h1>This is a List page</h1>
    <ul>
      <li v-for="character in characters" :key="character.id">
        <img :src="character.image" alt="">
        <h2>{{ character.name }}</h2>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios';
export default ({
  data() {
    return {
      characters: [],
    }
  },
  mounted() {
    const charactersNumbers = this.getStringNumbers(671);
    axios.get(`https://rickandmortyapi.com/api/character/${charactersNumbers}`)
      .then( response => {
        const data = response.data;
        this.characters= data;
      })
      .catch(error => {
        console.error(error);
      })
  },
  methods: {
    getStringNumbers(count) {
      let arrayNumbers = [];
      for(let i = 1; i <= count; i++) {
        arrayNumbers.push(i)
      }
      return arrayNumbers.toString();
    }
  }

})
</script>

