<template>
  <div class="list">
    <h1>This is a List page</h1>
    <List :listItems="filteredCharactersList"/>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import List from '@/components/List.vue';

export default ({
  mounted() {
    this.$store.dispatch('getCharacters'); 
  },
  computed: {
    ...mapGetters([
      'filteredCharactersList'
    ]),
  },
  components: {
    List,
  }
})
</script>
