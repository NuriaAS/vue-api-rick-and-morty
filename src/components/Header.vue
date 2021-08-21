<template>
    <header class="header">
        <nav>
            <ul>
                <li>
                    <router-link :to="{ name: 'Home' }" exact>
                        Rick&Morty
                    </router-link>
                </li>
                <li v-show="$route.params.characterName">
                    <router-link :to="{ name: 'Characters' }">
                        Go to characters' list
                    </router-link>
                </li>
            </ul>
        </nav>
        <input-group
            v-show="$route.path==='/characters' ? true : false"
            @inputEvent="changeFilterHandler"
            :type="this.inputType"
            :name="this.inputName"
            :label="this.inputLabel"
            :placeholder="this.inputPlaceholder"
        />
    </header>
</template>
<script>
import InputGroup from '@/components/InputGroup.vue';

export default ({
   name: 'Header',
   data() {
       return {
           inputPlaceholder: 'Start typing name',
           inputLabel: 'Look for your favorite character',
           inputName: 'filter',
           inputType: 'text',
       }
   },
   methods: {
    changeFilterHandler(value) {
        this.$store.dispatch('setFilteredList', value.toLowerCase());
    },
   },
   components: {
       InputGroup,
   }
})
</script>
