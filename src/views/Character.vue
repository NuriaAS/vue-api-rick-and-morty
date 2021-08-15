<template>
    <h1>Soy {{ characterObject.name }}</h1>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
   name: 'Character',
   mounted() {
       this.$store.dispatch('getCharacter',  this.$route.params.id);
   },
   computed: {
       ...mapGetters([
            'characterObject'
        ]),
   }
}
</script>
