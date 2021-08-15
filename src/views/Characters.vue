<template>
  <div class="list">
    <h1>Lista de personajes</h1>
    <Spinner v-if="getLoadingState === 'loading'"/>
    <List 
      v-else-if= "getLoadingState === 'loaded'" 
      :listItems="filteredCharactersList"
    />
    <h2 v-else>
      No hemos podido cargar la lista de personajes
    </h2>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import List from '@/components/List.vue';
import Spinner from '@/components/Spinner.vue'; 

export default ({
  mounted() {
    this.$store.dispatch('getCharacters'); 
  },
  computed: {
    ...mapGetters([
      'filteredCharactersList',
      'getLoadingState'
    ]),
  },
  components: {
    List,
    Spinner,
  }
})
</script>
