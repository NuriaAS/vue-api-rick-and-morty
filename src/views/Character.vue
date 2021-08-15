<template>
    <h1 v-if="getLoadingState === 'loading'">
        Estamos obteniendo la información de  {{ $route.params.name }}
    </h1>
    <h1 v-else-if="getLoadingState === 'loaded'">
        Soy {{ characterObject.name }}
    </h1>
    <h1 v-else>
        No hemos podido cargar la información de {{ this.$route.params.name }}
    </h1>
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
            'characterObject',
            'getLoadingState'
        ]),
   }
}
</script>
