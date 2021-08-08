<template>
  <div class="list">
    <h1>This is a List page</h1>
    <ul>
      <li v-for="character in charactersList" :key="character.id">
        <img :src="character.image" alt="">
        <h2>{{ character.name }}</h2>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default ({
  mounted() {
    this.$store.dispatch('getCharacters'); 
  },
  computed: {
    ...mapGetters([
      'charactersList'
    ]),
  }
})
</script>

