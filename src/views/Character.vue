<template>
    <section class="character">
        <Spinner v-if="getLoadingState === 'loading'"/>
        <article v-else-if="getLoadingState === 'loaded'" class="character_card">
            <picture class="character_card_img">
                <img :src="characterObject.image" alt="">
            </picture>
            <h1>Nombre {{ characterObject.name }}</h1>
            <ul class="character_card_text">
                <li class="character_card_text_line">
                    <h3>Status</h3>
                    <p>{{ characterObject.status }}</p>
                </li>
                <li class="character_card_text_line">
                    <h3>Species</h3>
                    <p>{{ characterObject.species }}</p>
                </li>
                <li class="character_card_text_line">
                    <h3>Origin</h3>
                    <p>{{ characterObject.origin.name }}</p>
                </li>
                <li class="character_card_text_line">
                    <h3>Dimension</h3>
                    <p> {{ characterObject.location.dimension }}</p>
                </li>
                <li class="character_card_text_line">
                    <h3>Gender</h3>
                    <p>{{ characterObject.gender }}</p>
                </li>
                <li class="character_card_text_line">
                    <h3>First seen</h3>
                    <p>{{ characterObject.firstEpisodeName }}</p>
                </li>
            </ul>
        </article>
        <h1 v-else>
            No hemos podido cargar la información de {{ this.$route.params.name }}
        </h1>
    </section>
</template>
<script>
import { mapGetters } from 'vuex';
import Spinner from '@/components/Spinner.vue';

export default {
   name: 'Character',
   mounted() {
       this.$store.dispatch('getCharacter', this.$route.params.id);
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
