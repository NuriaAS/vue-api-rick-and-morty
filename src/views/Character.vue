<template>
    <Spinner v-if="getLoadingState === 'loading'"/>
    <h1 v-else-if="getLoadingState === 'loaded'">
        Soy {{ characterObject.name }}
    </h1>
    <h1 v-else>
        No hemos podido cargar la información de {{ this.$route.params.name }}
    </h1>
</template>
<script>
import { mapGetters } from 'vuex';
import Spinner from '@/components/Spinner.vue';
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
   },
   components: {
       Spinner
   }
}
</script>
