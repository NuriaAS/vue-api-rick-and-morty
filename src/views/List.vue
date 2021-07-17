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
    axios.get(`https://rickandmortyapi.com/api/character`)
      .then( response => {
        const data = response.data;
        this.characters= data.results;
      })
      .catch(error => {
        console.error(error);
      })
  }
})
</script>

